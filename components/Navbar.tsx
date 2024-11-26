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

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="w-100  h-100 2xl:bg-orange-500 fixed bg-red sm:bg-green md:bg-blue lg:bg-yellow-500 xl:bg-purple-500">
        BreakPoint
      </div>
      <div
        className={cn(
          "fixed   justify-center items-center top-5 inset-x-0 max-w-2xl mx-auto z-50   hidden md:flex transition ease-in-out delay-150 ",
          className,
        )}
      >
        <div className=" text-center ">
          <Menu setActive={setActive}>
            <div className="   rounded-xl   ">
              <MenuItem setActive={setActive} active={active} Textcolor={false} item="About us">
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
              <MenuItem setActive={setActive} active={active} Textcolor={false} item="Events">
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
              <MenuItem Textcolor={false}
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
              <MenuItem setActive={setActive} active={active} Textcolor={false} item="sponsors">
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
              <MenuItem setActive={setActive} active={active} Textcolor={false} item="contact">
                <div className="  grid grid-cols-2 gap-10 p-4 text-sm"></div>
              </MenuItem>
            </div>

            <div className="   rounded-xl ">
              {" "}
              <MenuItem setActive={setActive} active={active} Textcolor={false} item="Join Us">
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

            <div className="flex rounded-xl bg-white  ">
              <MenuItem setActive={setActive} active={active} Textcolor={true} item="Login">
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
