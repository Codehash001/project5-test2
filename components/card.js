import { useEffect, useState } from "react";
import { initOnboard } from "../ulits/onboard"
import React from "react";
import {
    getTotalMinted,
    getMaxLeaderSupply,
    getMaxLegendarySupply,
    getMaxEpicSupply,
    getMaxRareSupply,
    getMaxUncommonSupply,
    getMaxCommonSupply,
    isPausedState          } from '../ulits/interact'

const Cards = ({ item, handleClick, }) => {

const [totalMinted, setTotalMinted ] = useState(0)
const [maxLeaderSupply, setMaxLeaderSupply] = useState(0)
const [maxLegendarySupply, setMaxLegendarySupply] = useState(0)
const [maxEpicSupply, setMaxEpicSupply] = useState(0)
const [maxRareSupply, setMaxRareSupply] = useState(0)
const [maxUncommonSupply, setMaxUncommonSupply] = useState(0)
const [maxCommonSupply, setMaxCommonSupply] = useState(0)
const [maxSupply, setMaxSupply] = useState(0)
const [paused, setPaused] =useState(false)
const [onboard, setOnboard] = useState(null)
const [walletAddress, setWalletAddress] = useState('')

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



 const { id ,title, tier, image } = item;
 
useEffect(() => {
    const init = async (id) => {
      
      setTotalMinted(await getTotalMinted(id))
 }

    init(id)
  }, [])

  useEffect(() => {
    const init = async () => {
      
        setMaxLeaderSupply(await getMaxLeaderSupply())
        setMaxLegendarySupply(await getMaxLegendarySupply())
        setMaxEpicSupply(await getMaxEpicSupply())
        setMaxRareSupply(await getMaxRareSupply())
        setMaxUncommonSupply(await getMaxUncommonSupply())
        setMaxCommonSupply(await getMaxCommonSupply())
        setPaused(await isPausedState())
  
 }

    init()
  }, [])

useEffect(() => {
    const init = async (id) => {

        
        setMaxSupply(id >= 128 ? maxLegendarySupply() : id >= 99 ? maxEpicSupply() : id >= 64 ? maxRareSupply() : id >= 37 ? maxUncommonSupply() : id >= 10 ? maxCommonSupply() : maxLeaderSupply())

 }

    init(id)
  }, [])
 
  return (
    <div class="max-w-sm bg-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div class="relative">
      <img class="w-full rounded-xl" src={image} alt="Character" />
      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{tier}</p>
    </div>
    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
    <div class="my-4">
      <div class="flex space-x-1 items-center">
        <p>Supply :
        {maxSupply}
          </p>
      </div>
      <div class="flex space-x-1 items-center" >
        <p> Minted:{totalMinted}</p>
      </div>
      <div class="flex space-x-1 items-center">
        <p>Available:{maxSupply - totalMinted}</p>
      </div>
      {walletAddress?
      (<button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700"
    onClick={() => handleClick(item)}>
    Mint now</button>) : (
    <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700"
    onClick={() => alert("To be able to mint you nedd to connect your wallet")}>
    Mint now</button>)  }
    </div>
  </div>
  );
};

export default Cards;