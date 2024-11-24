/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS here if it's not imported globally
import Link from "next/link";
import Image from "next/image";
import UPC_logo_Trans from "../public/png/UPC_logo_full_Trans.png";

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Set default duration for animations
      once: false, // Ensure animations can repeat when scrolling up and down
      mirror: true, // Allow animations to trigger again when scrolling up
    });
  }, []);

  //  AOS (Animate On Scroll) works by detecting when elements come into view, and for it to trigger, there must be enough content (or height) in the page for scrolling to occur. AOS relies on the element's position relative to the viewport (its Y value) to decide when to animate.
  const links = [
    {
      name: "About Us",
      link: "#aboutUs",
      onClick: null,
    },
    { name: "Events  ", link: "#events", onClick: null },
    { name: "Open Source", link: "#openSource", onClick: null },

    { name: "sponsors", link: "#sponsors", onClick: null },
    {
      name: "Contact",
      link: "",

      speicals: true,
    },
  ];

  return (
    <>
      <div className="w-100  h-100 fixed bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
        BreakPoint
      </div>
      <div
        // Animation for scrolling up
       className=" hidden md:flex fixed mt-[10px] flex w-full items-center justify-center px-[10px]"

      >
        <div
          className=" h-[65px] w-full rounded-xl  border-[1.5px] border-[#666666] bg-[#18181C] duration-300 ease-in hover:h-[75px] 
          hover:ease-out  md:w-[100%]  lg:w-[85%] hover:lg:w-[55%] xl:w-[65%]  "
        >
          <div className="flex size-full items-center justify-center gap-[10px] px-[35px]     ">
            <Image
              src={UPC_logo_Trans}
              alt="Logo"
              width={120}
              height={120}
              className=" "
            />

            <div className="flex size-full items-center justify-end gap-[8px] text-nowrap   text-white duration-300  ease-in hover:ease-out ">
              {links.map(({ name, link, speicals, onClick }, index) => (
                <div key={index}>
                  <div className=" rounded-xl p-[10px] text-sm duration-300 ease-in hover:bg-black ">
                    <Link href={link} />

                    {name}
                  </div>
                </div>
              ))}

         
                <div className=" rounded-xl bg-[#5DE3E8] p-[10px] text-sm duration-300 ease-in hover:bg-black ">
                  <Link href={""} />
                  Join Us
                </div>
      

       
                <div className=" rounded-xl bg-[#0451EA] p-[10px] text-sm duration-300 ease-in hover:bg-black ">
                  <Link href={""} />
                  Login
                </div>
      
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
