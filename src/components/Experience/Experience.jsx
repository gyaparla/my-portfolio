import React, { useState } from "react";
import { FiBriefcase, FiCode, FiPenTool } from "react-icons/fi";
import { experiences } from "../../constants"; // Import your data
import { Title, Modal } from "../Utilities";

const ICONS = [FiBriefcase, FiCode, FiPenTool];

const Experience = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <Title
        name={"EXPERIENCE"}
        description={"A collection of experience list"}
      />

      {/* Experience cards */}
      <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar scroll-smooth snap-x snap-mandatory">
        {experiences.map((item) => (
          <button
            key={item.company}
            type="button"
            onClick={() => setActiveItem(item)}
            className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] rounded-3xl bg-gray-900/60 border border-white/10 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-inner">
                <img
                  src={item.img}
                  alt={`${item.company} logo`}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-white text-center">
                {item.role}
              </h3>

              <div className="text-center">
                <p className="text-sm text-gray-300">{item.company}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>

              <p className="text-sm text-gray-400 text-center mt-4 line-clamp-4">
                {item.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        title={activeItem?.company}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Role:</span>{" "}
              {activeItem?.role}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Duration:</span>{" "}
              {activeItem?.date}
            </p>
          </div>

          <p className="text-sm text-gray-200">{activeItem?.desc}</p>

          {activeItem?.skills?.length ? (
            <div>
              <h4 className="text-sm font-semibold text-white">
                Key technologies
              </h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {activeItem.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-full bg-white/10 px-4 py-1 text-xs text-gray-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
