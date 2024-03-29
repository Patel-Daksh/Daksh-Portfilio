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
        <span>Hey there, I'm Daksh Patel, a dynamic problem-solver with a knack for turning data into actionable insights and crafting innovative solutions in the world of technology. 
          With a Master's degree in Information Systems, 
          I thrive on the thrill of cracking complex puzzles and pushing the boundaries of what's possible. Whether it's predicting future trends through advanced analytics or architecting seamless software solutions, 
          I'm all about making an impact. My portfolio is a testament to my passion for diving deep into data, harnessing the power of Python, R, Java, and an arsenal of databases, to drive meaningful outcomes. Let's team up and tackle the next big challenge together!</span>
      </p>
    </motion.section>
  );
}
