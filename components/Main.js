import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Main() {

useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 500})
    }, []); 

    return(
    <div id="home"className='overflow-hidden flex flex-col'>
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <img
          src="/banner2.jpg"
          className="w-screen h-auto brightness-75 object-fill blur-[1px]"
        />
        <div className='mt-6 top-[20px] absolute flex flex-col items-start font-Kanit bg-black/30 backdrop-blur p-6'>

        
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-[72px] font-extrabold text-transparent sm:text-[68px] uppercase"
      >
        Make your Own story

        
        <span class="sm:block">in DexBattle </span>
      </h1>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
      <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base text-gray-200"> Google Play Store </p>
                    </div>
                </div>
                <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base text-gray-200"> Apple App Store </p>
                    </div>
                </div>
      </div>
    </div>
  </div>

          

        </div>
       
        </div>
        
        <div data-aos ="fade-up"className='flex flex-row mx-16 justify-between  bg-gray-700/40 backdrop-blur-sm rounded-lg items-center'>
          <div className='flex flex-col my-4 w-[70%] mx-10'>
            <h1 data-aos="fade-right" className='text-5xl font-Kanit text-white tracking-wide'>What is DexBattale?</h1>
            <h1 data-aos="fade-right" className='text-[18px] font-Kanit text-gray-400 text-justify mt-6'>
            Welcome to the ever-evolving Dex battle universe! Hone your shooting skills, compete in tournaments, and complete missions with your
Clan to earn NFTs and coveted rewards. Collect weapons, and so much more items. But most importantly, have fun and work together
Dex battle is a community-owned skill-based shooter with different PvP and PvE game modes for every type of player. The core shooter
game is set on top of a land control-oriented, social strategy game with a deep emphasis on clans, alliances, and social mechanics. The
game economy rewards social behavior and is designed to be an endless experience built by and for the player community.
Thus, Metaverse structures can be applied immensely in the Dex battle but it all depends on the player&apos;s feedback when the voting takes
place. Dex battle metaverse will bring the best experience ever when players combine a shooting skill-based game with a wisdom strategy
for each character. It is fun beyond the limit.
            </h1>

            <h1 data-aos="fade-up" className='text-3xl font-Kanit text-white tracking-wide mt-6'>Features</h1>
            <h1 data-aos="fade-up" className='text-[16px] font-Kanit text-gray-400 text-justify mt-4'>
            Dex battle features blockchain-based digital assets known as &ldquo;NFTs&ldquo; that operate on an eco-friendly proof-of-stake blockchain. Because
blockchain technology enables actual digital ownership, Dex battle characters may be exchanged not just on the specific Dex battle
marketplace, but also on a variety of other platforms. Given the massive trading volume and profits generated by these NFT markets, this
is a wonderful financial incentive for merely profit-driven users and a chance for next-generation green investment. With NFTs now
selling for millions of dollars, these fees may outweigh the revenue earned by in-game transactions.
            </h1>

          </div>
          
             <img
            data-aos="flip-up"
            src='/DexBattle PNG/DexBattle-nostore.jpg'
            className='mx-10 h-full w-[30%]  border border-gray-400 rounded-lg'/>

           

        </div>
        
        {/* <div  className="w-screen h-auto mt-5 flex justify-center my-5 md:my-8">
          <div><Link className="cursor-pointer" href='/mint'>
            <div
            className="cursor-pointer font-Righteous p-2 bg-gradient-to-br from-brand-03 to-brand-04
            shadow-md rounded-md md:text-2xl text-[20px] text-black hover:shadow-gray-400/50 hover:text-bold tracking-wide uppercase">
                  <span className="cursor-pointer p-4 md:px-20 lg:px-32">Go To Minting portal </span>
            </div>
            </Link>
          </div>

        
        </div> */}
      </div>
    )
}
