import React from "react";
import { MdOutlineMenu as Menu } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between px-4 py-3 bg-white/15 backdrop-blur-sm border-b-1 border-white/18">
      <div className="bg-blue-300 h-10 w-24" />
      <Menu className="size-6" />
    </nav>
  );
}
