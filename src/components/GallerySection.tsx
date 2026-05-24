import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, Compass, ExternalLink } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["All", "Ambience", "Dishes", "Sweets"];

  // Filter gallery items based on active category tab
  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (url: string) => {
    // Find index of this item inside the filtered items to enable navigation
    const idx = GALLERY_ITEMS.findIndex((item) => item.url === url);
    if (idx !== -1) {
      setSelectedImageIndex(idx);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const nextIdx = (selectedImageIndex + 1) % GALLERY_ITEMS.length;
      setSelectedImageIndex(nextIdx);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const prevIdx = (selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setSelectedImageIndex(prevIdx);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-charcoal-900 relative">
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & info block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            A Feast for Your Eyes
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            The Roof <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light mt-4">
            Browse authentic pictures of our rooftop dining area, charming indoor setups, real dish ingredients, and the sweets shop counter setup. Click any picture to enlarge.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg cursor-pointer text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-gold-500/10 text-gold-300 border border-gold-400/55 shadow-[0_0_12px_rgba(222,184,116,0.15)]"
                  : "bg-transparent text-charcoal-300 border border-charcoal-800 hover:text-gold-300 hover:border-gold-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Image layout grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 360 Virtual Tour Card */}
          {(activeCategory === "All" || activeCategory === "Ambience") && (
            <a
              href="https://maps.app.goo.gl/BQDzUNa6BFA6V3Un7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-80 rounded-2xl overflow-hidden border-2 border-dashed border-gold-400/40 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(222,184,116,0.25)] hover:border-gold-300 transition-all duration-300 flex flex-col justify-between p-6 bg-gradient-to-b from-charcoal-900 to-charcoal-950 group"
              id="gallery-360-card"
            >
              {/* Absolute background image with high opacity and rotation */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://img02.restaurantguru.com/cc39-Restaurant-THE-ROOF-NARAINGARH-design.jpg"
                  alt="360 view preview animate"
                  className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />
              </div>

              {/* Header Badge */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
                </span>
                <span className="px-3 py-1 text-[10px] font-mono tracking-widest font-extrabold rounded bg-gold-950 text-gold-300 border border-gold-400/30 uppercase">
                  Immersive 360°
                </span>
              </div>

              {/* Center Animated Compass icon */}
              <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-gold-950/85 border border-gold-400/40 group-hover:border-gold-300 flex items-center justify-center text-gold-300 group-hover:text-gold-200 shadow-xl shadow-gold-950/50 transition-all duration-500 group-hover:scale-110">
                <Compass size={28} className="animate-[spin_12s_infinite_linear] group-hover:animate-[spin_4s_infinite_linear]" />
              </div>

              {/* Bottom Labels */}
              <div className="relative z-10 text-center space-y-1.5">
                <h3 className="font-brand font-black text-xl text-white group-hover:text-gold-400 transition-colors">
                  Rooftop 360° View
                </h3>
                <p className="font-sans text-xs text-charcoal-300 font-light max-w-xs mx-auto leading-normal">
                  Take an interactive 360-degree virtual tour of our beautiful rooftop tables and family dining lounges.
                </p>
                <div className="pt-2 flex items-center justify-center space-x-1.5 text-xs text-gold-400 font-bold uppercase tracking-wider group-hover:text-gold-300">
                  <span>Open Interactive VR</span>
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          )}

          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.url)}
              className="group relative h-80 rounded-2xl overflow-hidden border border-gold-900/10 cursor-pointer shadow-lg hover:shadow-[0_8px_25px_rgba(222,184,116,0.1)] transition-all duration-300"
            >
              {/* Image asset */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Zoom indicators hover Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-950/80 backdrop-blur-sm border border-gold-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} className="text-gold-300" />
              </div>

              {/* Titles block */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-wider font-semibold rounded bg-gold-950/90 text-gold-300 border border-gold-400/20 uppercase">
                  {item.category}
                </span>
                <h3 className="font-brand font-bold text-lg text-white mt-2 group-hover:text-gold-200 transition-colors leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-sans text-xs text-charcoal-300 font-light mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Lightbox Fullscreen Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Close bar */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-6 z-55">
              <span className="hidden sm:inline-block font-mono text-xs text-charcoal-400">
                Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full cursor-pointer bg-charcoal-900 hover:bg-gold-500/20 text-charcoal-100 hover:text-gold-200 border border-gold-900/30 transition-colors"
                aria-label="Close enlarged view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Prev navigations button */}
            <button
              onClick={showPrevImage}
              className="absolute left-4 p-3 rounded-full cursor-pointer bg-charcoal-900/70 hover:bg-gold-500/20 hover:text-gold-200 border border-gold-900/30 text-white z-55 transition-all"
              aria-label="Previous view"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Picture screen */}
            <div
              className="max-w-4xl max-h-[75vh] relative flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[selectedImageIndex].url}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg border border-gold-900/30 shadow-2xl animate-fade-in-scale"
                referrerPolicy="no-referrer"
              />
              
              {/* Metadata titles footer */}
              <div className="mt-6 text-center max-w-2xl px-4">
                <span className="font-mono text-[9px] font-bold text-gold-400 bg-gold-950/50 px-2.5 py-1 rounded border border-gold-900/20 uppercase tracking-widest inline-block">
                  {GALLERY_ITEMS[selectedImageIndex].category}
                </span>
                <h4 className="font-brand font-bold text-xl text-white mt-2 leading-tight">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h4>
                {GALLERY_ITEMS[selectedImageIndex].description && (
                  <p className="font-sans text-xs sm:text-sm text-charcoal-300 font-light mt-1.5 leading-relaxed">
                    {GALLERY_ITEMS[selectedImageIndex].description}
                  </p>
                )}
              </div>
            </div>

            {/* Right Next nav button */}
            <button
              onClick={showNextImage}
              className="absolute right-4 p-3 rounded-full cursor-pointer bg-charcoal-900/70 hover:bg-gold-500/20 hover:text-gold-200 border border-gold-900/30 text-white z-55 transition-all"
              aria-label="Next view"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
