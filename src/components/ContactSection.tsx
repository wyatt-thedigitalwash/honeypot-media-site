import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <div className="section-label reveal">Ready?</div>
        <h2 className="reveal">
          Let&apos;s Make Something Sweet Together
        </h2>
        <p className="reveal">
          Book a free discovery call and let&apos;s talk about how we can help
          your brand bloom on social media.
        </p>
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
