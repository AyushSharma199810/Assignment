// src/controllers/transactionController.js
const transactionService = require('../services/transactionService');

exports.getLatestTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getLatestTransactions();
    res.json({Transactions:transactions});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching transactions' });
  }
};
