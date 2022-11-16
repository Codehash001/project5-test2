const RPC_URL = process.env.NEXT_PUBLIC_URL
/* global BigInt*/

const config = {
  title: 'test dapp',
  description: 'test minting Dapp',
  tokenContract: '0xe2CC69a3b75D39dFFf1f38ed8d453010dAa11106',
  nftContract: '0x1d60C27218c32E5754686Aa41897e76fE8Abb6c8',
  exchangeContract: '0x6a7277181C6305ee8b4F0614738cb484f7cADD94',
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