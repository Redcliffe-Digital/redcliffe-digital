import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/frameworks", label: "Frameworks" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/insights", label: "Insights" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-brand-cream/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-soft border-b border-brand-stone" : ""
      }`}
    >
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="shrink-0" aria-label="Redcliffe Digital — home">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-8"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-red"
                    : "text-brand-navy hover:text-brand-red"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="link" to="/contact" variant="primary" withArrow>
            Speak to us
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-brand-navy"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-brand-stone bg-brand-cream"
        >
          <nav aria-label="Primary mobile" className="container-x py-4">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-3 text-base font-medium border-b border-brand-stone ${
                        isActive ? "text-brand-red" : "text-brand-navy"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <Button as="link" to="/contact" variant="primary" withArrow>
                  Speak to us
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
