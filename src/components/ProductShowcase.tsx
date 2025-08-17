import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Battery, Camera, Monitor } from "lucide-react";

const ProductShowcase = () => {
  const categories = [
    {
      icon: Monitor,
      title: "LCD Screens",
      description: "High-quality replacement screens for all major brands",
      popular: true,
      count: "500+ Models"
    },
    {
      icon: Battery,
      title: "Batteries",
      description: "Long-lasting batteries with premium cells",
      popular: false,
      count: "300+ Models"
    },
    {
      icon: Camera,
      title: "Camera Modules",
      description: "Crystal clear camera replacements and upgrades",
      popular: true,
      count: "200+ Models"
    },
    {
      icon: Smartphone,
      title: "Complete Parts",
      description: "Full component kits for comprehensive repairs",
      popular: false,
      count: "150+ Kits"
    }
  ];

  const brands = [
    "iPhone", "Samsung", "Google Pixel", "OnePlus", "Huawei", "Xiaomi", "LG", "Sony"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Our Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Premium Parts for Every Device
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From screens to batteries, we have the highest quality replacement parts 
            for all major smartphone brands.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="hover-lift group cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                {category.popular && (
                  <Badge className="mb-2">Popular</Badge>
                )}
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  <p className="text-primary font-medium">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Brands */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold">Compatible with All Major Brands</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                {brand}
              </Badge>
            ))}
          </div>
          
          <div className="pt-8">
            <Button size="lg" className="group">
              Browse All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;