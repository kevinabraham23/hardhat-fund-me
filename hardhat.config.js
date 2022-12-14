require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL

const PRIVATE_KEY = process.env.PRIVATE_KEY

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337
            // gasPrice: 130000000000,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
            gas: 6000000
        }
    },
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }]
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH"
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },

    namedAccounts: {
        deployer: {
            default: 0 // here this will by default take the first account as deployer
        }
    }
}
