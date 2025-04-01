import { oneInchService } from "@/services/oneInchService";
import { NextApiRequest, NextApiResponse } from "next";

const baseChainId = "8453";
const usdTokenAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const fetchBalance = await oneInchService.getWalletTokenBalances(
      "0x52Aa899454998Be5b000Ad077a46Bbe360F4e497",
      [usdTokenAddress],
      baseChainId
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const tokenPrices = await oneInchService.getTokenPrices(
      baseChainId,
      [usdTokenAddress],
      "THB"
    );

    return response.status(200).send({
      fetchBalance,
      tokenPrices,
    });
  } catch (error) {
    console.error("Error fetching balance:", error);
    return response.status(500).send(error);
  }
}
