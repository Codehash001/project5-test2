import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <div className='mx-16 p-6 my-[32px] rounded-lg bg-gray-800'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-white font-Kanit text-[22px]'>
          How to mint Dexbattle NFTs?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation} className='text-white font-Kanit text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to buy $Dex Coins?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation} className='text-white font-Kanit text-[22px]'>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How much costs Dexbattle NFTs?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation} className='text-white font-Kanit text-[24px]'>
        <AccordionHeader onClick={() => handleOpen(4)}>
          What is the total supply of Dexbattle NFts?
        </AccordionHeader>
        <AccordionBody className='text-justify text-gray-300 font-Kanit text-[20px]'>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
