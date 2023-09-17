"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a highschool diploma in{" "}
        <span className="font-medium">Economics</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">After that</span> I slowly started to try myself in back-end activities with Next.js to <span className="underline">get</span> a
        feeling of finally figuring out solutions to multiple problems. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Tailwindcss and MongoDB
        </span>
        . I am also familiar with TypeScript and I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
