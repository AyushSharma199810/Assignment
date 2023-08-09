// src/services/transactionService.js
require("dotenv").config();
const { ethers } = require("ethers");
const Transaction = require("../entities/transactionEntity");
const RPC_URL = process.env.YOUR_ETHEREUM_RPC_URL; // Create this file with your Ethereum RPC URL

exports.getLatestTransactions = async () => {
  const array = [];
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

  async function transaction() {
    const transactions_ = await provider.getBlockWithTransactions("latest");
    for (let i = 0; i < transactions_.transactions.length; i++) {
      if (array.length < 1000) {
        array.push(transactions_.transactions[i]);
      }
    }
  }
  await transaction();
  for (let i = 0; array.length < 1000; i++) {
    await transaction();
  }

  const transactionArray = [];
  for (let j = 0; j < array.length; j++) {
    let TransactionHash = array[j].hash;
    let senderAddress = array[j].from;
    let receiverAddress = array[j].to;
    let bigNumberValue = ethers.BigNumber.from(array[j].value);
    let value = ethers.utils.formatEther(bigNumberValue);
    let amountEther = value;
    let blockNumber = array[j].blockNumber;
    transactionArray.push({
      transactionHash: TransactionHash,
      senderAddress: senderAddress,
      receiverAddress: receiverAddress,
      amountEther: amountEther,
      blockNumber: blockNumber,
    });
  }
  let sortedProducts = transactionArray.sort((p1, p2) =>
    Number(p1.amountEther) < Number(p2.amountEther)
      ? 1
      : Number(p1.amountEther) > Number(p2.amountEther)
      ? -1
      : 0
  );

  return sortedProducts;
};
