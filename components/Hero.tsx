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
Aos.init();
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
      <div className=" relative flex flex-col items-center  justify-center  px-[100px]  ">
        <div className=" z-10 mx-auto mt-[150px] flex w-full  flex-row  flex-wrap items-center justify-center   md:pt-0">
          <h1
            //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
            data-aos="fade-up"
            className=" animate__animated animate__zoomInDown drop bg-gradient-to-b   from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent drop-shadow-lg md:text-9xl"
          >
            Learn, <span className="mx-[10px]"> </span>
          </h1>
          <h1
            // style={{filter:"drop-shadow(0 0 5px #D4D4D4)"}}
            data-aos="fade-up"
            className=" animate__animated animate__zoomIn animate__delay-1s    bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
          >
            Improve <span className="mx-[10px]"> </span>
          </h1>
          <h1
            //   style={{ filter: "drop-shadow(0 0 5px #62E2E9)" }}
            data-aos=" fade-up"
            className=" animate__animated animate__zoomInUp 
          animate__delay-1s   bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
          >
            Collaborate
          </h1>
        </div>

        {/* 

          // style={{filter:"drop-shadow(0 0 5px #0752E9)"}} */}

        {/* <BentoGrid className="max-w-4xl mx-auto">
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
      </BentoGrid> */}
      </div>

      <div
        className=" 
        anime__animatedn animate__zoomIUp animate__delay-2s
            size-full rounded-lg py-20 "
      >
        <h2 className=" mx-auto max-w-7xl rounded-lg pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl"></h2>
        <Carousel items={cards} />
      </div>
    </>
  );
};

export default Hero;
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },

// ];

// <span className="  animate__animated animate__zoomInDown flex flex-row">
//         <h1
//           //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
//           data-aos="fade-up"
//           className="  drop-shadow-lg drop    bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
//         >
//           L
//         </h1>
//         <h1
//           //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
//           data-aos="fade-up"
//           data-aos-offset="100"
//           className="  drop-shadow-lg drop    bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
//         >
//           e
//         </h1>
//         <h1
//           //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
//           data-aos="fade-up"
//           data-aos-offset="200"
//           className="  drop-shadow-lg drop    bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
//         >
//           a
//         </h1>
//         <h1
//           //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
//           data-aos="fade-up"
//           data-aos-offset="300"
//           className="  drop-shadow-lg drop    bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
//         >
//           r
//         </h1>
//         <h1
//           //  style={{filter:"drop-shadow(0 0 5px #0752E9)"}}
//           data-aos="fade-up"
//           data-aos-offset="400"
//           className="  drop-shadow-lg drop    bg-gradient-to-b from-[#0752E9] backdrop-blur-xl to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-9xl"
//         >
//           n
//         </h1>

//         </span>
// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
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
    src: "https://images.pexels.com/photos/1181350/pexels-photo-1181350.jpeg",
  },
  {
    category: "Careers",
    title: "Explore Internships and Job Opportunities.",
    src: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg",
  },
];

