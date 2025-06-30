"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import React from "react";

type Project = {
  thumbnail: any;
  title: string;
  summary: string[];
  path?: string;
  content: any;
};

const projects: Project[] = [
  {
    thumbnail: "https://placehold.co/600x400/png?text=Hello+World",
    title: "PaperPrep",
    summary: [
      "An academic resource platform designed to streamline exam preparation for students by providing centralized access to past papers. It offers a searchable database of exams, categorized by subject and year, allowing for targeted and efficient revision.",

      "As a proof-of-concept design, PaperPrep makes vital study materials readily available, helping students to focus more on studying and less on searching.",
    ],
    content: "https://placehold.co/600x1800/png",
  },
  {
    thumbnail: "https://placehold.co/600x400/png?text=Hello+World+2",
    title: "QuickFlow",
    summary: [
      "An interactive flowchart editor designed to enhance accessibility for beginners learning programming by visualizing software development concepts. It features an intuitive drag-and-drop interface, allowing students to construct program logic and understand control flow without the initial complexity of code syntax.",
      "Developed using React and Firebase, I launched a beta version to gather critical user insights, which directly informed the refinement of the tool for an improved student learning experience.",
    ],
    content: "https://placehold.co/600x1800/png",
  },
];

// The larger card for desktop
function ProjectSummaryCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
      <h3 className="text-2xl font-bold text-black">{project.title}</h3>
      <p className="mt-2 text-neutral-600">{project.summary}</p>
    </div>
  );
}

// The new, compact sticky header for mobile
function MobileStickyHeader({
  title,
  progress,
}: {
  title: string;
  progress: MotionValue<number>;
}) {
  const progressBarWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="sticky top-0 z-10 bg-white/80 p-4 shadow-sm backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-black">{title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full">
        <motion.div
          className="h-full bg-green-900"
          style={{ width: progressBarWidth }}
        />
      </div>
    </div>
  );
}

function ProjectSection({ project }: { project: Project }) {
  // IMPORTANT: The ref is now on the right-hand (scrolling) column.
  // This ensures our scroll progress is always tied to the long content.
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    // Start when top of content hits the top of viewport
    // End when bottom of content hits the bottom of viewport
    // This gives a full 0-1 progress for the entire content block.
    offset: ["start start", "end start"],
  });

  // Re-map scrollYProgress for the desktop card's progress bar if you want one
  const desktopProgressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    // Padding is now only vertical on the section
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {/* 
        This is the main layout wrapper.
        - Mobile-first: `flex-col`
        - Desktop: `lg:flex-row`
        - The `relative` is crucial for the `lg:sticky` element inside.
      */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* --- Left Column (Desktop Sticky Card) --- */}
        <div className="hidden w-full lg:sticky top-[100px] lg:block lg:w-1/3 self-start">
          <ProjectSummaryCard project={project} />
          {/* Optional progress bar for the desktop card */}
          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-green-900/20">
            <motion.div
              className="h-full rounded-full bg-green-900"
              style={{ width: desktopProgressBarWidth }}
            />
          </div>
        </div>

        {/* --- Right Column (Main Content for ALL screen sizes) --- */}
        <div ref={contentRef} className="w-full lg:w-2/3 relative aspect-auto">
          {/* Mobile Header is placed here so it sticks relative to its parent section */}
          <MobileStickyHeader
            title={project.title}
            progress={scrollYProgress}
          />
          {/* <Image src={project.content} alt={project.content} fill /> */}
          <img src={project.content} alt={project.title} />
        </div>
      </div>
    </motion.section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-background-ecommerce text-neutral-800">
      {projects.map((project, id: number) => (
        <ProjectSection key={id} project={project} />
      ))}
    </div>
  );
}
