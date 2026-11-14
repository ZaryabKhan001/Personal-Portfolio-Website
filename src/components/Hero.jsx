import { useRef } from "react";
import { HERO as heroData } from "../assets/index";
import { gsap } from "../lib/gsap";
import { useMotion } from "../lib/motion";

const highlights = [
  "AI-Powered Development",
  "Problem Solving",
  "System Design",
  "Scalable Applications",
  "Clean Code",
  "Continuous Learning",
];

const Hero = () => {
  const scope = useRef(null);

  useMotion(
    scope,
    (root) => {
      const q = gsap.utils.selector(root);

      // Intro: one calm fade-and-rise, left column first, then the panel.
      gsap
        .timeline({ defaults: { ease: "power2.out", duration: 0.7 } })
        .from(
          q(
            "[data-hero-badge], [data-hero-greet], [data-hero-name], [data-hero-desc], [data-hero-chips], [data-hero-ctas]",
          ),
          { autoAlpha: 0, y: 14, stagger: 0.08 },
        )
        .from(q("[data-hero-panel]"), { autoAlpha: 0, y: 14 }, 0.25);

      // Scroll-out: content drifts up slightly and fades. Scrubbed, so it
      // reverses cleanly when scrolling back up.
      gsap.to(q("[data-hero-content]"), {
        yPercent: -8,
        autoAlpha: 0.2,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { reveal: false },
  );

  return (
    <section
      ref={scope}
      id="hero"
      className="relative flex min-h-[85vh] w-full items-center pt-32 pb-20"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div
        data-hero-content
        className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left: Introduction */}
        <div>
          <div
            data-hero-badge
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Software Engineer
          </div>

          <p data-hero-greet className="mb-3 text-lg font-medium text-cyan-400">
            {heroData.greet}
          </p>

          <h1
            data-hero-name
            className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {heroData.name}
            <span className="text-cyan-400">.</span>
          </h1>

          <p
            data-hero-desc
            className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            {heroData.description}
          </p>

          {/* Technology stack */}
          <div data-hero-chips className="mt-8 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <div
            data-hero-ctas
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-hero-cta
              data-magnetic
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-gray-950 transition-colors hover:bg-cyan-300"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              data-hero-cta
              data-magnetic
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Developer profile panel */}
        <div data-hero-panel className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141d] shadow-2xl shadow-black/30">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-gray-500">developer.js</span>
            </div>

            {/* Code-inspired profile */}
            <div className="space-y-5 p-6 font-mono text-sm leading-7 sm:p-8">
              <p data-code-line className="text-gray-500">
                {"// A little about me"}
              </p>

              <p data-code-line>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-gray-300">= {"{"}</span>
              </p>

              <div className="space-y-2 pl-5">
                <p data-code-line>
                  <span className="text-gray-400">role:</span>{" "}
                  <span className="text-green-300">"Software Engineer"</span>,
                </p>
                <p data-code-line>
                  <span className="text-gray-400">focus:</span>{" "}
                  <span className="text-green-300">
                    "Full-Stack Development"
                  </span>
                  ,
                </p>
                <p data-code-line>
                  <span className="text-gray-400">frontend:</span>{" "}
                  <span className="text-orange-300">
                    "React, Next, Angular"
                  </span>
                  ,
                </p>
                <p data-code-line>
                  <span className="text-gray-400">backend:</span>{" "}
                  <span className="text-orange-300">"Node.js / Laravel"</span>,
                </p>
                <p data-code-line>
                  <span className="text-gray-400">mindset:</span>{" "}
                  <span className="text-green-300">"Always Learning"</span>
                </p>
              </div>

              <p data-code-line className="text-gray-300">
                {"};"}
              </p>

              <div data-code-line className="border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Building, learning, improving.
                </div>
              </div>
            </div>
          </div>

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl border border-cyan-400/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
