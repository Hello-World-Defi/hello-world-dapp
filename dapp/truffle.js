const PrivateKeyProvider = require('truffle-privatekey-provider');

const ethPrivateKey = process.env.ETH_PK;
const infuraId = process.env.INFURA_ID || '';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // ganache-cli
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    // truffle develop
    develop: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
    // Ganache UI
    ganacheUI: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    // rinkeby
    rinkeby: {
      provider: () =>
        new PrivateKeyProvider(
          ethPrivateKey,
          `https://rinkeby.infura.io/${infuraId}`,
        ),
      network_id: 4,
      gas: 1000000,
      gasPrice: 4000000000,
    },
    // live Ethereum network
    live: {
      provider: () =>
        new PrivateKeyProvider(
          ethPrivateKey,
          `https://mainnet.infura.io/${infuraId}`,
        ),
      network_id: 1,
      // Set the gas and gasPrice very carefully.
      // If set incorrectly they can prevent deploys, or clean out your account!
      gas: 1000000,
      gasPrice: 4000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
