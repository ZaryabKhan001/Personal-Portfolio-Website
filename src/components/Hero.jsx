
import React from "react";
import { HERO as heroData } from "../assets/index";
import { motion } from "framer-motion";

const highlights = [
  "AI-Powered Development",
  "Problem Solving",
  "System Design",
  "Scalable Applications",
  "Clean Code",
  "Continuous Learning",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <motion.div
        className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left: Introduction */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Software Engineer
          </div>

          <p className="mb-3 text-lg font-medium text-cyan-400">
            {heroData.greet}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {heroData.name}
            <span className="text-cyan-400">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            {heroData.description}
          </p>

          {/* Technology stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-cyan-300"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Developer profile panel */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141d] shadow-2xl shadow-black/30">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-gray-500">
                developer.js
              </span>
            </div>

            {/* Code-inspired profile */}
            <div className="space-y-5 p-6 font-mono text-sm leading-7 sm:p-8">
              <p className="text-gray-500">
                {"// A little about me"}
              </p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-gray-300">= {"{"}</span>
              </p>

              <div className="space-y-2 pl-5">
                <p>
                  <span className="text-gray-400">role:</span>{" "}
                  <span className="text-green-300">
                    "Software Engineer"
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-gray-400">focus:</span>{" "}
                  <span className="text-green-300">
                    "Full-Stack Development"
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-gray-400">frontend:</span>{" "}
                  <span className="text-orange-300">"React, Next, Angular"</span>,
                </p>
                <p>
                  <span className="text-gray-400">backend:</span>{" "}
                  <span className="text-orange-300">
                    "Node.js / Laravel"
                  </span>
                  ,
                </p>
                <p>
                  <span className="text-gray-400">mindset:</span>{" "}
                  <span className="text-green-300">
                    "Always Learning"
                  </span>
                </p>
              </div>

              <p className="text-gray-300">{"};"}</p>

              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Building, learning, improving.
                </div>
              </div>
            </div>
          </div>

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl border border-cyan-400/20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
