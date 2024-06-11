"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
        src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web Developer</h4>
        <p className="font-bold text-2xl mt-1">Saurabh Web Solution</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
            alt="Experience"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
            alt="Experience"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
            alt="Experience"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started Work Nov 2018 - Ended Jun 2022
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point Summary point Summary point</li>
          <li>Summary Summary point Summary point</li>
          <li>Summary Summary point </li>
          <li>Summary Summary point Summary point</li>
          <li>Summary Summary point Summary point</li>
        </ul>
      </div>
    </article>
  );
}
