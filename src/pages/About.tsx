import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "Every part undergoes rigorous testing to ensure premium quality and reliability."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. Your success is our success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our business and service delivery."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent quality, on-time delivery, and dependable support you can count on."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about mobile technology and helping people stay connected."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our products and services to meet evolving needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge variant="secondary" className="px-4 py-2">
                About Mobile Part Pros
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                10+ Years of Excellence in 
                <span className="text-primary"> Mobile Parts</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From a small repair shop to serving 100,000+ customers worldwide, 
                our journey has been driven by one mission: providing the highest quality 
                mobile parts at unbeatable prices.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014, Mobile Part Pros began as a small family business with a simple goal: 
                    to provide high-quality mobile phone parts at fair prices. What started in a small 
                    garage has grown into one of the most trusted names in the mobile repair industry.
                  </p>
                  <p>
                    Over the years, we've built strong relationships with manufacturers and suppliers 
                    worldwide, allowing us to offer genuine parts at competitive prices. Our commitment 
                    to quality and customer service has earned us the trust of both professional repair 
                    shops and DIY enthusiasts.
                  </p>
                  <p>
                    Today, we're proud to serve over 100,000 satisfied customers across the globe, 
                    from individual consumers to large-scale repair operations. Every order we fulfill 
                    is a testament to our dedication to excellence.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Support Available</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="px-4 py-2">
                Our Values
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our core values shape every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-2">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Empowering Connections Through Quality
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that everyone deserves access to reliable, high-quality mobile parts 
                that keep them connected to what matters most. Our mission is to democratize 
                mobile repair by making premium parts accessible, affordable, and backed by 
                expert support.
              </p>
              <div className="bg-primary/5 rounded-2xl p-8 mt-12">
                <blockquote className="text-lg italic text-muted-foreground">
                  "Our vision is a world where broken doesn't mean replaced, where repair is 
                  accessible to everyone, and where quality parts help extend the life of 
                  devices we depend on every day."
                </blockquote>
                <footer className="mt-4 text-primary font-semibold">
                  — The Mobile Part Pros Team
                </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;