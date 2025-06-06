import React from "react";
import { MdOutlineMenu as Menu } from "react-icons/md";
import { Button } from "./button";
import Link from "next/link";

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
  return (
    <nav className="fixed w-full lg:px-24">
      <div className="flex items-center justify-between bg-white/15 backdrop-blur-sm border-b-1 border-white/18 px-4 py-3 lg:max-w-[94rem] mx-auto lg:mt-4 lg:rounded-md lg:border-1">
        <Link href={"/"}>
          {" "}
          <div className="bg-blue-300 h-10 w-24" />
        </Link>
        <Menu className="size-6 lg:hidden" />
        <ul className="gap-12 hidden lg:flex">
          {NAV_LINKS.map((link) => {
            return (
              <a href={link.href} key={link.href}>
                <li>{link.name}</li>
              </a>
            );
          })}
        </ul>
        <Button
          variant={"primary"}
          size={"md"}
          hidden
          className="hidden lg:block"
          href="#contact"
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
}
