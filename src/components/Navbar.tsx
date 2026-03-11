"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        <Logo size={40} variant="full" prefix="nav" />
        <span>Honey Pot Media</span>
      </a>
      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#why" onClick={closeMenu}>
            Why Us
          </a>
        </li>
        <li>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={closeMenu}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get Started
          </a>
        </li>
      </ul>
      <button
        className="mobile-toggle"
        aria-label="Menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
