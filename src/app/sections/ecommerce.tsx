import { cn } from "@sglara/cn";
import { Source_Serif_4 } from "next/font/google";
import { Button } from "../components/button";

import Image from "next/image";
import heroImage from "@/assets/ecommerce/hero.png";
import floorImage from "@/assets/ecommerce/floor.png";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
});

export default function ECommerce() {
  return (
    <section className={cn(sourceSerif4.className, "bg-[#FFF8EA]")}>
      <div className="flex flex-col lg:flex-row mx-8 h-[80svh]">
        <div className="lg:grow shrink basis-0 py-6 px-8 lg:px-12 xl:px-20 text-black max-lg:text-center lg:h-fit lg:my-auto">
          <h1
            className="font-light text-4xl md:text-6xl lg:font-normal lg:text-7xl"
            style={{
              fontOpticalSizing: "none",
              fontVariationSettings: '"opsz" 60',
            }}
          >
            Because your walls deserve{" "}
            <span className="text-green-900 font-semibold">better</span>.
          </h1>
          <p className="text-base md:text-xl text-black/60 font-light mt-4 md:mt-6 lg:text-2xl lg:mt-8">
            It’s not just decor—it’s the difference between a house and a home.
          </p>
          <p className="text-base md:text-xl text-black/60 font-light mt-2 lg:text-2xl">
            Start with one corner. See how it changes everything.
          </p>

          <Button className="bg-green-900 rounded-full text-[#FFF8EA] mt-6 md:mt-8 py-6 md:text-xl lg:mt-8">
            Shop now
          </Button>
        </div>
        <div className="grow shrink basis-0 relative">
          <Image
            src={heroImage}
            alt="Hero image"
            fill
            className="object-contain object-bottom lg:py-8"
          />
        </div>
      </div>
      <Image
        src={floorImage}
        alt="Hero image"
        // className="-mt-[15vw] lg:-mt-[6vw]"
        className="-mt-16 lg:-mt-28 xl:-mt-32"
      />
    </section>
  );
}
