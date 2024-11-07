import React, { useState } from "react";
import { SKILLS } from "./data";
import SkillCard from "./SkillCard";
import SkillInfoCard from "./SkillInfoCard";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container flex flex-col items-center justify-center gap-8 min-h-screen px-4 py-8">
      <div className="text-center font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Proficiency</h1>
      </div>

      <div className="flex justify-center w-full mt-8">
        <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
        />
      </div>
<br></br>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((item) => (
          <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={() => handleSelectSkill(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;
