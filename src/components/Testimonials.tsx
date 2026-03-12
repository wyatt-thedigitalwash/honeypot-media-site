export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-label reveal">Kind Words</div>
      <h2 className="section-title reveal">What Our Clients Say</h2>
      <p className="section-subtitle reveal">
        Don&apos;t just take our word for it &mdash; here&apos;s what brands
        we&apos;ve worked with have to say.
      </p>

      <div className="testimonials-grid">
        <div className="testimonial-card reveal">
          <p>
            Honey Pot Media completely transformed our social media presence. Our
            engagement tripled in just two months, and the content they create is
            absolutely beautiful. Worth every penny!
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">SK</div>
            <div>
              <div className="testimonial-name">Sarah K.</div>
              <div className="testimonial-role">Boutique Owner</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card reveal">
          <p>
            Working with Honey Pot feels like having an in-house creative team.
            They understand our brand voice perfectly and consistently deliver
            content that our audience loves. Truly the sweetest partnership!
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">MR</div>
            <div>
              <div className="testimonial-name">Marcus R.</div>
              <div className="testimonial-role">Restaurant Owner</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-cta reveal">
        <a href="#contact" className="btn-primary">
          Join Our Happy Clients &rarr;
        </a>
      </div>
    </section>
  );
}
