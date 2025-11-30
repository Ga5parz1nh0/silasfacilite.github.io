
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import Guarantee from "@/components/Guarantee";
import About from "@/components/About";
import RegionalManager from "@/components/RegionalManager";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingInstagram from "@/components/FloatingInstagram";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <SocialProof />
      <LeadForm />
      <Guarantee />
      <About />
      <RegionalManager />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWhatsApp />
      <FloatingInstagram />
    </div>
  );
};

export default Index;
