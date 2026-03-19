import React from "react";
import { education } from "../../constants"; // Import the education data
import { Title } from "../Utilities";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <Title
        name={"EDUCATION"}
        description={
          "My education has been a journey of learning and development. Here are the details of my academic background"
        }
      />

      {/* Education cards */}
      <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar scroll-smooth snap-x snap-mandatory">
        {education.map((item) => (
          <div
            key={item.school}
            className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] rounded-3xl bg-gray-900/60 border border-white/10 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-white text-center">
                {item.degree}
              </h3>

              <div className="text-center">
                <p className="text-sm text-gray-300">{item.school}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>

              <p className="text-sm text-gray-400 text-center mt-4 line-clamp-4">
                {item.desc}
              </p>

              <p className="text-sm text-gray-200 mt-4">
                <span className="font-semibold text-white">Grade:</span>{" "}
                {item.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
