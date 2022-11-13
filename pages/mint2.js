import React from "react";
import dynamic from "next/dynamic";


const Testint = dynamic (()=> import("../components/Testint"),{ssr:false});

export default function test(){
    return<Testint/>
}