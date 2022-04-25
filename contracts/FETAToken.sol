// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FETAToken is ERC20Burnable, Ownable {
    uint256 private constant SUPPLY = 100_000_000 * 10**18;

    constructor() public ERC20("FETA Governance Token", "FETA") {
        _mint(msg.sender, SUPPLY);
    }

    function mint(address to, uint256 amount) public virtual onlyOwner {
        _mint(to, amount);
    }
}
