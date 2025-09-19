import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Portfolio Samples" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Portfolio<span className="text-primary">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gradient-primary text-white shadow-glow"
                      : "text-foreground/80 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="mailto:masanamkesava@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <ThemeToggle />
            <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-gradient-primary text-white"
                    : "text-foreground/80 hover:text-foreground hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="glass-button"
              >
                <a href="mailto:masanamkesava@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;