import { createConfig, http } from "wagmi";
import { hardhat } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [hardhat],
  transports: {
    [hardhat.id]: http(),
  },
  connectors: [injected()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
