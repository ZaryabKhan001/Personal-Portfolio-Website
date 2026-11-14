import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

gsap.defaults({ ease: "power3.out", duration: 0.8 });

/** Visitor has not asked the OS to reduce motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Large screen with a precise pointer (mouse/trackpad): magnetic hovers, smooth scroll. */
export const DESKTOP =
  "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && !window.matchMedia(MOTION_OK).matches;

/* ---- Lenis instance (set by <SmoothScroll />, null on touch / reduced motion) ---- */
let lenisInstance = null;
export const setLenis = (lenis) => {
  lenisInstance = lenis;
};
export const getLenis = () => lenisInstance;

export { gsap, ScrollTrigger, SplitText, useGSAP };
