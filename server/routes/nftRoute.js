const express = require("express");
const { getNFTData } = require("../controllers/nftController");

const router = express.Router();

router.get("/:contractAddress?/:tokenId?", getNFTData);

module.exports = router;
