import Image from "next/image";
import Navbar from "./components/navbar";

import heroImage from "@/assets/hero.png";
import { Button } from "./components/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-svh w-svw flex flex-col items-start justify-center px-4 lg:px-12 gap-8 lg:gap-12 max-w-[100rem] mx-auto">
        <div className="flex items-center">
          <Image src={heroImage} alt="Hero" className="size-12" />
          <div className="bg-primary size-4 rounded-full flex items-center justify-center ml-4">
            <div className="bg-white size-2 rounded-full" />
          </div>
          <p className="uppercase font-bold text-white/50 tracking-wider ml-1">
            Available for work
          </p>
        </div>
        <h1 className="font-semibold text-[1.6rem] md:text-4xl md:max-w-160 lg:text-5xl lg:font-bold xl:text-6xl xl:max-w-240 leading-[120%]">
          <span className="text-primary">Aman Meherally</span> is a lorem ipsum
          dolor sit amet, consectetur adipiscing elit, morbi vestibulum.
        </h1>
        <div className="flex items-center justify-center gap-4 [&>button]:px-8 [&>button]:py-3 [&>button]:rounded-lg [&>button]:font-semibold [&>button]:text-md [&>button]:md:text-lg">
          <Button variant={"primary"} size={"lg"} href="#contact">
            Contact Me
          </Button>
          <Button variant={"ghost"} size={"lg"} href="#projects">
            View Projects
          </Button>
        </div>
      </main>
    </>
  );
}
