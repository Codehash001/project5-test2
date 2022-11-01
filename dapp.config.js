const RPC_URL = process.env.NEXT_PUBLIC_URL
/* global BigInt*/

const config = {
  title: 'test dapp',
  description: 'test minting Dapp',
  tokenContract: '0x7F6475d42dF004513608a853ba57613cD875c5C8',
  nftContract: '0x0213041D9485C14FE65B8Db77A88FdF6851881f6',
  exchangeContract: '0xA4ED03cA4baA2D4fe809A39d6CA295CabD554d9A',
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