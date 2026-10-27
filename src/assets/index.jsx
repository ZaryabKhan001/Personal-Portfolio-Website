import {
  FaGithub,
  FaLinkedin,
  FaX,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { SiDrizzle } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Zaryab Zubair",
  greet: "Hello there! 👋🏻",
  description:
    "I turn complex problems into practical, user-focused solutions. Passionate about building products that scale, writing maintainable code, and turning ideas into reality. Always learning, continuously improving, and exploring how AI can shape the next generation of software.",
};


export const BIO = [
  `I'm a Software Engineer with hands-on experience building and maintaining full-stack applications, turning product requirements into reliable, practical solutions. I care about more than getting features to work — I focus on understanding the problem, making thoughtful engineering decisions, and writing code that's easier to maintain and extend.`,

  `My work spans the development lifecycle, from translating requirements into working features to integrating APIs, handling application logic, and solving real-world technical challenges. I've contributed to products ranging from marketplaces and productivity tools to AI-powered applications, gaining a practical understanding of how software serves both users and business goals.`,

  `I'm continuously strengthening my foundations in software design, system architecture, and problem-solving while exploring how AI can make software more useful and capable. I value ownership, clear communication, and continuous improvement, and I'm motivated by opportunities to work on meaningful products alongside engineers who care about building things well.`
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "HTML",
    experience: "Expert",
  },
  {
    icon: <IoLogoCss3 className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "CSS",
    experience: "Expert",
  },
  {
    icon: <IoLogoJavascript className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "Expert",
  },
  {
    icon: <RiReactjsLine className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "React Js",
    experience: "Expert",
  },
  {
    icon: <TbBrandFramerMotion className="text-3xl text-sky-700 lg:text-5xl" />,
    name: "Framer Motion",
    experience: "Expert",
  },

  {
    icon: <MdAnimation className="text-3xl text-green-600 lg:text-5xl" />,
    name: "GSAP, ScrollTrigger, AOS",
    experience: "Expert",
  },
  {
    icon: <SiDrizzle className="text-3xl text-sky-700 lg:text-5xl" />,
    name: "Drizzle-orm",
    experience: "Expert",
  },

  {
    icon: <IoLogoFirebase className="text-3xl text-green-600 lg:text-5xl" />,
    name: "Firebase",
    experience: "Expert",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2020 - Present",
    description:
      "Worked on various freelance projects, delivering full-stack web solutions, including a car marketplace, AI resume builder, and personal expense tracker. Focused on clean design, user experience, and responsive frontends.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Gujrat",
    duration: "2020 - 2024",
    description:
      "Specialized in web development, databases, and software engineering. Gained hands-on experience in frontend development and backend integration. Developed a passion for building web applications, with a focus on creating user-friendly interfaces. Currently working as a frontend web developer, specializing in modern web technologies.",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Govt Zamindar College",
    duration: "2018 - 2020",
    description:
      "Developed a strong interest in both computer science and physics. Learned the fundamentals of programming, particularly in C language, which sparked an early interest in coding.",
  },
  {
    degree: "Matriculation",
    institution: "Workers Welfare School Boys Gujrat",
    duration: "2016 - 2018",
    description:
      "Discovered a love for physics, which enhanced problem-solving skills and analytical thinking. Excelled in science subjects, laying a strong foundation for future studies in technology.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ZaryabKhan001",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/zaryab-zubair/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Zaryab_005",
    icon: <FaX fontSize={20} className="hover:opacity-80" />,
  },
];
