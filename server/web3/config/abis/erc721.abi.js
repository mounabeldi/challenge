const ERC721_ABI = [
  "function name() view returns (string)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function balanceOf(address owner) view returns (uint256)",
];

module.exports = { ERC721_ABI };
