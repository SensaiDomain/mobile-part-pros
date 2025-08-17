import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductShowcase />
        <WhyChooseUs />
        <Testimonials />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
