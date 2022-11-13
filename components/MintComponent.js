import React, {useState} from "react";
import ChaData from "./CharacterData.json";
import WepData from "./WeponData.json";
import Navbar from '../components/Navbar';

function MintComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div class="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center py-10 flex flex-col overflow-hidden">
        
      <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" id="searchInput" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Character, Wepon..."
        onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        </form>
      <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Characters</h1>  
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4 my-4">
          {
            ChaData 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                    <div class="max-w-sm bg-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" key={val.id}>
                    <div class="relative">
                      <img class="w-full rounded-xl" src={val.image} alt="Character" />
                      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{val.tier}</p>
                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{val.title}</h1>
                    <div class="my-4">
                      <div class="flex space-x-1 items-center">
                        <p>Supply:{val.supply}</p>
                      </div>
                      <div class="flex space-x-1 items-center">
                        <p>Minted:100</p>
                      </div>
                      <div class="flex space-x-1 items-center">
                        <p>Available:400</p>
                      </div>
                      <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
                    </div>
                  </div>
          
                )
              })
          }
        </div>

        <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Wepons</h1>  
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4 my-4">
          {
            WepData 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                    <div class="max-w-sm bg-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" key={val.id}>
                    <div class="relative">
                      <img class="w-full rounded-xl" src={val.image} alt="Wepons" />
                      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{val.tier}</p>
                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{val.title}</h1>
                    <div class="my-4">
                      <div class="flex space-x-1 items-center">
                        <p>Supply:{val.supply}</p>
                      </div>
                      <div class="flex space-x-1 items-center">
                        <p>Minted:100</p>
                      </div>
                      <div class="flex space-x-1 items-center">
                        <p>Available:400</p>
                      </div>
                      <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
                    </div>
                  </div>
          
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default MintComponent;

{/* <div className="w-full h-[60px] bg-white">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div> */}


