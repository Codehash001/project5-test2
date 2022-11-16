import React, { useState } from "react";
import list from "./CharacterData.json";
import Cards from "./card";
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getMaxLeaderSupply,
  getMaxLegendarySupply,
  getMaxEpicSupply,
  getMaxRareSupply,
  getMaxUncommonSupply,
  getMaxCommonSupply,
  isPausedState,
  doMint,
  doApprove          } from '../ulits/interact'

const Amazon = () => {

  const [maxLeaderSupply, setMaxLeaderSupply] = useState(0)
  const [maxLegendarySupply, setMaxLegendarySupply] = useState(0)
  const [maxEpicSupply, setMaxEpicSupply] = useState(0)
  const [maxRareSupply, setMaxRareSupply] = useState(0)
  const [maxUncommonSupply, setMaxUncommonSupply] = useState(0)
  const [maxCommonSupply, setMaxCommonSupply] = useState(0)
  

  //const [totalMinted, setTotalMinted] = useState(0)
  
  const [paused, setPaused] = useState(false)
  const [status, setStatus] = useState(null)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')


  // const ID = ChaData.map((val) => {
  //   const id =(val.id)
  //   return id
  // ChaData.map(id)


  // })


  useEffect(() => {
    const init = async () => {
      setMaxLeaderSupply(await getMaxLeaderSupply())
      setMaxLegendarySupply(await getMaxLegendarySupply())
      setMaxEpicSupply(await getMaxEpicSupply())
      setMaxRareSupply(await getMaxRareSupply())
      setMaxUncommonSupply(await getMaxUncommonSupply())
      setMaxCommonSupply(await getMaxCommonSupply())

      //setTotalMinted(await getTotalMinted(id))

      setPaused(await isPausedState())
      //setIsPublicSale(await isPublicSaleState())
      
      
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

   /* global Bigint */



  const handleClick = async (item) => {

    setIsMinting(true)
    const id= item.id
        const Amount = BigInt(1000*10**18)
        const { success, status } = await doMint(id) 
    
        setStatus({
          success,
          message: status
        })
    
        setIsMinting(false)
   };


  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center py-10 flex flex-col overflow-hidden">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;