import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";





function Coins () {

    useEffect(() => {
        Aos.init({ duration : 1500,
                   offset: 100,
                   delay : 100})
      }, []);
      
    return (
        <div id="game"className='overflow-hidden flex flex-col'>
            <div className='mx-16 flex flex-col items-center justify-between'>

            <h1 data-aos="fade" className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold'>
                    Game Concept
                </h1>
                <p data-aos="fade" className='text-[20px] font-Kanit text-gray-400 text-justify '>
                The game is inspired by a survival game in which players will take on the form of heroes to be the last survivor to win the battle by
                following the quest. The game loop will be players experiencing the battles, being the winner, and receiving the rewards, then using the
                rewards to upgrade the game characters and weapons efficiently
                </p>

                <h1 data-aos="flip-right" className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold'>
                    Game story
                </h1>
                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between'>
                    <h1  className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>Dr M.G.</span> <br/>
                    He was at the center of the Event, the very catalyst that set off everything. The great start at the center of the
                    Marsten Galaxy held within its power so great that no one, not a single person or creature in the universe, was said
                    to be able to stand it. He did not believe them, and he did not heed the warnings laid before him. He created a lab,
                    big as anything, and a great and powerful drill, with which he planned to break through to the heart of the great
                    star. He was going to harness the power of it to help people, all across the galaxy.  
                    </h1>
                    <img src='/characters/Raja.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Dr.M.G..png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    When he had drilled through, the power that surged out of the center, out through the hole and into space, was
                    greater than he could ever have imagined. Eleven beams, some brighter than others and some even brighter than
                    that, bounced out into the Marsten Galaxy and hit eleven unsuspecting people, granting them the very powers he
                    had been searching for. He, at the center of it, got them too, impenetrable, unkillable power. The beams shot
                    through him first, one after the other, eleven shots directly to the chest. There was a price, though, for though those
                    eleven people lived, every single other person in the entire galaxy was killed by the blast. Now, Dr M.G. gathers the
                    eleven to him, trying to fix his mistake by giving them better lives than they had before.
                    </h1>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 1, Angela</span> <br/>
                    When she was a child, she was bred to be a warrior. Born on the planet Expon in the middle of a battlefield, Angela
                    lived her life as normal, thinking that this was all she would ever know. She was the greatest warrior in her group, but
                    the people of Expon were a war-ravaged people, and so not only was the life expectancy rate extremely low, but she
                    spent her entire childhood watching her friends and family fall beside her as she fought. She expected, and had made
                    peace with the fact that, she had been born on a battlefield, and she was going to die on one.  
                    </h1>
                    <img src='/characters/Melissa.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Angela.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    The Event knocked her out, and she woke up alone in the middle of a desert, surrounded by the blood of people who
                    didn&apos;t exist anymore. She was a skilled warrior, truly, and had not been hurt in battle, and when the beam hit her it
                    understood that there was no change that needed to be made. She rose to her feet and stayed in her camp alone until
                    she was called to the scientist, and he made her the leader of his little army
                    </h1>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-8'>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mr-8 '>
                    <span className='font-semibold mb-4 text-[24px] text-yellow-600'>No. 2, Apollo</span> <br/>
                    Apollo started out as just a young kid, working to make ends meet in the slum area of Planet Perrian. It was a small
                    planet, made up mostly of industrial areas and factories, and his life was hard and dangerous. He had to work around
                    machines constantly, and factory accidents were very common. He went to work every day with the knowledge that, at
                    any moment, something could happen that would kill him. At the moment of the event, he was in the middle of repairs
                    on an industrial welder, and the force of the blast (and the subsequent beam that hit him square in the chest) knocked
                    him back, pushing against the welder and searing off half of his face and giving him third degree burns everywhere.  
                    </h1>
                    <img src='/characters/Peter.png' className='w-[250px] h-[250px] border'/>
                </div>

                <div data-aos="fade-up" className=' md:flex-row flex flex-col justify-between mt-6'>
                    <img src='/characters/Apollo.png' className='w-[250px] h-[250px] border'/>
                    <h1 className='text-[20px] font-Kanit text-gray-400 text-justify ml-8 '>
                    Because of his proximity to the machines, the great star&apos;s power got confused, and so instead of healing him, it
                    replaced the burned parts of his body with robot parts, making him bionic. Scared and suddenly completely alone
                    on his planet (and, unknown to him at the time, only one of twelve people left alive in the entire galaxy), he hid
                    among buildings and ate the leftovers the others had left behind until Dr M.G. summoned him to him, giving him
                    the home and the family that he had always so longed for.
                    </h1>
                </div>

                <div className='mb-4'>
                    <button className=' border border-blue-200 text-center text-[20px] text-blue-200 font-Kanit hover:bg-blue-400 hover:font-semibold px-4 py-2 rounded-full'>
                        Read more in Whitepaper
                    </button>
                </div>

                <h1 data-aos="flip-right" className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>
                    DexBattle Characters
                </h1>

  <div className='w-full flex flex-col items-center justify-between overflow-hidden my-4'> 
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Apollo.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white uppercase">APOLLO</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <li>Walk speed:4.5</li>
        <li>Run speed:8</li>
        <li>Stealth speed:1</li>
        <li>Acceleration:9</li>
        <li>Crouch speed:2</li>
        <li>Crouch transition speed:0.16</li>
        <li>Slide speed:12</li>
        <li>Jump force:8.5</li>
        <li>Jump rate:0.82</li>
        <li>Gravity multiplier:1</li>
        <li>Health:100</li>
        <li>Start to regenerate in:4</li>
        <li>Regeneration speed:3(max)</li>
        <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Billy.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">BILLY</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <li>Walk speed:6.62</li>
        <li>Run speed:11.13</li>
        <li>Stealth speed:1.16</li>
        <li>Acceleration:7.4</li>
        <li>Crouch speed:1.77</li>
        <li>Crouch transition speed:0.16</li>
        <li>Slide speed:11</li>
        <li>Jump force:8.2</li>
        <li>Jump rate:0.82</li>
        <li>Gravity multiplier:2</li>
        <li>Health:100</li>
        <li>Start to regenerate in:4</li>
        <li>Regeneration speed:3(max)</li>
        <li>Regenerate up to:75</li>
        </ol>
        
      </div>
    </div>
    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Bishop.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">BISHOP</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5 </li>
            <li>Run speed:7.85</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:10</li>
            <li>Crouch speed:2</li>
            <li>Crouchtransition speed:0.16</li>
            <li>Slidespeed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regeneratein:4</li>
            <li>Regenerationspeed:3(max)</li>
            <li>Regenerateupto:75</li>
        </ol>
        
      </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Irona.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">IRONA</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:7.1 </li>
            <li>Run speed:9</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:8.3</li>
            <li>Crouch speed:2.34</li>
            <li>Crouch transition speed:0.192</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.6</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Omega.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">OMEGA</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5.2 </li>
            <li>Run speed:9</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:9</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.6</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Regen.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">REGEN</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:4.5 </li>
            <li>Run speed:8</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:9</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:2</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Ultron.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">ULTRON</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:5</li>
            <li>Run speed:8</li>
            <li>Stealth speed:1</li>
            <li>Acceleration:10</li>
            <li>Crouch speed:3</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Vader.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">VADER</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:6.77 </li>
            <li>Run speed:8</li>
            <li>Stealth speed:1.21</li>
            <li>Acceleration:12.3</li>
            <li>Crouch speed:2.97</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12.65</li>
            <li>Jumpforce:6.5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

    <div class="my-4 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/characters/Alita.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-Kanit text-3xl font-bold text-white">ALITA</h1>
        <ol class="mb-3 text-[15px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <li>Walk speed:6.57 </li>
            <li>Run speed:10.48</li>
            <li>Stealth speed:1.1</li>
            <li>Acceleration:10.4</li>
            <li>Crouch speed:2</li>
            <li>Crouch transition speed:0.16</li>
            <li>Slide speed:12</li>
            <li>Jumpforce:6.5</li>
            <li>Jumprate:0.82</li>
            <li>Gravitymultiplier:2</li>
            <li>Health:100</li>
            <li>Start to regenerate in:4</li>
            <li>Regeneration speed:3(max)</li>
            <li>Regenerate upto:75</li>
        </ol>
    </div>
    </div>

  </div>

  </div>
  
</div>


         
 

    </div>
    ) 
}
export default Coins