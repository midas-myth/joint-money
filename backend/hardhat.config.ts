import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      from: "0x3e46eC396Da353adf31090629e00C04222EBEaf3",
      //
      accounts: [],
    },
  },
};

export default config;
