"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const hasSnapped = useRef(false);

  useEffect(() => {
    const handler = () => {
      if (hasSnapped.current || !heroRef.current) return;
      if (window.scrollY > 0) {
        hasSnapped.current = true;
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        window.scrollTo({ top: heroBottom, behavior: "smooth" });
        window.removeEventListener("scroll", handler);
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <Image
        src="/assets/honey-pot-media-logo-white.svg"
        alt="Honeypot Media"
        width={700}
        height={700}
        priority
        className="hero-logo"
      />
    </section>
  );
}
