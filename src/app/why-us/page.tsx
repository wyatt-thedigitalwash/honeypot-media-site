import type { Metadata } from "next";
import { Target, BarChart3, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Why Honey Pot | Tampa Social Media Agency",
  description:
    "Discover why lifestyle brands in Tampa choose Honey Pot Media. Intentional strategy, scroll-stopping content, local insight, and a proven process tailored to your brand.",
  alternates: { canonical: "https://honeypotmedia.com/why-us" },
  openGraph: {
    title: "Why Honey Pot | Tampa Social Media Agency",
    description:
      "Discover why lifestyle brands in Tampa choose Honey Pot Media. Intentional strategy, scroll-stopping content, and local insight.",
    url: "https://honeypotmedia.com/why-us",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Honey Pot | Tampa Social Media Agency",
    description:
      "Discover why lifestyle brands in Tampa choose Honey Pot Media.",
    images: ["/og-image.png"],
  },
};

const valuesLeft = [
  {
    icon: Target,
    title: "Strategy That Attracts",
    desc: "We don\u2019t chase trends blindly. Every campaign is built on a foundation of intentional strategy designed to draw the right audience to your brand.",
  },
  {
    icon: MapPin,
    title: "Local Insight",
    desc: "Rooted in Tampa\u2019s lifestyle scene, we know what resonates here: the culture, the trends, and the audiences that matter most to your brand.",
  },
];

const valuesRight = [
  {
    icon: BarChart3,
    title: "Content That Performs",
    desc: "Pretty isn\u2019t enough. Our content is crafted to engage, convert, and give you real, measurable results you can see in the numbers.",
  },
  {
    icon: Heart,
    title: "Lifestyle Expertise",
    desc: "Wellness, hospitality, beauty, fitness. We specialize in the lifestyle space and understand how to speak to the people who live it.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We get to know your brand, goals, audience, and vibe. This is where the magic starts to crystallize.",
  },
  {
    num: "02",
    title: "Custom Strategy",
    desc: "We build a tailored content and growth plan designed around your unique brand personality and objectives.",
  },
  {
    num: "03",
    title: "Create & Launch",
    desc: "We handle everything, from content creation to scheduling and community management. You just approve and watch it grow.",
  },
  {
    num: "04",
    title: "Grow & Optimize",
    desc: "Monthly analytics, strategy tweaks, and fresh ideas to keep your brand buzzing and your audience engaged.",
  },
];

export default function WhyUs() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "Why Us", url: "https://honeypotmedia.com/why-us" },
        ]}
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="wu-hero">
        <div className="wu-hero-content reveal">
          <h1>Why Brands Choose Honey Pot</h1>
          <p>
            We&rsquo;re not just another agency. We&rsquo;re your growth
            partner, your creative team, and your biggest fan.
          </p>
          <a href="/contact" className="smm-hero-cta">
            Book a Call &rarr;
          </a>
        </div>
      </section>

      {/* WHY HONEY POT */}
      <section className="wu-values">
        <div className="section-label reveal">What Sets Us Apart</div>
        <h2 className="section-title reveal">We Make Brands Magnetic</h2>
        <p className="why-intro reveal">
          The best brands don&apos;t chase attention, they attract it. At Honey
          Pot Media, we specialize in turning businesses into the honey pot of
          their industry: the place people naturally gravitate toward.
        </p>

        <div className="wu-values-stagger">
          <div className="wu-values-col">
            {valuesLeft.map((v) => (
              <div className="wu-value-item reveal" key={v.title}>
                <div className="wu-value-header">
                  <v.icon size={22} strokeWidth={1.5} color="#4A3A33" />
                  <h3>{v.title}</h3>
                </div>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="wu-values-col wu-values-col-offset">
            {valuesRight.map((v) => (
              <div className="wu-value-item reveal" key={v.title}>
                <div className="wu-value-header">
                  <v.icon size={22} strokeWidth={1.5} color="#4A3A33" />
                  <h3>{v.title}</h3>
                </div>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="wu-process">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-title reveal">
          A Proven Process, Tailored to You
        </h2>
        <p className="section-subtitle reveal">
          Getting started with us is as smooth as honey. Here&rsquo;s what to
          expect.
        </p>

        <div className="process-layout">
          <div className="process-steps">
            {steps.map((step) => (
              <div className="process-step reveal" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-image reveal">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/media/brand-photography-session.webp"
              />
              <img
                src="/media/honey-dipper-drizzle-branding.webp"
                alt="Honey pot media branding"
                width={1200}
                height={1800}
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="smm-cta">
        <h2 className="reveal">Ready to See the Difference?</h2>
        <p className="svc-cta-sub reveal">
          Let&rsquo;s talk about what Honey Pot can do for your brand.
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
