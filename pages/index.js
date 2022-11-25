import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Nfts from '../components/NFTs';
import Coins from '../components/Coin';
import Game from '../components/Game';
import Roadmap from '../components/Roadmap';
import About from '../components/About';
import Footer from '../components/Footer';
import Faqs from '../components/FAQs';


export default function Home() {
  return (
    <div className='bg-gradient-to-r from-[#01000e] via-[#130318] to-[#130318]'>
      <Head>
        <title>DexBattle</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
      <Navbar/>
      <Main/>
      <Nfts/>
      <Coins/>
      <Game/>
      <Roadmap/>
      <About/>
      <Faqs/>
      <Footer/>
      
       
    
    
    </div>
  )
}
