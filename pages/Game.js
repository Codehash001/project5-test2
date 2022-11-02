import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";





function Coins () {

    useEffect(() => {
        Aos.init({ duration : 1500,
                   offset: 130,
                   delay : 500})
      }, []);
      
    return (
        <div id="dexcoin"className='overflow-hidden flex flex-col'>
     <div className='flex flex-row mx-16 justify-between items-center'>
          <div className='flex flex-col my-4 w-[70%] mr-10'>
            <h1 data-aos="flip-right" className='text-5xl font-Kanit text-blue-400 tracking-wide'>Game Concept</h1>
            <h1 data-aos="flip-right"className='text-[20px] font-Kanit text-gray-400 text-justify mt-6'>
            The game is inspired by a survival game in which players will take on the form of heroes to be the last survivor to win the battle by
following the quest. The game loop will be players experiencing the battles, being the winner, and receiving the rewards, then using the
rewards to upgrade the game characters and weapons efficiently.
</h1>
<h1 data-aos="flip-right" className='text-5xl font-Kanit text-blue-400 tracking-wide'>Game Story</h1>

<div className='md:flex-col flex flex-row'>
            <h1 data-aos="flip-right"className='text-[20px] font-Kanit text-gray-400 text-justify mt-6'>
            Dr M.G.
He was at the center of the Event, the very catalyst that set off everything. The great start at the center of the
Marsten Galaxy held within its power so great that no one, not a single person or creature in the universe, was said
to be able to stand it. He did not believe them, and he did not heed the warnings laid before him. He created a lab,
big as anything, and a great and powerful drill, with which he planned to break through to the heart of the great
star. He was going to harness the power of it to help people, all across the galaxy.
</h1>

<img src=''
    className=''
    />

</div>


         

          </div>
          
            <img
            data-aos="fade-up"
            src='/DexBattle PNG/DexCoin-nostore.jpg'
            className='h-full w-[30%]  border border-gray-400 rounded-lg'/>

          

        </div> 

        <div className=' flex flex-row mx-16 my-[50px] justify-evenly'>
            <div className='flex flex-col items-center'>
                <hl className='text-blue-400 font-Kanit text-[40px] text-center'>1 000 000 000</hl>
                <hl data-aos="fade-up" className='text-white font-Kanit text-2xl text-center'>Total Supply</hl>
            </div>

            <div className='flex flex-col items-center'>
                <hl className='text-blue-400 font-Kanit text-[40px] text-center'>Binance Samrt Chain</hl>
                <hl data-aos="fade-up" className='text-white font-Kanit text-2xl text-center'>Blockchain</hl>
            </div>
        </div>

        <div>
            {/* dohnut chart here */}
        </div>

    </div>
    ) 
}
export default Coins