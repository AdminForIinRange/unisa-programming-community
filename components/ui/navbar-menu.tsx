"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  Textcolor,
}: {
  setActive: (item: string) => void;
  active: string | null;
  Textcolor: boolean ;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div  className=" flex items-center justify-center text-sm  text-red md:w-[full]  lg:w-[full] trans ">
      <div onMouseEnter={() => setActive(item)} className="relative ">
        <motion.p
          transition={{ duration: 0.3 }}
          className={` px-[20px] py-[10px] w-full text-center cursor-pointer text-black hover:opacity-90 ${Textcolor ? "dark:text-black" : "dark:text-white"} hover:dark:text-black hover:dark:bg-white rounded-full` }
        >
          {item}
        </motion.p>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && (
              <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 pt-4">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black "
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="h-full w-max p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="text-nowrap relative flex justify-center rounded-full md:space-x-[0px]  lg:space-x-[20px] border border-transparent bg-white md:px-5 lg:px-20 py-4 shadow-input dark:border-white/[0.2] dark:bg-black  "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200 "
    >
      {children}
    </Link>
  );
};
