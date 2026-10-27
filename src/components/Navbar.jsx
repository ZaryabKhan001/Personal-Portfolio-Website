import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../assets/index";
import { FaTimes, FaBars, FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import cv from "../assets/Zaryab.pdf";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        const offsetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const navLinkClass =
    "text-sm text-gray-300 transition-colors duration-200 hover:text-cyan-400";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto px-4 md:px-8 max-w-[1280px]">
      {/* Desktop Navbar */}
      <div className="hidden items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-6 mx-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl lg:flex">
        <a href="#hero" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Zaryab Zubair"
            width={100}
            className="transition-opacity duration-200 hover:opacity-80"
          />
        </a>

        <div className="flex items-center gap-7">
          {NAVIGATION_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClass}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={cv}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            <FaDownload className="text-xs" />
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-lg backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            aria-label="Go to homepage"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src={logo} alt="Zaryab Zubair" width={90} />
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-cyan-400 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4">
            <ul className="flex flex-col gap-4">
              {NAVIGATION_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={navLinkClass}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={cv}
              download
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-3 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/10"
            >
              <FaDownload className="text-xs" />
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;