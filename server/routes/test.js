const express = require("express");
const { ethers } = require("ethers");
const router = express.Router();

const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/86448ae5df064fb4858334863c133272"
);

// pre-deployed contract address on Sepolia testnet
const rawAddress = "0x183De4cd07f2cE5b4f08d64f2bCFA533B50D0783";
const contractAddress = ethers.getAddress(rawAddress);

console.log("Contract address:", contractAddress);

const abi = [
  "function name() view returns (string)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function balanceOf(address owner) view returns (uint256)",
];

router.get("/Mouna_Test", async (req, res) => {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);

    let name, owner, balance;
    try {
      name = await contract.name();
    } catch {
      name = "Not available";
    }
    

    const tokenId = 1;

    try {
      owner = await contract.ownerOf(tokenId);
    } catch {
      owner = "Token does not exist";
    }

    // Optional: check balance of the owner
    try {
      balance = owner !== "Token does not exist" ? await contract.balanceOf(owner) : 0;
    } catch {
      balance = "Not available";
    }

    

    console.log("NFT Contract Info:", {
      name,
      tokenId,
      owner,
      balance: balance.toString ? balance.toString() : balance,
    });

    res.send({
      message: "Check NFT contract info!",
      name,
      tokenId,
      owner,
      balance: balance.toString ? balance.toString() : balance,
    });
  } catch (err) {
    console.error("Error fetching NFT contract data:", err);
    res.status(500).send({ error: "Failed to fetch NFT contract data" });
  }
});

module.exports = router;
