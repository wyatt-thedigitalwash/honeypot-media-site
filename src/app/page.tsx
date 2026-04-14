import TopRibbon from "@/components/TopRibbon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SubServices from "@/components/SubServices";
import WhyUs from "@/components/WhyUs";
import DreamClients from "@/components/DreamClients";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <TopRibbon />
      <Navbar />
      <Hero />
      <Services />
      <SubServices />
      <WhyUs />
      <DreamClients />
      <Process />
      <Testimonials />
      <ContactSection />
      <Footer />
      <ScrollReveal />
    </>
  );
}
