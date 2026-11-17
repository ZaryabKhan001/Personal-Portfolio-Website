import { Fragment, useRef } from "react";
import { EXPERIENCE } from "../assets/index";
import { useMotion } from "../lib/motion";

const Experience = () => {
  const scope = useRef(null);
  useMotion(scope);

  return (
    <section ref={scope} id="experience" aria-labelledby="exp-title" className="py-[72px] md:py-28">
      <div className="page">
        <div className="mb-14 grid max-w-[720px] gap-3.5">
          <span data-reveal className="eyebrow">Experience</span>
          <h2 id="exp-title" data-split className="section-title">
            Five years of <span className="grad-text">shipping.</span>
          </h2>
        </div>

        <ol className="relative grid gap-5 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-0.5 before:rounded before:bg-gradient-to-b before:from-accent before:via-teal before:to-line">
          {EXPERIENCE.map((job, i) => {
            const latest = job.roles[0];
            const current = i === 0 && latest.current;
            const ladder = [...job.roles].reverse();
            return (
              <li key={job.company} data-reveal className="relative pl-12">
                <span
                  aria-hidden="true"
                  className={`absolute left-1 top-[30px] h-4 w-4 rounded-full border-[3px] bg-surface ${
                    current ? "border-accent ring-[5px] ring-accent-soft" : "border-line-strong"
                  }`}
                />
                <div className="grid items-baseline gap-x-6 gap-y-1.5 rounded-2xl border border-line bg-surface p-5 shadow-card sm:grid-cols-[1fr_auto] sm:px-7 sm:py-6">
                  <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink">
                    {job.company}
                    {current && (
                      <span className="ml-2 inline-block rounded-full bg-success-soft px-2 py-0.5 align-[3px] text-[11px] font-semibold tracking-[0.08em] text-success">
                        CURRENT
                      </span>
                    )}
                  </h3>
                  <span className="whitespace-nowrap text-sm text-ink-muted tabular-nums">{job.period}</span>
                  <span className="font-medium">
                    {latest.title} · {job.duringStudies ? `${job.type}, during my studies` : job.type}
                  </span>
                  {ladder.length > 1 && (
                    <div aria-label="Promotions" className="col-span-full mt-2.5 flex flex-wrap items-center gap-2">
                      {ladder.map((role, r) => (
                        <Fragment key={role.title}>
                          {r > 0 && <i aria-hidden="true" className="not-italic text-line-strong">→</i>}
                          <span
                            className={`rounded-full px-2.5 py-1 text-[13px] ${
                              role.current
                                ? "bg-accent-soft font-semibold text-accent"
                                : "border border-line bg-page text-ink-muted"
                            }`}
                          >
                            {role.title}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
