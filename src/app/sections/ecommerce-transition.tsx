"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function VerticalBarWipe() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ["start center", "end center"],
  });

  const barCount = 6;

  const barColors = Array(barCount).fill("#f5f0e1");

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

      <section className="h-[50vh] flex flex-col items-center justify-center bg-transparent absolute top-0 left-0 right-0">
        <p className="uppercase font-black tracking-wider text-white/40 text-2xl mb-2">
          Guess what
        </p>
        <h1 className="text-5xl font-bold text-white">
          But wait, there's more.
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

                backgroundColor: color,
              }}
              className="w-1/6 h-full origin-bottom"
            />
          ))}
        </div>

        {/* Overlay text */}

        <motion.div
          style={{ opacity: textOpacity, scale: textScale }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center z-30 text-center"
        >
          <h1 className="text-5xl font-bold text-black">
            My design philosophy
          </h1>

          <h1 className="text-5xl font-bold text-black">
            is a little <span className="text-green-900">different</span>.
          </h1>
        </motion.div>
      </section>
    </div>
  );
}
