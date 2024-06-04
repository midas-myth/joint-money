import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { config } from "./config";
import Routing from "./Routing";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
