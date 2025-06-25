import { cn } from "@sglara/cn";
import React from "react";

export default function ProofEcommerce() {
  return (
    <section
      className={cn(
        "h-[100svh] max-w-[100rem] mx-auto px-4 lg:px-12",
        "flex flex-col items-center justify-center text-center bg-background-ecommerce"
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
    </section>
  );
}
