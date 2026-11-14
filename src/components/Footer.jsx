import { useRef } from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../assets/index";
import { useMotion } from "../lib/motion";

const Footer = () => {
  const scope = useRef(null);
  useMotion(scope);

  return (
    <footer
      ref={scope}
      className="w-full max-w-6xl mt-12 mb-6 border-t border-white/10 pt-10"
    >
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        {/* Logo */}
        <a href="#hero" data-reveal aria-label="Back to top">
          <img
            src={logo}
            alt="Zaryab Zubair logo"
            width={100}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </a>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
              key={link.href || index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label || `Social link ${index + 1}`}
              data-reveal
              data-magnetic="0.4"
              className="text-xl text-gray-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.icon}
            </a>
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
