import { PROOF } from "../assets/index";

const ProofBar = () => (
  <div className="page relative z-[2] -mt-16">
    <div
      aria-label="At a glance"
      className="grid grid-cols-3 rounded-3xl border border-line bg-surface shadow-card-lg lg:grid-cols-[1.4fr_repeat(3,1fr)]"
    >
      <div className="col-span-3 grid content-center gap-1 border-b border-line px-5 py-[18px] lg:col-span-1 lg:border-b-0 lg:px-7 lg:py-6">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">Trusted by teams at</span>
        <span className="text-[17px] font-semibold leading-snug text-ink">{PROOF.clients.join(" · ")}</span>
      </div>
      {PROOF.stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`grid content-center gap-1 px-5 py-[18px] lg:border-l lg:border-line lg:px-7 lg:py-6 ${i > 0 ? "border-l border-line" : ""}`}
        >
          <span className="text-[26px] font-bold leading-tight tracking-[-0.03em] text-ink tabular-nums lg:text-[34px]">
            {stat.value}
          </span>
          <span className="text-sm text-ink-muted">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProofBar;
