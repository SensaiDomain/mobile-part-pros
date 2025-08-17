import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Products",
    href: "/products"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Pearl Telecom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.name}
              </Link>)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact" className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Get Quote</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
            {navItems.map(item => <Link key={item.name} to={item.href} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
            <div className="pt-2 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link to="/contact" className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>Get Quote</span>
                </Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>;
};
export default Navigation;