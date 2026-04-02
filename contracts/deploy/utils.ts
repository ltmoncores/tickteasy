import { Provider, Wallet } from "zksync-ethers";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
const hre = require("hardhat");

export const deployContract = async (
  contractArtifactName: string,
  constructorArguments?: any[]
) => {
  const provider = new Provider(hre.network.config.url);
  // Dummy wallet for dry runs. On real deploy, user sets rich wallet or PK.
  const wallet = new Wallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110", provider);
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact(contractArtifactName);
  
  console.log(`Deploying ${contractArtifactName}...`);
  const contract = await deployer.deploy(artifact, constructorArguments || []);
  console.log(`${artifact.contractName} deployed to: ${await contract.getAddress()}`);
  return contract;
};
