import React, { useState, useEffect } from "react";
import Amzon from "../components/Amzon";
import NavMint from "../components/NavMint";

const Minttest= () => {
    return (
        <React.Fragment>
          <div className="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center py-10 flex flex-col overflow-hidden">
          <div><NavMint/></div>
          <div><Amzon/></div>
          </div> 
        </React.Fragment>
      );

}
export default Minttest