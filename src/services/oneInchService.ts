import axios from "axios";
import { cfg } from "../configuration";

const config = {
  headers: {
    Authorization: `Bearer ${cfg.oneInch.apiKey}`,
  },
};

export const oneInchService = {
  getWalletTokenBalances: async (
    walletAddress: string,
    tokens: string[],
    chain: string
  ) => {
    const response = await axios.post(
      `https://api.1inch.dev/balance/v1.2/${chain}/balances/${walletAddress}`,
      {
        tokens,
      },
      config
    );
    return response.data;
  },

  getTokenPrices: async (chain: string, tokens: string[], currency: string) => {
    const response = await axios.post(
      `https://api.1inch.dev/price/v1.1/${chain}`,
      {
        tokens,
        currency,
      },
      config
    );
    return response.data;
  },
};
