"use client"
import React, { useEffect } from 'react'

import Aos from "aos";

const Navbar = () => {

    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: "ease-in-out",
          mirror: true,
        }); // Initialize AOS with desired options
      }, []);
    
  return (
    <div         data-aos="fade-up"
     className='text-3xl text-white'>Navbar</div>
  )
}

export default Navbar