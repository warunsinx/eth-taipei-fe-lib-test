import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { cfg } from '@/configuration';
// import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { createConfig, WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

// const config = getDefaultConfig({
//   appName: 'taipei-fe',
//   projectId: cfg.walletConnect.projectId,
//   chains: [sepolia],
//   ssr: true,
// });

const config = createConfig(
  getDefaultConfig({
    chains: [sepolia],
    walletConnectProjectId: cfg.walletConnect.projectId,
    appName: 'taipei-fe',
  })
);

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <RainbowKitProvider> */}
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
        {/* </RainbowKitProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
