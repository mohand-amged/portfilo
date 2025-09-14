import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FiGithub } from "react-icons/fi";
import CustomButton from "./ui/CustomButton";
import { FaCode } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="py-20 lg:pb-20 lg:pt-28 flex items-center">
        {/* Spotlight effects*/}
        <div className="z-5 absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex">
            <Spotlight
              className="-left-10 md:-left-20 -top-10 md:-top-20 h-[100vh] md:h-[120vh] w-[80vw] md:w-[60vw]"
              fill="url(#left-spotlight-gradient)"
            />
            <Spotlight
              className="-right-10 md:-right-20 -top-10 md:-top-20 h-[100vh] md:h-[120vh] w-[80vw] md:w-[60vw]"
              fill="url(#right-spotlight-gradient)"
            />
          </div>

          {/* Define the SVG gradients for the spotlights */}
          <svg width="0" height="0" className="absolute">
            <defs>
              {/* Right spotlight gradient (purple-pink-blue) - enhanced */}
              <linearGradient
                id="right-spotlight-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />{" "}
                <stop offset="40%" stopColor="#d946ef" stopOpacity="0.7" />{" "}
                <stop offset="70%" stopColor="#818cf8" stopOpacity="0.6" />{" "}
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />{" "}
              </linearGradient>

              {/* Left spotlight gradient (blue-teal-green) - enhanced */}
              <linearGradient
                id="left-spotlight-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />{" "}
                <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.8" />{" "}
                <stop offset="60%" stopColor="#15bdb0" stopOpacity="0.7" />{" "}
                <stop offset="100%" stopColor="#00c664" stopOpacity="0.9" />{" "}
              </linearGradient>

              <filter
                id="spotlight-blur"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Main content container */}
        <div className="container mx-auto px-4 md:px-2 z-20">
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="font-pixel text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                MODERN
              </span>
              <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-blue-400 via-green-500 to-yellow-300 bg-clip-text text-transparent">
                DEVELOPER
              </span>
            </h1>
            <TextGenerateEffect
              words="Hi, I'm Mohand, a passionate developer with a love for creating innovative solutions. Let's build something amazing together!"
              className="font-secondary text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto my-6 sm:my-8"
            />

            <div className="flex flex-col items-center gap-3 w-full">
              {/* First row with two buttons */}
              <div className="flex flex-row gap-3 justify-center items-center w-full">
                {/* My Work Button */}
                <a href="#myWork" className="flex-1 max-w-[200px]">
                  <CustomButton
                    title={"See My Work"}
                    position="left"
                    icon={<FaCode />}
                  />
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/mohand-amged"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-[200px]"
                >
                  <CustomButton
                    title={"GitHub"}
                    position="left"
                    icon={<FiGithub />}
                    version="secondary"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;