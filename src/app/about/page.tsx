import type { Metadata } from "next";
import { Fingerprint, Compass, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About | Honey Pot Media",
  description:
    "Meet Honey Pot Media, a Tampa-born creative studio helping lifestyle brands build audiences that stick around. Learn our story, values, and what makes us different.",
  alternates: { canonical: "https://honeypotmedia.com/about" },
  openGraph: {
    title: "About | Honey Pot Media",
    description:
      "Meet Honey Pot Media, a Tampa-born creative studio helping lifestyle brands build audiences that stick around.",
    url: "https://honeypotmedia.com/about",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Honey Pot Media",
    description:
      "Meet Honey Pot Media, a Tampa-born creative studio helping lifestyle brands build audiences that stick around.",
    images: ["/og-image.png"],
  },
};

const values = [
  {
    icon: Fingerprint,
    title: "Authenticity Over Aesthetics",
    desc: "Looking good means nothing if it doesn\u2019t feel real. We create content that\u2019s polished but genuine, because audiences can spot fake from a mile away.",
  },
  {
    icon: Compass,
    title: "Strategy Before Anything",
    desc: "Every post, every reel, every story ties back to a bigger plan. We don\u2019t just create content. We create momentum.",
  },
  {
    icon: HeartHandshake,
    title: "Your Success Is Our Success",
    desc: "We treat your brand like it\u2019s our own. Your wins are our wins, and we show up every day like we have skin in the game.",
  },
];

export default function About() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "About", url: "https://honeypotmedia.com/about" },
        ]}
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content reveal">
          <h1>The Story Behind the Buzz</h1>
          <p>
            A Tampa-born creative studio helping lifestyle brands build
            audiences that stick around.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-layout">
          <div className="about-story-text reveal">
            <div className="section-label" style={{ textAlign: "left" }}>
              Our Story
            </div>
            <h2>Built for Brands Like Yours</h2>
            <p>
              Honey Pot Media started with a simple belief: lifestyle brands
              deserve better than cookie-cutter marketing. Too many talented
              business owners were stuck with generic strategies that
              didn&apos;t match their vibe or reach their people.
            </p>
            <p>
              We built Honey Pot to be the creative partner we wished existed. A
              team that gets the lifestyle space, understands Tampa&apos;s
              scene, and knows how to turn a brand&apos;s personality into a
              social media presence people actually want to follow.
            </p>
            <p>
              Today, we work with restaurants, wellness studios, boutiques,
              salons, and hospitality brands across Tampa, helping them build
              loyal audiences through strategy, content, and genuine community
              engagement.
            </p>
          </div>
          <div className="about-story-image reveal">
            <img
              src="/media/creative-team-collaboration.webp"
              alt="Creative team collaboration"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 55vw"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="about-team">
        <div className="section-label reveal">Meet the Team</div>
        <h2 className="section-title reveal">The Faces Behind the Brand</h2>
        <div className="about-team-grid">
          <div className="about-team-card reveal">
            <div className="about-team-img">
              <img
                src="/media/beauty-brand-photoshoot.webp"
                alt="Bella Jaramillo"
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-team-info">
              <h3>Bella Jaramillo</h3>
              <span className="about-team-role">Co-Founder &amp; Creative Director</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="about-team-card reveal">
            <div className="about-team-img">
              <img
                src="/media/honeypot-media-founder-megan.webp"
                alt="Megan Rapoza"
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-team-info">
              <h3>Megan Rapoza</h3>
              <span className="about-team-role">Co-Founder &amp; Strategy Lead</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values">
        <div className="section-label reveal">What We Believe</div>
        <h2 className="section-title reveal">More Than Just Posts</h2>
        <div className="about-values-grid">
          {values.map((v) => (
            <div className="about-value-card reveal" key={v.title}>
              <div className="about-value-icon">
                <v.icon size={28} strokeWidth={1.5} color="#4A3A33" />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAMPA ROOTS */}
      <section className="about-tampa">
        <div className="about-tampa-layout">
          <div className="about-tampa-image reveal">
            <img
              src="/media/social-media-strategy-planning.webp"
              alt="Social media strategy planning"
              width={1200}
              height={1800}
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-tampa-text reveal">
            <div className="section-label" style={{ textAlign: "left" }}>
              Tampa Born
            </div>
            <h2>Rooted in the Tampa Lifestyle</h2>
            <p>
              We live here, we work here, and we know this city inside and out.
              From South Tampa brunch spots to Seminole Heights boutiques, we
              understand what makes Tampa&apos;s lifestyle scene tick. That
              local insight gives our clients an edge that out-of-town agencies
              can&apos;t match.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="smm-cta">
        <h2 className="reveal">Let&rsquo;s Build Something Together</h2>
        <p className="svc-cta-sub reveal">
          We&rsquo;d love to hear about your brand and see if we&rsquo;re the
          right fit.
        </p>
        <a href="/contact" className="btn-primary smm-cta-btn reveal">
          Book a Call &rarr;
        </a>
      </section>

      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
