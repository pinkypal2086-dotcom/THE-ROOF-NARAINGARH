import { useState } from "react";
import * as Icons from "lucide-react";
import { MENU_CATEGORIES } from "../data";
import { MenuItem } from "../types";

const PRINTED_MENU_IMAGES = [
  {
    title: "Page 1: Starters & Main Course",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAErqdk5IfH9okcew2YdVRd6nutwgqq3amwAW8lLDufp5ujkD1mRU6c2grA6tDoZMATLEr-op4vHwTQo4oz_fQyPvP2-uvO7oGlcwhbY_OrDNa_EGy2KFTMK9sKfpOxHCcoCdPb53g=s1360-w1360-h1020-rw",
  },
  {
    title: "Page 2: Shakes, Soups & Appetizers",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEITrswiXAq6fzgbkcq4gKxerJmA3pY4MUNqcFcyx2YX-wWg_URYksEd3w8m8rytADEk0Ozq7Bk61zTSGRnZGxRz0vzF0MBYdgkAf-yYU2ZbOKJ1rfUmiNBrqRyyfsC_0u900rJ=s1360-w1360-h1020-rw",
  },
  {
    title: "Page 3: Breads, Ice Creams & Desserts",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGlXslUsCRXlbpqgCGg-r3Kle2NsaXC8xJoMpy5D39N9FX50DOzZbL8up17EHnuk9C3587BEgtG1D-nSU0NOuMTSKon5l45FDgztDOS8IevXstmUjUP_zQkV18Q8fyJsG52894r=s1360-w1360-h1020-rw",
  },
];

export default function MenuSection() {
  const [activeCategorySlug, setActiveCategorySlug] = useState("north-indian");
  const [showMenuCardModal, setShowMenuCardModal] = useState(false);
  const [activeMenuPage, setActiveMenuPage] = useState(0);

  const activeCategory = MENU_CATEGORIES.find(
    (cat) => cat.slug === activeCategorySlug
  ) || MENU_CATEGORIES[0];

  // Helper to dynamically render a Lucide icon
  const renderCategoryIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Utensils;
    return <Icon size={18} className="mr-2" />;
  };

  // Pre-fill a WhatsApp message for easy customer orders
  const getWhatsAppOrderLink = (itemName: string, price: number) => {
    const text = `Hello The Roof Naraingarh, I would like to order "${itemName}" (at ₹${price}) from your website menu. Please confirm details!`;
    return `https://wa.me/919258581616?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-24 bg-charcoal-950 relative">
      {/* Background decor */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Header block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Freshly Prepared Multi-Cuisine Items
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            Explore Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">Menu</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light mt-4">
            Select an option below to browse classic North Indian curries, crispy South Indian dosas, tempting Chinese snacks, hot melted pizzas, and local milk sweets.
          </p>
        </div>

        {/* Top Feature Grid: Home Delivery & Printed Menu Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Swiggy & Zomato Delivery Callout Banner */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-950 border border-gold-900/15 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-2xl rounded-full pointer-events-none group-hover:bg-gold-400/10 transition-colors" />
            
            <div className="space-y-1.5 relative z-10">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-brand font-black text-xs text-gold-300 uppercase tracking-widest">
                  Home Delivery Active
                </span>
              </div>
              <h3 className="font-brand font-bold text-lg text-white">Craving Rooftop Delights At Home?</h3>
              <p className="font-sans text-xs text-charcoal-300 font-light leading-relaxed">
                Prefer to enjoy our mouth-watering multi-cuisine items and sweets in the comfort of your house? Get them delivered freshly prepared & hot via Swiggy or Zomato:
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full relative z-10">
              <a
                href="https://www.swiggy.com/city/naraingarh/the-roof-subash-chander-lotton-chungi-rest691439"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#FC8019]/10 hover:bg-[#FC8019]/25 border border-[#FC8019]/40 hover:border-[#FC8019] text-[#FC8019] font-sans font-black text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md w-full text-center"
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
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#E23744]/10 hover:bg-[#E23744]/25 border border-[#E23744]/40 hover:border-[#E23744] text-[#E23744] font-sans font-black text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md w-full text-center"
              >
                <svg className="w-3.5 h-3.5 fill-[#E23744]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.758 16.582c-.878 0-1.58-.702-1.58-1.58s.702-1.58 1.58-1.58 1.58.702 1.58 1.58-.702 1.58-1.58 1.58zm0-4.74c-.878 0-1.58-.702-1.58-1.58s.702-1.58 1.58-1.58 1.58.702 1.58 1.58-.702 1.58-1.58 1.58zm.415-4.113h1.792c.31 0 .563-.253.563-.563v-.564c0-.31-.253-.563-.563-.563h-1.792c-.31 0-.563.253-.563.563v.564c0 .31.253.563.563.563z" />
                </svg>
                <span>Zomato</span>
              </a>
            </div>
          </div>

          {/* New Official Printed Menu Card Preview Panel with Page Previews */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-950 border border-gold-900/15 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex-1 space-y-2 relative z-10 w-full text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-1.5">
                <Icons.FileText size={14} className="text-gold-400" />
                <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-gold-300">
                  Official Menu Card
                </span>
              </div>
              <h3 className="font-brand font-bold text-base text-white">Printed Food Menu</h3>
              <p className="font-sans text-[11px] text-charcoal-300 font-light leading-relaxed">
                Click any page below to open and inspect the official tandoor & sweets menu card in high definition.
              </p>
              <button
                onClick={() => {
                  setActiveMenuPage(0);
                  setShowMenuCardModal(true);
                }}
                className="mt-1 inline-flex items-center space-x-1.5 py-1.5 px-3.5 rounded-full bg-gold-400/10 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-gold-400/30 hover:border-gold-500 text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm"
              >
                <Icons.Maximize2 size={11} />
                <span>View Full Menu</span>
              </button>
            </div>

            {/* Micro Multi-Thumbnail Canvas with user's requested menu cards */}
            <div className="flex gap-2 flex-shrink-0 relative z-10">
              {PRINTED_MENU_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setActiveMenuPage(idx);
                    setShowMenuCardModal(true);
                  }}
                  className="relative w-14 sm:w-16 h-20 sm:h-24 rounded-lg overflow-hidden border border-gold-400/20 shadow-lg cursor-pointer hover:border-gold-400 hover:scale-[1.04] transition-all duration-300 group/thumb"
                  title={`Open Menu ${img.title}`}
                >
                  <img
                    src={img.url}
                    alt={`Menu Page ${idx + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover/thumb:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <span className="font-mono text-[9px] font-bold text-gold-300 bg-charcoal-950/85 px-1.5 py-0.5 rounded leading-none border border-gold-900/40">
                      P{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Categories Tab Selector buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategorySlug(category.slug)}
              className={`flex items-center px-5 py-3 rounded-full cursor-pointer text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategorySlug === category.slug
                  ? "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-950 shadow-[0_4px_20px_rgba(222,184,116,0.25)] font-extrabold translate-y-[-1px]"
                  : "bg-charcoal-900 text-charcoal-300 border border-gold-900/20 hover:text-gold-300 hover:border-gold-500/40"
              }`}
            >
              {renderCategoryIcon(category.iconName)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
          {activeCategory.items.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group flex flex-col bg-charcoal-900/70 border border-gold-900/10 hover:border-gold-400/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image and Badge area */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-charcoal-950">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-charcoal-800 border-b border-gold-900/10 p-6 text-center">
                    <Icons.UtensilsCrossed size={36} className="text-gold-300/30 mb-2" />
                    <span className="text-xs font-mono text-gold-300/40 uppercase tracking-widest">
                      Cooked Fresh To Order
                    </span>
                  </div>
                )}
                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent pointer-events-none" />

                {/* Bestseller gold tag */}
                {item.isBestseller && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 text-[10px] font-mono tracking-widest font-extrabold px-3 py-1 rounded-full shadow-lg">
                    BESTSELLER
                  </span>
                )}

                {/* Star rating tag */}
                {item.rating && (
                  <span className="absolute bottom-4 right-4 flex items-center space-x-1 bg-charcoal-950/80 backdrop-blur-sm border border-gold-400/20 px-2 py-0.5 rounded text-xs text-gold-200">
                    <Icons.Star size={12} className="fill-gold-400 text-gold-400" />
                    <span className="font-brand font-medium">{item.rating.toFixed(1)}</span>
                  </span>
                )}
              </div>

              {/* Card descriptions info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-brand font-bold text-lg text-white group-hover:text-gold-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono text-lg font-black text-gold-300 flex-shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed mb-4 line-clamp-2 uppercase-first">
                    {item.description}
                  </p>
                </div>

                {/* Quick actions CTAs */}
                <div className="pt-4 border-t border-charcoal-800/80 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-[10px] font-mono tracking-wider text-charcoal-400">
                    Clean kitchen prep
                  </span>
                  
                  <a
                    href={getWhatsAppOrderLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full cursor-pointer bg-charcoal-950/65 hover:bg-gold-500/10 border border-gold-400/25 hover:border-gold-300/50 text-xs font-bold text-gold-300 tracking-wider uppercase transition-all duration-200"
                  >
                    <Icons.MessageSquareQuote size={12} className="text-gold-400" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Menu Bottom notices */}
        <div className="mt-16 text-center bg-charcoal-900/40 max-w-3xl mx-auto rounded-2xl border border-gold-900/10 p-6">
          <div className="flex items-center justify-center space-x-2 text-gold-300 text-sm font-semibold mb-2">
            <Icons.Sparkles size={16} />
            <span>Customize Your Order Settings</span>
          </div>
          <p className="font-sans text-xs text-charcoal-300 font-light leading-relaxed">
            * We serve highly authentic Jain variations of most curries, dosas and starters prepared strictly without onions, garlic, and roots. Speak with our booking managers at +91 92585 81616 or specify in the table reservation comments! Prices are exclusive of standard local taxes.
          </p>
        </div>

      </div>

      {/* Lightbox / Fullscreen Modal for Google Food Menu Card with Multi-Page slider controls */}
      {showMenuCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div 
            className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-md cursor-pointer"
            onClick={() => setShowMenuCardModal(false)}
          />
          
          <div className="relative bg-charcoal-900 border border-gold-900/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 flex flex-col justify-between max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-charcoal-800/60 sticky top-0 bg-charcoal-900/90 backdrop-blur-sm z-20">
              <div className="flex items-center space-x-2">
                <Icons.FileText size={16} className="text-gold-400" />
                <span className="font-brand font-bold text-sm text-white">
                  Official Food Menu &mdash; Page {activeMenuPage + 1} of 3
                </span>
              </div>
              <button
                onClick={() => setShowMenuCardModal(false)}
                className="p-1.5 px-3 rounded-full bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-gold-300 font-bold transition-all duration-200 cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>
            
            {/* Image viewport with next/prev buttons */}
            <div className="relative p-4 flex items-center justify-center min-h-[50vh] bg-charcoal-950/40 group select-none">
              
              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenuPage((prev) => (prev === 0 ? PRINTED_MENU_IMAGES.length - 1 : prev - 1));
                }}
                className="absolute left-3 z-30 p-2 rounded-full bg-charcoal-950/90 border border-gold-900/20 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200 shadow-xl cursor-pointer"
                title="Previous page"
              >
                <Icons.ChevronLeft size={18} />
              </button>

              {/* Scrollable container for menu images */}
              <div className="overflow-auto max-h-[52vh] md:max-h-[58vh] flex items-center justify-center w-full px-8 py-2">
                <img
                  src={PRINTED_MENU_IMAGES[activeMenuPage].url}
                  alt={PRINTED_MENU_IMAGES[activeMenuPage].title}
                  className="max-h-[50vh] md:max-h-[55vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-gold-900/10 transition-all duration-300 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenuPage((prev) => (prev === PRINTED_MENU_IMAGES.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-3 z-30 p-2 rounded-full bg-charcoal-950/90 border border-gold-900/20 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-200 shadow-xl cursor-pointer"
                title="Next page"
              >
                <Icons.ChevronRight size={18} />
              </button>
            </div>

            {/* Quick-pill indicator bar */}
            <div className="flex justify-center gap-2 py-2.5 bg-charcoal-950/60 border-t border-charcoal-800/10">
              {PRINTED_MENU_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMenuPage(idx)}
                  className={`px-3 py-1 text-[10px] sm:text-xs rounded-full font-mono font-bold cursor-pointer transition-all ${
                    activeMenuPage === idx
                      ? "bg-gold-500 text-charcoal-950 shadow-md"
                      : "bg-charcoal-800 text-charcoal-400 hover:text-white"
                  }`}
                >
                  Page {idx + 1}
                </button>
              ))}
            </div>
            
            {/* Footer option to chat or request customization */}
            <div className="p-4 border-t border-charcoal-800/60 text-center bg-charcoal-950">
              <p className="font-sans text-[10px] text-charcoal-400 font-light mb-2.5">
                Ready to order items from `Page {activeMenuPage + 1}: {PRINTED_MENU_IMAGES[activeMenuPage].title}`? Contact the kitchen instantly:
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href={`https://wa.me/919258581616?text=${encodeURIComponent(`Hi The Roof Naraingarh, I'm viewing your printed food menu index Page ${activeMenuPage + 1} (${PRINTED_MENU_IMAGES[activeMenuPage].title}) right now on your website. I want to inquire/place an order!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 py-1.5 px-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-charcoal-980 text-[10px] font-sans font-black uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Icons.MessageCircle size={12} />
                  <span>Order Offline</span>
                </a>
                <button
                  onClick={() => setShowMenuCardModal(false)}
                  className="flex items-center space-x-1 py-1.5 px-4 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-300 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border border-charcoal-700/50"
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
