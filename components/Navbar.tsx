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
      <div
        data-aos="fade-up"
        // Animation for scrolling up
        className="h-full w-full flex items-center justify-center mt-[130px]"
      >
        <div className="text-white text-7xl" data-aos="fade-up">
          test 1
        </div>
      </div>

      <div
        data-aos="fade-up"
        // Animation for scrolling up
        className="h-full w-full flex items-center justify-center mt-[130px]"
      >
        <div className="text-white text-7xl" data-aos="fade-up">
          test 2
        </div>
      </div>

      <div
        data-aos="fade-up"
        // Animation for scrolling up
        className="h-full w-full flex items-center justify-center mt-[130px]"
      >
        <div className="text-white text-7xl" data-aos="fade-up">
          test 3
        </div>
      </div>
    </>
  );
};

export default Navbar;
