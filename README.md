# NEXUS_SPHERE 
"Nexus Sphere: DAO empowering Ethereum community with transparent decision-making. Stake, rank, and decide proposals with our intuitive UI."

#### Demo and Local setup : https://www.youtube.com/watch?v=EALMxadR0V4
#### Pitch : https://www.youtube.com/watch?v=5v4P274GbsU

## Tech Stack Used:
- **Metamask:** Browser extension for interacting with Ethereum blockchain and decentralized applications.
- **Truffle:** Development framework for Ethereum blockchain projects, facilitating smart contract compilation, testing, and deployment.
- **Infura:** Scalable infrastructure provider for accessing Ethereum and IPFS networks via APIs.
- **ReactJS:** JavaScript library for building user interfaces, commonly used for creating front-end interfaces in web applications.
- **Tailwind CSS:** Utility-first CSS framework for building custom designs quickly.
- **Ganache-CLI:** Local blockchain emulator for Ethereum development, providing a private test network for smart contract testing and development.
- **Solidity:** High-level programming language for writing smart contracts on the Ethereum blockchain.
- **Web3js:** JavaScript library for interacting with Ethereum blockchain, enabling communication with smart contracts and Ethereum nodes.
- **Faucet:** Service providing free tokens (usually cryptocurrency) to users for testing purposes or accessing resources on a blockchain network.

## Run It Locally:
To run the demo, follow these steps:

1. Clone the project with the code below.
```sh
# Pre-requisites to install - Git, Nodejs, Truffle, ganache-cli and solidity Vscode extension
git clone git@github.com:KRISH2832/NEXUS_SPHERE.git
cd NEXUS_SPHERE-S.DAO
npm i #use node version 17 as truffle is deprecated  
```


2. Deploy the contracts 
```sh
# cd into the src folder to acess the contracts and split the terminal
cd src
# Commands for the first terminal
truffle migrate # will compile and deploy contracts
# Commands for the second terminal
ganache-cli -d 
```


2. Deploy the contracts 
```sh
# cd into the src folder to acess the contracts and split the terminal
cd src
# Commands for the first terminal
truffle migrate # will compile and deploy contracts
# Commands for the second terminal
ganache-cli -d 
```

3. Start the app
```sh
npm run start 
```



## Useful Links:
- [Metamask](https://metamask.io/)
- [Remix Editor](https://remix.ethereum.org/)
- [Truffle](https://trufflesuite.com/)
- [Infuria](https://infura.io/)
- [ReactJs](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Web3Js](https://docs.ethers.io/v5/)
- [Faucet](https://faucets.chain.link/rinkeby)
- [Ganache](https://trufflesuite.com/ganache/index.html)
