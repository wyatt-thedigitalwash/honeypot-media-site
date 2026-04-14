"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navClass = [
    scrolled ? "scrolled" : "",
    heroVisible ? "nav-hero" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id="navbar" className={navClass}>
      <a href="#" className="nav-logo">
        <Logo height={60} />
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
          <a href="#dream-clients" onClick={closeMenu}>
            Clients
          </a>
        </li>
        <li>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
        </li>
        <li className="mobile-cta">
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Book a Call
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <a href="#contact" className="nav-cta desktop-cta">
          Book a Call
        </a>
        <button
          className={`mobile-toggle${menuOpen ? " active" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
