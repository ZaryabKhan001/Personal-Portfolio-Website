
import React from "react";
import { EDUCATION } from "../assets/index";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="w-full max-w-5xl py-24">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Academic background
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Education<span className="text-gray-500">.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          The foundation behind my journey in software engineering
          and continuous learning.
        </p>
      </motion.div>

      {/* Education cards */}
      <div className="relative space-y-5">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${edu.institution}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
          >
            {/* Accent line */}
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-cyan-400/60 transition-colors group-hover:bg-cyan-400" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {edu.degree}
                </h3>

                <p className="mt-2 text-base font-medium text-cyan-300 sm:text-lg">
                  {edu.institution}
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-400">
                {edu.duration}
              </span>
            </div>

            {edu.description && (
              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                {edu.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
