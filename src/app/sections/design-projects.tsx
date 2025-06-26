"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import React from "react";

// The larger card for desktop
function ProjectSummaryCard({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="mt-2 text-neutral-600">{summary}</p>
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

function ProjectSection({
  project,
}: {
  project: { id: number; title: string; summary: string; longContent: string };
}) {
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
          <ProjectSummaryCard title={project.title} summary={project.summary} />
          {/* Optional progress bar for the desktop card */}
          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-green-900/20">
            <motion.div
              className="h-full rounded-full bg-green-900"
              style={{ width: desktopProgressBarWidth }}
            />
          </div>
        </div>

        {/* --- Right Column (Main Content for ALL screen sizes) --- */}
        <div ref={contentRef} className="w-full lg:w-2/3">
          {/* Mobile Header is placed here so it sticks relative to its parent section */}
          <MobileStickyHeader
            title={project.title}
            progress={scrollYProgress}
          />
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-black">
              Full Project Details
            </h4>
            <p className="mt-4 text-neutral-800">{project.longContent}</p>
            <img
              src="https://via.placeholder.com/600x400?text=Project+Image+1"
              alt="placeholder"
              className="my-6 h-auto w-full rounded-lg"
            />
            <p className="text-neutral-800">{project.longContent}</p>
            <img
              src="https://via.placeholder.com/600x300?text=Project+Image+2"
              alt="placeholder"
              className="my-6 h-auto w-full rounded-lg"
            />
            <p className="text-neutral-800">{project.longContent}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function PortfolioPage() {
  // ... (No changes to PortfolioPage or the projects array)
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      summary: "A summary of the first amazing project.",
      longContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Project Beta",
      summary: "The second project was even better.",
      longContent:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.",
    },
    {
      id: 3,
      title: "Project Gamma",
      summary: "This one changed the world.",
      longContent:
        "Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis egestas. In post, a, commodo porttitor, a, faucibus, a, dolor. Ut in, let. Quisque a, dolor. Suspendisse eu, magna. In post, a, dolor.",
    },
  ];

  return (
    <div className="bg-background-ecommerce text-neutral-800">
      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
}
