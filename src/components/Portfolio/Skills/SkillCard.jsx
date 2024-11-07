import React from "react";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card relative cursor-pointer transition-all duration-300 ease-in-out ${
        isActive
          ? "bg-gradient-to-b from-purple-300 to-purple-600"
          : "bg-opacity-40 bg-gray-900 backdrop-blur"
      } mb-8 md:mb-0 md:mr-8 flex flex-col items-center justify-center gap-4 p-6 rounded-lg border border-purple-600 hover:shadow-lg transform hover:-translate-y-1`}
      onClick={() => onClick()}
    >
      <div className="skill-icon absolute top-0 left-0 -mt-8 -ml-8 bg-purple-800 border-purple-600 rounded-lg p-2">
        <img src={iconUrl} alt={title} className="w-8 h-8 object-contain" />
      </div>
      <span className="text-white text-lg font-semibold">{title}</span>
    </div>
  );
};

export default SkillCard;
