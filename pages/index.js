import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Nfts from '../components/NFTs';
import Coins from '../components/Coin';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>DEX</title>
        <meta name="Description" content="Dex!" />
        <link rel="icon" href="/Dex.png" />
      </Head>
      <Navbar/>
      <Main/>
      <Nfts/>
      <Coins/>
      <Roadmap/>
      <Footer/>
      <Team/>
       
    
    
    </div>
  )
}
