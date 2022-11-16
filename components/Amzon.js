import React, { useState } from "react";
import list from "../data";
import Cards from "./card";

const Amazon = () => {
    const handleClick = (item) => {
        console.log(item);
    };
  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center py-10 flex flex-col overflow-hidden">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;