"use client";
import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
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

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2C6975]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=" h-28 xl:h-80 md:h-72 object-contain"
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#2C6975]/50">
                  Case Study {i + 1} of {projects.length} :
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies &&
                  project.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-12 w-12 rounded-full object-cover"
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
              </div>

              <p className="text-m md:text-lg lg:text-xl text-justify ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-[#2C6975]/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
