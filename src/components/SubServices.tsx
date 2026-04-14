import { Users, Sparkles, TrendingUp, MessageCircle } from "lucide-react";

const subServices = [
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Strategic influencer partnerships that put your brand in front of the right audiences. We handle outreach, negotiation, and campaign management.",
  },
  {
    icon: Sparkles,
    title: "Event & Brand Activations",
    desc: "From pop-ups to launch parties, we create buzzworthy experiences that bring your brand to life and generate content that keeps the conversation going.",
  },
  {
    icon: TrendingUp,
    title: "Strategy & Growth Consulting",
    desc: "Data-driven strategies that actually move the needle. We dig into your metrics, spot opportunities, and build roadmaps that convert followers into customers.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    desc: "We nurture your audience with authentic engagement — responding, connecting, and turning casual followers into loyal brand advocates.",
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
            <div className="sub-service-icon">
              <s.icon size={22} strokeWidth={1.5} color="#6B4226" />
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
