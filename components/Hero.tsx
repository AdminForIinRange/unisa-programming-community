import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const Hero = () => {
  const words = [
    {
      text: "Learn,",
    },
    {
      text: "Collaborate,",
    },
    {
      text: "Grow",
    },
    {
      text: "Your",
      className: "text-blue-500 dark:text-blue-500",
    },
   

  ];
  return (
    <div>
      {/* 
<div className="mt-20 h-[10rem] flex items-center justify-center text-wrap">
        <TextHoverEffect text="Unisa Programming" />
      </div>
      <div className="h-[10rem] flex items-end justify-end w-full ">
        <TextHoverEffect text="Club" />
      </div> */}

      {/* <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black border border-[black] dark:text-white flex items-center space-x-2"
      >
<Image src={UPC_logo_Trans} width={20} height={40} alt="UPC logo" style={{marginRight: "10px"}} />
        <span className='font-poppins font-[500]' >  Join The Community</span>
      </HoverBorderGradient>
    </div> */}

      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
