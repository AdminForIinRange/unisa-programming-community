"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS here if it's not imported globally

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Set default duration for animations
      once: false, // Ensure animations can repeat when scrolling up and down
      mirror: true, // Allow animations to trigger again when scrolling up
    });
  }, []);

  //  AOS (Animate On Scroll) works by detecting when elements come into view, and for it to trigger, there must be enough content (or height) in the page for scrolling to occur. AOS relies on the element's position relative to the viewport (its Y value) to decide when to animate.

  return (
    <>
      <div className="fixed  w-100 h-100 bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
    BreakPoint
      </div>
      <div
        // Animation for scrolling up
        className="fixed  w-full  flex items-center justify-center mt-[10px] px-[10px] "
      >
        <div className=" bg-[#18181C] w-[100%] md:w-[70%]  lg:w-[50%] h-[65px] border-[#666666] border-[1.5px] rounded-xl hover:h-[75px] hover:md:w-[80%] hover:lg:w-[55%]   ease-in duration-300 hover:ease-out ease-in duration-300  ">
       
        </div>
      </div>
    </>
  );
};

export default Navbar;
