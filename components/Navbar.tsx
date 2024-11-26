"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import UPC_logo_Trans from "../public/png/UPC_logo_Trans.png";
import Image from "next/image";
import ResponsiveBox from "./ResponsiveBox";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      {/* <div className="w-100  h-100 2xl:bg-orange-500 fixed bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
        BreakPoint
      </div> */}
      <div
        className={cn(
          "fixed   justify-center items-center top-5 inset-x-0 max-w-2xl mx-auto z-50   hidden md:flex transition ease-in-out delay-150 ",
          className,
        )}
      >
        <div className=" text-center ">
          <Menu setActive={setActive}>
            <div className="   rounded-xl   ">
              <MenuItem
                setActive={setActive}
                active={active}
                Textcolor={false}
                item="About us"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </div>

            <div className="   rounded-xl ">
              <MenuItem
                setActive={setActive}
                active={active}
                Textcolor={false}
                item="Events"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </div>
            <div className="   rounded-xl ">
              <MenuItem
                Textcolor={false}
                setActive={setActive}
                active={active}
                item="Open Source"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </div>

            <div className="   rounded-xl ">
              <MenuItem
                setActive={setActive}
                active={active}
                Textcolor={false}
                item="sponsors"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </div>
            <div className="   rounded-xl ">

            <MenuItem setActive={setActive} active={active} item="Contact" Textcolor={false}>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
            </div>

            <div className="   rounded-xl ">
              {" "}
              <MenuItem
                setActive={setActive}
                active={active}
                Textcolor={false}
                item="Join Us"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>{" "}
            </div>

            <div className="flex rounded-full bg-white  ">
              <MenuItem
                setActive={setActive}
                active={active}
                Textcolor={true}
                item="Login"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
}
