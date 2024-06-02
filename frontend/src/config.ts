import { createConfig, http, webSocket } from "wagmi";
import { hardhat } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [hardhat],
  transports: {
    [hardhat.id]: webSocket("ws://localhost:8545"),
  },
  connectors: [injected()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
