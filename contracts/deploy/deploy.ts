import { deployContract } from "./utils";

export default async function () {
  const contractArtifactName = "TickteasyTicket";
  
  // Params: name, symbol, baseURI, royaltyReceiver, royaltyFeeNumerator (e.g. 1000 = 10%)
  const constructorArguments = [
    "Tickteasy Official Pass",
    "TTEASY",
    "https://api.tickteasy.com/metadata/",
    "0x0000000000000000000000000000000000000000", // to be replaced with the deployer wallet or organizer
    500 // 5% royalty
  ];
  
  await deployContract(contractArtifactName, constructorArguments);
}
