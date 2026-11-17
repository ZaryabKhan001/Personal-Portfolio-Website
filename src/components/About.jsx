import { useRef } from "react";
import { ABOUT, PRINCIPLES } from "../assets/index";
import { useMotion } from "../lib/motion";

const About = () => {
  const scope = useRef(null);
  useMotion(scope);

  return (
    <section
      ref={scope}
      id="about"
      aria-labelledby="about-title"
      className="border-y border-line bg-surface py-[72px] md:py-28"
    >
      <div className="page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-3.5">
          <span data-reveal className="eyebrow">About</span>
          <h2 id="about-title" data-split className="section-title">
            How I work.
          </h2>
          <div className="grid gap-4 text-lg leading-[1.7]">
            {ABOUT.map((p) => (
              <p data-reveal key={p}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <ul className="grid gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, text }) => (
            <li
              data-reveal
              key={title}
              className="grid grid-cols-[48px_1fr] items-start gap-[18px] rounded-2xl border border-line bg-page px-6 py-[22px]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand text-white shadow-button">
                <Icon size={22} />
              </span>
              <span>
                <strong className="block text-lg font-semibold tracking-[-0.01em] text-ink">{title}</strong>
                <span className="text-[15px] text-ink-muted">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
