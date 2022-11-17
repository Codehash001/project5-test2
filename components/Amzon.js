import React, { useState, useEffect } from "react";
import Chalist from "./CharacterData.json";
import Weaplist from './WeaponData.json'
import Cards from "./card";
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import NavMint from "../components/NavMint";
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
    const [searchTerm, setSearchTerm] = useState("")

  const [maxLeaderSupply, setMaxLeaderSupply] = useState(0)
  const [maxLegendarySupply, setMaxLegendarySupply] = useState(0)
  const [maxEpicSupply, setMaxEpicSupply] = useState(0)
  const [maxRareSupply, setMaxRareSupply] = useState(0)
  const [maxUncommonSupply, setMaxUncommonSupply] = useState(0)
  const [maxCommonSupply, setMaxCommonSupply] = useState(0)

  const [MintedAmount, setMintedAmount ] = useState(0)
  

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
    const { success, status } = await doApprove(Amount) && doMint(id) 
    
        setStatus({
          success,
          message: status
        })
    
        setIsMinting(false)
   };


  return (
    <div  className="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center py-10 flex flex-col overflow-hidden">
      <NavMint/>
          <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" id="searchInput" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Character, Weapon..."
        onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        </form>

        <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Characters</h1>
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4 my-4">
        { Chalist.filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              }).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </div>

    <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Weapons</h1>
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4 my-4">
        { Weaplist.filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              }).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </div>

    </div>
  );
};

export default Amazon;