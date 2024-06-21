import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

const ExperienceCard: React.FC<Props> = ({ experience }: Props) => {
  return (
    <article className="flex flex-col drop-shadow-xl rounded-lg items-center space-y-4 flex-shrink-0 w-[320px] sm:w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-[#2C6975]/20 p-4 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Company Image for Mobile */}
          {experience?.companyImage && (
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:hidden w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
              src={urlFor(experience?.companyImage).url()}
              alt={`${experience?.company} logo`}
            />
          )}
          {/* Experience Details */}
          <div className="flex-grow">
            <h4 className="text-base sm:text-lg md:text-2xl font-light text-black">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-sm sm:text-md md:text-xl mt-1 text-[#68B2A0]">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2">
              {/* Technologies */}
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          {/* Company Image for Desktop */}
          {experience?.companyImage && (
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:block w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
              src={urlFor(experience?.companyImage).url()}
              alt={`${experience?.company} logo`}
            />
          )}
        </div>
        {/* Dates */}
        <p className="uppercase py-2 text-gray-500 text-xs sm:text-sm md:text-md">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      {/* Points */}
      <ul className="px-4 list-disc text-black space-y-2 text-justify ml-0 text-xs sm:text-sm md:text-base overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#68B2A0]/80">
        {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
    </article>
  );
};

export default ExperienceCard;
