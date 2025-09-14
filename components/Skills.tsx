"use client";

import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { FaReact, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" size={24} />,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-500" size={24} />,
    description: "Styling and designing modern web interfaces.",
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500" size={24} />,
    description: "The foundation of all web development.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={24} />,
    description: "The language of the web for interactive sites.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={24} />,
    description: "Strongly typed JavaScript for better code quality.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400" size={24} />,
    description: "Building interactive user interfaces.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" size={24} />,
    description: "State management for complex applications.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" size={24} />,
    description: "Full-stack React framework for production.",
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-500" size={24} />,
    description: "General-purpose programming language.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600" size={24} />,
    description: "Version control system for collaboration.",
  },
  {
    name: "SQL",
    icon: <div className="text-red-500 text-xl font-bold">SQL</div>,
    description: "Standard language for relational databases.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="lg:grid lg:grid-cols-2 items-center lg:gap-36 max-w-5xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <SectionTitle
            title={
              <>
                <span className="inline sm:hidden">Skills & Techn.</span>
                <span className="hidden sm:inline md:hidden">
                  Skills & Techn.
                </span>
                <span className="hidden md:inline">Skills & Technologies</span>
              </>
            }
            subtitle="Tools are extensions of the mind, mastery is the art of the soul."
          />
        </div>
        <div className="mx-auto w-full max-w-7xl h-[400px] lg:h-[600px] mt-8 lg:mt-0 relative">
          {/* Scrolling container with fade effect */}
          <div className="h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              <SkillColumn skills={[...skills, ...skills]} />
              <SkillColumn
                skills={[...skills, ...skills].reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillColumn = ({
  skills,
  className = "",
  reverse = false,
}: {
  skills: Skill[];
  className?: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-4 h-full ${className} ${
        reverse ? "animate-scroll-reverse" : "animate-scroll"
      }`}
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex-shrink-0">{skill.icon}</div>
          <div>
            <h3 className="font-medium text-white">{skill.name}</h3>
            <p className="text-sm text-white/60">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
