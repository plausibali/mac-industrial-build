import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnquirySection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {  e.preventDefault();
  setIsSubmitting(true);

try {
  await fetch(
    "https://script.google.com/macros/s/AKfycbxaLGYvkK3kqw3JYBHRBqxgEGihmWXbKNw4S4CTSqMKuR_ZyiPHzeP9u4GKWZTQyWGbxg/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    }
  );

  toast({
    title: "Enquiry Sent",
    description: "We will contact you soon.",
  });

  setFormData({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

} catch (error) {

  toast({
    title: "Error",
    description: "Failed to send enquiry",
    variant: "destructive",
  });

} finally {

  setIsSubmitting(false);

}


    
  };

  return (
    <section id="enquiry" className="section-padding bg-muted">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-sm font-heading uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading text-charcoal mb-4">
            Send Us An <span className="text-steel">Enquiry</span>
          </h2>
          <p className="text-steel">
            Have a specific requirement? Fill in the form below and we'll get back to you.
          </p>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-border p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-charcoal font-medium">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-charcoal font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-charcoal font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirement" className="text-charcoal font-medium">
                Your Requirement *
              </Label>
              <Textarea
                id="requirement"
                name="requirement"
                placeholder="Describe the tools or equipment you're looking for..."
                value={formData.requirement}
                onChange={handleChange}
                required
                className="bg-background min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              variant="industrial"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
