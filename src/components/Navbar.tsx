import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-950/90 backdrop-blur-md shadow-lg border-b border-gold-900/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex flex-col items-start focus:outline-none group text-left"
          >
            <span className="font-brand font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 uppercase group-hover:from-gold-200 group-hover:to-gold-400 transition-colors">
              THE ROOF
            </span>
            <span className="font-sans font-medium tracking-[0.25em] text-[8px] text-gold-300/80 uppercase">
              Rooftop Restaurant & Sweets
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-gold-300 bg-gold-900/20 shadow-[inset_0_0_8px_rgba(222,184,116,0.15)]"
                    : "text-charcoal-200 hover:text-gold-300 hover:bg-charcoal-900/50"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Call & Reserve CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919258581616"
              className="flex items-center space-x-1.5 text-xs font-mono font-medium text-gold-300/95 hover:text-gold-100 transition-all"
            >
              <Phone size={14} className="text-gold-400 animate-pulse" />
              <span>+91 92585 81616</span>
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="px-4 py-2 rounded-full cursor-pointer bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-950 font-sans font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(222,184,116,0.5)] transition-all duration-300 transform active:scale-95"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="tel:+919258581616"
              className="p-2 text-gold-400 hover:text-gold-200 transition-colors"
              aria-label="Call restaurant"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-200 hover:text-gold-300 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-250 absolute top-full left-0 right-0 bg-charcoal-900/98 backdrop-blur-lg border-b border-gold-900/30 shadow-2xl py-6 px-4">
          <div className="grid gap-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-3 px-4 rounded-lg text-left text-base font-semibold tracking-wide transition-all ${
                  activeSection === link.id
                    ? "text-gold-300 bg-gold-950/50 border-l-4 border-gold-400 pl-3"
                    : "text-charcoal-200 hover:text-gold-300 hover:bg-charcoal-800/40"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-charcoal-800/60">
            <div className="flex items-center justify-between text-xs text-charcoal-300 px-2">
              <span>Quick Booking / Order:</span>
              <span className="font-mono text-gold-300 font-bold">+91 92585 81616</span>
            </div>
            <button
              onClick={() => handleLinkClick("contact")}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 rounded-lg text-center font-bold text-sm tracking-widest uppercase hover:brightness-110 active:scale-98 transition-all"
            >
              <Calendar size={16} />
              <span>Reserve Table Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
