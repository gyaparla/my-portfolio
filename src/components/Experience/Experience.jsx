import React from "react";
import { experiences } from "../../constants"; // Import your data
import { Title } from "../Utilities";
import Timeline from "../Timeline/Timeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <Title
        name={"EXPERIENCE"}
        description={"A collection of experience list"}
      />

      {/* Experience Timeline */}
      <Timeline items={experiences}/>
    </section>
  );
};

export default Experience;
