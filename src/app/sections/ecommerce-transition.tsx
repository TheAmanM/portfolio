"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Source_Serif_4 } from "next/font/google";
import { cn } from "@sglara/cn";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
});

export default function VerticalBarWipe() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ["start center", "end center"],
  });

  const barCount = 6;

  const barColors = Array(barCount).fill(0);

  // Bars rise from bottom when the text is near center to 3/4 up

  const barTransforms = Array(barCount)
    .fill(0)

    .map((_, i) =>
      useTransform(
        scrollYProgress,

        [0 + i * 0.05, 0.3 + i * 0.05], // adjusted to fit within visible scroll

        ["100%", "0%"]
      )
    );

  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  const textScale = useTransform(scrollYProgress, [0.35, 0.5], [0.95, 1]);

  return (
    <div
      ref={containerRef}
      className="relative bg-transparent text-white overflow-hidden"
    >
      {/* Section 1 — Initial text */}

      <section className="h-[50vh] flex flex-col items-center justify-center bg-transparent absolute top-0 left-0 right-0 text-center px-4">
        <p className="uppercase font-black tracking-wider text-white/40 text-lg lg:text-2xl mb-2 lg:mb-4">
          SURPRISE!
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Guess what? There's more.
        </h1>
      </section>

      {/* Section 2 — Bars transition */}

      <section className="h-screen relative">
        {/* Bars */}

        <div className="pointer-events-none absolute inset-0 z-20 flex">
          {barColors.map((color, i) => (
            <motion.div
              key={i}
              style={{
                y: barTransforms[i],

                backgroundColor: "var(--color-background-ecommerce)",
              }}
              className="w-1/6 h-full origin-bottom"
            />
          ))}
        </div>

        {/* Overlay text */}

        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            fontFeatureSettings: `"opsz" 60`,
          }}
          className={cn(
            "pointer-events-none absolute inset-0 flex flex-col items-center justify-center z-30 text-center",
            sourceSerif4.className
          )}
        >
          <h1 className="text-3xl lg:text-5xl font-medium text-black mb-[2ch]">
            You see...
          </h1>
          <h1 className="text-3xl lg:text-5xl font-medium text-black">
            My design philosophy
          </h1>

          <h1 className="text-3xl lg:text-5xl font-medium text-black">
            is a little <span className="text-green-900">different</span>.
          </h1>
        </motion.div>
      </section>
    </div>
  );
}
