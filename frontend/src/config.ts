import { createConfig, webSocket } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  // chains: [hardhat],
  // transports: {
  //   [hardhat.id]: webSocket("ws://localhost:8545"),
  // },
  chains: [avalancheFuji],
  transports: {
    [avalancheFuji.id]: webSocket("wss://api.avax-test.network/ext/bc/C/ws"),
  },
  connectors: [injected(), metaMask()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
