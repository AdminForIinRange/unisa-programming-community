"use client";

import React, { useEffect, useState } from "react";
import { FaDiscord, FaLinkedin, FaMoon, FaSun, FaBars } from "react-icons/fa";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css"; // 
import Link from "next/link";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
interface NavbarProps {
  setRent?: (value: boolean) => void;
  rent?: boolean;
}



const Navbar: React.FC<NavbarProps> = ({ setRent, rent }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [night, setNight] = useState(true);
  const [yValue, setYValue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setYValue(scrollY > 525);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000, // Set default duration for animations
      once: false, // Ensure animations can repeat when scrolling up and down
      mirror: true, // Allow animations to trigger again when scrolling up
    });
  }, []);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsTablet(mediaQuery.matches);

    window.addEventListener("resize", () => setIsTablet(mediaQuery.matches));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", () =>
        setIsTablet(mediaQuery.matches),
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "About Us", link: "#aboutUs" },
    { name: "Events", link: "#events" },
    { name: "Open Source", link: "#openSource" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Contact", link: "#", onClick: toggleModal },
    { name: "Join Us", link: "#", onClick: toggleModal },
    { name: "Login", link: "#", onClick: toggleModal },
  ];

  return (
    <>
      {isTablet ? (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 bg-white shadow-md z-50">
          <a href="/airbnb">
            <div className="w-12 h-12">
              <Image
                src={UPC_logo_Trans}
                alt="Logo"
                width={48}
                height={48}
              />
            </div>
          </a>
          <button className="bg-gray-200 rounded-md p-2">
            <FaBars size={18} />
          </button>
        </div>
      ) : (
        <div
          className={`fixed top-0 left-0 w-full flex justify-center transition-transform duration-500 ${
            yValue ? "translate-x-[0%]" : "xl:translate-x-[-25%] "
          }`}
        >
          <div className="flex items-center gap-8 bg-white backdrop-blur-md shadow-lg p-4 rounded-lg mt-6">
            <a href="/airbnb">
              <Image
                src={UPC_logo_Trans}
                alt="Logo"
                width={48}
                height={48}
              />
            </a>
            {links.map(({ name, link, onClick }, index) => (
              <button
                key={index}
                onClick={onClick}
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition"
              >
                <Link href={link}>{name}</Link>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-3/4 p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              Close
            </button>
            <iframe
              src="https://calendly.com/bhattaraianjesh123"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>
      )}

{/* 
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
      <div
        data-aos="fade-up"
        // Animation for scrolling up
        className="h-full w-full flex items-center justify-center mt-[130px]"
      >
        <div className="text-white text-7xl" data-aos="fade-up">
          test 3
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
      <div
        data-aos="fade-up"
        // Animation for scrolling up
        className="h-full w-full flex items-center justify-center mt-[130px]"
      >
        <div className="text-white text-7xl" data-aos="fade-up">
          test 3
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
      </div> */}
    </>
  );
};

export default Navbar;
