import { Wrench, HardHat, Plane, Cpu } from "lucide-react";

const categories = [
  {
    icon: Wrench,
    title: "Industrial Tools",
    description: "Heavy-duty tools for manufacturing, maintenance, and industrial operations."
  },
  {
    icon: HardHat,
    title: "Construction Tools",
    description: "Professional-grade equipment for construction and building projects."
  },
  {
    icon: Plane,
    title: "Aviation Tools",
    description: "Precision instruments and specialized tools for aviation maintenance."
  },
  {
    icon: Cpu,
    title: "Electronics & Testing",
    description: "Testing equipment and electronic tools for precision work."
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
            What We Supply
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading text-charcoal mb-6">
            Tools for Every
            <br />
            <span className="text-steel">Industrial Requirement</span>
          </h2>
          <p className="text-steel">
            Our portfolio is curated to meet professional-grade requirements across industries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group p-8 border-b-2 border-transparent hover:border-primary transition-colors"
            >
              <div className="mb-6">
                <category.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading text-charcoal mb-3">
                {category.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
