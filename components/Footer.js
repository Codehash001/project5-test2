import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer () {
    return(
      <div className='flex md:justify-evenly items-center justify-between w-full h-20 px-2 2xl:px-16 bg-black my-4'>
	
            <a href="" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Mint</a>
            <a href="https://twitter.com/" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Twitter</a>
	
	
            <Link href="/"><img src="/Dex.png" className='cursor-pointer h-[60px] w-[80px]'/></Link>
	
            <a href="https://etherscan.io/address/0xaC8cB0A8642a9cb8461DD74C3799c4865Db39348#readContract" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">BscScan</a>
            <a href="https://discord.gg" className='md:Text-2xl text-1xl text-gray-600' target="_blank" rel="noreferrer">Discord</a>
		
      </div>
    )
}

export default Footer