import { Smartphone, Palette } from "lucide-react";

export default function Services() {
  return (
    <section id="services">
      <div className="section-label reveal">What We Do</div>
      <h2 className="section-title reveal">Our Core Services</h2>
      <p className="section-subtitle reveal">
        Two things we do better than anyone &mdash; manage your social presence
        and create content that stops the scroll.
      </p>

      <div className="services-main-grid">
        <div className="service-card service-card-lg reveal">
          <div className="service-icon">
            <Smartphone size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Social Media Management</h3>
          <p>
            Full-service account management across every major platform. We
            handle scheduling, community engagement, analytics, and growth
            strategy so your brand stays consistent, active, and always on.
          </p>
          <div className="service-tags">
            <span className="service-tag">Instagram</span>
            <span className="service-tag">TikTok</span>
            <span className="service-tag">Facebook</span>
            <span className="service-tag">LinkedIn</span>
          </div>
        </div>

        <div className="service-card service-card-lg reveal">
          <div className="service-icon">
            <Palette size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Content Creation</h3>
          <p>
            Scroll-stopping graphics, reels, stories, and branded content
            tailored to your audience. Every piece is designed to drive
            engagement, tell your brand&apos;s story, and look damn good doing
            it.
          </p>
          <div className="service-tags">
            <span className="service-tag">Reels &amp; Video</span>
            <span className="service-tag">Graphics</span>
            <span className="service-tag">Photography</span>
          </div>
        </div>
      </div>

      <div className="section-cta reveal">
        <a href="#contact" className="btn-primary">
          Get a Custom Quote &rarr;
        </a>
      </div>
    </section>
  );
}
