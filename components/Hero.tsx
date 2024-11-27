"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import Aos from "aos";
import "aos/dist/aos.css";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const data = [
  {
    category: "Events",
    title: "Join Our Coding Hackathon!",
    src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    category: "Workshops",
    title: "Learn Web Development Basics.",
    src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
  },
  {
    category: "Community",
    title: "Meet Fellow Programming Enthusiasts.",
    src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    category: "Projects",
    title: "Showcase Your Projects and Ideas.",
    src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    category: "Competitions",
    title: "Compete in Programming Challenges.",
    src: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg",
  },
  {
    category: "Careers",
    title: "Explore Internships and Job Opportunities.",
    src: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
  },
];
const Hero = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className=" relative flex flex-col items-center  justify-center   ">
        <div className=" z-10 mx-auto lg:mt-[150px] mt-0  flex w-full  flex-row  flex-wrap items-center justify-center  px-[50px] lg:px-[100px]  md:pt-0">
          <h1
            //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
            data-aos="fade-up"
            className=" animate__animated animate__zoomInDown drop bg-gradient-to-b   from-neutral-50 to-neutral-400 bg-clip-text text-center  font-bold text-transparent drop-shadow-lg  2xl:text-9xl lg:text-8xl md:text-7xl sm:text-7xl text-5xl"
          >
            Learn,{" "}
            <span
              data-aos="fade-up"
              className=" animate__animated animate__zoomInDown drop bg-gradient-to-b   from-neutral-50 to-neutral-400 bg-clip-text text-center ont-bold text-transparent drop-shadow-lg      2xl:text-9xl lg:text-8xl md:text-7xl sm:text-7xl text-5xl"
            >
              {" "}
              Improve
            </span>
          </h1>

          <h1
            data-aos=" fade-up"
            className=" animate__animated animate__zoomInUp 
          animate__delay-1s    bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-transparent  2xl:text-9xl  lg:text-8xl md:text-7xl sm:text-7xl text-5xl"
          >
            Collaborate
          </h1>
        </div>
      </div>

      <div
        data-aos-delay="2000"
        className=" 
      
            mt-[20px]  lg:mt-[50px]  md:mt-[100px] sm:mt-[100px]  size-full  "
      >
        <Carousel items={cards} />
      </div>
    </>
  );
};

export default Hero;
