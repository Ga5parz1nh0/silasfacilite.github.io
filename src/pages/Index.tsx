
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import Guarantee from "@/components/Guarantee";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <SocialProof />
      <LeadForm />
      <Guarantee />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
