import React, {useState} from "react";
import data from "./TemplateData.json";

function MintComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div class="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
        <div className="w-full h-[60px] bg-white">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" key={val.id}>
                    <div class="relative">
                      <img class="w-full rounded-xl" src={val.image} alt="Colors" />
                      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Legendry</p>
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


