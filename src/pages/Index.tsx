import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PoolTypesSection from "@/components/PoolTypesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ServicesSection from "@/components/ServicesSection";
import SaunasSection from "@/components/SaunasSection";
import CollectivePoolsSection from "@/components/CollectivePoolsSection";
import GallerySection from "@/components/GallerySection";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 glow-element"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div 
          className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full blur-[100px] opacity-10 glow-element"
          style={{ background: "hsl(var(--primary))", animationDelay: "-2s" }}
        />
        <div 
          className="absolute -bottom-[5%] left-[20%] w-[30%] h-[30%] rounded-full blur-[110px] opacity-15 glow-element"
          style={{ background: "hsl(var(--accent))", animationDelay: "-4s" }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PoolTypesSection />
        <DifferentialsSection />
        <ServicesSection />
        <SaunasSection />
        <CollectivePoolsSection />
        <GallerySection />
        <BrandsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
