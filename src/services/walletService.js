// src/services/walletService.js
const { ethers } = require('ethers');
const walletRepository = require('../repositories/walletRepository');

exports.validateAddress = (address) => {
  return ethers.utils.isAddress(address);
};

exports.createWallet = () => {
  return ethers.Wallet.createRandom();
};