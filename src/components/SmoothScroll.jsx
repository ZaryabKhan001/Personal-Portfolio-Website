import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, DESKTOP, setLenis } from "../lib/gsap";

/**
 * Inertia scrolling on desktop (mouse/trackpad) only. Touch devices and
 * visitors who prefer reduced motion keep native scrolling — and never
 * download Lenis, since it is loaded lazily here.
 */
const SmoothScroll = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      let cancelled = false;
      let cleanup = null;

      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;

        const lenis = new Lenis({
          lerp: 0.1,
          // #anchor links scroll smoothly; Lenis honours the html
          // `scroll-padding-top` (index.css) so they clear the navbar.
          anchors: true,
        });

        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        setLenis(lenis);

        cleanup = () => {
          gsap.ticker.remove(tick);
          gsap.ticker.lagSmoothing(500, 33);
          lenis.destroy();
          setLenis(null);
        };
      });

      return () => {
        cancelled = true;
        cleanup?.();
      };
    });

    return () => mm.revert();
  }, []);

  return null;
};

export default SmoothScroll;
