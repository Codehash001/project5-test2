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
       <img
       data-aos="fade-up"
       src='/Banner 01.jpg'
       className='object-cover mt-10 rounded-lg border border-gray-400'/>

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

       <div className='mt-10 flex flex-row items-center'>
        <div className='p-4'>
            <img
            src='/DexBattle PNG/DexBattle7-nostore.jpg'
            className=' w-[75%] h-auto rounded-lg border border-gray-400'/>
        </div>
        <div className='p-4 flex flex-col w-full h-full font-Kanit justify-between items-center'>
             <p className='text-white  text-[40px] text-center'>
                Mint Dex Battel NFTs <br/>  with Dex Coin!
            </p>
                <p className=' text-yellow-600 mt-4 text-[24px] leading-normal text-center'>
                    1 NFT = 100 DEX <br/>1000 DEX = 1 BNB
                </p>
            <a href='/ ' className='mt-8 text-[20px]'><button className=' py-4 px-10 bg-transparent border border-blue-400 text-blue-400 uppercase hover:border-white hover:text-white '>Buy Dex coin tokens</button></a>
             <a href='/mint'className='mt-4 text-[20px]'><button className=' py-4 px-10 bg-blue-400 text-black  uppercase hover:font-semibold hover:bg-white'>Go to minting portal</button></a>
        </div> 
             
        

       </div>

    </div>
    </div>
    ) 
}
export default Nfts