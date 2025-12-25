require("dotenv").config();
const { getNFTInfo } = require("../services/nftService"); 

async function getNFTData(req, res) {
  console.log("Received request for Mouna_Test API with query:", req.query);
  try {
    const contractAddress = req.query.contractAddress || process.env.NFT_CONTRACT_ADDRESS;
    const tokenId = req.query.tokenId ? Number(req.query.tokenId) : 1;

    if (!contractAddress) {
      return res.status(500).json({ error: "NFT contract address not provided and not set in .env" });
    }

    if (isNaN(tokenId) || tokenId < 1) {
      return res.status(400).json({ error: "Invalid tokenId" });
    }

    const nftData = await getNFTInfo(contractAddress, tokenId);

    return res.status(200).json({ message: "Check NFT info!!", nftData });
  } catch (error) {
    console.error("Error in Mouna_Test API:", error.message);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}

module.exports = { getNFTData };
