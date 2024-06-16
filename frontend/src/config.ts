import { createConfig, webSocket } from "wagmi";
import { avalancheFuji, hardhat } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [hardhat, avalancheFuji],
  transports: {
    [hardhat.id]: webSocket("ws://localhost:8545"),
    [avalancheFuji.id]: webSocket("wss://api.avax-test.network/ext/bc/C/ws"),
  },
  connectors: [injected(), metaMask()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
