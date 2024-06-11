"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hey!! The Name's Utsav Patel", "<I am a Software Developer />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">ABOUT</button>
          </a>
          <a href="#experience">
            <button className="heroButton">EXPERIENCE</button>
          </a>
          <a href="#skills">
            <button className="heroButton">SKILLS</button>
          </a>
          <a href="#project">
            <button className="heroButton">PROJECT</button>
          </a>
        </div>
      </div>
    </div>
  );
}
