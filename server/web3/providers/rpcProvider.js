const { ethers } = require("ethers");
const { currentNetwork } = require("../config/network");
require("dotenv").config();

const rpcProvider = new ethers.JsonRpcProvider(currentNetwork.rpcUrl());

console.log("check current network: ", currentNetwork);

module.exports = { rpcProvider };
