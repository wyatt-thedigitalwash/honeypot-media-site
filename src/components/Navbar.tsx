"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [inHeroZone, setInHeroZone] = useState(isHomepage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Publish navbar height as CSS variable
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    function publish() {
      document.documentElement.style.setProperty(
        "--nav-h",
        `${nav!.offsetHeight}px`
      );
    }
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  // Hero zone scroll tracking — only on homepage
  useEffect(() => {
    if (!isHomepage) {
      setInHeroZone(false);
      return;
    }

    const nav = navRef.current;
    let cachedPos2 = Infinity;
    let currentlyInHero = true;
    const HYSTERESIS = 8;

    function recalcPos2() {
      const services = document.getElementById("services");
      if (!services || !nav) return;
      cachedPos2 = services.offsetTop - nav.offsetHeight;
    }

    function onScroll() {
      const y = window.scrollY;
      if (currentlyInHero) {
        if (y >= cachedPos2) {
          currentlyInHero = false;
          setInHeroZone(false);
        }
      } else {
        if (y < cachedPos2 - HYSTERESIS) {
          currentlyInHero = true;
          setInHeroZone(true);
        }
      }
    }

    function onResize() {
      recalcPos2();
      onScroll();
    }

    document.fonts.ready.then(() => {
      recalcPos2();
      onScroll();
    });

    recalcPos2();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isHomepage]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav id="navbar" ref={navRef} className={inHeroZone ? "nav-hero-zone" : ""} aria-label="Main navigation">
      <a href="/" className="nav-logo" aria-label="Honey Pot Media — Home">
        <Image
          src="/assets/honey-pot-media-logo-white.svg"
          alt="Honey Pot Media"
          width={128}
          height={60}
        />
      </a>
      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks" role={menuOpen ? "menu" : undefined}>
        <li
          className="nav-dropdown desktop-only"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a href="/services" onClick={closeMenu}>
            Services
          </a>
          <ul className={`nav-dropdown-menu${servicesOpen ? " show" : ""}`}>
            <li>
              <a href="/services/social-media-management" onClick={closeMenu}>
                Social Media Management
              </a>
            </li>
            <li>
              <a href="/services/content-creation" onClick={closeMenu}>
                Content Creation
              </a>
            </li>
          </ul>
        </li>
        <li className="mobile-only">
          <a href="/services/social-media-management" onClick={closeMenu}>
            Social Media Management
          </a>
        </li>
        <li className="mobile-only">
          <a href="/services/content-creation" onClick={closeMenu}>
            Content Creation
          </a>
        </li>
        <li>
          <a href="/about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="/why-us" onClick={closeMenu}>
            Why Us
          </a>
        </li>
        <li className="mobile-cta">
          <a href="/contact" className="nav-cta" onClick={closeMenu}>
            Book a Call
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <a href="/contact" className="nav-cta desktop-cta">
          Book a Call
        </a>
        <button
          className={`mobile-toggle${menuOpen ? " active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
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
