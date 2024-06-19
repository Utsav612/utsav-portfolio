import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

const ExperienceCard: React.FC<Props> = ({ experience }: Props) => {
  return (
    <article className="flex flex-col drop-shadow-xl rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-[#2C6975]/20 p-10 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <div className="flex justify-between items-center space-x-4">
          {/* Experience Details */}
          <div>
            <h4 className="text-lg md:text-3xl font-light text-black ">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-2xl  mt-1 text-[#68B2A0]">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2">
              {/* Technologies */}
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
          {/* Company Image */}
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:h-22 md:h-22 md:w-22 w-28 h-28  rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center "
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        {/* Dates */}
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      {/* Points */}
      <ul className="lpx-0 md:px-10 list-disc text-black space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#68B2A0]/80">
        {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
    </article>
  );
};

export default ExperienceCard;
