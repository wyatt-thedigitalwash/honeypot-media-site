import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSnap from "@/components/HeroSnap";
import Services from "@/components/Services";
import SubServices from "@/components/SubServices";
import WhyUs from "@/components/WhyUs";
import DreamClients from "@/components/DreamClients";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://honeypotmedia.com" }]}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <SubServices />
        <WhyUs />
        <DreamClients />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <HeroSnap />
      <ScrollReveal />
    </>
  );
}
