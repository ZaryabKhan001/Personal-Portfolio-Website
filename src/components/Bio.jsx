
import React from "react";
import { BIO } from "../assets/index";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section
      id="bio"
      className="w-full max-w-5xl pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Beyond the code
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          A little about{" "}
          <span className="text-gray-500">how I work.</span>
        </h2>

        <div className="mt-5 h-1 w-16 rounded-full bg-cyan-400" />
      </motion.div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-3xl"
        />

        <div className="relative space-y-6">
          {BIO.map((bio, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="text-base leading-8 text-gray-300 sm:text-lg"
            >
              {bio}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
