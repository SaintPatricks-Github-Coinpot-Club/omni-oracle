
const hre = require("hardhat");
const jsonfile = require('jsonfile')

const configs = require(`./configs/${hre.network.name}`);
const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  const network = await hre.ethers.provider.getNetwork();
  let baseAsset;
  if (network.chainId === 137) {
    baseAsset = 'WMATIC';
  } else if (network.chainId === 56) {
    baseAsset = 'WBNB';
  }

  const UniswapOracleTWAP = await hre.ethers.getContractFactory("UniswapOracleTWAP");
  const oracle = await UniswapOracleTWAP.deploy(configs.twapWindow, baseAsset);

  await oracle.deployed();

  console.log("UniswapOracleTWAP deployed to:", oracle.address);
  saveAddress('UniswapOracleTWAP', oracle.address);
}

const saveAddress = (contractName, contractAddress) => {
  let newData = { ...jsonfile.readFileSync(outputFilePath) };

  if (!newData[contractName]) newData[contractName] = []
  newData[contractName].push({
    address: contractAddress
  });
  jsonfile.writeFileSync(outputFilePath, newData, { spaces: 2 });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
