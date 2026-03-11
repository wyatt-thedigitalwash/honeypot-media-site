export default function Services() {
  return (
    <section id="services">
      <div className="section-label reveal">What We Do</div>
      <h2 className="section-title reveal">
        Sweet Services for Growing Brands
      </h2>
      <p className="section-subtitle reveal">
        From strategy to execution, we handle every drop of your social media
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
          <div className="service-icon">📱</div>
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
          <div className="service-icon">🎨</div>
          <h3>Content Creation</h3>
          <p>
            Scroll-stopping graphics, reels, stories, and branded content
            tailored to your audience. Every piece is designed to drive
            engagement and tell your brand&apos;s story beautifully.
          </p>
          <div className="service-tags">
            <span className="service-tag">Reels &amp; Video</span>
            <span className="service-tag">Graphics</span>
            <span className="service-tag">Photography</span>
          </div>
        </div>
        <div className="service-card reveal">
          <div className="service-icon">📊</div>
          <h3>Strategy &amp; Analytics</h3>
          <p>
            Data-driven strategies that actually move the needle. We dive deep
            into your metrics, identify opportunities, and build content
            calendars that convert followers into customers.
          </p>
          <div className="service-tags">
            <span className="service-tag">Reporting</span>
            <span className="service-tag">Content Calendar</span>
            <span className="service-tag">Growth Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
