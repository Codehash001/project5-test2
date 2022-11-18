import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



function Nfts () {

    useEffect(() => {
        Aos.init({ duration : 1500,
                   offset: 100,
                   delay : 500})
      }, []);

    return (
        <div id="nfts"className='overflow-hidden flex flex-col'>
    <div className='flex flex-col my-10 mx-16 justify-between items-center'>
       <img
       data-aos="fade-up"
       src='/DexBattle PNG/DexBattle-Characters.jpg'
       className='object-cover'/>
       <div className='mt-10'>
        <h1 data-aos="flip-right" className='text-3xl text-blue-400  font-Kanit text-center uppercase font-semibold tracking-wide'>The Problem</h1>
        <p data-aos="flip-right" className='text-center font-Kanit text-[20px] text-gray-400 mt-4 mb-5'>
        Dex battle game was created because there are far too many blockchain games that lack good visuals, and the PC
gaming area is mostly disregarded by P2E producers. Furthermore, traditional games do not provide their players with
a play-to-earn structure. Over 1 billion players have been playing games for years without making any money from
them. They spend hundreds of dollars on skins and other <br/>
in-game things, yet they cannot sell them. This represents a return on investment.
            </p>
            <h1 data-aos="flip-right" className='text-3xl text-blue-400  font-Kanit text-center uppercase mt-10 font-semibold tracking-wide'>Our Solution</h1>
        <p  data-aos="flip-right" className='text-center font-Kanit text-[20px] text-gray-400 mt-4 mb-5'>
        We want to create a play-to-earn iOS and Android game with stunning visuals and gameplay
to attract a share of the 1 billion conventional Android gamers. We also hope to supply our
gamers with an NFT ecosystem in order to establish a long-lasting and addictive P2E gaming
experience.

            </p>
            
       </div>

<div className='mt-10'>
        <h1 data-aos="flip-right" className='text-3xl text-blue-400 font-Kanit text-center uppercase font-semibold tracking-wide'>NFT Characters</h1>
        <p data-aos="flip-right" className='text-center font-Kanit text-[20px] text-gray-400 mt-4'>
        Every character in the Dex battle P2E game is an NFT asset that can be enhanced using gemstones, and in-game currency (Dex
Token). Players will utilize their characters to complete objectives, win fights, and gain prizes in many game formats, including
guilds systems.
            </p>
            <h1 data-aos="flip-right" className='text-3xl text-blue-400 font-Kanit text-center uppercase mt-10 font-semibold tracking-wide'>NFT marketplace</h1>
        <p data-aos="flip-right" className='text-center font-Kanit text-[20px] text-gray-400 mt-4'>
        NFT market place will be created with whitelisting, presale and public sales funtionality to buy the NFTs with your token only and auction and lottery
too. Dex coin features blockchain-based digital assets know as &ldquo;NFTs&ldquo; that operate on an eco-friendly proof-of-stake blockchain. Because blockchain
technology enables actual digital ownership, indira characters may be exchanged not just on the specific indira marketplace, but also on a variety of
other platforms. Given the massive tading volume and profits generated by these NFT markets, This is a wonderful incentivefor users who are merely
profit-driven, as well as a chance for next generation green investment. There would be marketplaces where we sell actual items/food/taxi rides and
buy with crypto payment from the game.

            </p>
       </div>

       <section class=" dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="/DexBattle PNG/DexBattle-Characters.jpg"alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase mb-8">Mint DexBattle nft with dex coins</p>

                <a href="/Exchange">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Buy Dex Coins
                </span>
                </button>
                </a>


                <a href="/mint">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    Mint DexBattale NFTs</button></a>
            </div>
        </div>
    </div>
</section>

    </div>
    </div>
    ) 
}
export default Nfts