require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain umbrella hidden clinic bridge genuine'; 
let testAccounts = [
"0x5c4157f9a394af3445c3baaf4e06b56b3bccea62a72b20e79c7687145014b81d",
"0xd2f44ed8e2b3f4a19df560b283a58894fe555f9bc6e1acf480bc01d9b5e8f357",
"0x45090122033c284777f478d0798134f9882d10f78d3b5fbcaefff6c8b3047496",
"0x2e2aaf96b5538cdbe2023353a2ed35e9e7c4357cb9f8e28144e973f091378a71",
"0x8dcc604f528c653c69651c0e4051a6a0351dbefb55a4428576b7346b6703fdaf",
"0xe54f99f57bc1c5c6080bfca696ddd037e15c3c02518e743c87890c2029e6a6d5",
"0xdd8b6c8557f9c731b02d81afd7a4fe156a04c5b9e28b1f1d57b3bdca602e23b1",
"0xd42a9d28346cd6b72312ae985a453bf8b071647a5c02d067c6c179badb28b917",
"0xa6f8b73830700079513de3d23d91fda8f902a7d792b33c02a6fdcde22ce6e347",
"0x07d721c6c1e734cc0bba13910c8c6988db5778216a2167bd2c702c7f48b75c2b"
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

