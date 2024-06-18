"use client";

import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircle from "./BackgroundCircle";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey!! I am ${pageInfo?.name || "..."}`,
      "<I am a Software Developer 👨‍💻/>",
      "I like Traveling ✈️ and Cooking 🍳",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  if (!pageInfo) {
    return null; // or a loader/spinner component
  }

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      {pageInfo.heroImage && (
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(pageInfo.heroImage).url()}
          alt={`${pageInfo.name}'s picture`}
        />
      )}

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          {pageInfo.role}
        </h2>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="text-m pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link
            href="./Utsav_Frontend_WebDeveloper_.NetDeveloper_Resume.pdf"
            target="_blank"
          >
            <button className="heroButton">Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
