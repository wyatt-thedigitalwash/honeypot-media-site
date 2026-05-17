import type { Metadata } from "next";
import { Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact | Honey Pot Media",
  description:
    "Get in touch with Honey Pot Media. Book a free discovery call and let's talk about how we can help your lifestyle brand grow on social media.",
  alternates: { canonical: "https://honeypotmedia.com/contact" },
  openGraph: {
    title: "Contact | Honey Pot Media",
    description:
      "Get in touch with Honey Pot Media in Tampa, FL. Book a free discovery call for your lifestyle brand.",
    url: "https://honeypotmedia.com/contact",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Honey Pot Media",
    description:
      "Get in touch with Honey Pot Media in Tampa, FL. Book a free discovery call.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "Contact", url: "https://honeypotmedia.com/contact" },
        ]}
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content reveal">
          <h1>Let&rsquo;s Talk</h1>
          <p>
            Whether you&rsquo;re ready to get started or just want to learn
            more, we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-main">
        <div className="contact-main-layout">
          <div className="contact-info reveal">
            <div className="section-label" style={{ textAlign: "left" }}>
              Get in Touch
            </div>
            <h2>We&rsquo;d Love to Hear From You</h2>
            <p className="contact-info-desc">
              Tell us a little about your brand and what you&rsquo;re looking
              for. We&rsquo;ll get back to you within 24 hours to set up a free
              discovery call.
            </p>

            <div className="contact-details">
              <a href="mailto:hello@honeypotmediafl.com" className="contact-detail">
                <Mail size={18} strokeWidth={1.5} />
                <span>hello@honeypotmediafl.com</span>
              </a>
              <div className="contact-detail">
                <MapPin size={18} strokeWidth={1.5} />
                <span>Tampa, FL</span>
              </div>
              <a
                href="https://www.instagram.com/honeypot.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <Instagram size={18} strokeWidth={1.5} />
                <span>@honeypot.media</span>
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://www.instagram.com/honeypot.media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in new tab)"
              >
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="TikTok">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
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

          <div className="contact-form-col reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="contact-expect">
        <div className="section-label reveal">What to Expect</div>
        <h2 className="section-title reveal">After You Reach Out</h2>
        <div className="contact-expect-grid">
          <div className="contact-expect-step reveal">
            <div className="contact-expect-num">01</div>
            <h3>We Respond</h3>
            <p>
              You&rsquo;ll hear back from us within 24 hours, usually sooner.
            </p>
          </div>
          <div className="contact-expect-step reveal">
            <div className="contact-expect-num">02</div>
            <h3>Discovery Call</h3>
            <p>
              A quick 20-30 minute call to learn about your brand, goals, and
              what you need.
            </p>
          </div>
          <div className="contact-expect-step reveal">
            <div className="contact-expect-num">03</div>
            <h3>Custom Proposal</h3>
            <p>
              We put together a tailored plan and pricing based on your specific
              situation. No cookie-cutter packages.
            </p>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
