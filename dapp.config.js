const RPC_URL = process.env.NEXT_PUBLIC_URL
/* global BigInt*/

const config = {
  title: 'test dapp',
  description: 'test minting Dapp',
  tokenContract: '0xbEe4e388d0856Bfd401eb9909B93a4f8F068d947',
  nftContract: '0x5FF55aa5eA845C8Dda7C8dBE9bD1ae8f1def1d1C',
  exchangeContract: '0x67D952dB0267cD0b3FAE12D5FbB5b127AE7ac8e8',
  maxMintAmount: 3,
  WlMaxMintAmount: 2,
  maxPublicForWhitelisted : 5,
  wlcost: 10,
  rate: 10*10**18,
  exchangeRate: 100,
  publicSalePrice:10
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 97, // bsc testnet
  darkMode: true,
  walletSelect: {
    description:'Plaese select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis'},
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }