import Image from "next/image";

const subServices = [
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

export default function SubServices() {
  return (
    <section id="sub-services">
      <div className="section-label reveal">Also on the Menu</div>
      <h2 className="section-title reveal">Add-On Services</h2>
      <p className="section-subtitle reveal">
        Extend your reach with targeted services designed to complement your
        core social strategy.
      </p>

      <div className="sub-services-grid">
        {subServices.map((s) => (
          <div className="sub-service-card reveal" key={s.title}>
            <div className="sub-service-img">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 75vw, 25vw"
              />
            </div>
            <div className="sub-service-overlay" />
            <div className="sub-service-content">
              <p className="sub-service-desc">{s.desc}</p>
              <h3>{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
