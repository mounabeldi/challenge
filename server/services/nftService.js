const { ethers } = require("ethers");

const { rpcProvider } = require("../web3/providers/rpcProvider");
const { ERC721_ABI } = require("../web3/config/abis/erc721.abi");

async function getNFTInfo(contractAddress, tokenId = 1) {
  if (!ethers.isAddress(contractAddress)) {
    throw new Error("Invalid contract address");
  }

  const contract = new ethers.Contract(
    contractAddress,
    ERC721_ABI,
    rpcProvider
  );
  let name, owner, balance;

  try {
    name = await contract.name();
  } catch {
    name = "Not available";
  }

  try {
    owner = await contract.ownerOf(tokenId);
  } catch {
    owner = "Token does not exist";
  }

  try {
    balance =
      owner !== "Token does not exist" ? await contract.balanceOf(owner) : 0;
  } catch {
    balance = "Not available";
  }

  return {
    name,
    tokenId,
    owner,
    balance: balance.toString ? balance.toString() : balance,
  };
}

module.exports = { getNFTInfo };
