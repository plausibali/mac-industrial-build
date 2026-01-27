import { Check } from "lucide-react";

const strengths = [
  "Competitive pricing",
  "Wide stock availability",
  "Industry expertise",
  "Bulk & B2B supply",
  "After-sales support & guidance",
  "Custom sourcing on request"
];

const WhyMACSection = () => {
  return (
    <section id="why-mac" className="section-padding bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="industrial-border">
              <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
                Why MAC
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight">
                Quality. Availability.
                <br />
                <span className="text-steel-light">Expertise.</span>
              </h2>
            </div>

            <p className="text-steel-light leading-relaxed mb-8">
              What sets MAC apart is our focus on supplying tools that balance affordability 
              with quality — a combination not easily found in the market.
            </p>

            {/* Strengths List */}
            <ul className="space-y-4 mb-10">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{strength}</span>
                </li>
              ))}
            </ul>

            <p className="text-steel-light italic border-l-2 border-primary pl-6">
              "When industries need tools they can rely on, they come to MAC."
            </p>
          </div>

          {/* Trust & Experience */}
          <div className="bg-white p-10 lg:p-12">
            <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
              Trust & Experience
            </p>
            <h3 className="text-3xl lg:text-4xl font-heading text-charcoal mb-6">
              A Name Industries
              <br />
              <span className="text-steel">Trust</span>
            </h3>
            <div className="space-y-4 text-steel leading-relaxed">
              <p>
                With over 41 years in the hardware and tools industry, MAC Industrial Equipments 
                has built long-standing relationships across industrial and B2B sectors in 
                Bangalore and beyond.
              </p>
              <p>
                Our experience ensures every recommendation is practical, tested, and fit for purpose.
              </p>
            </div>

            {/* Experience Visual */}
            <div className="mt-10 pt-10 border-t border-steel/20">
              <div className="flex items-end gap-4">
                <span className="text-7xl font-heading text-primary leading-none">41</span>
                <div className="pb-2">
                  <p className="text-charcoal font-heading uppercase tracking-wider">Years</p>
                  <p className="text-steel text-sm">of industry experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMACSection;
