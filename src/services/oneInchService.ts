import axios from 'axios';
import { cfg } from '../configuration';

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

  getPortfolioProfitAndLoss: async (
    walletAddress: string[],
    chainId: string,
    timeRange: string
  ) => {
    const response = await axios.get(
      'https://api.1inch.dev/portfolio/portfolio/v4/general/profit_and_loss',
      {
        ...config,
        params: {
          chain_id: chainId,
          timerange: timeRange,
          addresses: walletAddress,
        },
        paramsSerializer: {
          indexes: null,
        },
      }
    );
    return response.data;
  },

  getPortfolioValueChart: async (
    walletAddress: string[],
    chainId: string,
    timeRange: string
  ) => {
    const response = await axios.get(
      'https://api.1inch.dev/portfolio/portfolio/v4/general/value_chart',
      {
        ...config,
        params: {
          chain_id: chainId,
          timerange: timeRange,
          addresses: walletAddress,
        },
        paramsSerializer: {
          indexes: null,
        },
      }
    );
    return response.data;
  },

  getPortfolioCurrentValue: async (
    walletAddress: string[],
    chainId: string
  ) => {
    const response = await axios.get(
      'https://api.1inch.dev/portfolio/portfolio/v4/general/current_value',
      {
        ...config,
        params: {
          chain_id: chainId,
          addresses: walletAddress,
        },
        paramsSerializer: {
          indexes: null,
        },
      }
    );
    return response.data;
  },

  getPortfolioErc20Details: async (
    walletAddress: string[],
    chainId: string,
    timeRange: string,
    closed: boolean = true,
    closedThreshold: number = 1
  ) => {
    const response = await axios.get(
      'https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/details',
      {
        ...config,
        params: {
          chain_id: chainId,
          addresses: walletAddress,
          timerange: timeRange,
          closed,
          closed_threshold: closedThreshold,
        },
        paramsSerializer: {
          indexes: null,
        },
      }
    );
    return response.data;
  },
};
