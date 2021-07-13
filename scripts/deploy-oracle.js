
const hre = require("hardhat");
const jsonfile = require('jsonfile')

const { numToWei } = require("../utils/ethUnitParser");

const configs = require(`./configs/${hre.network.name}`);
const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  console.log(`Deploying ${hre.network.name} TWAP with time period: ${configs.twapWindow / 60} minutes (${configs.twapWindow / 3600} hours)`)

  const UniswapOracleTWAP = await hre.ethers.getContractFactory("UniswapOracleTWAP");
  const basePricePrecision = numToWei("1", configs.basePriceDecimals);
  const oracle = await UniswapOracleTWAP.deploy(configs.twapWindow, configs.baseAsset, basePricePrecision);
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
