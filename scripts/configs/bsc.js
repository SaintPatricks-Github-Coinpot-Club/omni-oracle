
const { UniLpCalcParams } = require("../../utils/constants");

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
 * 5 - UNI_V2_LP          -> implies the price is computed as UniV2 LP pair
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
    // USDO
    {
      underlying: "0x5801D0e1C7D977D78E4890880B8E579eb4943276",
      priceSource: "0",
      fixedPrice: "1",
    },
    // ETH
    {
      underlying: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      priceSource: "1",
    },
    // Cake
    {
      underlying: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      priceSource: "1",
    },
    // OCP
    {
      underlying: "0x3C70260eEe0a2bFc4b375feB810325801f289fBd",
      priceSource: "1",
      uniswapMarket: "0x7cE7b510761EAe414A3044D2Dc3dcA339AaEed06",
    },
    // pOPEN
    {
      underlying: "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5",
      priceSource: "1",
    },
    // OMNIC
    {
      underlying: "0x3dEB1119c295558c732a3618F04518b9812EC87A",
      priceSource: "2",
    },
    // REEF
    {
      underlying: "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
      priceSource: "1",
    },
    // EURO
    {
      underlying: "0x2eD076fC51685E7EB12804F8c10210cd305792E3",
      priceSource: "2",
    },
    // BUSD
    {
      underlying: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      priceSource: "0",
      fixedPrice: "1",
    },
    // USDT
    {
      underlying: "0x55d398326f99059fF775485246999027B3197955",
      priceSource: "1",
    },
    // FET
    {
      underlying: "0x031b41e504677879370e9DBcF937283A8691Fa7f",
      priceSource: "2",
    },
    // anyMTLX
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
    // HOTCROSS
    {
      underlying: "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6",
      priceSource: "1",
    },
    // LIME
    {
      underlying: "0x7bC75e291E656E8658D66Be1cc8154A3769A35Dd",
      priceSource: "1",
    },
    // LAND
    {
      underlying: "0x9D986A3f147212327Dd658F712d5264a73a1fdB0",
      priceSource: "1",
    },
    // ROSN
    {
      underlying: "0x651Cd665bD558175A956fb3D72206eA08Eb3dF5b",
      priceSource: "1",
    },
    // GFX
    {
      underlying: "0x65ad6A2288b2Dd23E466226397c8F5D1794e58fC",
      priceSource: "1",
      uniswapMarket: "0x9b0fe98DDDC7d9FD8db1843E40658E11E0Efd4b1",
    },
    // bwJUP
    {
      underlying: "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
      priceSource: "1",
    },
    // HYVE
    {
      underlying: "0xF6565A97Dc832d93DC83B75EE9aa5c7e8ecB0F9d",
      priceSource: "1",
    },
    // Pancake WBNB-Cake LP
    {
      underlying: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
      priceSource: "5",
      uniLpCalcParams: UniLpCalcParams.Pancake,
    },
    // Pancake WBNB-BUSD LP
    {
      underlying: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
      priceSource: "5",
      uniLpCalcParams: UniLpCalcParams.Pancake,
    },
    // Pancake WBNB-USDT LP
    {
      underlying: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
      priceSource: "5",
      uniLpCalcParams: UniLpCalcParams.Pancake,
    },
  ],

  cTokenConfigs: {
    cTokens: [
      '0x606F53B25984D60559b21BEE6c51E2FE93137852',
      '0xe4F5700B60a7A9dAdcAC0C6aA365d74132396047',
      '0xA169d0a22012eDD345610e71bBeB84690EFD17B8',
      '0xE8a55a5cbC6B707c3f2E35F425503fF4e28bBe25',
      '0x3A63C696BFE9A0D4187A5F86288cCB967F8F9830',
      '0xcfD8722118a777955CCDa634122429FEA02c1c88',
      '0xbBCE9ec0db08914B81318a18c3DDf9BeCe25c24D',
      '0x55b90b56417F9d0cd8898a74A41B4B4Ef8CE36dD',
      '0x1e297761A2d3B459A846860d2c5044BCb34ad73D',
      '0xF553d7245ac2fC65Aa72027ba84542eC557F2A6C',
      '0x330b440623525E5AF939Ff20Be87BCeF4e907825',
      '0x87bb95F247c8AA4B981EF4A6F342cca02dAE8c81',
      '0x1afaFc3B9bde808070aBEF906E5562B1b1f8a89e',
      '0x92730F2500d65A9E8A9eF3383BAfbB7E381F3BE5',   // kUSDO (puffCake Omnicomp)
      '0x1aF197D1bC1cDE0E9Ee0C9ea090A4c6c36fE58Df',   // kpuffCake (puffCake Omnicomp)
      '0x2Aa865240f283803737376b70a4CF5cef9f06Acb',   // kUSDO (puffLina Omnicomp)
      '0x3E77D0f9A5a885d2A70FeD404e39A4E41776EE1e',   // kpuffLina (puffLina Omnicomp)
      '0x30b8219e9a2554069fcd489afb39b56546b7d97a',   // kUSDO (OCP)
      '0x697ab4e8daf6ab1837184c0b190275270361a14c',   // kOCP (OCP)
      '0x5b54f07e3c24e64bb7ac67d0774fb8fc0a43811b',   // kUSDO (OCP)
      '0xfff0cc78a7e7ce5d6ba60f23628ff9a63beee87f',   // kOCP (OCP)
      '0x3abf0d3a7eaffd1409532b7130af5ccd001fcad3',   // kUSDO (HOTCROSS)
      '0x413a0a26eea10d6bfd422fa5d603d7a46d83eaa1',   // kHOTCROSS (HOTCROSS)
      '0x09139d7343953163eacde83845b342c1d08999ef',   // kLIME (LIME)
      '0x5c8c9b927ef6b63a7cbdf429515e8be86ee64ee5',   // kUSDO (LIME)
      '0xed33b9c21b1d1908863568b549d2a496549a1efb',   // kUSDO (pOPEN)
      '0x0a234ef34614a4eed1c1430a23b46f95df5f4257',   // kpOPEN (pOPEN)
      '0xd8e91e3262b40ef487defffd216790baa8058a10',   // kUSDO (LAND)
      '0xd90ec012a6b2b549dd2a74024f1e025d0801696c',   // kLAND (LAND)
      '0x18b63234a3ac4dcdece22932d89c104b331101bd',   // kUSDO (ROSN)
      '0xcfefc606c4c010c242431f60a7afc13461df399c',   // kROSN (ROSN)
      '0xb2c083375be1cb659c118225a88a94cb1a8adb13',   // kUSDO (GFX)
      '0xe2f80f2ae5e1293a120b27bc95f008a9fd9f0564',   // kGFX (GFX)
      '0xb7497208ea1a88e77ab1aa22989cc3d23dd623f4',   // kUSDO (bwJUP)
      '0x5e27f84fb57ed2529bba580348a6a5b0fe26fc57',   // kbwJUP (bwJUP)
      '0x2d31d20c0520537a31e9eb8a311869caca788cf6',   // kUSDO (HYVE)
      '0xc7be8c96d5fb929805d04190e5c44d68d24f905c',   // kHYVE (HYVE)
    ],
  }
};