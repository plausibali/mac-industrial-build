const brands = [
  "Multitec",
  "PYE",
  "Freemans",
  "Taparia",
  "Jainson",
  "INGCO",
  "Toolworth",
  "Dayton",
  "GTECH",
  "MECO",
  "Force",
  "Bosch",
  "Golden Bullet",
  "Venus",
  "King Tony",
  "Pro's Kit"
];

const BrandsSection = () => {
  // Double the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-16 bg-steel overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
            Brands We Work With
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4">
            Authorised Dealerships & <span className="text-white">Trusted Names</span>
          </h2>
          <p className="text-white text-sm">
            Authorized dealer for leading industrial tool brands.
          </p>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-steel to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-steel to-transparent z-10" />
        
        {/* Marquee Container */}
        <div className="flex animate-marquee">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4"
            >
              <span className="font-heading text-xl md:text-2xl text-white/80 hover:text-primary transition-colors whitespace-nowrap tracking-wider">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
