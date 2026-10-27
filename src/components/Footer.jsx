import React from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../assets/index";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mt-12 mb-6 border-t border-white/10 pt-10">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-label="Back to top"
        >
          <img
            src={logo}
            alt="Zaryab Zubair logo"
            width={100}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.a>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              key={link.href || index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label || `Social link ${index + 1}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-xl text-gray-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-white/10 pt-5 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Zaryab Zubair. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Built with purpose. Improved continuously.
        </p>
      </div>
    </footer>
  );
};

export default Footer;