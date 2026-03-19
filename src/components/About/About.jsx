import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile from "./Profile";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-10 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Gangadhara Reddy Yaparla
          </h2>
          {/* Typing effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
            <span className="text-white">
              I am a&nbsp;
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "UI Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="text-primary"
              />
            </span>
          </h3>
          {/* Into about me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Frontend Developer with experience in building scalable,
            high-performance web applications using React and TypeScript. Strong
            in component-driven architecture, performance optimization, and
            delivering reliable production-ready applications with a focus on
            quality, usability, and maintainability.
          </p>
          {/* Resume button */}
          <a
            href="/Gangadhara_Reddy_Yaparla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default About;
