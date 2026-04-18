import type { Metadata } from "next";
import {
  Camera,
  Palette,
  Users,
  Film,
  MessageSquare,
  Repeat,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Content Creation | Honey Pot Media",
  description:
    "Professional content creation for lifestyle brands in Tampa, FL. Photography, video, reels, branded graphics, and social media content that stops the scroll.",
  alternates: {
    canonical: "https://honeypotmedia.com/services/content-creation",
  },
  openGraph: {
    title: "Content Creation | Honey Pot Media",
    description:
      "Professional content creation for lifestyle brands in Tampa, FL. Photography, video, reels, branded graphics, and social media content.",
    url: "https://honeypotmedia.com/services/content-creation",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation | Honey Pot Media",
    description:
      "Professional content creation for lifestyle brands in Tampa, FL.",
    images: ["/og-image.png"],
  },
};

const includedLeft = [
  {
    icon: Camera,
    title: "Photo & Video Shoots",
    desc: "On-location shoots tailored to your brand. Product flatlays, lifestyle imagery, behind-the-scenes, team features.",
  },
  {
    icon: Palette,
    title: "Branded Graphics",
    desc: "Custom-designed posts, carousels, and story templates that match your visual identity.",
  },
  {
    icon: Users,
    title: "UGC Coordination",
    desc: "We source, curate, and repurpose user-generated content from your customers and community.",
  },
];

const includedRight = [
  {
    icon: Film,
    title: "Reels & Short-Form Video",
    desc: "Scroll-stopping reels and TikToks edited with trending audio, captions, and motion graphics.",
  },
  {
    icon: MessageSquare,
    title: "Story Content",
    desc: "Daily story templates, polls, Q&As, and engagement-driven content that keeps your audience tapping.",
  },
  {
    icon: Repeat,
    title: "Content Repurposing",
    desc: "One shoot becomes a month of content. We turn your raw footage into posts, reels, stories, and more.",
  },
];

const steps = [
  {
    num: "01",
    title: "Creative Brief",
    desc: "We define your brand\u2019s visual direction, content pillars, and what types of content will move the needle.",
  },
  {
    num: "02",
    title: "Shoot Day",
    desc: "We come to you. Our team handles direction, styling, and production so all you have to do is show up.",
  },
  {
    num: "03",
    title: "Edit & Deliver",
    desc: "We edit, design, and package everything into a content library ready to post or hand off to your social team.",
  },
  {
    num: "04",
    title: "Refine & Repeat",
    desc: "We review what performed best and use those insights to shape the next round of content.",
  },
];

export default function ContentCreation() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "Services", url: "https://honeypotmedia.com/services" },
          {
            name: "Content Creation",
            url: "https://honeypotmedia.com/services/content-creation",
          },
        ]}
      />
      <ServiceSchema
        name="Content Creation"
        description="Professional content creation for lifestyle brands in Tampa, FL. Photography, video, reels, branded graphics, and social media content that stops the scroll."
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="cc-hero">
        <div className="cc-hero-content reveal">
          <h1>Content That Stops the Scroll</h1>
          <p>
            Photography, video, graphics, and reels designed to make your brand
            look as good online as it does in person.
          </p>
          <a href="/contact" className="smm-hero-cta">
            Book a Call &rarr;
          </a>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="cc-problem">
        <div className="cc-problem-layout">
          <div className="cc-problem-image reveal">
            <img
              src="/media/content-creator-portrait.webp"
              alt="Content creator at work"
              width={1200}
              height={1800}
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="cc-problem-text reveal">
            <h2>Your Brand Deserves Better Than Stock Photos</h2>
            <p>
              People make snap judgments online. If your content looks thrown
              together, blurry, or generic, potential customers keep scrolling.
              The brands winning on social media aren&rsquo;t just posting more.
              They&rsquo;re posting better. Professional, on-brand content that
              feels authentic and looks polished is what separates the businesses
              people follow from the ones they scroll past.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="cc-included">
        <div className="section-label reveal">What&rsquo;s Included</div>
        <h2 className="section-title reveal">Content Built for Your Brand</h2>
        <div className="cc-included-stagger">
          <div className="cc-included-col">
            {includedLeft.map((item) => (
              <div className="cc-included-card reveal" key={item.title}>
                <div className="smm-included-icon">
                  <item.icon size={24} strokeWidth={1.5} color="#4A3A33" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="cc-included-col cc-included-col-offset">
            {includedRight.map((item) => (
              <div className="cc-included-card reveal" key={item.title}>
                <div className="smm-included-icon">
                  <item.icon size={24} strokeWidth={1.5} color="#4A3A33" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="cc-process">
        <div className="section-label reveal">Our Process</div>
        <h2 className="section-title reveal">From Concept to Content Library</h2>
        <div className="cc-process-grid">
          {steps.map((step) => (
            <div className="cc-process-card reveal" key={step.num}>
              <div className="cc-process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="smm-cta">
        <h2 className="reveal">Let&rsquo;s Create Something Worth Sharing</h2>
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
