import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
// import { FileDown } from "lucide-react"; // uncomment when resume button is re-enabled
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-heading text-xl tracking-tight"
          aria-label="Scroll to top"
        >
          D<span className="text-accent">.</span>
        </button>

        {/* Desktop links — absolutely centered on the navbar */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? "text-accent"
                    : "text-tertiary hover:text-primary"
                }`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Resume button — hidden for now, uncomment to enable */}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-accent/30 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 sm:inline-flex"
          >
            <FileDown size={14} />
            Resume
          </a> */}

          <button
            onClick={toggle}
            className="rounded-lg p-2 text-tertiary transition-colors hover:bg-hover hover:text-primary"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-tertiary transition-colors hover:bg-hover md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border-subtle md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      active === id
                        ? "bg-accent/10 text-accent"
                        : "text-tertiary hover:bg-hover hover:text-primary"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              {/* Resume link — hidden for now, uncomment to enable */}
              {/* <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-left text-sm font-medium text-accent transition-colors hover:bg-accent/10"
                >
                  <FileDown size={14} />
                  Resume
                </a>
              </li> */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
