import { Button } from "@/components/ui/button";
import { MapPin, Mail, Store, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
            Visit & Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading text-charcoal mb-6">
            Get the Right Tool.
            <br />
            <span className="text-steel">The First Time.</span>
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="bg-white border border-border p-8 lg:p-10 flex flex-col h-full">
            <div className="mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading text-charcoal mb-4">
              Store Location
            </h3>
            <div className="flex-1">
              <address className="text-steel not-italic leading-relaxed">
                81/3, Silver Jubilee Park Road
                <br />
                Bangalore – 560002
                <br />
                Karnataka, India
              </address>
            </div>
            <div className="mt-6">
              <Button 
                variant="industrial" 
                size="lg"
                className="w-full"
                asChild
              >
                <a 
                  href="https://google.com/maps/place/81,+SJP+Road,+3rd+Cross,+Dodpete,+Nagarathpete,+Bengaluru,+Karnataka+560002/@12.9321894,77.5670379,14z/data=!4m6!3m5!1s0x3bae15e05cab59f3:0x91a82a5d65537af0!8m2!3d12.9644775!4d77.5831205!16s%2Fg%2F11lmp2n2xg?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Store className="w-5 h-5" />
                  Visit Store
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="bg-white border border-border p-8 lg:p-10 flex flex-col h-full">
            <div className="mb-6">
              <Phone className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading text-charcoal mb-4">
              Contact Us
            </h3>
            <div className="flex-1">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+918105572992" 
                    className="text-charcoal hover:text-primary transition-colors"
                  >
                    +91 8105572992
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+919845917920" 
                    className="text-charcoal hover:text-primary transition-colors"
                  >
                    +91 9845917920
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:macindustrialequipments@gmail.com" 
                    className="text-charcoal hover:text-primary transition-colors break-all text-sm"
                  >
                    macindustrialequipments@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button 
                variant="industrial" 
                size="lg"
                className="w-full"
                asChild
              >
                <a href="tel:+918105572992">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button 
                variant="industrial-outline" 
                size="lg"
                className="w-full"
                asChild
              >
                <a href="mailto:macindustrialequipments@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
