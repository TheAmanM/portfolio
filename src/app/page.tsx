import Image from "next/image";
import Navbar from "./components/navbar";

import heroImage from "@/assets/hero.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-svh w-svw flex flex-col items-start justify-center px-4 gap-8">
        <div className="flex items-center">
          <Image src={heroImage} alt="Hero" className="size-12" />
          <div className="bg-primary size-4 rounded-full flex items-center justify-center ml-4">
            <div className="bg-white size-2 rounded-full" />
          </div>
          <p className="uppercase font-bold text-white/50 tracking-wider ml-1">
            Available for work
          </p>
        </div>
        <h1 className="font-semibold text-[1.6rem] leading-[120%]">
          <span className="text-primary">Aman Meherally</span> is a lorem ipsum
          dolor sit amet, consectetur adipiscing elit, morbi vestibulum.
        </h1>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-primary px-8 py-3 rounded-lg font-semibold text-md">
            Contact Me
          </button>
          <button className="bg-white/15 backdrop-blur-sm border-1 border-white/18 px-8 py-3 rounded-lg font-semibold text-md">
            View Projects
          </button>
        </div>
      </main>
    </>
  );
}
