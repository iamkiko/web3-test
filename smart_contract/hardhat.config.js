require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rYZ0Jc9OMY0lVa6MpZYM6L77KiYw5Le6",
      accounts: [
        "d2522eac2eed220c722e419901b9266b71e34edaad711d89ca56beb350839b04",
      ],
    },
  },
};
