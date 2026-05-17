import type { Metadata } from "next";
import {
  CalendarDays,
  Send,
  MessageCircle,
  BarChart3,
  Hash,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Social Media Management | Honey Pot Media",
  description:
    "Full-service social media management for lifestyle brands in Tampa, FL. Consistent posting, community engagement, analytics, and growth strategy so you can focus on running your business.",
  alternates: {
    canonical:
      "https://honeypotmedia.com/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management | Honey Pot Media",
    description:
      "Full-service social media management for lifestyle brands in Tampa, FL. Consistent posting, community engagement, analytics, and growth strategy.",
    url: "https://honeypotmedia.com/services/social-media-management",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management | Honey Pot Media",
    description:
      "Full-service social media management for lifestyle brands in Tampa, FL.",
    images: ["/og-image.png"],
  },
};

const included = [
  {
    icon: CalendarDays,
    title: "Content Calendar",
    desc: "A monthly plan mapped to your goals, seasonal trends, and what your audience actually wants to see.",
  },
  {
    icon: Send,
    title: "Scheduling & Publishing",
    desc: "We handle posting across Instagram, TikTok, Facebook, and LinkedIn so your feed stays active without you lifting a finger.",
  },
  {
    icon: MessageCircle,
    title: "Community Engagement",
    desc: "We respond to comments, engage with followers, and build real conversations around your brand daily.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Monthly performance reports that show what\u2019s working, what\u2019s not, and where we\u2019re headed next.",
  },
  {
    icon: Hash,
    title: "Hashtag & SEO Strategy",
    desc: "Research-backed hashtags and caption strategy to get your content in front of the right people.",
  },
  {
    icon: TrendingUp,
    title: "Trend Monitoring",
    desc: "We keep an eye on what\u2019s trending in your industry and jump on opportunities before they pass.",
  },
];

const steps = [
  {
    num: "01",
    title: "Onboarding",
    desc: "We learn your brand voice, aesthetic, audience, and goals inside and out.",
  },
  {
    num: "02",
    title: "Strategy & Calendar",
    desc: "We build your first month\u2019s content calendar and get your approval before anything goes live.",
  },
  {
    num: "03",
    title: "We Handle the Rest",
    desc: "Posting, engaging, monitoring, optimizing. You review, we execute.",
  },
  {
    num: "04",
    title: "Monthly Check-Ins",
    desc: "We meet monthly to review performance, adjust strategy, and plan what\u2019s next.",
  },
];

const audiences = [
  "Boutiques",
  "Med Spas",
  "Fitness Studios",
  "Cafes",
  "Salons",
  "Wellness Studios",
  "Real Estate",
  "Hotels",
  "Bars & Nightlife",
];

export default function SocialMediaManagement() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "Services", url: "https://honeypotmedia.com/services" },
          {
            name: "Social Media Management",
            url: "https://honeypotmedia.com/services/social-media-management",
          },
        ]}
      />
      <ServiceSchema
        name="Social Media Management"
        description="Full-service social media management for lifestyle brands in Tampa, FL. Content calendars, scheduling, community engagement, analytics, and growth strategy."
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="smm-hero">
        <div className="smm-hero-content reveal">
          <h1>Run Your Business. We&rsquo;ll Run Your Feed.</h1>
          <p>
            We take over your social media so you can focus on running your
            business. Consistent posting, genuine engagement, and a strategy
            that actually grows your following.
          </p>
          <a href="/contact" className="smm-hero-cta">
            Book a Call &rarr;
          </a>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="smm-problem">
        <div className="smm-problem-layout">
          <div className="smm-problem-text reveal">
            <h2>Posting Shouldn&rsquo;t Feel Like a Second Job</h2>
            <p>
              You started your business to do what you love, not to spend hours
              figuring out what to post. Between running the day-to-day,
              managing staff, and keeping customers happy, social media falls to
              the bottom of the list. Or worse, it becomes inconsistent. A post
              here, a story there, then radio silence for two weeks. Your
              audience notices.
            </p>
          </div>
          <div className="smm-problem-image reveal">
            <img
              src="/media/woman-laptop-social-media-planning.webp"
              alt="Woman planning social media content on laptop"
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="smm-included">
        <div className="section-label reveal">What&rsquo;s Included</div>
        <h2 className="section-title reveal">Everything Your Socials Need</h2>
        <div className="smm-included-grid">
          {included.map((item) => (
            <div className="smm-included-card reveal" key={item.title}>
              <div className="smm-included-icon">
                <item.icon size={24} strokeWidth={1.5} color="#4A3A33" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="smm-process">
        <div className="section-label reveal" style={{ color: "var(--honey-glow)" }}>
          How It Works
        </div>
        <h2 className="section-title reveal" style={{ color: "var(--cream)" }}>
          From Onboarding to Ongoing
        </h2>
        <div className="smm-steps">
          {steps.map((step) => (
            <div className="smm-step reveal" key={step.num}>
              <div className="smm-step-num">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="smm-audience">
        <div className="smm-audience-layout">
          <div className="smm-audience-text reveal">
            <h2>Is This Right for You?</h2>
            <p>
              This is for the business owner who knows social media matters but
              doesn&rsquo;t have the time, energy, or team to keep up. You want
              a consistent, professional presence without hiring in-house.
            </p>
          </div>
          <div className="smm-audience-tags reveal">
            {audiences.map((a) => (
              <span className="niche-pill" key={a}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="smm-cta">
        <h2 className="reveal">Ready to Hand Off Your Socials?</h2>
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
