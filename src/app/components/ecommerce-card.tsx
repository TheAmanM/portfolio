/* "use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MorphingCard() {
  const wrapperRef = useRef(null);

  // Track scroll progress relative to the wrapper that scrolls while card is sticky
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"], // when wrapper top hits top → 0, when wrapper bottom hits top → 1
  });

  // Animations during sticky phase
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgba(255,255,255,0)", "#FFF8EA"]
  );
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const fontSize = useTransform(scrollYProgress, [0, 1], ["1.5rem", "2.5rem"]);
  const textColor = useTransform(scrollYProgress, [0, 1], ["#FFF", "black"]);

  // Control blur and opacity of both layers
  const opacityA = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const blurA = useTransform(scrollYProgress, [0, 0.25], ["0px", "8rem"]);

  const opacityB = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const blurB = useTransform(scrollYProgress, [0.25, 0.5], ["8rem", "0px"]);

  return (
    <motion.section className="relative" style={{ backgroundColor }}>
      <div ref={wrapperRef} className="h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            className="bg-white w-full h-full m-20 flex items-center justify-center text-center rounded-xl shadow-xl"
            style={{
              opacity: cardOpacity,
              fontSize,
            }}
          >
            <div className="relative [&>*]:text-center w-max [&>*]:absolute [&>*]:inset-0">
              <motion.p
                className="absolute inset-0 font-sans"
                style={{ opacity: opacityA, filter: blurA, color: textColor }}
              >
                This is the message.
              </motion.p>
              <motion.p
                className="absolute inset-0 font-serif"
                style={{ opacity: opacityB, filter: blurB, color: textColor }}
              >
                This is the message.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
 */
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function EcommerceCard() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    // We want to set offset in a way such that the transitio starts when the sticky element starts being sticky and ends when it stops being sticky
    offset: ["start start", "end end"],
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFF8EA00", "#FFF8EA"]
  );
  const cardBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF1A", "#FFFFFF"]
  );

  const opacityA = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blurA = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const opacityB = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const blurB = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <motion.section
      ref={scrollRef}
      className="relative"
      style={{ backgroundColor: background }}
    >
      <div className="h-[200svh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            className="w-full h-[calc(100svh-4rem)] mx-20 flex items-center justify-center text-center rounded-xl"
            style={{ backgroundColor: cardBackground }}
          >
            <div className="relative [&>*]:text-center w-max [&>*]:absolute [&>*]:inset-0">
              <motion.p
                className={`absolute inset-0 font-sans blur-[${blurA.get()}rem]}`}
                style={{ opacity: opacityA }}
              >
                This is the message.
              </motion.p>
              <motion.p
                className="absolute inset-0 font-serif text-black"
                style={{ opacity: opacityB, filter: blurB }}
              >
                This is the message.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
