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

    

<button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>


<div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
   
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div>


      {/* <div className="w-100  h-100 fixed bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
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
      </div> */}
    </>
  );
};

export default Navbar;
