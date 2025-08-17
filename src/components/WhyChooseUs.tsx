import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, Clock, Award, Truck, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Best Prices Guaranteed",
      description: "We match any competitor's price and offer the most competitive rates in the market.",
      highlight: "Price Match Promise"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All parts undergo rigorous testing and come with comprehensive warranties.",
      highlight: "Lifetime Warranty"
    },
    {
      icon: Clock,
      title: "Fast Shipping",
      description: "Same-day processing and express shipping options to get you back online quickly.",
      highlight: "24-48hr Delivery"
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Decade of expertise in mobile repair industry with proven track record.",
      highlight: "Industry Leaders"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional technical support team available 24/7 to assist with any questions.",
      highlight: "24/7 Available"
    },
    {
      icon: Truck,
      title: "Free Returns",
      description: "Not satisfied? Return any item within 30 days for full refund, no questions asked.",
      highlight: "30-Day Returns"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted by <span className="text-primary">100,000+</span> Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience and commitment to excellence, 
            we've become the go-to choice for mobile part professionals and DIY enthusiasts alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-8 text-xs px-2 py-1"
                  >
                    {feature.highlight}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;