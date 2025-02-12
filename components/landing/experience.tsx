"use client";
import React from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";
import { WorkTimeline } from "./worktimeline";



export function Experience() {
  return (
    <div className="w-full mt-20 mb-5 bg-black">

<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-2xl md:text-5xl py-20 px-4 font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Crafting Digital Experiences: <br></br>
        <Highlight className=" text-2xl lg:text-4xl text-white ">
        My Professional Journey
        </Highlight>
      </motion.h1>
    <WorkTimeline/>
    </HeroHighlight>




    </div>
  );
}
