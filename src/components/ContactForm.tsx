"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact-input"
          placeholder="your@email.com"
          required
        />
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
          {status === "sending" ? "Sending..." : "Book Your Free Call \u2192"}
        </button>
        {status === "error" && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
}
