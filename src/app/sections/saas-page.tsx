"use client";

import { cn } from "@sglara/cn";
import { motion } from "framer-motion";
import { Sour_Gummy, Lato } from "next/font/google";
import Underline from "./components/underline";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "500",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function SaasPage() {
  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-background-ecommerce">
      <motion.div
        initial={{
          width: "4rem",
          height: "4rem",
          filter: "blur(24rem)",
          borderRadius: "100%",
        }}
        whileInView={{
          width: "100svw",
          height: "100svh",
          borderRadius: ["100%", "0%", "0%"],

          filter: ["blur(24rem)", "blur(24rem)", "blur(0px)"],
        }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",

          filter: {
            times: [0, 0.2, 1],
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="bg-white absolute z-1"
      />
      <div className="z-1 flex flex-col items-center text-center">
        <h1
          className={cn(
            "font-bold text-black text-3xl",
            sourGummy.className,
            "w-fit"
          )}
        >
          Sketch from napkin to an
        </h1>
        <div className={cn("w-fit", "relative")}>
          <h1
            className={cn("font-bold text-black text-3xl", sourGummy.className)}
          >
            interactive prototype.
          </h1>
          <Underline className="absolute left-0 -bottom-2 w-36" />
        </div>
        <p className="text-gray-600 text-sm mt-4">
          Ditch the scattered notes. Capture, refine, and present your ideas in
          a single, fluid workspace.
        </p>
      </div>
    </section>
  );
}
