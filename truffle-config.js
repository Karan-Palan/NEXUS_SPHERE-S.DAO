require('babel-register')
require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Configure networks (Localhost, Sepolia, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider('surge recall stuff inspire you dumb identify north hazard royal chapter flock', `https://sepolia.infura.io/v3/e60b8dd190884a309227227648c183d4`),
      network_id: 11155111,
      gas: 5500000,
      gasPrice: 10000000000, // Set the desired gas price in Wei (10 Gwei in this example)
      confirmations: 2,
      timeoutBlocks: 300,
      skipDryRun: true,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  migrations_directory: './migrations',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}