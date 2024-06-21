import { GetStaticProps } from "next";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

import { Experience, PageInfo, Skill, Project, Social } from "../typings";

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  if (!pageInfo) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="bg-[#F8F8F8] text-black h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#68B2A0]/80">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
        <title>{"Utsav Patel Portfolio"}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
          <div className="h-10 w-10 bg-[#2C6975]/80 rounded-full flex items-center justify-center">
            <HomeIcon className="h-7 w-7 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo = await fetchPageInfo();
    const experiences = await fetchExperiences();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    const socials = await fetchSocials();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        pageInfo: null,
        experiences: [],
        skills: [],
        projects: [],
        socials: [],
      },
    };
  }
};
