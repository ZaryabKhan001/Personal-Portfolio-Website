import { useRef } from "react";
import { FiArrowRight, FiGlobe } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { HERO } from "../assets/index";
import portrait from "../assets/zaryab.webp";
import { gsap } from "../lib/gsap";
import { useMotion } from "../lib/motion";

const FloatCard = ({ icon: Icon, title, text, className }) => (
  <div
    data-hero-float
    className={`absolute flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-2.5 text-ink shadow-card-lg sm:px-4 sm:py-3 ${className}`}
  >
    <span className="grid h-8 w-8 flex-none place-items-center rounded-[10px] bg-brand text-white sm:h-9 sm:w-9">
      <Icon size={18} />
    </span>
    <span className="leading-tight">
      <b className="block text-[15px]">{title}</b>
      <span className="text-[13px] text-ink-muted">{text}</span>
    </span>
  </div>
);

const Hero = () => {
  const scope = useRef(null);

  useMotion(
    scope,
    (root) => {
      const q = gsap.utils.selector(root);
      gsap
        .timeline()
        .from(q("[data-hero-item]"), { autoAlpha: 0, y: 24, stagger: 0.08 })
        .from(q("[data-hero-photo]"), { autoAlpha: 0, scale: 0.96, duration: 1 }, 0.1)
        .from(q("[data-hero-float]"), { autoAlpha: 0, y: 12, stagger: 0.12 }, 0.6);
    },
    { reveal: false },
  );

  return (
    <div ref={scope} id="top" className="hero-band relative overflow-hidden">
      <div className="page grid items-center gap-12 pb-[104px] pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-[120px] lg:pt-20">
        <div>
          <span
            data-hero-item
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-ink shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-success ring-4 ring-success-soft" aria-hidden="true" />
            {HERO.status}
          </span>

          <h1
            data-hero-item
            className="mt-6 text-[clamp(42px,6vw,74px)] font-bold leading-[1.02] tracking-[-0.04em] text-ink [text-wrap:balance]"
          >
            I build <span className="grad-text">AI solutions</span> that keep working after launch.
          </h1>

          <p data-hero-item className="mt-6 max-w-[54ch] text-[clamp(18px,1.5vw,20px)] leading-relaxed text-ink-muted">
            I&apos;m <strong className="font-semibold text-ink">{HERO.name}</strong>, {HERO.description} Teams{" "}
            <strong className="font-semibold text-ink">around the world</strong> trust me with their platforms.
          </p>

          <div data-hero-item className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" data-magnetic="0.15" className="btn btn-primary group">
              Start a project <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" data-magnetic="0.15" className="btn btn-ghost">
              See my work
            </a>
          </div>
        </div>

        <figure
          data-hero-photo
          className="relative order-first mx-auto w-[min(78%,280px)] sm:w-[min(100%,360px)] lg:order-none lg:w-full lg:max-w-[440px]"
        >
          <div className="absolute inset-[8%_-6%_-6%_8%] rotate-[4deg] rounded-[32px] bg-brand shadow-glow" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white bg-white shadow-card-lg">
            <img
              src={portrait}
              alt="Portrait of Zaryab Zubair"
              width="1254"
              height="1254"
              className="aspect-[1/1.08] w-full rounded-[22px] object-cover object-[50%_30%]"
            />
          </div>
          <FloatCard
            icon={HiSparkles}
            title="AI-powered products"
            text="from idea to production"
            className="-left-2 top-[6%] sm:-left-4 lg:-left-10 lg:top-[12%]"
          />
          <FloatCard
            icon={FiGlobe}
            title="Worldwide clients"
            text="delivered remotely"
            className="-right-2 bottom-[5%] sm:-right-3 lg:-right-7 lg:bottom-[9%]"
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
