
// const { UniLpCalcParams } = require("../../utils/constants");

/**
 * Defining a config
 * - underlying - address
 * - priceSource
 * - LP pair address (only for first base config)
 * - symbol (optional)
 * 
 * NOTE - The first config is treated as the base config. For avalanche it should be WAVAX/stableCoin
 * 
 * Defining price source
 * 0 - FIXED_USD          -> implies the fixedPrice is a constant multiple of the USD price (which is 1)
 * 1 - UNISWAP            -> implies the price is fetched from uniswap
 * 2 - POSTER             -> implies the price is posted externally
 * 3 - EXTERNAL_ORACLE    -> implies the price is read externally
 * 4 - REPOINT            -> implies the price is repointed to other asset's price
 * 5 - UNI_V2_LP          -> implies the price is computed as UniV2 LP pair
 * 6 - CURVE_LP           -> implies the price is computed as Curve Finance LP
 * 
 */

module.exports = {
  twapWindow: "14400",   // in seconds
  baseAsset: "WAVAX",
  UniswapV2Router: "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
  basePriceDecimals: "6",
  tokenConfigs: [
    // base config - WAVAX/USDC
    {
      underlying: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      priceSource: "1",
      uniswapMarket: "0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1",
    },
    // USDO
    {
      underlying: "0x5801D0e1C7D977D78E4890880B8E579eb4943276",
      priceSource: "0",
      fixedPrice: "1",
    },
    // USDC
    {
      underlying: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
      priceSource: "0",
      fixedPrice: "1",
    },
    // JOE
    {
      underlying: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
      priceSource: "1",
    },
  ],

  cTokenConfigs: {
    cTokens: [
    ],
  }
};