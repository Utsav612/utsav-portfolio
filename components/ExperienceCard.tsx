"use client";
import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col drop-shadow-xl rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-[#2C6975]/20 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <div className="flex justify-between items-center space-x-4">
          <div>
            <h4 className="text-xl md:text-2xl font-light text-black">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-3xl mt-1 text-[#68B2A0]">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-28 h-28 md:w-28 md:h-28 rounded-full object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>

        <p className="text-sm md:text-lg uppercase py-5 text-gray-500">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>

      <ul className="list-disc space-y-4 text-lg ml-5 md:text-lg pl-5 h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#68B2A0]/80">
        {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
    </article>
  );
}
