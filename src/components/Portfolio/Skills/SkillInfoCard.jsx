import React from "react";

const SkillInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card bg-white shadow-lg rounded-lg p-10 transform transition-transform duration-300 scale-100 hover:scale-105 mx-auto w-full lg:w-[95vw] xl:w-[90vw]">
      <h6 className="text-xl font-semibold py-2 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text border-b-2 border-purple-700 mb-6">
        {heading}
      </h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <div key={`skill_${index}`} className="mb-4">
            <div className="flex justify-between mb-2">
              <p className="text-base font-semibold text-gray-700">
                {item.skill}
              </p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                style={{ width: item.percentage }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInfoCard;
