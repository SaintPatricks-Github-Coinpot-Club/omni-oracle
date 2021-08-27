// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.10;
import "./IERC20Extended.sol";

interface IBeefyVault {
    function want() external view returns (IERC20);

    function getPricePerFullShare() external view returns (uint256);
}
