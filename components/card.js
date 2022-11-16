import React from "react";

const Cards = ({ item, handleClick, init }) => {

  const { id ,title, tier, supply, image } = item;
  return (
    <div class="max-w-sm bg-gray-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div class="relative">
      <img class="w-full rounded-xl" src={image} alt="Character" />
      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{tier}</p>
    </div>
    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
    <div class="my-4">
      <div class="flex space-x-1 items-center">
        <p>Supply:{totalMinted(item)}
          {supply}
          </p>
      </div>
      <div class="flex space-x-1 items-center">
        <p> Minted:</p>
      </div>
      <div class="flex space-x-1 items-center">
        <p>Available:400</p>
      </div>
       <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700"
      onClick={() => handleClick(item)}>
      Mint now</button>
      <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700"
      onClick={() => init(item)}>
      Mint now</button>
    </div>
  </div>
  );
};

export default Cards;

// id, title, autor, price, img