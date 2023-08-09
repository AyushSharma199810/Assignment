// src/controllers/coinController.js
const { ethers } = require('ethers');
const coinService = require('../services/coinService');

exports.TradableCoin = async (req, res) => {
    try {
        
        const tradableCoins = await coinService.tradableCoin()
        res.json(tradableCoins);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while fetching tradable coins' });
      }
    };

exports.averagePrice = async (req, res) => {
    try {
        console.log("pending")
        const averagePrice = await coinService.averagePrice()
        res.json(averagePrice);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error });
      }
    };
