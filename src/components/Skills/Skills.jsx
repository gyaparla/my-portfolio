import React from "react";
import { SkillsInfo } from "../../constants";
import { Title } from "../Utilities";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <Title name={"SKILLS"} description={"A collection of skills"} />
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => {
          return (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadpw-[0_0_20px_1px_rgba(130,69,236,0.31)]"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>
              {/* Skill items --> 3 items per row on large screens */}
              <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center flex-wrap space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
