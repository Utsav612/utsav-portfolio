"use client";

import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mt-24 md:mt-0 -mb-24 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-[300px] xl:h-[400px] rounded-full object-cover md:rounded-lg"
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className="space-y-5 md:space-y-10 px-4 md:px-10">
        <h4 className="text-lg md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#68B2A0]/50">little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-sm md:text-lg lg:text-lg text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
