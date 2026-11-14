import { useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { useMotion } from "../lib/motion";

const ROWS = [
  {
    words: ["Full-Stack", "AI-Powered", "Scalable", "Clean Code"],
    outline: false,
    direction: -1, // drifts left
  },
  {
    words: ["React", "Node.js", "Laravel", "Next.js", "System Design"],
    outline: true,
    direction: 1, // drifts right
  },
];

function Row({ words, outline }) {
  // Words doubled so one copy is always wider than the screen; the track
  // holds two identical copies so shifting it by 50% loops seamlessly.
  const copy = (
    <div className="flex shrink-0 items-center">
      {[...words, ...words].map((word, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl ${
              outline ? "text-outline" : "text-white"
            }`}
          >
            {word}
          </span>
          <span className="mx-6 text-2xl text-cyan-400 sm:mx-10 sm:text-4xl">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div data-marquee-track className="flex w-max will-change-transform">
      {copy}
      {copy}
    </div>
  );
}

/**
 * ✦ Kinetic marquee: two giant rows drifting in opposite directions.
 * Scrolling speeds them up and leans them into the motion; scrolling up
 * reverses them. Decorative only, and static for reduced-motion visitors.
 */
const Marquee = () => {
  const scope = useRef(null);

  useMotion(
    scope,
    (root) => {
      const band = root.querySelector("[data-marquee-band]");
      const tracks = gsap.utils.toArray("[data-marquee-track]", root);

      const loops = tracks.map((track, i) => {
        const dir = ROWS[i].direction;
        const loop = gsap.fromTo(
          track,
          { xPercent: dir === -1 ? 0 : -50 },
          {
            xPercent: dir === -1 ? -50 : 0,
            duration: 38,
            ease: "none",
            repeat: -1,
            paused: true,
          },
        );
        // Start deep into the infinite repeat so negative timeScale
        // (scrolling up) can play backwards without hitting time 0.
        loop.totalTime(loop.duration() * 1000);
        return loop;
      });

      const skewTo = gsap.quickTo(band, "skewX", {
        duration: 0.5,
        ease: "power3.out",
      });
      let settle;

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        // Only animate while the band is on screen.
        onToggle: (self) =>
          loops.forEach((l) => (self.isActive ? l.resume() : l.pause())),
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const boost = gsap.utils.clamp(1, 9, 1 + Math.abs(velocity) / 220);

          loops.forEach((loop) =>
            gsap.to(loop, {
              timeScale: boost * self.direction,
              duration: 0.2,
              overwrite: true,
              onComplete: () =>
                gsap.to(loop, {
                  timeScale: self.direction,
                  duration: 1.2,
                  ease: "power2.out",
                }),
            }),
          );

          skewTo(gsap.utils.clamp(-14, 14, velocity / -180));
          settle?.kill();
          settle = gsap.delayedCall(0.15, () => skewTo(0));
        },
      });

      if (trigger.isActive) loops.forEach((l) => l.resume());

      return () => settle?.kill();
    },
    { reveal: false },
  );

  return (
    <section
      ref={scope}
      aria-hidden="true"
      className="relative w-screen overflow-hidden border-y border-white/10 bg-black/30 py-8 sm:py-12"
    >
      <div data-marquee-band className="space-y-4 sm:space-y-6">
        {ROWS.map((row, i) => (
          <Row key={i} {...row} />
        ))}
      </div>
    </section>
  );
};

export default Marquee;
