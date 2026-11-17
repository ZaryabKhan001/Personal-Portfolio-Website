import { NAVIGATION_LINKS } from "../assets/index";
import Logo from "./Logo";

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md backdrop-saturate-150">
    <div className="page flex h-[68px] items-center justify-between gap-6">
      <Logo />
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[15px] font-medium text-ink-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact" className="btn btn-primary !px-4 !py-2 text-sm !shadow-none sm:!px-[18px]">
        Start a project
      </a>
    </div>
  </header>
);

export default Navbar;
