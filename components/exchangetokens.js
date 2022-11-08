import React from 'react';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import Link from 'next/link'

import {
          doBuy,
          doSell,
          doApprove,
        getExchangeRate } from '../ulits/interactex'

export default function Exchange() {

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [exchangeRate, setExchangeRate] = useState(0)


  useEffect ( () => {
    const init = async () => {
      setExchangeRate(await(getExchangeRate))
    }
    init()
  }, [])
 

  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }

  const [rateArrItems , setRateArrItems] = useState([])

  const addCurrentRate = () =>{
  setRateArrItems([...rateArrItems,{
    id:rateArrItems.length,
    value:exchangeRate
 }])
 console.log(rateArrItems)
  }

  const doBuyHandler = async () => {
    setIsMinting(true)
    const payableAmount = payAmount
    await doBuy(payableAmount) 

   

    setIsMinting(false)
  }

  const doSellHandler = async () => {
    setIsMinting(true)
    const tokenAmountToSell = BigInt(exchangeAmount*10**18)
    await doApprove(tokenAmountToSell)
    await doSell(tokenAmountToSell) 

   

    setIsMinting(false)
  }



  const [exchangeAmount, setExchangeAmount] = useState(0)

  const handler = e =>{
    setExchangeAmount (e.target.value)
  }

  const payAmount = (exchangeAmount/config.exchangeRate)

  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
   }

return(
        <div className='max-w-screen  flex flex-col items-center justify-center overflow-hidden'>

        <h1 className='mt-10 font-Kanit text-[40px] text-white tracking-wide uppercase'> Instant dex coin exchange </h1>

        <div className=' flex flex-row items-center justify-between'>

            <div className='flex flex-col items-center mx-8 my-4'>

            <h1 className='font-Kanit text-[36px] text-gray-400 tracking-wide '>Swap your BNB with DEX coin</h1>

            <div className=' w-[300px] h-[300px] my-4'>
                <img src='/dexcoin.jpeg'
                className='object-cover'/>
            </div>

            
            <Link href='/mint'><button className="w-full bg-yellow-300 hover:bg-blue-700 text-black font-bold py-2 px-2 rounded-full my-4">
                 Mint NFTs with Dex coin
          </button>
          </Link>
           

            </div>

            <div className='flex flex-col items-center mx-8 my-4 bg-[#D9CCCC] rounded-md py-4'>
            <div className='flex flex-col items-center mx-6 '>
                <h1 className=' mb-4 font-Kanit text-[22px] text-gray-700 '>{walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : 'CONNECT YOUR WALLET'}</h1>

                <div className='w-full max-w-xs bg-[#afaff8] rounded-md border pb-4'>
                <div className='w-full h-full flex justify-between border border-gray-400'>
                        <button className={toggleState === 1? ' bg-[#afaff8] text-black text-[18px] font-Kanit py-2 w-full  border-b-4  border-black' : " bg-[#D9CCCC] border text-gray-400 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(1)}>
                        BUY </button>

                        <button className={toggleState === 2 ? 'bg-[#afaff8] text-black text-[18px] font-Kanit py-2 px-auto w-full border-b-4 border-black' : "bg-[#D9CCCC] border text-gray-400 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(2)}>
                        SELL </button>
                    </div> 

                <form class="mx-6">
                  <div class="my-4">
                 
                    <h1 class="block text-gray-700 text-sm font-bold mb-2">
                      Balance
                    </h1>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dexBalance" type="number" value={exchangeAmount} onChange={handler}/>
                  </div>
                  <div class="my-4">
                    <h1 class="block text-gray-700 text-sm font-bold mb-2" >
                      Balance
                    </h1>
                    
                    
                    <div className='shadow appearance-none border bg- rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'> {payAmount}</div>
                  </div>
                  <div class="flex items-center justify-between">
                   {walletAddress ? ( <button className="w-full bg-blue-400 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button"
                   onClick={toggleState === 1 ? doBuyHandler && addCurrentRate : doSellHandler && addCurrentRate}>
                      { toggleState === 1 ? "Buy DEX coins" : "Sell Dex Coins"}
                    </button> ) : ( <button className="w-full bg-bl4ue-00 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={connectWalletHandler}>
                      Connect Wallet
                    </button> )}  
                    
              
                    
                  </div>



                </form>
                
              </div>
            </div>
            </div>


        </div>

        </div>
    )}