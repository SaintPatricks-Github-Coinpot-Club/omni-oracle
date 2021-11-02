
/**
 * Defining a config
 * - underlying - address
 * - priceSource
 * - LP pair address (only for first base config)
 * - symbol (optional)
 * 
 * NOTE - The first config is treated as the base config. For bsc it should be WBNB/stableCoin
 * 
 * Defining price source
 * 0 - FIXED_USD          -> implies the fixedPrice is a constant multiple of the USD price (which is 1)
 * 1 - UNISWAP            -> implies the price is fetched from uniswap
 * 2 - POSTER             -> implies the price is posted externally
 * 3 - EXTERNAL_ORACLE    -> implies the price is read externally
 * 4 - REPOINT            -> implies the price is repointed to other asset's price
 * 
 */

module.exports = {
  twapWindow: "14400",   // in seconds
  baseAsset: "WBNB",
  UniswapV2Router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  basePriceDecimals: "18",
  tokenConfigs: [
    // base config - WBNB/BUSD
    {
      underlying: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      priceSource: "1",
      uniswapMarket: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    {
      underlying: "0x5801D0e1C7D977D78E4890880B8E579eb4943276",
      priceSource: "0",
      fixedPrice: "1",
    },
    {
      underlying: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      priceSource: "1",
    },
    {
      underlying: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      priceSource: "1",
    },
    {
      underlying: "0x3C70260eEe0a2bFc4b375feB810325801f289fBd",
      priceSource: "1",
      uniswapMarket: "0x7cE7b510761EAe414A3044D2Dc3dcA339AaEed06",
    },
    {
      underlying: "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5",
      priceSource: "1",
    },
    {
      underlying: "0x3dEB1119c295558c732a3618F04518b9812EC87A",
      priceSource: "2",
    },
    {
      underlying: "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
      priceSource: "1",
    },
    {
      underlying: "0x2eD076fC51685E7EB12804F8c10210cd305792E3",
      priceSource: "2",
    },
    {
      underlying: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      priceSource: "0",
      fixedPrice: "1",
    },
    {
      underlying: "0x55d398326f99059fF775485246999027B3197955",
      priceSource: "1",
    },
    {
      underlying: "0x031b41e504677879370e9DBcF937283A8691Fa7f",
      priceSource: "2",
    },
    {
      underlying: "0x5921DEE8556c4593EeFCFad3CA5e2f618606483b",
      priceSource: "1",
      uniswapMarket: "0x02B0B1229A918815E872c1E4D4c27d1DF8290C90",
    },
    // Puff Cake vault
    {
      underlying: "0x9E96449359aff32d0E699a1335585118A7Acf995",
      priceSource: "4",
      repointedAsset: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    },
    // Lina - Lina/Busd 
    {
      underlying: "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
      priceSource: "1",
      uniswapMarket: "0xC5768c5371568Cf1114cddD52CAeD163A42626Ed",
    },
    // Puff Lina vault
    {
      underlying: "0x5a2b19836324e3495a3977aE7b9B1ff0D968d96b",
      priceSource: "4",
      repointedAsset: "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
    },
  ],

  cTokenConfigs: {
    cTokens: [
      "0x606F53B25984D60559b21BEE6c51E2FE93137852",
      "0xe4F5700B60a7A9dAdcAC0C6aA365d74132396047",
      "0xA169d0a22012eDD345610e71bBeB84690EFD17B8",
      "0xE8a55a5cbC6B707c3f2E35F425503fF4e28bBe25",
      "0x3A63C696BFE9A0D4187A5F86288cCB967F8F9830",
      "0xcfD8722118a777955CCDa634122429FEA02c1c88",
      "0xbBCE9ec0db08914B81318a18c3DDf9BeCe25c24D",
      "0x55b90b56417F9d0cd8898a74A41B4B4Ef8CE36dD",
      "0x1e297761A2d3B459A846860d2c5044BCb34ad73D",
      "0xF553d7245ac2fC65Aa72027ba84542eC557F2A6C",
      "0x330b440623525E5AF939Ff20Be87BCeF4e907825",
      "0x87bb95F247c8AA4B981EF4A6F342cca02dAE8c81",
      "0x1afaFc3B9bde808070aBEF906E5562B1b1f8a89e",
      "0x92730F2500d65A9E8A9eF3383BAfbB7E381F3BE5",   // kUSDO (puffCake Omnicomp)
      "0x1aF197D1bC1cDE0E9Ee0C9ea090A4c6c36fE58Df",   // kpuffCake (puffCake Omnicomp)
      "0x2Aa865240f283803737376b70a4CF5cef9f06Acb",   // kUSDO (puffLina Omnicomp)
      "0x3E77D0f9A5a885d2A70FeD404e39A4E41776EE1e",   // kpuffLina (puffLina Omnicomp)
    ],
  }
};