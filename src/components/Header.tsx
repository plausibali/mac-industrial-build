import { MapPin } from "lucide-react";
import macLogo from "@/assets/mac-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={macLogo} alt="MAC Industrial Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <p className="font-heading text-foreground text-sm tracking-wider">MAC Industrial</p>
              <p className="text-muted-foreground text-xs">Est. 1985</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary font-heading text-sm uppercase tracking-wider transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-muted-foreground hover:text-primary font-heading text-sm uppercase tracking-wider transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("brands")}
              className="text-muted-foreground hover:text-primary font-heading text-sm uppercase tracking-wider transition-colors"
            >
              Brands
            </button>
            <button 
              onClick={() => scrollToSection("why-mac")}
              className="text-muted-foreground hover:text-primary font-heading text-sm uppercase tracking-wider transition-colors"
            >
              Why MAC
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary font-heading text-sm uppercase tracking-wider transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm hidden md:inline">Bangalore, India</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
