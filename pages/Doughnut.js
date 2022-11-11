import React from "react";
import dynamic from "next/dynamic";


const Doughnut = dynamic (()=> import("../components/DonutChart"),{ssr:false});

export default function test(){
    return<Doughnut/>
}