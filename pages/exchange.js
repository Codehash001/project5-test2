import React from 'react';
import { useState,useEffect } from "react"
// import { initOnboard } from "../ulits/onboard"
// import { config } from '../dapp.config'

// export default function Exchange() {

//   const [status, setStatus] = useState(null)
//   const [mintAmount, setMintAmount] = useState(1)
//   const [isMinting, setIsMinting] = useState(false)
//   const [onboard, setOnboard] = useState(null)
//   const [walletAddress, setWalletAddress] = useState('')
 

//   useEffect( () => {
//     const onboardData = initOnboard( {
//       address: (address) => setWalletAddress(address ? address : ''),
//       wallet: (wallet) => {
//         if (wallet.provider) {
//           window.localStorage.setItem('selectedWallet', wallet.name)
//         } else {
//           window.localStorage.removeItem('selectedWallet') }}
//     }
//     )
//   setOnboard(onboardData)
//   }, [])

//   const previouslySelectedWallet = typeof window !== 'undefined' &&
//   window.localStorage.getItem('selectedWallet')

// useEffect(() => {
//   if (previouslySelectedWallet !== null && onboard) {
//     onboard.walletSelect(previouslySelectedWallet)
//   }
// }, [onboard, previouslySelectedWallet])

//   const connectWalletHandler = async () => {
//     const walletSelected = await onboard.walletSelect()
//     if (walletSelected) {
//       await onboard.walletCheck()
//       window.location.reload(false)
//     }
//   }
  const [buyingAmount, setBuyingAmount] = useState(0)

  const handler = e =>{
    setBuyingAmount (e.target.value)
  }




    return(
        <div className='max-h-screen h-full w-full flex flex-col items-center justify-center'>
            <hl className='mt-10 font-Kanit text-5xl text-white tracking-wide uppercase'>Instant dex coin exchange</hl>
            <hl className=' mt-2 font-Kanit text-3xl text-gray-300 tracking-wide uppercase'>Swap your BNB with DEX coin</hl>
            <div className='flex flex-row  my-4 overflow-hidden justify-between mx-[20%]'>
               <div className='my-4  flex items-start justify-start '>
                <img src='/DexBattle PNG/DexCoin nostore.png'
               className='h-[90%] rounded-lg border border-white '/>
               </div>
               <div className='border border-white w-full h-full flex flex-col items-center py-4 px-8 rounded-lg my-4'>
                    <h1 className='text-white font-Kanit text-2xl'>{walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : ''}</h1>
                    <div className='w-full h-full flex justify-between mt-4'>
                        <button className='bg-white text-black text-[18px] font-Kanit py-2 px-10 rounded-md'> BUY</button>
                        <button className=' border border-white text-white py-2 text-[18px] font-Kanit px-10 rounded-md '> SELL</button>
                    </div>
                <div class="w-full max-w-xs">
  <form class=" ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="dexBlance">
        Balance
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dexBalance" type="number" placeholder="0" value={buyingAmount} onChange={handler}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Balance
      </label>
      {/* <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="0"/> */}
      <div className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'> {buyingAmount}</div>
    </div>
    <div class="flex items-center justify-between">
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Buy DEX coins
      </button>
      
    </div>
    <div class="flex items-center justify-between my-4">
      <button className="w-full bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Mint NFTs with Dex coin
      </button>
      
    </div>
  </form>
  
</div>

               </div>

            </div>
        </div>
    )}

