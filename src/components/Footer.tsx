import macLogo from "@/assets/mac-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-start gap-4">
            <img src={macLogo} alt="MAC Industrial Logo" className="h-20 w-auto mt-2" />
            <div className="flex flex-col justify-center">
              <p className="font-heading text-foreground tracking-wider text-lg">MAC Industrial Equipments</p>
              <p className="text-muted-foreground text-sm italic">
                "Engineered for reliable supply"
              </p>
              <a 
                href="mailto:macindustrialequipments@gmail.com" 
                className="text-primary text-sm hover:underline whitespace-nowrap"
              >
                macindustrialequipments@gmail.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} MAC Industrial Equipments. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Bangalore, India | Est. 1984
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-industrial-amber to-primary" />
    </footer>
  );
};

export default Footer;
