import { Facebook, Instagram, Phone, Mail, MapPin, Smile, ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialIcons = [
    {
      icon: <Facebook size={18} />,
      url: "https://www.facebook.com/p/the-roof-100090559256383/",
      label: "Facebook Link"
    },
    {
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/theroofnaraingarh/",
      label: "Instagram Link"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 8" />
          <path d="M14.05 6a4.5 4.5 0 0 1 4 4" />
        </svg>
      ),
      url: "https://wa.me/919258581616",
      label: "WhatsApp Chat Link"
    }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQ", id: "faq" },
    { name: "Contact & Reservation", id: "contact" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-gold-900/15 pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Footer top details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-charcoal-900 mb-12">
          
          {/* Brand/Slogan Column (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate("home")}
              className="flex flex-col items-start focus:outline-none text-left group"
            >
              <span className="font-brand font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 uppercase">
                THE ROOF
              </span>
              <span className="font-sans font-medium tracking-[0.25em] text-[8px] text-gold-300 bg-clip-text uppercase">
                Rooftop Restaurant & Sweets
              </span>
            </button>
            <p className="font-sans text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed">
              Experience authentic pure-vegetarian luxury in Naraingarh’s premier rooftop environment. Rich North & South Indian, Chinese, Pizzas and sweet counter treats served daily from morning till night.
            </p>
            {/* Social handles list */}
            <div className="flex items-center space-x-3 pt-2">
              {socialIcons.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-charcoal-900 hover:bg-gold-500/15 border border-gold-900/30 hover:border-gold-300 text-charcoal-200 hover:text-gold-200 transition-all duration-300"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links navigation (4 columns) */}
          <div className="md:col-span-4 md:pl-10">
            <h4 className="font-brand font-extrabold text-sm tracking-widest text-white uppercase mb-4 border-l-2 border-gold-400 pl-2">
              Menu Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-charcoal-200 hover:text-gold-300 transition-colors cursor-pointer block focus:outline-none font-light py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Swiggy, Zomato & Sourcing details (4 columns) */}
          <div className="md:col-span-4 space-y-5">
            <div>
              <h4 className="font-brand font-extrabold text-sm tracking-widest text-white uppercase mb-3.5 border-l-2 border-gold-400 pl-2">
                Order Delivery Online
              </h4>
              <p className="font-sans text-xs text-charcoal-300 font-light leading-relaxed mb-3">
                Craving our rooftop multi-cuisine flavors at home? Get hot, fresh vegetarian delicacies delivered instantly:
              </p>
              
              {/* High Fidelity Delivery Partners Badges */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://www.swiggy.com/city/naraingarh/the-roof-subash-chander-lotton-chungi-rest691439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-[#FC8019]/10 hover:bg-[#FC8019]/25 border border-[#FC8019]/40 hover:border-[#FC8019] text-[#FC8019] font-sans font-black text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md text-center"
                >
                  <svg className="w-3.5 h-3.5 fill-[#FC8019]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.187 11.238c-.287.414-.6.829-.915 1.258-.291.391-.611.833-.859 1.25-.333.565-.632 1.353-.665 2.112-.008.175-.015.352-.016.529-.004.536-.454.913-.984.912h-.032c-.513 0-.917-.417-.919-.933v-.173c.003-.541.042-1.077.126-1.61.121-.774.373-1.623.83-2.338.307-.481.657-.935.986-1.392.278-.387.579-.74.871-1.127a36.45 36.45 0 0 1 .59-1.026.964.964 0 0 1 .809-.434c.433 0 .822.284.925.719.167.697-.183 1.558-.751 2.252zm-6.195 2.501a.916.916 0 0 1-.914.913h-.033c-.506-.001-.913-.41-.914-.916V7.917a.917.917 0 0 1 .917-.917h.033c.505.001.912.408.913.914l-.002 5.825z"/>
                  </svg>
                  <span>Swiggy</span>
                </a>
                <a
                  href="https://www.zomato.com/ambala/the-roof-restaurant-sky-lounge-ambala-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-[#E23744]/10 hover:bg-[#E23744]/25 border border-[#E23744]/40 hover:border-[#E23744] text-[#E23744] font-sans font-black text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md text-center"
                >
                  <svg className="w-3.5 h-3.5 fill-[#E23744]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.758 16.582c-.878 0-1.58-.702-1.58-1.58s.702-1.58 1.58-1.58 1.58.702 1.58 1.58-.702 1.58-1.58 1.58zm0-4.74c-.878 0-1.58-.702-1.58-1.58s.702-1.58 1.58-1.58 1.58.702 1.58 1.58-.702 1.58-1.58 1.58zm.415-4.113h1.792c.31 0 .563-.253.563-.563v-.564c0-.31-.253-.563-.563-.563h-1.792c-.31 0-.563.253-.563.563v.564c0 .31.253.563.563.563z" />
                  </svg>
                  <span>Zomato</span>
                </a>
              </div>
            </div>

            <div>
              <p className="font-sans text-[10px] text-charcoal-400 leading-relaxed">
                Proudly recognized: <em className="text-gold-300/60 not-italic">“Best Veg Food Delivery Naraingarh”</em>, <em className="text-gold-300/60 not-italic">“The Roof Swiggy”</em> & <em className="text-gold-300/60 not-italic">“The Roof Zomato Ambala”</em>.
              </p>
            </div>
            
            {/* Quick Sourcing badge */}
            <div className="flex items-center space-x-2 text-[10px] font-mono px-3 py-1.5 rounded bg-charcoal-900 border border-gold-900/20 text-gold-300">
              <Smile size={12} className="text-gold-400 flex-shrink-0" />
              <span className="truncate">100% Homemade Fresh Desi Ghee Preparations</span>
            </div>
          </div>

        </div>

        {/* Brand Copyright banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400 pt-2 font-mono">
          <div>
            &copy; {new Date().getFullYear()} The Roof Naraingarh. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-charcoal-400/50">Designed For Naraingarh Visitors</span>
            <span className="text-charcoal-400/30">|</span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 hover:text-gold-300 transition-colors cursor-pointer uppercase select-none font-bold"
            >
              <span>Back To Top</span>
              <ArrowUp size={12} className="animate-bounce" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
