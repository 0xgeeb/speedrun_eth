// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC20.sol";
// learn more: https://docs.openzeppelin.com/contracts/3.x/erc20

contract YourToken is ERC20 {
    constructor() ERC20("Gold", "GLD") {
        _mint(0x2AA83eccAe5E1Dfee6E5EC8fE03726057c78B949, 1000 * 10 ** 18);
    }
}
