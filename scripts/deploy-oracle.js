
const hre = require("hardhat");

const deploymentParams = {
  anchorPeriod: 3600   // in seconds
}

async function main() {
  const network = await hre.ethers.provider.getNetwork();
  let baseAsset;
  if (network.chainId === 137) {
    baseAsset = 'WMATIC';
  } else if (network.chainId === 56) {
    baseAsset = 'WBNB';
  }

  const UniswapOracleTWAP = await hre.ethers.getContractFactory("UniswapOracleTWAP");
  const oracle = await UniswapOracleTWAP.deploy(deploymentParams.anchorPeriod, baseAsset);

  await oracle.deployed();

  console.log("UniswapOracleTWAP deployed to:", oracle.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
