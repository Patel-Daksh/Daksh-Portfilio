import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import webappImg from "@/public/WorkFlow.png";
import getToGatherImg from "@/public/JQ.png";
import currencyConverterImg from "@/public/AIDOC.png";
import ffgImg from "@/public/Women-Abuse.png";
import kidimakodoImg from "@/public/kidi-makodo.webp";
import { Img } from "@react-email/components";

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
    title: "CREWASIS",
    location: "Brooklyn, NY, USA",
    description:
      "Worked as Data Science Intern at CREWASIS where I performed NLP analysis of social media data, yielding actionable recommendations through Machine Learning insights for product analysis",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 23 - Dec 23",

  },
  {
    title: "Northeastern University",
    location: "Boston, MA, USA",
    description:
      "Worked as Teaching Assistant for Application Engineering Development course ",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 22 - Dec 22",
  },
  {
    title: "ElysIOT",
    location: "Milpitas, CA, USA",
    description:
      "Worked as a Software Engineer Intern at ElysIOT using JIRA to implement agile methodologies and collaborated with cross-functional team for application development",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 21 - Dec 21",
  },
  {
    title: "BIM INFRA SOLUTIONS",
    location: "Ahmedabad, Guj, India",
    description:
      "Worked as Data Science Intern at BIM INFRA SOLUTIONS Performed statistical analysis and forecasting on data from multiple IoT sensor products, resulting in improved accuracy of real-time progress monitoring for road building projects",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - Oct 2020",
  }
] as const;

export const projectsData = [
  {
    title: "TradeSense AI",
    description:
      "Successfully integrated cutting-edge AI technologies to create a seamless and efficient platform for day-ahead stock price predictions",
    tags: ["Python", "SageMaker", "S3", "Lambda Functions", "API Gateway", "Amazon SNS"],
    imageUrl: webappImg,
  },
  {
    title: "Job Quest",
    description:
      "Developed and Deployed an extention on chrome web store to help job seekers to keep track of their applied jobs",
    tags: ["JavaScript","HTML", "CSS", "Chrome Extension"],
    imageUrl: getToGatherImg,
  },
  {
    title: "AIDOC",
    description:
      "Innovated cross-plateform  app enabling disease diagnosis using scanned X-rays & MRI images.",
    tags: ["FLutter", "Firebase", "TensorFlow", "Flask"],
    imageUrl: currencyConverterImg,
  },
  {
    title: "Women Abuse Reporting System",
    description:
      "Design a software system that can initiate a restoration process for a woman who has been a victim of atrocities through reporting to an NGO",
    tags: ["Java","db4o", "GitHub", "NetBeans"],
    imageUrl: ffgImg,
  }
] as const;

export const skillsData = [
  "JAVA",
  "Python",
  "SQL",
  "R",
  "Dart",
  "JavaScript",
  "Power BI",
  "Flutter",
  "Docker",
  "Firebase",
  "HTML",
  "CSS",
  "Tableau",
  "React",
  "SageMaker",
  "Git",
  "MongoDB",
  "Flask",
  "PostgreSQL",
  "JIRA",
  "MySQL",
  "Lambda",
  "API Gateway",
  "Amazon SNS",
  "S3",
  "AWS",
  "Github",
  "PyTorch",
  "TensorFlow",
  "Jupyter Notebook",

] as const;
