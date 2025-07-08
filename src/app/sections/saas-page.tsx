"use client";

import { Sour_Gummy, Lato } from "next/font/google";
import SaasUnderline from "@/assets/saas/underline.webp";
import heroImage from "@/assets/hero.png";
import Image, { StaticImageData } from "next/image";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "500",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TestimonialCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function SaasPage() {
  return (
    <section
      id="home"
      className={`relative bg-white overflow-hidden px-4 pb-20 pt-36 md:pt-24 xl:pb-25 ${lato.className}`}
    >
      {/* Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* The z-10 class ensures this content stays on top of the dot pattern */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        {/* Main Heading and Body Text */}
        <div className="relative mt-16 flex max-w-5xl flex-col text-center">
          {/* The headline is now split into two h1 tags to ensure they are on separate lines */}
          <h1
            className={`relative z-10 text-3xl font-bold text-black sm:text-3xl md:text-4xl lg:mb-5 lg:text-6xl ${sourGummy.className}`}
          >
            I've made <span className="text-foreground-saas">scalable</span>
          </h1>
          <h1
            className={`relative z-10 text-3xl font-bold text-black sm:text-3xl md:text-4xl lg:text-6xl -mt-4 ${sourGummy.className}`}
          >
            SaaS products too.
          </h1>

          <div className="mx-auto mt-8 max-w-xl">
            <p className="font-medium text-gray-500 lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          {/* The hero-underline div with inline styles applied */}
          <div
            className="md:top-[8%] lg:top-[15%]"
            style={{
              position: "absolute",
              backgroundImage: `url(${SaasUnderline.src})`,
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "50%",
              height: "70px",
              left: "auto",
              right: "-5%",
              zIndex: 1, // Ensure underline is above the text background but below the text itself
            }}
          ></div>
        </div>

        {/* View More Button */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-5">
            <a href="#testimonials">
              {" "}
              {/* Change this href to your testimonials section's ID */}
              <button
                aria-label="view more button"
                className="flex items-center rounded-full border-2 border-gray-700 px-8 py-3 font-bold text-gray-700 transition duration-300 hover:bg-gray-700 hover:text-white"
              >
                View More
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="relative mx-auto max-w-[120rem] px-4 md:px-8 xl:px-0 py-16 lg:py-24"
        style={{ position: "relative" }}
      >
        <div className="animate_top mx-auto text-center">
          <div className="mb-4 inline-block rounded-full bg-foreground-saas/10 px-5 py-2">
            <span className="text-sectiontitle font-semibold text-foreground-saas">
              Solution
            </span>
          </div>
          <h2 className="mx-auto mb-4 text-2xl font-bold text-black md:w-4/5 md:text-3xl xl:w-1/2 xl:text-6xl">
            One-stop platform - everything you need to{" "}
            <span className="text-glow text-primary">grow on social.</span>
          </h2>
          <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
            We give you everything you need to build a dedicated fanbase,
            nurture your audience, create leads, and grow your business.
          </p>
        </div>
        <div className="relative z-10 mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 w-full max-w-[80rem] mx-auto">
          <TestimonialCard
            title="Scheduling"
            description="Visually plan and schedule your content delivery with click, drag and
        drop and automation. It's as easy as that."
            image={heroImage.src}
          />
          <TestimonialCard
            title="Scheduling"
            description="Visually plan and schedule your content delivery with click, drag and
        drop and automation. It's as easy as that."
            image={heroImage.src}
          />
          <TestimonialCard
            title="Scheduling"
            description="Visually plan and schedule your content delivery with click, drag and
        drop and automation. It's as easy as that."
            image={heroImage.src}
          />
        </div>
        <div className="feature-blob"></div>
      </div>
    </section>
  );
}

export function TestimonialCard({
  title,
  description,
  image,
}: TestimonialCardProps) {
  return (
    <div
      // The font className is now applied dynamically from props
      className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-solid-3 transition-all hover:shadow-solid-4 md:p-8 ${lato.className}`}
    >
      <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
        {/*
          Using the Next.js Image component for automatic optimization:
          - Lazy loading by default
          - Serves modern formats like WebP
          - Resizes images to prevent layout shift
        */}
        <Image
          src={image}
          alt="Testimonial Avatar"
          width={64}
          height={64}
          className="rounded-full object-cover" // Added object-cover to prevent distortion
        />
      </div>

      {/*
        Responsive Typography:
        - Desktop (lg+): text-2xl
        - Tablet (md): text-xl
        - Mobile (base): text-lg
      */}
      <h3 className="mb-4 mt-6 text-lg font-bold text-black md:text-xl lg:text-2xl">
        {title}
      </h3>

      {/*
        Responsive Typography:
        - Desktop/Tablet (md+): text-lg
        - Mobile (base): text-base for better readability on small screens
      */}
      <p className="text-base text-gray-500 md:text-lg">{description}</p>
    </div>
  );
}
