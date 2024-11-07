import fe from "./frontend.png";
import be from "./backend.png";
import learn from "./learning.gif";
import soft from "./soft.png";
import tools from "./tools.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: fe,
    skills: [
      { skill: "HTML", percentage: "90%" },
      { skill: "CSS", percentage: "70%" },
      { skill: "ReactJS", percentage: "80%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "Dart", percentage: "45%" },
    ],
  },
  {
    title: " Programming Languages",
    icon: be,
    skills: [
      { skill: "Java", percentage: "60%" },
      { skill: "C++", percentage: "80%" },
      { skill: "C", percentage: "80%" },
      { skill: "Linux", percentage: "85%" },
      { skill: "Python", percentage: "70%" },
    ],
  },
  {
    title: "Cyber Tools",
    icon: tools,
    skills: [
      { skill: "Nmap", percentage: "80%" },
      { skill: "Burpsuite", percentage: "90%" },
      { skill: "WireShark", percentage: "75%" },
      { skill: "Hydra", percentage: "80%" },
      { skill: "Gephi", percentage: "60%" },
      { skill: "Hashcat", percentage: "50%" },
      { skill: "Social Engineering toolkit", percentage: "80%" }
    ],
  },
  {
    title: "Attacks",
    icon: learn,
    skills: [
      { skill: "Phishing attacks", percentage: "90%" },
      { skill: "Trojan attack", percentage: "80%" },
      { skill: "Reverse Hacking", percentage: "80%" },
      { skill: "Sql Injection", percentage: "60%" },
      { skill: "DOS attack", percentage: "50%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft,
    skills: [
      { skill: "Leadership", percentage: "80%" },
      { skill: "Communication", percentage: "85%" },
      { skill: "Problem-Solving", percentage: "90%" },
      { skill: "Teamwork", percentage: "75%" },
      { skill: "Critical Thinking", percentage: "85%" },
      { skill: "Reasoning", percentage: "80%" },
    ],
  },
  
];
