
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
    ],
  }
};