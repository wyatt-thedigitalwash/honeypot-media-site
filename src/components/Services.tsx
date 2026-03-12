import { Smartphone, Palette, Users, Sparkles, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services">
      <div className="section-label reveal">What We Do</div>
      <h2 className="section-title reveal">
        Sweet Services for Growing Brands
      </h2>
      <p className="section-subtitle reveal">
        From strategy to execution, we handle every detail of your social media
        presence so you can focus on what you do best.
      </p>

      <div className="divider">
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
      </div>

      <div className="services-grid" style={{ marginTop: "2rem" }}>
        <div className="service-card reveal">
          <div className="service-icon">
            <Smartphone size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Social Media Management</h3>
          <p>
            Full-service account management across all major platforms. We handle
            scheduling, community engagement, analytics, and growth strategy so
            your brand stays consistent and active.
          </p>
          <div className="service-tags">
            <span className="service-tag">Instagram</span>
            <span className="service-tag">TikTok</span>
            <span className="service-tag">Facebook</span>
            <span className="service-tag">LinkedIn</span>
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon">
            <Palette size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Content Creation</h3>
          <p>
            Scroll-stopping graphics, reels, stories, and branded content
            tailored to your audience. Every piece is designed to drive
            engagement and tell your brand&apos;s story.
          </p>
          <div className="service-tags">
            <span className="service-tag">Reels &amp; Video</span>
            <span className="service-tag">Graphics</span>
            <span className="service-tag">Photography</span>
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon">
            <Users size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Influencer Marketing</h3>
          <p>
            Strategic influencer partnerships that put your brand in front of
            the right audiences. We handle outreach, negotiation, and campaign
            management from start to finish.
          </p>
          <div className="service-tags">
            <span className="service-tag">Partnerships</span>
            <span className="service-tag">Campaigns</span>
            <span className="service-tag">UGC</span>
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon">
            <Sparkles size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Event &amp; Brand Activations</h3>
          <p>
            From pop-ups to launch parties, we create buzzworthy experiences
            that bring your brand to life and generate content that keeps the
            conversation going.
          </p>
          <div className="service-tags">
            <span className="service-tag">Pop-Ups</span>
            <span className="service-tag">Launch Events</span>
            <span className="service-tag">Experiential</span>
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon">
            <TrendingUp size={28} strokeWidth={1.5} color="#6B4226" />
          </div>
          <h3>Strategy &amp; Growth Consulting</h3>
          <p>
            Data-driven strategies that actually move the needle. We dive deep
            into your metrics, identify opportunities, and build roadmaps that
            convert followers into customers.
          </p>
          <div className="service-tags">
            <span className="service-tag">Reporting</span>
            <span className="service-tag">Content Calendar</span>
            <span className="service-tag">Growth Plans</span>
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
