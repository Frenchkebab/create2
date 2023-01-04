const hre = require('hardhat');

async function main() {
  const Create2Factory = await ethers.getContractFactory('Create2');
  const create2 = await Create2Factory.deploy();
  await create2.deployed();
}

main();
