"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [inHeroZone, setInHeroZone] = useState(isHomepage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 450);
  }, []);

  const openMenu = useCallback(() => {
    setMenuClosing(false);
    setMenuOpen(true);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  const mobileMenuLinks = [
    { href: "/services/social-media-management", label: "Social Media Management" },
    { href: "/services/content-creation", label: "Content Creation" },
    { href: "/about", label: "About" },
    { href: "/why-us", label: "Why Us" },
  ];

  return (
    <>
      <nav id="navbar" ref={navRef} className={inHeroZone ? "nav-hero-zone" : ""} aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Honey Pot Media — Home">
          <Image
            src="/assets/honey-pot-media-logo-white.svg"
            alt="Honey Pot Media"
            width={128}
            height={60}
          />
        </a>
        <ul className="nav-links" id="navLinks">
          <li
            className="nav-dropdown desktop-only"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="/services">
              Services
            </a>
            <ul className={`nav-dropdown-menu${servicesOpen ? " show" : ""}`}>
              <li>
                <a href="/services/social-media-management">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="/services/content-creation">
                  Content Creation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/why-us">
              Why Us
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="/contact" className="nav-cta desktop-cta">
            Book a Call
          </a>
          <button
            className={`mobile-toggle${menuOpen && !menuClosing ? " active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => menuOpen ? closeMenu() : openMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      {menuOpen && (
        <div className={`mobile-menu-overlay${menuClosing ? " closing" : ""}`} aria-modal="true" role="dialog">
          <div className="mobile-menu-bg" />
          <div className="mobile-menu-content">
            <ul className="mobile-menu-links">
              {mobileMenuLinks.map((link, i) => (
                <li key={link.href} style={{ animationDelay: menuClosing ? `${(mobileMenuLinks.length - 1 - i) * 0.05}s` : `${i * 0.08 + 0.15}s` }}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-cta" style={{ animationDelay: menuClosing ? "0s" : `${mobileMenuLinks.length * 0.08 + 0.25}s` }}>
              <a href="/contact" className="mobile-menu-cta-btn" onClick={closeMenu}>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
