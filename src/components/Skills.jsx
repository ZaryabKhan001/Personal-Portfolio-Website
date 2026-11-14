import { useRef } from "react";
import { gsap } from "../lib/gsap";
import { useMotion } from "../lib/motion";

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
  const scope = useRef(null);

  // After each card rises in, its chips follow in a quick stagger.
  useMotion(scope, (root) => {
    gsap.utils.toArray("[data-skill-card]", root).forEach((card) => {
      gsap.from(card.querySelectorAll("[data-chip]"), {
        autoAlpha: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.04,
        delay: 0.25,
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      });
    });
  });

  return (
    <section ref={scope} id="skills" className="w-full max-w-5xl pt-24">
      {/* Section heading */}
      <div className="mb-12">
        <p
          data-reveal
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
        >
          My toolkit
        </p>

        <h2
          data-split
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Skills & <span className="text-gray-500">engineering.</span>
        </h2>

        <p
          data-reveal
          className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
        >
          The tools, technologies, and engineering fundamentals I use to build
          software and solve problems.
        </p>
      </div>

      {/* Skill categories */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            data-skill-card
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
                  data-chip
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
