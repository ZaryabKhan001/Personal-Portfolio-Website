import React from "react";
import { SKILLS } from "../assets/index";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, maintainable user interfaces.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    title: "Backend Engineering",
    description: "Application logic, APIs, and server-side development.",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs"],
  },
  {
    title: "Databases & Infrastructure",
    description: "Working with data, development environments, and tools.",
    skills: ["MySQL", "MongoDB", "Redis", "Docker", "Git"],
  },
  {
    title: "Engineering Practices",
    description:
      "Developing strong problem-solving and software design fundamentals.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Low-Level Design",
      "System Design Fundamentals",
    ],
  },
  {
    title: "Adaptability & Problem Solving",
    description:
      "Learning new technologies, adapting to different environments, and solving problems beyond a single tech stack.",
    skills: [
      "Language-Agnostic Problem Solving",
      "Continuous Learning",
      "Technical Adaptability",
      "Debugging & Troubleshooting",
      "Learning New Technologies",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-5xl pt-24">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          My toolkit
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Skills & <span className="text-gray-500">engineering.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          The tools, technologies, and engineering fundamentals I use to build
          software and solve problems.
        </p>
      </motion.div>

      {/* Skill categories */}
      {/* <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={itemVariant}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {group.description}
                </p>
              </div>

              <span className="text-xl text-cyan-400" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-[#10141d] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={itemVariant}
            className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-7 ${
              group.title === "Adaptability & Problem Solving"
                ? "md:col-span-2"
                : ""
            }`}
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>

            <p className="mt-2 text-gray-400">{group.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
