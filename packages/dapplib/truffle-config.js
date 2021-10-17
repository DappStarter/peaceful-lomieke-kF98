require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember mistake hope enroll food slide'; 
let testAccounts = [
"0xfcdf5153525681a28c4b30720ff06d1a46e3b9a3f9ca28a2316ea249efc6e994",
"0x60c9b7f4a95215e4f60cd0184c9541e060ab6d175435baa32f9008f909dd194a",
"0xfd57f5d361f52b6c941c962f7157f3f39cc07c3fe328aad430caa8fde87d3815",
"0x2be8d3533d8fe5296a08863c5f0a0dc86b2cf6dc1cdf25a3eabfb9c712448e95",
"0x456a5b7d19cc952d8dae2940cd00afe3b6a6698dcfd1bfffc267bbfe1c716b57",
"0xe702a8176e9aa7cb2f4c3483ce7433e4087c794efcc56b9afaf7c138ad0a374d",
"0x68f81e942ae29ba630d48a2fa3464bf53196b1335bae79d83677c6c5e7173ab4",
"0x6769e82c6c884a752f9a6e24d9169893fd8a6f15d7c7ea671367b73c41e5fd74",
"0x67b0fb094253ab77173c87c9570c9b4201efef35fb20995ae6697bed53d172d4",
"0x57f818d29ca558c1cde96a676299665626a20f28cde1a5cbc164a028917d2a1a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

