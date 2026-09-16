import { useEffect, useState } from "react";
import logo from "@/assets/rdx-logo.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Gym Code", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="RDX Forma" className="h-10 w-10 rounded-lg object-cover ring-1 ring-primary/40" />
          <span className="font-display text-lg font-bold tracking-tight">
            RDX <span className="text-gradient-red">FORMA</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#membership"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-flex"
        >
          Join Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="mx-6 mt-3 rounded-2xl glass p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">
                {l.label}
              </a>
            ))}
            <a href="#membership" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Join RDX FORMA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
