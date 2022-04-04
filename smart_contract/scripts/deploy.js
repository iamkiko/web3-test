const main = async () => {
  // below is like a function factory/class which will generate instances of specific contract
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  // one instance
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("an error occured....", error);
    process.exit(1);
  }
};

runMain();
