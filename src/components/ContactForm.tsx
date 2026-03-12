"use client";

import { useState, FormEvent } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const PLATFORMS = ["Instagram", "TikTok", "Facebook", "LinkedIn"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [activePlatforms, setActivePlatforms] = useState<
    Record<string, boolean>
  >({});
  const [handles, setHandles] = useState<Record<string, string>>({});

  function togglePlatform(platform: string) {
    setActivePlatforms((prev) => ({ ...prev, [platform]: !prev[platform] }));
    if (activePlatforms[platform]) {
      setHandles((prev) => {
        const next = { ...prev };
        delete next[platform];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      businessName: (form.elements.namedItem("businessName") as HTMLInputElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      platforms: Object.entries(handles)
        .filter(([key]) => activePlatforms[key])
        .map(([platform, handle]) => ({ platform, handle })),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      try {
        await fetch("https://app.thedigitalwash.com/api/log-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            siteKey: process.env.NEXT_PUBLIC_SITE_KEY,
            name: data.name,
            email: data.email,
            phone: null,
            message: data.message,
            sourcePage: window.location.pathname,
          }),
        });
      } catch {
        // Silent fail — never block form submission
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-card">
        <div className="form-success">
          Thanks for reaching out! We&apos;ll be in touch soon.
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="contact-input"
          placeholder="Your name"
          required
        />

        <label htmlFor="businessName">Business Name</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          className="contact-input"
          placeholder="Your business name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact-input"
          placeholder="your@email.com"
          required
        />

        <fieldset className="platforms-fieldset">
          <legend>Platforms</legend>
          <div className="platforms-grid">
            {PLATFORMS.map((platform) => (
              <div key={platform} className="platform-item">
                <label className="platform-checkbox">
                  <input
                    type="checkbox"
                    checked={!!activePlatforms[platform]}
                    onChange={() => togglePlatform(platform)}
                  />
                  <span className="check">
                    <svg viewBox="0 0 14 14">
                      <polyline points="2.5 7 5.5 10.5 11.5 3.5" />
                    </svg>
                  </span>
                  <span>{platform}</span>
                </label>
                {activePlatforms[platform] && (
                  <input
                    type="text"
                    className="contact-input platform-handle"
                    placeholder={`@your${platform.toLowerCase().replace(/\s/g, "")}handle`}
                    value={handles[platform] || ""}
                    onChange={(e) =>
                      setHandles((prev) => ({
                        ...prev,
                        [platform]: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </fieldset>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="contact-input"
          placeholder="Tell us about your brand and goals..."
          required
        />

        <button
          type="submit"
          className="btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message \u2192"}
        </button>
        {status === "error" && <p className="form-error">{error}</p>}
      </form>

      <div className="contact-social-links">
        <a href="#" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" aria-label="TikTok">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.53a6.27 6.27 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.2 8.2 0 0 0 4.76 1.52V6.86a4.84 4.84 0 0 1-1-.17z" />
          </svg>
        </a>
        <a href="#" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
}
