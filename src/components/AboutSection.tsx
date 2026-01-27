import aboutImage from "@/assets/about-store.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent -z-10" />
            <img 
              src={aboutImage} 
              alt="MAC Industrial Equipments Store Interior" 
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </div>

          {/* Content */}
          <div>
            <div className="industrial-border">
              <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
                About MAC
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight">
                Four Decades of
                <br />
                <span className="text-steel-light">Tools That Work</span>
              </h2>
            </div>

            <div className="space-y-6 text-steel-light leading-relaxed">
              <p>
                Established over four decades ago, MAC Industrial Equipments has built its reputation 
                on a simple promise — <span className="text-white font-medium">quality tools that deliver value.</span>
              </p>
              <p>
                We serve industrial buyers who need dependable equipment, consistent availability, 
                and expert guidance.
              </p>
              <p>
                From small-scale requirements to large B2B procurement, MAC is structured to support 
                both retail and wholesale needs with equal efficiency.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-steel/30">
              <div>
                <p className="text-4xl font-heading text-primary">41+</p>
                <p className="text-steel-light text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading text-primary">16+</p>
                <p className="text-steel-light text-sm mt-1">Partner Brands</p>
              </div>
              <div>
                <p className="text-4xl font-heading text-primary">1000+</p>
                <p className="text-steel-light text-sm mt-1">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
