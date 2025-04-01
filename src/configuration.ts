export const cfg = {
  world: {
    appId: process.env.NEXT_PUBLIC_WORLD_APP_ID || '',
    actionId: process.env.NEXT_PUBLIC_WORLD_ACTION_ID || '',
  },
  oneInch: {
    apiKey: process.env.NEXT_PUBLIC_ONE_INCH_API_KEY || '',
  },
  walletConnect: {
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || '',
  },
};
