import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiTarget, FiMessageCircle, FiLayers } from "react-icons/fi";

import project01 from "./project01.webp";
import project02 from "./project02.webp";
import project03 from "./project03.webp";
import project04 from "./project04.webp";
import project05 from "./project05.webp";
import resume from "./Zaryab.pdf";

export const NAVIGATION_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Zaryab Zubair",
  status: "Taking on new projects",
  description:
    "a software and AI engineer. I design AI-powered products and the dependable systems behind them, own them from architecture to production, and keep them secure and easy to grow.",
};

export const PROOF = {
  clients: ["Abu Dhabi Global Market", "Centerpoint Connect", "Nextbridge"],
  stats: [
    { value: "2021", label: "shipping software since" },
    { value: "5", label: "products built" },
    { value: "2", label: "promotions in 15 months" },
  ],
};

// Same card pattern for every project: what it is, what it gave the user or client, the full story on demand.
export const PROJECTS = [
  {
    image: project01,
    imageAlt: "ADGM real estate platform home page",
    imagePosition: "object-left",
    kind: "client",
    who: "Abu Dhabi Global Market · Real estate",
    title: "Upgrading a live real estate platform without disrupting it",
    summary:
      "ADGM's digital home for real estate. I ship features and help keep the platform stable and secure while it stays in use.",
    points: [
      "Built and improved features for the platform's users.",
      "Carried the app through major upgrades and fixed what broke along the way.",
      "Helped close security vulnerabilities in third-party packages.",
    ],
    details: [
      { label: "The work", text: "Improving an existing real estate application while keeping it compatible, stable and safer to run." },
      { label: "What it gave the client", text: "Fewer compatibility problems, a more stable app and less risk from outdated packages." },
    ],
    confidential: true,
  },
  {
    image: project02,
    imageAlt: "Centerpoint Connect platform for roofing contractors",
    kind: "client",
    who: "Centerpoint Connect · US roofing software",
    title: "One workflow for the office and the field",
    summary:
      "A platform for commercial roofing contractors that brings inspections, service tickets, proposals, scheduling and reporting into one place.",
    points: [
      "Deliver features end to end, from the screen to the database.",
      "Connect services and turn business rules into working software.",
      "Keep what crews see in the field in step with the office.",
    ],
    details: [
      { label: "The work", text: "Delivering features across every layer of the product: interface, services, business rules and stored data." },
      { label: "What it gave the client", text: "One engineer who can own a feature from request to release." },
    ],
    confidential: true,
  },
  {
    image: project05,
    imageAlt: "VidyaMotion AI video creation workspace",
    kind: "product",
    who: "VidyaMotion AI · Education",
    title: "Turning teaching notes into explainer videos with AI",
    summary:
      "Creators paste an idea or their notes and get a 60–90 second explainer video with a script, narration, motion graphics and captions, ready to post to Instagram.",
    points: [
      "Designed the whole path from idea to storyboard, approval, video and export.",
      "Creators ask for changes in plain language and get a new version.",
      "Every finished video is kept safe, even when a new render fails.",
    ],
    details: [
      { label: "The work", text: "AI plans the content, writes a structured storyboard and narrates it. Motion graphics and captions stay in sync with the voice. Creators review before anything renders, then preview, download, publish or schedule." },
      { label: "What I owned", text: "The product's structure, the full video workflow, background rendering that recovers from failures, private workspaces, and versioned publishing and scheduling." },
    ],
  },
  {
    image: project04,
    imageAlt: "Make My Marriage wedding planning workspace",
    kind: "product",
    who: "Make My Marriage · Events",
    title: "Planning an Indian wedding in one shared workspace",
    summary:
      "Couples and their families plan events, manage guests, coordinate vendors, track spending and share photos together.",
    points: [
      "Guests RSVP through secure personal links, with no account needed.",
      "Each family member sees and edits only what their role allows.",
      "Each wedding's data and photos stay private to that wedding.",
    ],
    details: [
      { label: "The work", text: "Bringing family collaboration, event planning, guests, digital invitations, expenses, vendors and private photo sharing into one platform." },
      { label: "What I owned", text: "The core structure linking weddings, members, events, tasks, guests, vendors, expenses and photos; invitation and RSVP flows; access by role." },
    ],
  },
  {
    image: project03,
    imageAlt: "Finan Smart finance tracker dashboard",
    kind: "product",
    who: "Finan Smart · Personal finance",
    title: "Clearer spending insights with AI",
    summary: "A finance tracker that organises your spending and uses AI to explain where your money goes.",
    points: [
      "Built an AI-powered tracking experience.",
      "Prepared financial data so the AI's answers are reliable.",
      "Handled slow or failed AI responses so the app keeps working.",
    ],
    details: [
      { label: "The work", text: "Turning financial data into clearer insights, and learning what it takes to build a product around AI that people can rely on." },
      { label: "What I owned", text: "The app and its AI connection: how data is prepared and sent, how answers are handled, and how it holds up as usage grows." },
    ],
  },
];

export const ABOUT = [
  "I turn product requirements into reliable software. Before I write code, I make sure I understand the problem. Then I build it so the next change is easy too.",
  "I've worked on marketplaces, business tools and AI products, so I know software has to serve users and the business at the same time.",
];

export const PRINCIPLES = [
  { icon: FiTarget, title: "I own the outcome", text: "I take a feature from request to release and stay with it after launch." },
  { icon: FiMessageCircle, title: "You always know where things stand", text: "Clear updates, honest estimates, no surprises at the deadline." },
  { icon: FiLayers, title: "Code your team can keep building on", text: "Clear structure and sensible decisions, so it stays cheap to change." },
];

// Newest first. `roles` within a company are also newest first.
export const EXPERIENCE = [
  {
    company: "Nextbridge",
    period: "Dec 2024 – Present",
    type: "Full-time",
    roles: [
      { title: "Software Engineer", period: "Mar 2026 – Present", current: true },
      { title: "Associate Software Engineer", period: "Mar 2025 – Mar 2026" },
      { title: "Intern", period: "Dec 2024 – Mar 2025" },
    ],
  },
  {
    company: "DASH",
    period: "2023 – 2024",
    type: "Part-time",
    duringStudies: true,
    roles: [{ title: "Frontend Developer", period: "2023 – 2024" }],
  },
  {
    company: "Way Developers",
    period: "2021 – 2023",
    type: "Part-time",
    duringStudies: true,
    roles: [{ title: "Frontend Developer", period: "2021 – 2023" }],
  },
];

export const CONTACT_NEEDS = [
  "A new product",
  "Features for an existing product",
  "Upgrade or fix",
  "AI features",
];

export const SOCIAL_MEDIA_LINKS = [
  { label: "LinkedIn", handle: "/in/zaryab-zubair", href: "https://www.linkedin.com/in/zaryab-zubair/", icon: FaLinkedin },
  { label: "GitHub", handle: "ZaryabKhan001", href: "https://github.com/ZaryabKhan001", icon: FaGithub },
  { label: "X", handle: "@Zaryab_005", href: "https://x.com/Zaryab_005", icon: FaXTwitter },
  { label: "Résumé", handle: "PDF", href: resume },
];
