import { Target, BarChart3, MapPin, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Strategy That Attracts",
    desc: "We don\u2019t chase trends blindly. Every campaign is built on a foundation of intentional strategy designed to draw the right audience to your brand.",
  },
  {
    icon: BarChart3,
    title: "Content That Performs",
    desc: "Pretty isn\u2019t enough. Our content is crafted to engage, convert, and give you real, measurable results you can see in the numbers.",
  },
  {
    icon: MapPin,
    title: "Local Insight",
    desc: "Rooted in Tampa\u2019s lifestyle scene, we know what resonates here: the culture, the trends, and the audiences that matter most to your brand.",
  },
  {
    icon: Heart,
    title: "Lifestyle Expertise",
    desc: "Wellness, hospitality, beauty, fitness. We specialize in the lifestyle space and understand how to speak to the people who live it.",
  },
];

export default function WhyUs() {
  return (
    <section id="why">
      <div className="section-label reveal">Why Honey Pot</div>
      <h2 className="section-title reveal">We Make Brands Magnetic</h2>
      <p className="why-intro reveal">
        The best brands don&apos;t chase attention, they attract it. At
        Honey Pot Media, we specialize in turning businesses into the honey pot
        of their industry: the place people naturally gravitate toward. Through
        intentional branding, engaging content, and strategic marketing, we help
        our clients build buzz, grow loyal audiences, and stand out in
        Tampa&apos;s competitive lifestyle scene.
      </p>

      <div className="why-layout">
        <div className="why-image reveal">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/media/woman-laptop-social-media-planning.webp"
            />
            <img
              src="/media/social-media-strategy-planning.webp"
              alt="Social media strategy planning"
              width={1200}
              height={1800}
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="why-grid">
          {values.map((v) => (
            <div className="why-item reveal" key={v.title}>
              <div className="why-item-header">
                <v.icon size={22} strokeWidth={1.5} color="#4A3A33" />
                <h3>{v.title}</h3>
              </div>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-cta reveal">
        <a href="/contact" className="btn-primary">
          See What We Can Do for You &rarr;
        </a>
      </div>
    </section>
  );
}
