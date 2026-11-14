import { useRef } from "react";
import { BIO } from "../assets/index";
import { gsap, SplitText } from "../lib/gsap";
import { useMotion } from "../lib/motion";

const Bio = () => {
  const scope = useRef(null);

  // The one scrubbed moment: words brighten as the card scrolls through.
  useMotion(scope, (root) => {
    const card = root.querySelector("[data-bio-card]");
    SplitText.create(root.querySelectorAll("[data-bio-text]"), {
      type: "words",
      autoSplit: true,
      onSplit: (self) =>
        gsap.fromTo(
          self.words,
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          },
        ),
    });
  });

  return (
    <section ref={scope} id="bio" className="w-full max-w-5xl pt-24">
      <div className="mb-10">
        <p
          data-reveal
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"
        >
          Beyond the code
        </p>

        <h2
          data-split
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          A little about <span className="text-gray-500">how I work.</span>
        </h2>

        <div data-bar className="mt-5 h-1 w-16 rounded-full bg-cyan-400" />
      </div>

      <div
        data-reveal
        data-bio-card
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-3xl"
        />

        <div className="relative space-y-6">
          {BIO.map((bio, index) => (
            <p
              key={index}
              data-bio-text
              className="text-base leading-8 text-gray-300 sm:text-lg"
            >
              {bio}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
