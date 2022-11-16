import React from "react";
import dynamic from "next/dynamic";


const Minttest = dynamic (()=> import("../components/Mintetst"),{ssr:false});

export default function test(){
    return<Minttest/>
}