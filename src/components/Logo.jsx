import { useId } from "react";

const PALETTES = {
  light: { from: "#2447e6", to: "#0891b2", node: "#0891b2", text: "text-ink", dot: "text-teal" },
  dark: { from: "#6b8cff", to: "#22d3ee", node: "#22d3ee", text: "text-white", dot: "text-teal-light" },
};

/** The Flow mark: two Zs drawn as one line inside a hexagon. */
export const LogoMark = ({ variant = "light", size = 38, className = "" }) => {
  const id = useId();
  const p = PALETTES[variant];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={p.from} />
          <stop offset="1" stopColor={p.to} />
        </linearGradient>
      </defs>
      <path d="M32 4L56.2 18V46L32 60L7.8 46V18Z" fill="none" stroke={`url(#${id})`} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M21 20H43L21 32H43L21 44H43" fill="none" stroke={`url(#${id})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="20" r="3.6" fill={p.node} />
      <circle cx="43" cy="44" r="3.6" fill={p.node} />
    </svg>
  );
};

/** Mark plus "Zaryab Zubair." wordmark. */
const Logo = ({ variant = "light", size = 38, href = "#top" }) => {
  const p = PALETTES[variant];
  return (
    <a href={href} aria-label="Zaryab Zubair, back to top" className={`group inline-flex items-center gap-2.5 no-underline ${p.text}`}>
      <LogoMark variant={variant} size={size} className="flex-none transition-transform duration-300 group-hover:scale-110" />
      <span className="whitespace-nowrap text-base font-bold leading-none tracking-[-0.03em] sm:text-lg">
        Zaryab Zubair<span className={p.dot}>.</span>
      </span>
    </a>
  );
};

export default Logo;
