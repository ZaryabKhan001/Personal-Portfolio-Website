import { useRef, useState } from "react";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  prefersReducedMotion,
} from "../lib/gsap";
import { useMotion } from "../lib/motion";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiCode,
  FiShield,
  FiLayers,
  FiX,
} from "react-icons/fi";
import project01 from "../assets/project01.webp";
import project02 from "../assets/project02.webp";
import project03 from "../assets/project03.webp";
import project04 from "../assets/project04.webp";
import project05 from "../assets/project05.webp";

const projects = [
  {
    number: "01",
    featured: true,
    category: "REAL ESTATE",
    title: "Abu Dhabi Global Market",
    subtitle: "ADGM's Digital Home for Real Estate",
    description:
      "Contributed to enhancing and maintaining a real estate application, focusing on feature delivery, dependency modernization, and application stability.",
    image: project01,
    technologies: ["React", "JavaScript", "Dependencies", "Security"],
    icon: FiShield,
    highlights: [
      "Developed and enhanced real estate application features.",
      "Worked on major dependency upgrades and resolved compatibility issues.",
      "Helped remediate security vulnerabilities in affected packages.",
    ],
    overview:
      "Improving an existing real estate application while maintaining compatibility, stability, and safer dependencies.",
    contributions: [
      "Developed and enhanced application features.",
      "Helped resolve compatibility issues during major dependency upgrades.",
      "Helped address dependency-related security vulnerabilities.",
    ],
    engineeringFocus:
      "Dependency compatibility, application stability, and package risk reduction.",
  },
  {
    number: "02",
    featured: true,
    category: "COMMERCIAL ROOFING SOFTWARE",
    title: "Centerpoint Connect",
    subtitle: "Connecting roofing operations through software.",
    description:
      "Centerpoint Connect is a US-based software company building solutions for commercial roofing contractors. Its platform helps connect office and field operations, bringing inspections, service tickets, proposals, scheduling, and reporting into a unified workflow.",
    image: project02,
    technologies: ["PHP", "Laravel", "Angular", "REST APIs", "MySQL"],
    icon: FiLayers,
    highlights: [
      "Building and maintaining features across frontend and backend layers.",
      "Integrating APIs and implementing business logic.",
      "Working across database operations and UI components.",
    ],
    overview:
      "Delivering application features across the frontend, backend services, business rules, and persistence layer.",
    contributions: [
      "Developing and maintaining features across Laravel and Angular.",
      "Integrating APIs and implementing application logic.",
      "Working with database operations and UI components.",
    ],
    engineeringFocus:
      "End-to-end feature delivery and coordination between frontend and backend layers.",
  },
  {
    number: "03",
    featured: false,
    category: "AI-POWERED FINTECH",
    title: "Finan Smart",
    subtitle: "Smarter financial tracking powered by AI",
    description:
      "An AI-powered finance tracker designed to help users understand their spending, organize financial information, and gain more meaningful insights into their finances. Building this project provided hands-on experience with AI integration and a deeper understanding of how applications communicate with AI services reliably and at scale.",
    image: project03,
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "AI Integration",
      "REST APIs",
    ],
    icon: FiCode,
    highlights: [
      "Built an AI-powered financial tracking experience.",
      "Explored how applications communicate with AI services.",
      "Learned about integrating AI into real-world application workflows.",
      "Gained practical insight into designing scalable AI-powered applications.",
    ],
    overview:
      "Finan Smart explores how AI can make personal finance management more useful by turning financial data into clearer insights. The project combines application development with AI integration, creating an opportunity to understand the engineering behind AI-powered product experiences.",
    contributions: [
      "Worked on an AI-powered finance tracking application.",
      "Explored how application data is prepared and communicated to AI services.",
      "Learned about the challenges of integrating AI into application workflows, including reliability, response handling, and scalability.",
      "Developed a stronger understanding of the engineering considerations involved in building applications around AI capabilities.",
    ],
    engineeringFocus:
      "AI integration, application-to-AI communication, API design, scalable application architecture, and the practical engineering foundations of AI-powered products.",
  },
  {
    number: "04",
    featured: false,
    category: "AI DRIVEN DEVELOPMENT",
    title: "Make My Marriage",
    subtitle: "A collaborative wedding management platform",
    description:
      "A centralized platform that helps couples and their families plan Indian weddings, manage events and guests, track expenses, coordinate vendors, collect RSVPs, and share wedding memories through a unified workspace.",
    image: project04,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    icon: FiLayers,
    highlights: [
      "Designed a centralized workspace for managing wedding events, tasks, guests, vendors, and expenses.",
      "Developed a guest invitation and RSVP workflow that works through secure unique links without requiring guest accounts.",
    ],
    overview:
      "Make My Marriage simplifies the complexity of planning an Indian wedding by bringing family collaboration, event planning, guest management, digital invitations, expense tracking, vendor coordination, and private photo sharing into one platform.",
    contributions: [
      "Designed the core application structure and wedding-centric data relationships to support collaborative wedding management.",
      "Planned guest invitation and RSVP workflows, event-level invitations, role-based access, and private photo-sharing experiences.",
    ],
    engineeringFocus:
      "Focused on wedding-level data isolation, secure invitation tokens, role-based authorization, guest access without authentication, and maintainable relationships between weddings, members, events, tasks, guests, vendors, expenses, and photos.",
  },

  {
    number: "05",
    featured: false,
    category: "AI DRIVEN DEVELOPMENT",
    title: "VidyaMotion AI",
    subtitle: "Turn ideas into educational videos with AI",
    description:
      "An AI-powered video creation platform that transforms ideas and teaching notes into 60–90-second educational explainer videos. It combines AI-generated scripts and storyboards, natural narration, explanatory motion graphics, synchronized captions, conversational revisions, and Instagram publishing in one streamlined workflow.",
    image: project05,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Gemini API",
      "ElevenLabs",
      "Remotion",
    ],
    icon: FiLayers,
    highlights: [
      "Designed an AI-powered workflow that transforms ideas into structured storyboards and animated educational videos with synchronized narration and captions.",
      "Integrated conversational revisions, video previews, MP4 exports, and Instagram publishing and scheduling into a unified creator workspace.",
    ],
    overview:
      "VidyaMotion AI simplifies educational video production by combining AI-assisted content planning, structured storyboards, voice generation, explanatory motion graphics, and synchronized captions. Creators can review and refine their content before rendering, request changes through natural language, preview and download finished videos, and publish or schedule approved versions to Instagram.",
    contributions: [
      "Designed the application architecture and end-to-end idea-to-video workflow, including storyboard generation, approval, rendering, revision, and export.",
      "Planned integrations with Gemini for content generation, ElevenLabs for AI narration, and Remotion for programmatic motion-graphics rendering.",
      "Defined versioned generation workflows, durable background jobs, and recovery mechanisms to preserve previous successful video outputs.",
      "Designed private user workspaces, ownership-based authorization, and version-controlled Instagram publishing and scheduling workflows.",
    ],
    engineeringFocus:
      "Focused on AI orchestration, structured and validated storyboard generation, narration-to-animation synchronization, caption timing, asynchronous rendering, immutable video versions, secure user isolation, and reliable external publishing workflows.",
  },
];

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      data-project-media
      className="group relative min-h-56 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black md:min-h-full"
    >
      <div data-project-zoom className="absolute inset-0">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-slate-900 to-black p-6">
            <span className="absolute right-5 top-3 text-8xl font-bold tracking-tighter text-white/10">
              {project.number}
            </span>
            <project.icon className="mb-4 h-8 w-8 text-cyan-300" />
            <p className="text-xl font-semibold text-white">{project.title}</p>
            <p className="mt-2 text-xs text-gray-400">
              Add your project screenshot
            </p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-gray-200 backdrop-blur-lg">
        {project.category}
      </span>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef(null);

  // Expand / collapse the case study. Runs on mount too (a no-op at height 0).
  useGSAP(
    () => {
      gsap.to(panelRef.current, {
        height: expanded ? "auto" : 0,
        autoAlpha: expanded ? 1 : 0,
        duration: prefersReducedMotion() ? 0 : 0.5,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => ScrollTrigger.refresh(),
      });
    },
    { dependencies: [expanded] },
  );

  return (
    // Outer wrapper takes the scroll-driven 3D entrance; the article itself
    // takes the hover tilt, so the two never fight over the same transform.
    <div data-card-3d className="h-full">
      <article
        data-tilt
        className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-cyan-300/30 ${
          featured ? "grid md:grid-cols-2" : "flex flex-col"
        }`}
      >
        <div className={featured ? "min-h-72" : "aspect-[16/10]"}>
          <ProjectImage project={project} />
        </div>

        <div className={`flex flex-col p-5 sm:p-7 ${featured ? "lg:p-9" : ""}`}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium tracking-[0.16em] text-gray-500">
              PROJECT {project.number} / 05
            </span>
            {featured && (
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-gray-400">
                PROFESSIONAL EXPERIENCE
              </span>
            )}
          </div>

          <h3
            className={`font-semibold tracking-tight text-white ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-cyan-300">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          <ul className="mt-5 space-y-3">
            {project.highlights.slice(0, featured ? 3 : 2).map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, featured ? 5 : 3)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-400"
                >
                  {technology}
                </span>
              ))}
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={`case-study-${project.number}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-100"
            >
              {expanded ? "Close case study" : "Explore the case study"}
              {expanded ? (
                <FiChevronDown className="rotate-180 transition-transform" />
              ) : (
                <FiArrowUpRight />
              )}
            </button>
          </div>
        </div>

        <div
          ref={panelRef}
          id={`case-study-${project.number}`}
          style={{ height: 0, opacity: 0, visibility: "hidden" }}
          className="col-span-full overflow-hidden bg-black/20"
        >
          <div className="grid gap-7 border-t border-white/10 p-5 sm:p-7 md:grid-cols-2 lg:p-9">
            <div className="md:col-span-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                The work
              </p>
              <p className="text-sm leading-7 text-gray-400">
                {project.overview}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                My contributions
              </p>
              <ul className="space-y-2">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>

            {project.engineeringFocus && (
              <div className="md:col-span-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Engineering focus
                </p>
                <p className="text-sm leading-7 text-gray-400">
                  {project.engineeringFocus}
                </p>
              </div>
            )}

            <p className="text-xs leading-5 text-gray-600 md:col-span-2">
              Professional project details are limited to information that can
              be shared publicly.
            </p>
          </div>
        </div>
        {/* Cursor spotlight (positioned via --mx / --my on hover) */}
        <div
          data-spotlight
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(34, 211, 238, 0.13), transparent 45%)",
          }}
        />
      </article>
    </div>
  );
}

export default function Projects() {
  const scope = useRef(null);

  useMotion(scope, (root, { desktop }) => {
    const q = gsap.utils.selector(root);

    // ✦ Cards rise out of the floor: tipped back in 3D, they straighten as
    // they scroll into view while the screenshot settles from a slight zoom.
    // The picture is visible the whole way (no clip/wipe that could leave an
    // empty card). Scrubbed, so it reverses on the way back up.
    q("[data-card-3d]").forEach((card, i) => {
      const featured = card.querySelector("[data-tilt].grid");
      const zoom = card.querySelector("[data-project-zoom]");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: featured ? "top 55%" : "top 65%",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        card,
        {
          rotationX: featured ? 28 : 38,
          rotationZ: featured ? 0 : i % 2 ? 3 : -3,
          y: 140,
          scale: 0.86,
          transformPerspective: 1400,
          transformOrigin: "50% 100%",
        },
        { rotationX: 0, rotationZ: 0, y: 0, scale: 1, duration: 1 },
        0,
      )
        // Fade in quickly at the start so the card is never a faint ghost.
        .fromTo(
          card,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "none" },
          0,
        )
        .fromTo(zoom, { scale: 1.25 }, { scale: 1, duration: 1 }, 0);
    });

    // ✦ Desktop: cards tilt toward the cursor with a following spotlight.
    let cleanupTilt;
    if (desktop) {
      const offs = q("[data-tilt]").map((card) => {
        gsap.set(card, { transformPerspective: 1200 });
        const rx = gsap.quickTo(card, "rotationX", {
          duration: 0.6,
          ease: "power3.out",
        });
        const ry = gsap.quickTo(card, "rotationY", {
          duration: 0.6,
          ease: "power3.out",
        });
        const light = card.querySelector("[data-spotlight]");
        // Big (featured / expanded) cards tilt less so text stays readable.
        const max = () => (card.offsetHeight > 600 ? 2.5 : 6);

        const move = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          ry((px - 0.5) * 2 * max());
          rx((0.5 - py) * 2 * max());
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
          light.style.opacity = "1";
        };
        const leave = () => {
          rx(0);
          ry(0);
          light.style.opacity = "0";
        };

        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        return () => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        };
      });
      cleanupTilt = () => offs.forEach((off) => off());
    }

    // Project count ticks up.
    const counter = q("[data-count]")[0];
    if (counter) {
      const total = Number(counter.dataset.count);
      const state = { value: 0 };
      gsap.to(state, {
        value: total,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = String(Math.round(state.value)).padStart(
            2,
            "0",
          );
        },
        scrollTrigger: { trigger: counter, start: "top 90%", once: true },
      });
    }

    return () => cleanupTilt?.();
  });

  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section ref={scope} id="projects" className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p
            data-reveal
            className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-cyan-300"
          >
            <span className="h-px w-7 bg-cyan-300" />
            SELECTED WORK
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <h2
                data-split
                className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
              >
                Built with purpose.
                <br />
                <span className="text-gray-500">Engineered with care.</span>
              </h2>
              <p
                data-reveal
                className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base"
              >
                A selection of products and engineering work I've contributed
                to, from full-stack feature development to application stability
                and security.
              </p>
            </div>

            <div data-reveal className="hidden shrink-0 text-right sm:block">
              <p
                data-count={projects.length}
                className="text-4xl font-semibold tabular-nums tracking-tight text-cyan-300"
              >
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[10px] tracking-[0.18em] text-gray-500">
                SELECTED PROJECTS
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.number} project={project} featured />
          ))}
        </div>

        <div className="mb-6 mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p
              data-reveal
              className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-cyan-300"
            >
              <span className="h-px w-7 bg-cyan-300" />
              MORE WORK
            </p>
            <h3
              data-split
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Different problems.{" "}
              <span className="text-gray-500">Same mindset.</span>
            </h3>
          </div>

          <p data-reveal className="max-w-sm text-sm leading-6 text-gray-500">
            Three more projects showcasing product thinking, technical range,
            and practical execution.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <div
          data-reveal
          className="mt-8 flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.03] p-5 sm:items-center sm:p-6"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 text-cyan-300">
            <FiCode className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-200">
              Thoughtful engineering, not just shipped screens.
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Explore each case study to understand the work, contributions, and
              engineering decisions behind the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
