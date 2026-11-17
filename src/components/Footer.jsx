import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-white/10 bg-navy py-7 text-sm text-navy-muted">
    <div className="page flex flex-wrap items-center justify-between gap-3">
      <Logo variant="dark" size={34} />
      <span>© {new Date().getFullYear()} Zaryab Zubair · Built with purpose. Improved continuously.</span>
    </div>
  </footer>
);

export default Footer;
