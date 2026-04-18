import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/assets/honey-pot-media-logo-white-hero.webp"
        alt="Honey Pot Media logo"
        width={1400}
        height={656}
        priority
        className="hero-logo"
      />
    </section>
  );
}
