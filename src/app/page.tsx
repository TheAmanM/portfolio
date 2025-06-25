import Image from "next/image";
import Navbar from "./components/navbar";

import heroImage from "@/assets/hero.png";
import { Button } from "./components/button";
import GridBackground from "./components/background";

import nextjsLogo from "@/assets/logos/nextjs.svg";
import tsLogo from "@/assets/logos/ts.svg";
import nodeLogo from "@/assets/logos/node.svg";
import pythonLogo from "@/assets/logos/python.svg";
import supabaseLogo from "@/assets/logos/supabase.svg";
import firebaseLogo from "@/assets/logos/firebase.svg";
import flaskLogo from "@/assets/logos/flask.svg";
import geminiLogo from "@/assets/logos/gemini.svg";
import electronLogo from "@/assets/logos/electron.svg";
import ECommerce from "./sections/ecommerce";
import EcommerceTransition from "./sections/ecommerce-transition";
import DevProjects from "./sections/dev-projects";
import ProofEcommerce from "./components/proof-ecommerce";

function LogoRow() {
  const logoImages = [
    nextjsLogo,
    tsLogo,
    nodeLogo,
    pythonLogo,
    supabaseLogo,
    firebaseLogo,
    flaskLogo,
    geminiLogo,
    electronLogo,
  ];
  const logos = (keyOffset: number) => (
    <div className="inline-block w-max animate-[slide-left_20s_linear_infinite] group-hover:[animation-play-state:paused]">
      {logoImages.map((logo, index) => {
        return (
          <Image
            key={index + keyOffset}
            className="mx-4 inline h-12 w-auto ml-20 align-bottom opacity-40"
            src={logo}
            alt="Logo"
          />
        );
      })}
    </div>
  );

  return (
    <>
      {logos(0)}
      {logos(logoImages.length)}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div>
        <GridBackground cellSize={60} />
        <Navbar />
        <main className="h-svh w-svw flex flex-col items-start justify-center px-4 lg:px-12 gap-8 lg:gap-12 max-w-[100rem] mx-auto">
          <div className="flex items-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQGCYJSBB6fgbw/profile-displayphoto-shrink_800_800/B4DZdJvXYkGkAc-/0/1749288843090?e=1755129600&v=beta&t=KyhdIIcTWR1mX13FT2h0Eog94RQyLb8Zkev4X4zCOhg"
              width={48}
              height={48}
              alt="Hero"
              className="rounded-full"
              // className="size-12"
            />
            <div className="bg-primary size-4 rounded-full flex items-center justify-center ml-4">
              <div className="bg-white size-2 rounded-full" />
            </div>
            <p className="uppercase font-bold text-white/50 tracking-wider ml-1">
              Available for work
            </p>
          </div>
          <h1 className="font-semibold text-[1.6rem] md:text-4xl md:max-w-160 lg:text-5xl lg:font-bold xl:text-6xl xl:max-w-240 leading-[120%]">
            <span className="text-primary">Aman Meherally</span> is a lorem
            ipsum dolor sit amet, consectetur adipiscing elit, morbi vestibulum.
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
        <section className="px-4 lg:px-12 max-w-[100rem] mx-auto translate-y-[-60%]">
          <h2 className="text-center font-bold text-white/50 uppercase tracking-widest text-lg">
            Tools I've worked with
          </h2>
          <div className="w-full group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <LogoRow />
          </div>
        </section>
        <DevProjects />
      </div>
      <EcommerceTransition />
      <ECommerce />
      <ProofEcommerce />
    </>
  );
}
