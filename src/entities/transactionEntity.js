// src/entities/transactionEntity.js
class Transaction {
    constructor(transactionHash, sender, receiver, amount, blockNumber) {
      this.transactionHash = transactionHash;
      this.sender = sender;
      this.receiver = receiver;
      this.amount = amount;
      this.blockNumber = blockNumber;
    }
  }
  
  module.exports = Transaction;