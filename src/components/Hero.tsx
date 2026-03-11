import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-blob-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span> Now Booking New Clients
        </div>
        <h1>
          Make Your Brand <span className="highlight">Irresistibly</span> Sweet
          Online
        </h1>
        <p>
          We&apos;re a boutique social media management and content creation
          studio helping brands build authentic communities and scroll-stopping
          content.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Let&apos;s Work Together &rarr;
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>
        <div className="hero-logo-display">
          <Logo size={120} variant="full" prefix="hero" />
        </div>
      </div>
    </section>
  );
}
