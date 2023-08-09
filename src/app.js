// src/app.js
const express = require('express');
const walletController = require('./controllers/walletController');
const transactionController = require('./controllers/transactionController');
const coinController = require('./controllers/coinController')

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Wallet routes
app.post('/validate/:address', walletController.validateAddress);
app.get('/create-wallet', walletController.createWallet);

// Transaction routes
app.get('/latest-transactions', transactionController.getLatestTransactions);

//bsc-coin-routes
app.get('/tradable-coins',coinController.TradableCoin);
app.get('/average-prices',coinController.averagePrice);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});