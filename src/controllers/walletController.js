// src/controllers/walletController.js
const { ethers } = require('ethers');
const walletService = require('../services/walletService');

exports.validateAddress = (req, res) => {
  const { address } = req.params;
  const isValid = walletService.validateAddress(address);
  res.json({ valid: isValid });
};

exports.createWallet = (req, res) => {
  const wallet = walletService.createWallet();
  res.json({ address: wallet.address, privateKey: wallet.privateKey ,mnemonic: wallet.mnemonic.phrase});
};