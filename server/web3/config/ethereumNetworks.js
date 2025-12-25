require("dotenv").config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;

if (!INFURA_API_KEY) {
  throw new Error("INFURA_API_KEY is missing in .env");
}

const EthereumNetworks = Object.freeze({
  SEPOLIA: {
    name: "sepolia",
    chainId: 11155111,
    rpcUrl: () => `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
  },
  MAINNET: {
    name: "mainnet",
    chainId: 1,
    rpcUrl: () => `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
  },
});

module.exports = { EthereumNetworks };
