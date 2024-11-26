"use client";

import React, { useEffect } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
const Hero = () => {
  // Import AOS CSS here if it's not imported globally

  useEffect(() => {
    Aos.init({
      duration: 1000, // Set default duration for animations
      once: false, // Ensure animations can repeat when scrolling up and down
      mirror: true, // Allow animations to trigger again when scrolling up
    });
  }, []);

  //   const words = [
  //     {
  //       text: "Learn,",
  //     },
  //     {
  //       text: "Collaborate,",
  //     },
  //     {
  //       text: "Grow",
  //     },

  //   ];
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

      {/* <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />

        <div className="w-[100rem] h-40 relative">
        {/* Gradients */}
      {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

      {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

      {/* Radial Gradient to prevent sharp edges */}
      {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div> */}

      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div> */}
      {/* </div> */}

      <div className=" flex flex-col justify-center items-center flex-wrap relative z-10  mx-auto mt-[150px] w-full   max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
          data-aos="fade-up"
          className=" animate__animated animate__zoomInDown drop-shadow-lg drop   bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Learn
        </h1>
        <h1
          // style={{filter:"drop-shadow(0 0 5px #D4D4D4)"}}
          data-aos="fade-up"
          className=" animate__animated animate__zoomIn animate__delay-1s    bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Collaborate
        </h1>
        <h1
          //   style={{ filter: "drop-shadow(0 0 5px #62E2E9)" }}
          data-aos=" fade-up"
          className=" animate__animated animate__zoomInUp 
          animate__delay-1s   bg-gradient-to-b from-neutral-50 to-[#62E2E9]  bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Grow
        </h1>
    
      </div>
    </div>
  );
};

export default Hero;
