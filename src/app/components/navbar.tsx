"use client";

import React, { useState } from "react";
import { MdOutlineMenu as Menu, MdOutlineClose as Close } from "react-icons/md";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@sglara/cn";

const NAV_LINKS = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleNav = () => {
    setOpenNav((state) => !state);
  };

  return (
    <nav className="fixed w-full lg:px-24 z-999">
      <div className="flex items-center justify-between bg-white/15 backdrop-blur-sm border-b-1 border-white/18 px-4 py-3 lg:max-w-[94rem] mx-auto lg:mt-4 lg:rounded-md lg:border-1">
        <Link href={"/"}>
          {" "}
          <div className="bg-blue-300 h-10 w-24" />
        </Link>
        <Menu className="size-6 lg:hidden" onClick={toggleNav} />
        <ul
          className={cn(
            "lg:gap-12 flex max-lg:flex-col max-lg:h-screen max-lg:fixed max-lg:bg-primary/50 backdrop-blur-xs max-lg:inset-y-0 max-lg:right-0 max-lg:w-screen max-lg:z-50 transition-all duration-750 max-lg:flex max-lg:items-start max-lg:justify-center text-left",
            { "max-lg:translate-y-full": !openNav }
          )}
        >
          {NAV_LINKS.map((link, index) => {
            return (
              <li
                key={link.href}
                className={cn("w-full", { "max-lg:mt-8": index !== 0 })}
              >
                <a
                  href={link.href}
                  className="flex items-end max-lg:pl-[calc((100vw-250px)/2)]"
                >
                  <p className="max-lg:inline-block mb-0.5 max-lg:mr-6 hidden font-bold text-white/40">
                    0{index + 1}
                  </p>
                  <span className="max-lg:font-bold max-lg:text-4xl max-lg:uppercase max-lg:opacity-75 max-lg:tracking-wide">
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
          <Button
            variant={"ghost"}
            className="lg:hidden mx-auto mt-12 px-12"
            onClick={toggleNav}
            size={"lg"}
          >
            Close
          </Button>
        </ul>

        <Button
          variant={"primary"}
          size={"md"}
          className="hidden lg:block"
          href="#contact"
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
}
