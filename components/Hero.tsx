"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";

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
Aos.init();
const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center flex-wrap relative z-10  mx-auto mt-[150px] w-full   max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
          data-aos="fade-up"
          className=" animate__animated animate__zoomInDown drop-shadow-lg drop   bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Learn
        </h1>
        <h1
          // style={{filter:"drop-shadow(0 0 5px #D4D4D4)"}}
          data-aos="fade-up"
          className=" animate__animated animate__zoomIn animate__delay-1s    bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Collaborate
        </h1>
        <h1
          //   style={{ filter: "drop-shadow(0 0 5px #62E2E9)" }}
          data-aos=" fade-up"
          className=" animate__animated animate__zoomInUp 
          animate__delay-1s   bg-gradient-to-b from-neutral-50 to-[#62E2E9]  bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
        >
          Grow
        </h1>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Hero;
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  
];
