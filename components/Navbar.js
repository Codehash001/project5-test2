import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Navbar () {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed z-[100] w-full h-auto bg-black/30 backdrop-blur-sm overflow-hidden border-b-white'>
      <ul className='flex flex-row items-center justify-between my-4 mx-10'>
        <li>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
          <div className='bg-gray-700/30 py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md text-[20px]'>
            <Link className="cursor-pointer" acticeClass ="active" to='home' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Home</h1></Link>
            <Link className="cursor-pointer" acticeClass ="active" to='nfts' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> NFTs</h1></Link>
            <Link className="cursor-pointer" acticeClass ="active" to='dexcoin' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Dex Coin</h1></Link>
            <Link className="cursor-pointer" acticeClass ="active" to='roadmap' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Roadmap</h1></Link>
            <Link className="cursor-pointer" acticeClass ="active" to='/' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> About</h1></Link>
            <Link className="cursor-pointer" acticeClass ="active" to='team' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Team</h1></Link>

          </div>

        <li>
        <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white'>
            <h1 className='mx-4 uppercase'>Learn More</h1>

          </div>
          
        </li>

      </ul>
    </div>
  )
}

export default Navbar
