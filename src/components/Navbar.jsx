import { useRef, useState } from "react";
import { NAVIGATION_LINKS } from "../assets/index";
import { FaTimes, FaBars, FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import cv from "../assets/Zaryab.pdf";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  getLenis,
  prefersReducedMotion,
} from "../lib/gsap";

const NAV_OFFSET = 100;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);

  const navRef = useRef(null);
  const progressRef = useRef(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  // Scroll-driven behaviour: progress bar and active section.
  // The navbar itself stays pinned (sticky) at the top at all times.
  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      const nav = navRef.current;

      if (!reduce) {
        gsap.from(nav, {
          yPercent: -150,
          duration: 0.9,
          delay: 0.6,
          ease: "power3.out",
        });
      }

      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );

      NAVIGATION_LINKS.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveHref(href);
            else if (self.direction === -1 && href === NAVIGATION_LINKS[0].href)
              setActiveHref(null); // scrolled back up into the hero
          },
        });
      });
    },
    { scope: navRef },
  );

  // Slide the underline to the active link.
  useGSAP(
    () => {
      const indicator = indicatorRef.current;
      const link = activeHref && linkRefs.current[activeHref];
      if (!link) {
        gsap.to(indicator, { autoAlpha: 0, duration: 0.3 });
        return;
      }
      gsap.to(indicator, {
        autoAlpha: 1,
        x: link.offsetLeft,
        width: link.offsetWidth,
        duration: prefersReducedMotion() ? 0 : 0.5,
        ease: "power3.out",
      });
    },
    { dependencies: [activeHref] },
  );

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();
        const lenis = getLenis();

        if (lenis) {
          lenis.scrollTo(targetElement); // offset comes from scroll-padding-top
        } else {
          const offsetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            NAV_OFFSET;

          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReducedMotion() ? "auto" : "smooth",
          });
        }
      }
    }

    setIsMobileMenuOpen(false);
  };

  const navLinkClass = (href) =>
    `text-sm transition-colors duration-200 hover:text-cyan-400 ${
      activeHref === href ? "text-white" : "text-gray-300"
    }`;

  return (
    <>
      {/* Scroll progress (outside <nav> so hiding the nav doesn't move it) */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[60] !mt-0 h-0.5 origin-left scale-x-0 bg-cyan-400"
      />

      <nav
        ref={navRef}
        className="fixed left-0 right-0 top-0 z-50 mx-auto px-4 md:px-8 max-w-[1280px]"
      >
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
            <div className="relative flex items-center gap-7">
              {NAVIGATION_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  ref={(el) => (linkRefs.current[item.href] = el)}
                  aria-current={
                    activeHref === item.href ? "location" : undefined
                  }
                  className={navLinkClass(item.href)}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <span
                ref={indicatorRef}
                aria-hidden="true"
                className="pointer-events-none invisible absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-cyan-400 opacity-0"
              />
            </div>

            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
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
                      className={navLinkClass(item.href)}
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
    </>
  );
};

export default Navbar;
