# Challenge 

This project demonstrates a backend API that fetches data from a **pre-deployed NFT smart contract** on the **Ethereum Sepolia testnet**. The implementation is modular and can also be configured to run on **Mainnet**.

## Features

- **API Endpoint:** `Mouna_Test` (`server/routes/nftRoute.js`)  
- **Fetched NFT data:**  
  - `name()`  
  - `ownerOf(tokenId)`  
  - `balanceOf(owner)`  
- **Modular structure:** routes, controller, service, and config files  
- **Network management:** handled via `network.js` and `ethereumNetworks.js`  

## Configuration

For testing purposes, set the following in the `.env` file (these values are safe to share):

INFURA_API_KEY=86448ae5df064fb4858334863c133272  
ETH_NETWORK=sepolia # "SEPOLIA" or "MAINNET"  
PORT=3099  
NFT_CONTRACT_ADDRESS=0x183De4cd07f2cE5b4f08d64f2bCFA533B50D0783


- `ETH_NETWORK` determines which Ethereum network configuration will be used.  
- Network details (RPC URL, chain ID) are managed in `ethereumNetworks.js`.  

## Installation & Running

1. Clone the repository and install dependencies: npm install
2. Start the server: npm start
3. Access the API: http://localhost:3099/Mouna_Test
4. Check the **server console** 

