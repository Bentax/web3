const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const bip39 = require('bip39');
const hdkey = require('hdkey');
const mongoose = require('mongoose');
const abi = require('./abi.json'); // ERC-20 token ABI
const tokenAddress = '<TOKEN_ADDRESS>'; // ERC-20 token contract address
const mnemonic = bip39.generateMnemonic(); // Generate a new mnemonic phrase
const path = "m/44'/60'/0'/0/0"; // Derivation path for the first wallet address

const seed = bip39.mnemonicToSeedSync(mnemonic); // Generate a seed from the mnemonic phrase
const hdwallet = hdkey.fromMasterSeed(seed); // Generate a hierarchical deterministic wallet from the seed
const privateKey = hdwallet.derivePath(path).getWallet().getPrivateKeyString(); // Get the private key for the first wallet address

const provider = new HDWalletProvider(privateKey, '<NETWORK_URL>');
const web3 = new Web3(provider);

const tokenContract = new web3.eth.Contract(abi, tokenAddress);

// Create a new wallet address
const wallet = web3.eth.accounts.create();

// Send some ether to the new wallet address for gas fees
web3.eth.sendTransaction({
  from: '<SENDER_ADDRESS>',
  to: wallet.address,
  value: web3.utils.toWei('0.1', 'ether'),
});

// Get the balance of the new wallet address
tokenContract.methods.balanceOf(wallet.address).call((err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  // Save the wallet data to MongoDB
  mongoose.connect('<MONGODB_URL>', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      const Wallet = mongoose.model('Wallet', {
        address: String,
        balance: Number,
        mnemonic: String,
      });
      const newWallet = new Wallet({
        address: wallet.address,
        balance: web3.utils.fromWei(result, 'ether'),
        mnemonic: mnemonic,
      });
      newWallet.save((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Wallet data saved to MongoDB');
        }
        mongoose.disconnect();
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

// This code uses the mongoose library to connect to a MongoDB database and save the wallet data to a new document in a Wallet collection. The mongoose library is used to define the schema for the Wallet collection and create a new Wallet document using the wallet data. The newWallet.save() method is used to save the new document to the database, and the mongoose.disconnect() method is used to close the database connection once the save operation is complete. Note that you'll need to replace the <TOKEN_ADDRESS>, <NETWORK_URL>, <SENDER_ADDRESS>, and <MONGODB_URL> placeholders with your own values. Also, make sure to install the required dependencies (web3, @truffle/hdwallet-provider, bip39, hdkey, mongoose) using npm or yarn before running this code.
