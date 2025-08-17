import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Repair Shop Owner",
      location: "Los Angeles, CA",
      rating: 5,
      text: "I've been ordering from Mobile Part Pros for 3 years now. Their quality is consistently excellent and shipping is incredibly fast. My customers always leave satisfied!",
      highlight: "Verified Purchase"
    },
    {
      name: "Mike Chen",
      role: "DIY Enthusiast",
      location: "Austin, TX",
      rating: 5,
      text: "Replaced my iPhone screen using their parts and tutorial videos. Perfect fit, great quality, and saved me $200 compared to Apple store pricing. Highly recommend!",
      highlight: "Verified Purchase"
    },
    {
      name: "Emma Rodriguez",
      role: "Tech Professional",
      location: "Miami, FL",
      rating: 5,
      text: "Outstanding customer service! When I had questions about compatibility, their support team walked me through everything. The part worked perfectly on first try.",
      highlight: "Verified Purchase"
    },
    {
      name: "David Kim",
      role: "Electronics Technician",
      location: "Seattle, WA",
      rating: 5,
      text: "As a professional technician, I need reliable suppliers. Mobile Part Pros delivers every time - quality parts, competitive pricing, and excellent warranty support.",
      highlight: "Verified Purchase"
    },
    {
      name: "Lisa Thompson",
      role: "Small Business Owner",
      location: "Chicago, IL",
      rating: 5,
      text: "Their bulk pricing and fast shipping help keep my repair business profitable. The parts quality matches OEM standards at fraction of the cost. Game changer!",
      highlight: "Verified Purchase"
    },
    {
      name: "Alex Parker",
      role: "College Student",
      location: "Boston, MA",
      rating: 5,
      text: "Broke my phone screen right before finals. Ordered the replacement and fixed it myself using their guide. Saved money and learned something new. Amazing experience!",
      highlight: "Verified Purchase"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers 
            have to say about their experience with Mobile Part Pros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex items-start justify-between">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <Badge variant="outline" className="text-xs">
                    {testimonial.highlight}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.rating}/5
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 pt-16 border-t text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="text-sm text-muted-foreground mt-1">From 12,000+ Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
              <div className="text-sm text-muted-foreground mt-1">Verified Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
              <div className="text-sm text-muted-foreground mt-1">And Growing Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;