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
        <div id="game"className='overflow-hidden flex flex-col'>
            <div className='mx-16 flex flex-col items-center justify-between'>

            <h1 data-aos="flip-right" className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[20px]'>
                    Game Concept
                </h1>
                <p data-aos="flip-right" className='text-[20px] font-Kanit text-gray-400 text-justify '>
                The game is inspired by a survival game in which players will take on the form of heroes to be the last survivor to win the battle by
                following the quest. The game loop will be players experiencing the battles, being the winner, and receiving the rewards, then using the
                rewards to upgrade the game characters and weapons efficiently
                </p>

                <h1 data-aos="flip-right" className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[20px]'>
                    Game story
                </h1>
                <div className=' md:flex-row flex flex-col justify-between'>
                    <h1 data-aos="flip-right" className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>Dr M.G.</span> <br/>
                    He was at the center of the Event, the very catalyst that set off everything. The great start at the center of the
                    Marsten Galaxy held within its power so great that no one, not a single person or creature in the universe, was said
                    to be able to stand it. He did not believe them, and he did not heed the warnings laid before him. He created a lab,
                    big as anything, and a great and powerful drill, with which he planned to break through to the heart of the great
                    star. He was going to harness the power of it to help people, all across the galaxy.  
                    </h1>
                    <img src='/characters/Dr.M.G..png' className='w-[250px] h-[250px] border'/>
                </div>

                <div className=' md:flex-row flex flex-col justify-between'>
                    <img src='/characters/Dr.M.G..png' className='w-[250px] h-[250px] border'/>
                    <h1 data-aos="flip-right" className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    When he had drilled through, the power that surged out of the center, out through the hole and into space, was
                    greater than he could ever have imagined. Eleven beams, some brighter than others and some even brighter than
                    that, bounced out into the Marsten Galaxy and hit eleven unsuspecting people, granting them the very powers he
                    had been searching for. He, at the center of it, got them too, impenetrable, unkillable power. The beams shot
                    through him first, one after the other, eleven shots directly to the chest. There was a price, though, for though those
                    eleven people lived, every single other person in the entire galaxy was killed by the blast. Now, Dr M.G. gathers the
                    eleven to him, trying to fix his mistake by giving them better lives than they had before.
                    </h1>
                </div>

                <div>
                    <button className=' bg-white text-center text-[20px] text-black font-Kanit hover:bg-blue-400 hover:font-semibold'>
                        Read more in Whitepaper
                    </button>
                </div>
            </div>
 

    </div>
    ) 
}
export default Coins