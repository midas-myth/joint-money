import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import GunProvider from "./GunProvider";
import Routing from "./Routing";
import { config } from "./config";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <GunProvider>
          <Routing />
        </GunProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
