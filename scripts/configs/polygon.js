
/**
 * Defining a config
 * - underlying - address
 * - priceSource
 * - LP pair address (only for first base config)
 * - symbol (optional)
 * 
 * NOTE - The first config is treated as the base config. For polygon it should be WMATIC/stableCoin
 * 
 * Defining price source
 * 0 - FIXED_USD -> implies the fixedPrice is a constant multiple of the USD price (which is 1)
 * 1 - UNISWAP   -> implies the price is fetched from uniswap
 * 2 - POSTER    -> implies the price is posted externally
 * 
 */

module.exports = {
  twapWindow: "3600",   // in seconds
  baseAsset: "WMATIC",
  UniswapV2Router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  basePriceDecimals: "6",
  tokenConfigs: [
    {
      underlying: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      priceSource: "1",
      uniswapMarket: "0xcd353F79d9FADe311fC3119B841e1f456b54e858",
    },
    {
      underlying: "0xC79358DE3868A7C751F52cFeECd650595AEE8B18",
      priceSource: "0",
      fixedPrice: "1",
    },
    {
      underlying: "0x69f06e6549702038889e57eF5beB0d9378571c23",
      priceSource: "2",
    },
    {
      underlying: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
      priceSource: "1",
    },
  ],

  cTokenConfigs: {
    cTokens: [
      "0x9Ec1CF937B4F62BC526D1F9023bc0a3826b02d83",
      "0xb41f93d542F91D52cc7D797438534cDd05336F6C",
      "0xa5BE1a46BB24572066FD61BD752EA4B2B0e2dFc3",
      "0x739bfF3C077e75FdB0c236eEED0A92Aa1416eA81",
    ],
  }
};