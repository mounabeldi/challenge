const { EthereumNetworks } = require("./ethereumNetworks");

const ETH_NETWORK = (process.env.ETH_NETWORK || "SEPOLIA").toUpperCase();

if (!EthereumNetworks[ETH_NETWORK]) {
  throw new Error(`Invalid ETH_NETWORK value in .env: "${ETH_NETWORK}"`);
}

const currentNetwork = EthereumNetworks[ETH_NETWORK];
module.exports = { ETH_NETWORK, currentNetwork };
