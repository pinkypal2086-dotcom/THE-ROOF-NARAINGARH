import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactReservation from "./components/ContactReservation";
import Footer from "./components/Footer";
import { MessageCircle, Phone, Clock, MapPin, Star } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingWidgets, setShowFloatingWidgets] = useState(false);

  // Monitor scroll for persistent floating buttons popping up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingWidgets(true);
      } else {
        setShowFloatingWidgets(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Structured Data Object for SEO Optimization
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "The Roof Naraingarh",
    "image": [
      "https://img02.restaurantguru.com/c1bd-THE-ROOF-NARAINGARH-Naraingarh-interior.jpg",
      "https://img02.restaurantguru.com/cc39-Restaurant-THE-ROOF-NARAINGARH-design.jpg"
    ],
    "telephones": ["+91 92585 81616", "+91 92585 81717"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Sharma Ice Factory, CHD-Nahan Road",
      "addressLocality": "Naraingarh",
      "addressRegion": "Haryana",
      "postalCode": "134203",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.4815",
      "longitude": "77.1328"
    },
    "url": "https://theroofnaraingarh.com",
    "priceRange": "INR 500 - 1000",
    "servesCuisine": [
      "North Indian",
      "South Indian",
      "Chinese",
      "Fast Food",
      "Pizza",
      "Mithai / Indian Sweets"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "211"
    }
  };

  return (
    <div className="relative text-charcoal-100 min-h-screen bg-charcoal-950 selection:bg-gold-500 selection:text-charcoal-950 font-sans overflow-x-hidden antialiased">
      {/* Structured data rendering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Top sticky navigation menu bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Structured sections list */}
      <main>
        {/* 1. HERO HOME ENTRY SCREEN */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. STORY & HIGHLIGHTS (ABOUT) */}
        <About onNavigate={handleNavigate} />

        {/* 3. CATEGORIZED MENU CARDS */}
        <MenuSection />

        {/* 4. PHOTO LIGHTBOX GALLERY */}
        <GallerySection />

        {/* 5. GUEST TESTIMONIALS & RATING STATS */}
        <Testimonials />

        {/* 6. EXPANDABLE FREQUENT ACCORDIONS */}
        <FAQ />

        {/* 7. GEOLOCATIONS AND BOOKING FORMS */}
        <ContactReservation />
      </main>

      {/* 8. FOOTER WITH ACCELERATED RETURNING LINKS */}
      <Footer onNavigate={handleNavigate} />

      {/* PERSISTENT FLOATING QUICK ACTION BUTTONS (WHATSAPP & VOICE CALLED) */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex flex-col space-y-3 transition-all duration-300 transform ${
          showFloatingWidgets
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        {/* 1. Quick Voice call buttons */}
        <a
          href="tel:+919258581616"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-charcoal-900 border border-gold-400/35 hover:border-gold-300 text-gold-300 shadow-xl transition-all hover:scale-105"
          title="Direct Call Now"
        >
          <Phone size={18} className="animate-pulse" />
          
          {/* Slide-out helper tooltip details on hover */}
          <span className="absolute right-14 whitespace-nowrap bg-charcoal-900 border border-gold-900/30 px-3 py-1.5 rounded-lg text-xs font-brand text-white font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Call Now: +91 92585 81616
          </span>
        </a>

        {/* 2. Direct order message WhatsApp bubble widget */}
        <a
          href="https://wa.me/919258581616?text=Hello%20The%20Roof%20Naraingarh,%20I'd%20like%20to%20order%20food%20for%20delivery%20/%20reserve%20a%20table!"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-emerald-600 border border-emerald-500 hover:border-emerald-450 text-white shadow-xl transition-all hover:scale-105"
          title="Connect on WhatsApp"
        >
          <MessageCircle size={20} />
          
          <span className="absolute right-14 whitespace-nowrap bg-charcoal-900 border border-gold-900/30 px-3 py-1.5 rounded-lg text-xs font-brand text-white font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            WhatsApp Order Link
          </span>
        </a>
      </div>
    </div>
  );
}
