// src/services/walletService.js
const { ethers } = require("ethers");
const ccxt = require("ccxt");

// const coinService = require("../repositories/walletRepository");
const binance = new ccxt.binance();

exports.tradableCoin = async () => {
  const markets = await binance.loadMarkets();
  const tradableCoins = new Set();

    // Loop through the markets and split symbols to get individual coins
    Object.keys(markets).forEach(pair => {
      const [base, quote] = pair.split('/');
      tradableCoins.add(base);
      tradableCoins.add(quote);
    });
  return Array.from(tradableCoins);
};
exports.averagePrice = async () => {
    const markets = await binance.loadMarkets();
    const tradableCoins = Object.keys(markets).filter(coin => markets[coin].active)
    console.log(tradableCoins.length)
    const averagePrices = {};

    for (let i = 0 ; i < 100 ; i++) {
      const coin = tradableCoins[i]
      const trades = await binance.fetchTrades(coin, undefined, undefined, { limit: 100 });
      const prices = trades.map(trade => parseFloat(trade.price));
      const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      averagePrices[coin] = averagePrice;
    }

    return averagePrices;
};
