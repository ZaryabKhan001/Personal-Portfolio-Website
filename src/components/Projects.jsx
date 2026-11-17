import { useRef } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { PROJECTS } from "../assets/index";
import { useMotion } from "../lib/motion";

const KIND = {
  client: { label: "Client work", className: "bg-accent-soft text-accent" },
  product: { label: "Product build", className: "bg-teal-soft text-teal-deep" },
};

const CaseStudy = ({ project }) => {
  const kind = KIND[project.kind];
  return (
    <article
      data-reveal
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card-lg lg:grid-cols-[1.08fr_1fr]"
    >
      <div className="shot-glow relative flex items-center overflow-hidden bg-gradient-to-br from-accent-soft to-teal-soft pl-6 pt-6 lg:py-9 lg:pl-9">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="relative aspect-[16/10] w-full rounded-tl-xl bg-surface object-cover object-left-top shadow-card-lg transition-transform duration-500 group-hover:scale-[1.02] lg:rounded-l-xl"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-4 px-5 pb-7 pt-6 lg:p-9">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${kind.className}`}>
            {kind.label}
          </span>
          <span className="text-sm text-ink-muted">{project.who}</span>
        </div>

        <h3 className="text-[clamp(22px,2.2vw,28px)] font-bold leading-tight tracking-[-0.025em] text-ink [text-wrap:balance]">
          {project.title}
        </h3>
        <p className="text-ink-muted">{project.summary}</p>

        <ul className="grid gap-2.5">
          {project.points.map((point) => (
            <li key={point} className="grid grid-cols-[22px_1fr] gap-2 text-[15px] leading-relaxed">
              <FiCheck className="mt-0.5 text-accent" size={18} strokeWidth={3} aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <details className="group/details mt-auto border-t border-line pt-4">
          <summary className="inline-flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-accent hover:text-accent-hover">
            Read the case study
            <FiChevronDown className="transition-transform group-open/details:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-4 grid gap-3 text-[15px] text-ink-muted">
            {project.details.map((d) => (
              <p key={d.label}>
                <b className="mb-0.5 block text-sm text-ink">{d.label}</b>
                {d.text}
              </p>
            ))}
            {project.confidential && (
              <p className="text-[13px] italic">Details are limited to what can be shared publicly.</p>
            )}
          </div>
        </details>
      </div>
    </article>
  );
};

const Projects = () => {
  const scope = useRef(null);
  useMotion(scope);

  return (
    <section ref={scope} id="work" aria-labelledby="work-title" className="py-[72px] md:py-28">
      <div className="page">
        <div className="mb-14 grid max-w-[720px] gap-3.5">
          <span data-reveal className="eyebrow">Selected work</span>
          <h2 id="work-title" data-split className="section-title">
            Real platforms, real users.
          </h2>
          <p data-reveal className="max-w-[58ch] text-lg text-ink-muted">
            Two products I work on for clients, and three I designed and built end to end.
          </p>
        </div>

        <div className="grid gap-7">
          {PROJECTS.map((project) => (
            <CaseStudy key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
