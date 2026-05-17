const niches = [
  "Wellness Studios",
  "Pilates & Yoga",
  "Cafes",
  "Coffee Shops",
  "Boutiques",
  "Rooftop Bars",
  "Nightlife Venues",
  "Beauty Brands",
  "Med Spas",
  "Fitness Studios",
  "Markets",
  "Local Brands",
  "Realtors",
  "Event Brands",
];

export default function DreamClients() {
  return (
    <section id="dream-clients">
      <div className="section-label reveal">Who We Work With</div>
      <h2 className="section-title reveal">Built for Lifestyle Brands</h2>
      <p className="section-subtitle reveal">
        If your brand lives in the lifestyle space, you&apos;re exactly who we
        love working with.
      </p>

      <div className="niche-cloud reveal">
        {niches.map((n) => (
          <span className="niche-pill" key={n}>
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}
