import { useRef } from "react";
import { FiArrowUp, FiBookOpen } from "react-icons/fi";
import { EXPERIENCE } from "../assets/index";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { useMotion } from "../lib/motion";

// Where the timeline "pen" is: line fill and dots key off the same point.
const LINE_POINT = "65%";

function Role({ role, promoted, single }) {
  return (
    <div
      data-role
      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h4
          className={`font-semibold ${
            single
              ? "text-lg text-cyan-300"
              : role.current
                ? "text-lg text-white"
                : "text-base text-gray-300"
          }`}
        >
          {role.title}
        </h4>

        {role.current && (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            CURRENT
          </span>
        )}

        {promoted && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-300/80">
            <FiArrowUp className="h-3 w-3" />
            Promoted
          </span>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2 text-sm text-gray-400">
        <span>{role.period}</span>
        {role.duration && (
          <span className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-gray-500">
            {role.duration}
          </span>
        )}
      </div>
    </div>
  );
}

function CompanyCard({ item }) {
  const single = item.roles.length === 1;

  return (
    <div data-exp-item className="relative">
      {/* Timeline dot — lit by default; dimmed and re-lit on scroll when motion is allowed */}
      <span className="absolute -left-10 top-7 grid h-6 w-6 place-items-center sm:-left-14">
        <span
          data-dot
          data-active="true"
          className="h-3 w-3 rounded-full border-2 border-cyan-400/70 bg-[#05070d] transition-all duration-500 data-[active=true]:scale-125 data-[active=true]:border-cyan-300 data-[active=true]:bg-cyan-400 data-[active=true]:shadow-[0_0_18px_4px_rgba(34,211,238,0.45)]"
        />
      </span>

      <div
        data-reveal
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {item.company}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-sm text-gray-400">{item.period}</span>
            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400">
              {item.type}
            </span>
          </div>
        </div>

        {single ? (
          <div className="mt-4">
            <Role role={item.roles[0]} single />
          </div>
        ) : (
          // Promotion path: newest role on top, joined by a thin connector.
          <div className="relative mt-6 space-y-5 border-l border-white/10 pl-5">
            {item.roles.map((role, i) => (
              <div key={role.title} className="relative">
                <span
                  className={`absolute -left-[25px] top-2 h-2 w-2 rounded-full ${
                    role.current ? "bg-emerald-400" : "bg-white/25"
                  }`}
                />
                <Role role={role} promoted={i < item.roles.length - 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const Experience = () => {
  const scope = useRef(null);

  useMotion(scope, (root) => {
    const timeline = root.querySelector("[data-timeline]");

    // The line draws itself down as you scroll through the timeline.
    gsap.fromTo(
      root.querySelector("[data-timeline-fill]"),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: `top ${LINE_POINT}`,
          end: `bottom ${LINE_POINT}`,
          scrub: 0.5,
        },
      },
    );

    // Each dot lights up as the line reaches it (and dims again going back).
    gsap.utils.toArray("[data-exp-item]", root).forEach((item) => {
      const dot = item.querySelector("[data-dot]");
      dot.dataset.active = "false";
      ScrollTrigger.create({
        trigger: item,
        start: `top+=40 ${LINE_POINT}`,
        onEnter: () => (dot.dataset.active = "true"),
        onLeaveBack: () => (dot.dataset.active = "false"),
      });

      // Roles inside the card follow in a short stagger.
      gsap.from(item.querySelectorAll("[data-role]"), {
        autoAlpha: 0,
        x: -16,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.25,
        scrollTrigger: { trigger: item, start: "top 85%", once: true },
      });
    });
  });

  const firstStudyIndex = EXPERIENCE.findIndex((e) => e.duringStudies);

  return (
    <section ref={scope} id="experience" className="w-full max-w-5xl py-24">
      {/* Section heading */}
      <div className="mb-14">
        <p
          data-reveal
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
        >
          Career journey
        </p>

        <h2
          data-split
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Experience<span className="text-gray-500">.</span>
        </h2>

        <p
          data-reveal
          className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
        >
          From part-time frontend work alongside my studies to building software
          full-time.
        </p>
      </div>

      {/* Timeline */}
      <div data-timeline className="relative pl-10 sm:pl-14">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-3 top-2 w-px bg-white/10"
        />
        <span
          data-timeline-fill
          aria-hidden="true"
          className="absolute bottom-0 left-3 top-2 w-px origin-top bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-400/30"
        />

        {EXPERIENCE.map((item, i) => (
          <div key={item.company} className="pb-10 last:pb-0">
            {i === firstStudyIndex && (
              <div
                data-reveal
                className="relative mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gray-500"
              >
                <FiBookOpen className="h-4 w-4 text-cyan-400/70" />
                DURING MY STUDIES
                <span className="h-px flex-1 bg-white/10" />
              </div>
            )}
            <CompanyCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
