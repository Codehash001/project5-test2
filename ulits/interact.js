import { config } from '../dapp.config'
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_URL)); 


const NFTcontract = require('../artifacts/contracts/DexNft.sol/DexNft.json')
const nftContract = new web3.eth.Contract(NFTcontract.abi, config.nftContract)


const TokenContract = require('../artifacts/contracts/Token.sol/Token.json')
const tokenContract = new web3.eth.Contract(TokenContract.abi , config.tokenContract)

export const getMaxSupply = async () => {
  const maxSupply = await nftContract.methods.maxSupply().call() 
  return maxSupply
}

export const getTokenBalance = async () => {
  if (!window.ethereum.selectedAddress) {
 	return 0}
  else {const TokenBalance = await tokenContract.methods.balanceOf(window.ethereum.selectedAddress).call()
  return TokenBalance }
}

export const getTotalMinted = async () => {
  const totalMinted = await nftContract.methods.totalSupply().call()
  return totalMinted
}

export const getNumberMinted = async () => {
  const NumberMinted = await nftContract.methods.numberMinted(window.ethereum.selectedAddress) .call()
  return NumberMinted
}


export const isPausedState = async () => {
  const paused = await nftContract.methods.paused().call()
  return paused
}

export const isPublicSaleState = async () => {
  const publicSale = await nftContract.methods.publicMint().call()
  return publicSale
}

export const isWlMintState = async () => {
  const WlMint = await nftContract.methods.wlMint().call()
  return WlMint
}

export const doPublicMint = async (mintAmount) => {

  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }
  const tx = {
    to: config.nftContract,
    from: window.ethereum.selectedAddress,
    data: nftContract.methods.PublicMint(mintAmount).encodeABI()
  }
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://testnet.bscscan.io/tx/${txHash}`} target="_blank">
          <p>✅ Check out your transaction on Etherscan:</p>
          <p>{`https://testnet.bscscan.io/tx/${txHash}`}</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }

  }


  
  export const doWlMint = async (mintAmount) => {
  
    if (!window.ethereum.selectedAddress) {
      return {
        success: false,
        status: 'To be able to mint, you need to connect your wallet'
      }
    }
    nftContract.methods.WLMint(mintAmount).encodeABI()
  
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx]
      })
  
      return {
        success: true,
        status: (
          <a href={`https://testnet.bscscan.io/tx/${txHash}`} target="_blank">
            <p>✅ Check out your transaction on Etherscan:</p>
            <p>{`https://testnet.bscscan.io/tx/${txHash}`}</p>
          </a>
        )
      }
    } catch (error) {
      return {
        success: false,
        status: '😞 Smth went wrong:' + error.message
      }
    }
  
    }


    export const doApprove = async (Amount) => {
      
      const Spender = config.nftContract
      if (!window.ethereum.selectedAddress) {
        return {
          success: false,
          status: 'To be able to Approve, you need to connect your wallet'
        }
      }
      const tx = {
        to: config.tokenContract,
        from: window.ethereum.selectedAddress,
        data: tokenContract.methods.approve(Spender , Amount).encodeABI()
      }
      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [tx]
        })
    
        return {
          success: true,
          status: (
            <a href={`https://testnet.bscscan.io/tx/${txHash}`} target="_blank">
              <p>✅ Check out your transaction on Etherscan:</p>
              <p>{`https://testnet.bscscan.io/tx/${txHash}`}</p>
            </a>
          )
        }
      } catch (error) {
        return {
          success: false,
          status: '😞 Smth went wrong:' + error.message
        }
      }
    
      }


  

 


