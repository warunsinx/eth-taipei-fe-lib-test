import { NextResponse } from "next/server";
import { oneInchService } from "@/services/oneInchService";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");
    const chainId = searchParams.get("chainId");

    if (!address || !chainId) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const result = await oneInchService.getWalletBalance(address, chainId);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching balance:", error);
    return NextResponse.json(
      { error: "Failed to fetch balance" },
      { status: 500 }
    );
  }
}
