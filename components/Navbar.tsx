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
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="w-100  h-100 fixed bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
        BreakPoint
      </div>
      <div
        // Animation for scrolling up
       className=" fixed mt-[10px] flex hidden w-full items-center justify-center px-[10px] md:flex"

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