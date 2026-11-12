import { useState } from "react";
import { navLinks } from "../data/portfolioData.js";

export default function Navbar({ activeId, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="Go to top">
          Yeamin <span>Fuhad</span>
        </a>
        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? "active" : ""}
              aria-current={activeId === link.id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle dark and light mode">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
