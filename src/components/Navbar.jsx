import { useState } from "react";
import { navLinks, profile } from "../data/portfolio.js";
import useActiveSection from "../hooks/useActiveSection.js";

export default function Navbar() {
  const active = useActiveSection(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <button className="logo" onClick={() => go("home")}>
        {profile.logo}
      </button>

      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <button
            key={l.id}
            className={active === l.id ? "active" : ""}
            onClick={() => go(l.id)}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
