import {
  gsap,
  ScrollTrigger,
  SplitText,
  useGSAP,
  MOTION_OK,
  DESKTOP,
} from "./gsap";

/**
 * Fade/rise every `[data-reveal]` element inside `root` as it scrolls into view.
 * Elements entering together are staggered.
 */
export function revealItems(root) {
  const items = gsap.utils.toArray("[data-reveal]", root);
  if (!items.length) return;

  gsap.set(items, { autoAlpha: 0, y: 28 });
  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.08, overwrite: true }),
  });
}

/**
 * Section headings marked `[data-split]`: each line rises out of a mask.
 * Underline bars marked `[data-bar]` grow from the left afterwards.
 */
export function revealHeadings(root) {
  gsap.utils.toArray("[data-split]", root).forEach((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true, // re-split when fonts load or the width changes
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
    });
  });

  gsap.utils.toArray("[data-bar]", root).forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      delay: 0.3,
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
    });
  });
}

/**
 * `[data-magnetic]` elements lean toward the cursor. The attribute value is the
 * strength (default 0.3). Desktop only, so callers run it under DESKTOP.
 */
export function magnetize(root) {
  const cleanups = gsap.utils.toArray("[data-magnetic]", root).map((el) => {
    const strength = parseFloat(el.dataset.magnetic) || 0.3;
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * strength);
      yTo((e.clientY - r.top - r.height / 2) * strength);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  });

  return () => cleanups.forEach((fn) => fn());
}

/**
 * Run section animations only when the visitor allows motion.
 * With reduced motion nothing is hidden or moved, so content is visible as-is.
 *
 * `setup(root, { desktop })` may return a cleanup function. It runs again
 * (after a full revert) when the desktop/motion media queries change.
 */
export function useMotion(scope, setup, { reveal = true } = {}) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MOTION_OK, desktop: DESKTOP }, (ctx) => {
        if (!ctx.conditions.motion) return;
        const root = scope.current;

        if (reveal) {
          revealHeadings(root);
          revealItems(root);
        }
        const cleanupMagnet = ctx.conditions.desktop ? magnetize(root) : null;
        const cleanupSetup = setup?.(root, ctx.conditions);

        return () => {
          cleanupMagnet?.();
          if (typeof cleanupSetup === "function") cleanupSetup();
        };
      });
      return () => mm.revert();
    },
    { scope },
  );
}
