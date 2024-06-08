import { defineConfig } from "@wagmi/cli";
import { hardhat, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    hardhat({
      project: "../backend",
      deployments: {
        JointMoneyErc20: {
          31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        },
      },
    }),
    react(),
  ],
});
