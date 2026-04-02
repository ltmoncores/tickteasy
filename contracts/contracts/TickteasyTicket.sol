// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TickteasyTicket is ERC1155, Ownable, ERC2981 {
    using Strings for uint256;

    string public name;
    string public symbol;

    // Mapping from token ID to whether it's locked for arbitrary peer-to-peer transfers
    // If true, can only be transferred via the official marketplace logic (to enforce price ceilings)
    mapping(uint256 => bool) public isTransferLocked;

    // Authorized operators (like the official marketplace or staff)
    mapping(address => bool) public authorizedOperators;

    // Track used tickets: eventId => userAddress => usedAmount
    mapping(uint256 => mapping(address => uint256)) public usedTickets;

    // Teto de preço (Price Ceiling) registered in USDC (decimals = 6 for USDC typical)
    mapping(uint256 => uint256) public priceCeiling;

    event TicketMinted(address indexed to, uint256 indexed id, uint256 amount);
    event TicketUsed(address indexed user, uint256 indexed id, uint256 amount);
    event OperatorAuthorized(address indexed operator, bool authorized);
    event CeilingSet(uint256 indexed id, uint256 maxPrice);

    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory _uri,
        address _royaltyReceiver,
        uint96 _royaltyFeeNumerator // eg. 1000 = 10%
    ) ERC1155(_uri) Ownable(msg.sender) {
        name = _name;
        symbol = _symbol;
        if (_royaltyReceiver != address(0)) {
            _setDefaultRoyalty(_royaltyReceiver, _royaltyFeeNumerator);
        }
    }

    /// @notice Mint tickets 
    function mint(address account, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(account, id, amount, data);
        emit TicketMinted(account, id, amount);
    }

    /// @notice Mint a batch of tickets
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    /// @notice Defines if a token id is bound to our marketplace/operator rules.
    function setTransferLock(uint256 id, bool locked) external onlyOwner {
        isTransferLocked[id] = locked;
    }

    /// @notice Sets the maximum resale price in USDC for a specific ticket lot
    function setPriceCeiling(uint256 id, uint256 maxPrice) external onlyOwner {
        priceCeiling[id] = maxPrice;
        emit CeilingSet(id, maxPrice);
    }

    /// @notice Allow a marketplace contract or staff app to operate and override validations
    function setAuthorizedOperator(address operator, bool authorized) external onlyOwner {
        authorizedOperators[operator] = authorized;
        emit OperatorAuthorized(operator, authorized);
    }

    /// @notice Marks a ticket as used at the physical event. Can only be called by authorized staff
    function markAsUsed(address account, uint256 id, uint256 amount) external {
        require(authorizedOperators[msg.sender] || msg.sender == owner(), "Not authorized");
        require(balanceOf(account, id) - usedTickets[id][account] >= amount, "Not enough valid tickets");
        
        usedTickets[id][account] += amount;
        emit TicketUsed(account, id, amount);
    }

    /// @notice Number of valid (unused) tickets a user has
    function validBalanceOf(address account, uint256 id) public view returns (uint256) {
        return balanceOf(account, id) - usedTickets[id][account];
    }

    /// @notice Override to support ERC2981
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /// @notice Hook that is called before any token transfer.
    /// Used to prevent arbitrary transfers and enforce P2P transfer blocks,
    /// so resales must happen via an authorized contract that enforces `priceCeiling`.
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal virtual override {
        if (from != address(0) && to != address(0)) {
            // It's a transfer (not mint or burn)
            for (uint256 i = 0; i < ids.length; i++) {
                if (isTransferLocked[ids[i]]) {
                    require(
                        authorizedOperators[msg.sender] || msg.sender == owner(),
                        "Transfer locked: must use official marketplace"
                    );
                }
            }
        }
        super._update(from, to, ids, amounts);
    }
}
