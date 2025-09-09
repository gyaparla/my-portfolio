import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile from "./Profile";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Gangadhara Reddy Yaparla
          </h2>
          {/* Typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
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
            Front-End Developer with 4.4 years of experience in building
            scalable web and mobile apps using React.js, React Native, and
            Redux. Skilled in performance tuning, responsive UI development
            (React, React Native), CI/CD pipelines, and Agile (Scrum) workflows
            and modern front-end ecosystems.
          </p>
          {/* Resume button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
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
