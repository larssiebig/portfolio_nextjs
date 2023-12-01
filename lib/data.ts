import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Highschool",
    location: "Mannheim, Germany",
    description:
      "I graduated after 2 years of studying with an economics degree. I immediately started to study business Informatics.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Student",
    location: "Mannheim, Germany",
    description:
      "I studied business Informatics for 6 months. I dropped out since I wanted to learn Programming in a practical way.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Self-taught Frontend Developer",
    location: "Mannheim, Germany",
    description:
      "Whilst Covid-19 I had a lot of time to learn programming. I started with HTML, CSS and JavaScript with a quick transition to React.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Software Developer",
    location: "Mannheim, Germany",
    description:
      "I started as a trainee in a medium sized company building my knowledge in PHP, JavaScript and mySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "eCommerce-App",
    description:
      "In progress. I am building an eCommerce App with Go, TypeScript, React and MongoDB.",
    tags: ["React", "Go", "MongoDB", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "FillerProject1",
    description:
      "Hypothetical Description // Filler Text",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "FillerProject2",
    description:
      "Hypothetical Description // Filler Text",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Go",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
