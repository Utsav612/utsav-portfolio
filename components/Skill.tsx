"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
