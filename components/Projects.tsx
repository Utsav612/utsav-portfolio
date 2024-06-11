"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen"
          >
            <img
              className="h-80 w-auto object-contain animatedImg"
              src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
              alt=""
            />

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length} : {""}
                </span>
                Key logger (Safe Spy)
              </h4>

              <p className="text-lg text-center md:text-left">
                Our main objective here is to develop a Safe Spy that can
                effectively monitor any computer or mobile device, record the
                keystrokes made on it, and discreetly send this recorded data to
                the user via email. Additionally, we are also focusing on the
                capability to capture screenshots taken by the devices user,
                providing comprehensive monitoring functionality.
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
