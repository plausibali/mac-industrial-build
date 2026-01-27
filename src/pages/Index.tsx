import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BrandsSection from "@/components/BrandsSection";
import WhyMACSection from "@/components/WhyMACSection";
import ContactSection from "@/components/ContactSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BrandsSection />
        <WhyMACSection />
        <ContactSection />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
