import React from 'react';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import Link from 'next/link'
import Navbar from '../components/Navbar';

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
      setExchangeRate(await(getExchangeRate()))
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
    value:1/exchangeRate
 }])
 console.log(rateArrItems)
  }

  const doBuyHandler = async () => {

    setIsMinting(true)
    console.log(exchangeRate)
    const payableAmount = payAmount
    const {success, status}= await doBuy(payableAmount)
    setStatus({
      success,
      message: status
    })
     

   

    setIsMinting(false)
    
  }

  const doSellHandler = async () => {
    setIsMinting(true)
    const tokenAmountToSell = BigInt(exchangeAmount*10**18)
    const {success} = await doApprove(tokenAmountToSell)
    if (success) {
    const {success, status}=await doSell(tokenAmountToSell)
    setStatus({
      success,
      message: status
    })
  }
    

   

    setIsMinting(false)
  }



  const [exchangeAmount, setExchangeAmount] = useState(0)

  const handler = e =>{
    setExchangeAmount (e.target.value)
  }

  const payAmount = exchangeAmount/exchangeRate

  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
   }

return(
        <div className="relative min-h-screen h-full w-full overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#141414] to-[#330042]">

            <div className="w-full h-full flex flex-col items-start justify-center py-2">
              <Navbar/>
            </div>

        </div>
    )}