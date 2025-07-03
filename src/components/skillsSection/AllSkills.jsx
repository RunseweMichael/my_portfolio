import React from 'react';
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3, SiDjango, SiNumpy, SiPandas } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { GoGitMerge } from "react-icons/go";
import SingleSkill from './SingleSkill'; // ✅ ensure correct path

export default function AllSkills() {
  const skills = [
    { skill: "HTML", icon: <TfiHtml5 /> },
    { skill: "CSS", icon: <SiCss3 /> },
    { skill: "JavaScript", icon: <IoLogoJavascript /> },
    { skill: "ReactJS", icon: <FaReact /> },
    { skill: "Python", icon: <FaPython /> },
    { skill: "Django", icon: <SiDjango /> },
    { skill: "Numpy", icon: <SiNumpy /> },
    { skill: "Pandas", icon: <SiPandas /> },
    { skill: "Bootstrap", icon: <FaBootstrap /> },
    { skill: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { skill: "Git", icon: <GoGitMerge /> },
    { skill: "MySQL", icon: <GrMysql /> },
    { skill: "Excel", icon: <PiMicrosoftExcelLogo /> },
  ];

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 max-w-[1200px] mx-auto py-10'>
      {skills.map((item, index) => (
        <SingleSkill key={index} text={item.skill} imgSvg={item.icon} />
      ))}
    </div>
  );
}
