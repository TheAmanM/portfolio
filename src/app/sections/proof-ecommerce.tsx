import { cn } from "@sglara/cn";
import { Source_Serif_4 } from "next/font/google";
import React from "react";

import * as motion from "motion/react-client";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
});

export default function ProofEcommerce() {
  return (
    <section className={cn("bg-background-ecommerce", sourceSerif4.className)}>
      <div className="h-[80svh] max-w-[100rem] mx-auto px-4 lg:px-12 flex flex-col items-center justify-center text-center">
        {[
          "A portfolio is a product.",
          <>
            Most are just{" "}
            <span className="text-green-900 font-semibold">static</span>{" "}
            resumes.
          </>,
          <>
            <span className="block lg:inline-block">
              I don't just tell you I can adapt to
            </span>{" "}
            <span className="block lg:inline-block">
              your brand's aesthetic.
            </span>
          </>,
          <>
            I <span className="text-green-900 font-semibold">prove</span> it.
          </>,
        ].map((text, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
            className={cn(
              "text-2xl md:text-3xl lg:text-5xl font-light text-black",
              { "mb-[2ch]": index === 1 }
            )}
          >
            {text}
          </motion.h1>
        ))}
      </div>
    </section>
  );
}
