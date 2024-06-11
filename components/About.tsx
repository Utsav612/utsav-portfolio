"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
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
        className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://media.npr.org/assets/img/2013/05/06/tonystark_wide-92e2d9abcce4413d58f728f2b5f126cef71afd97.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
          {""}
        </h4>
        <p className="text-base">
          As a Web Development Graduate from Conestoga College, I am passionate
          about creating cutting-edge web applications that deliver unparalleled
          performance and user experience. I have a Master degree in information
          technology and a Bachelor degree in computer science, demonstrating my
          solid academic background and foundation in various programming
          languages and frameworks. I have over three years of professional
          experience as a senior web developer at Saurabh Web Solution, where I
          spearheaded the development of a dynamic web application using C#,
          ASP.NET Core, React, and JavaScript. I leveraged my expertise in
          JavaScript, jQuery, HTML, CSS, UI/UX, AJAX, and React to enrich
          client-side functionality and create immersive user interfaces.
          Additionally, I designed and implemented RESTful APIs to facilitate
          seamless integration with external systems, enhancing interoperability
          and security.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
