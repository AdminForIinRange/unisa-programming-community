"use client";

import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Image from "next/image";
import React from "react";
import onePieceOFbackground from "../../public/svg/onePieceOFbackground.svg";
import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
const Home = () => {

  
  return (
    <>
        {/* Content goes here */}

        
      <Navbar />

      <Hero />

      <div className="absolute inset-x-0 top-0 z-[-4] items-center justify-center ">
      {/* <TracingBeam className="top-[40px] "  > */}
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
        <Image src={onePieceOFbackground} alt="BackGround" />
     {/* add more if need be */}

{/* 
      </TracingBeam> */}
      </div>
    </>
  );
};

export default Home;
