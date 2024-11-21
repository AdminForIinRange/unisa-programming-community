"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Navbar = () => {

    Aos.init();


  return (
    <div
  data-aos="fade-up"
      className="h-full w-full flex items-center justify-center mt-[330]"
    >
      <div 
  className="text-white text-7xl">
        Navbar
      </div>


    </div>

    
  );
};



export default Navbar;
