import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";

const config: HardhatUserConfig = {
  zksolc: {
    version: "latest", // Compiler version
    settings: {}, // Add any custom settings here
  },
  defaultNetwork: "abstractTestnet",
  networks: {
    hardhat: {
      zksync: true,
    },
    abstractTestnet: {
      url: "https://api.testnet.abs.xyz",
      ethNetwork: "sepolia", 
      zksync: true,
      verifyURL: "https://api-explorer-verify.testnet.abs.xyz/contract_verification",
    },
  },
  solidity: {
    version: "0.8.24",
  },
};

export default config;
