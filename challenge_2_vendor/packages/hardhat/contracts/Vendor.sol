// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Ownable.sol";
import "./YourToken.sol";

contract Vendor is Ownable {

  uint256 public constant tokensPerEth = 100;

  event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
  event SellTokens(address seller, uint256 amountOfETH, uint256 amountOfTokens);

  YourToken public yourToken;

  constructor(address tokenAddress) {
    yourToken = YourToken(tokenAddress);
  }

  function buyTokens() public payable {
    yourToken.transfer(msg.sender, msg.value*tokensPerEth);
    emit BuyTokens(msg.sender, msg.value, msg.value*tokensPerEth);
  }

  function withdraw() external onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }

  function sellTokens(uint256 amount) public {
    yourToken.transferFrom(msg.sender, address(this), amount);
    payable(msg.sender).transfer(amount/tokensPerEth);
    emit SellTokens(msg.sender, amount/tokensPerEth, amount);
  }

}
