import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Our Services | Honey Pot Media",
  description:
    "Full-service social media management, content creation, influencer marketing, and brand strategy for lifestyle brands in Tampa, FL.",
  alternates: { canonical: "https://honeypotmedia.com/services" },
  openGraph: {
    title: "Our Services | Honey Pot Media",
    description:
      "Full-service social media management, content creation, influencer marketing, and brand strategy for lifestyle brands in Tampa, FL.",
    url: "https://honeypotmedia.com/services",
    siteName: "Honey Pot Media",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Honey Pot Media",
    description:
      "Full-service social media management, content creation, influencer marketing, and brand strategy for lifestyle brands in Tampa, FL.",
    images: ["/og-image.png"],
  },
};

const addOns = [
  {
    title: "Influencer Marketing",
    desc: "Strategic partnerships that put your brand in front of the right audiences.",
    image: "/media/content-creator-portrait.webp",
  },
  {
    title: "Event & Brand Activations",
    desc: "Buzzworthy experiences that bring your brand to life and keep the conversation going.",
    image: "/media/professional-content-creation.webp",
  },
  {
    title: "Strategy & Growth Consulting",
    desc: "Data-driven roadmaps that convert followers into customers.",
    image: "/media/social-media-strategy-planning.webp",
  },
  {
    title: "Community Management",
    desc: "Authentic engagement that turns casual followers into loyal brand advocates.",
    image: "/media/brand-event-activation.webp",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://honeypotmedia.com" },
          { name: "Services", url: "https://honeypotmedia.com/services" },
        ]}
      />
      <Navbar />
      <main id="main-content">

      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-content reveal">
          <h1>Everything Your Brand Needs to Thrive Online</h1>
          <p>
            From strategy to content to daily management, we handle your entire
            social media presence so you can focus on what you do best.
          </p>
          <a href="/contact" className="smm-hero-cta">
            Book a Call &rarr;
          </a>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="svc-core">
        <div className="section-label reveal">Core Services</div>
        <h2 className="section-title reveal">The Foundation</h2>

        <div className="svc-core-grid">
          <div className="svc-core-card reveal">
            <div className="svc-core-img">
              <Image
                src="/media/social-media-management-workspace.webp"
                alt="Social media management workspace"
                width={1600}
                height={1067}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="svc-core-body">
              <h3>Social Media Management</h3>
              <p>
                Full-service account management across every major platform.
                We handle scheduling, community engagement, analytics, and
                growth strategy so your brand stays consistent and always on.
              </p>
              <a
                href="/services/social-media-management"
                className="service-learn-more"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>

          <div className="svc-core-card reveal">
            <div className="svc-core-img">
              <Image
                src="/media/tampa-lifestyle-content-shoot.webp"
                alt="Tampa lifestyle content creation shoot"
                width={1600}
                height={1067}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="svc-core-body">
              <h3>Content Creation</h3>
              <p>
                Scroll-stopping photography, video, reels, and branded graphics
                tailored to your audience. Every piece is designed to drive
                engagement and tell your brand&apos;s story.
              </p>
              <a
                href="/services/content-creation"
                className="service-learn-more"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="svc-addons">
        <div className="section-label reveal">Add-On Services</div>
        <h2 className="section-title reveal">Take It Further</h2>
        <p className="section-subtitle reveal">
          Layer these onto either core service to amplify your results.
        </p>

        <div className="sub-services-grid">
          {addOns.map((a) => (
            <div className="sub-service-card reveal" key={a.title}>
              <div className="sub-service-img">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 75vw, 25vw"
                />
              </div>
              <div className="sub-service-overlay" />
              <div className="sub-service-content">
                <p className="sub-service-desc">{a.desc}</p>
                <h3>{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="smm-cta">
        <h2 className="reveal">Not Sure What You Need?</h2>
        <p className="svc-cta-sub reveal">
          Book a free discovery call and we&rsquo;ll build a custom plan for
          your brand.
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
