
const hre = require("hardhat");
const jsonfile = require('jsonfile')
const { numToWei, weiToNum } = require("../utils/ethUnitParser");
const { toBn, toBnFixed } = require("../utils/bn");
const deploymentFilePath = `./deployments/${hre.network.name}.json`;
const configs = require(`./configs/${hre.network.name}`);

async function main() {
  const deployments = jsonfile.readFileSync(deploymentFilePath);
  const oracles = deployments['UniswapOracleTWAP'];
  const oracle = oracles[oracles.length - 1].address;

  const OracleI = await hre.ethers.getContractAt("UniswapOracleTWAP", oracle);

  const numConfigs = await OracleI.numTokens();
  console.log("Total configs:", toBnFixed(numConfigs));

  const allConfigs = [];

  for (let i = 0; i < numConfigs; i++) {
    const config = await OracleI.getTokenConfig(i);

    const configDetails = {
      underlying: config.underlying,
      symbolHash: config.symbolHash,
      baseUnit: toBnFixed(config.baseUnit),
      priceSource: config.priceSource,
      fixedPrice: toBnFixed(config.fixedPrice),
      uniswapMarket: config.uniswapMarket,
      isUniswapReversed: config.isUniswapReversed,
      symbol: config.symbol,
      externalOracle: config.externalOracle,
    }
    allConfigs.push(configDetails);
  }
  console.log("Deployed configs ==========================>");
  console.log(allConfigs);

  const oraclePrices = [];

  for (let i = 0; i < allConfigs.length; i++) {
    const priceRaw = await OracleI["price(address)"](allConfigs[i].underlying);
    oraclePrices.push({
      symbol: allConfigs[i].symbol,
      price: weiToNum(priceRaw, configs.basePriceDecimals),
    });
  }
  console.log("Prices ==========================>");
  console.table(oraclePrices)

  console.log(`\nFound ${configs.cTokenConfigs.cTokens.length} CToken configs.`);
  const priceData = [];

  for (let i = 0; i < configs.cTokenConfigs.cTokens.length; i++) {
    const cTokenAddr = configs.cTokenConfigs.cTokens[i];
    const oracleUnderlying = await OracleI.underlyings(cTokenAddr);
    const config = allConfigs.find(el => el.underlying === oracleUnderlying);
    const priceRaw = await OracleI["price(address)"](config.underlying);
    const underlyingPriceRaw = await OracleI.getUnderlyingPrice(cTokenAddr);
    const factor = toBn('10').pow('36').div(toBn(config.baseUnit));
    const underlyingPrice = toBn(underlyingPriceRaw).div(factor).toFixed();

    priceData.push({
      symbol: config.symbol,
      price: weiToNum(priceRaw, configs.basePriceDecimals),
      'getUnderlyingPrice()': underlyingPrice
    });
  }
  console.log("CToken Prices ==========================>");
  console.table(priceData)
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
