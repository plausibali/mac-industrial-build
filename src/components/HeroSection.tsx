import { Button } from "@/components/ui/button";
import { MapPin, Mail, Store } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-charcoal text-sm font-heading uppercase tracking-wider">
              41+ Years of Excellence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-4 leading-tight">
            MAC Industrial
            <br />
            <span className="text-steel-light">Equipments</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary font-heading tracking-wide mb-6">
            "Engineered for reliable supply"
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
            For over 41 years, MAC Industrial Equipments has been a trusted name in industrial tools 
            and B2B supply, serving industries with reliable, high-quality tools at competitive prices.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-sm">
            <span className="text-foreground font-heading uppercase tracking-wider">Industrial Supply</span>
            <span className="text-steel-light">|</span>
            <span className="text-foreground font-heading uppercase tracking-wider">B2B Distribution</span>
            <span className="text-steel-light">|</span>
            <span className="text-foreground font-heading uppercase tracking-wider">Retail & Wholesale</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Bangalore, India</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="industrial" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Store className="w-5 h-5" />
              Visit Our Store
            </Button>
            <Button 
              variant="industrial-outline" 
              size="xl"
              asChild
            >
              <a href="mailto:macindustrialequipments@gmail.com">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default HeroSection;
