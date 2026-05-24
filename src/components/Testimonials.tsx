import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play testimonial carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-gold-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-gold-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Guest Recommendations & Reputation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">Customers Say</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid: Left overall ranking widget, Right sliding reviews cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Overall Rating Widget Box */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-charcoal-900 border border-gold-900/20 text-center relative overflow-hidden shadow-2xl">
            {/* Soft decorative background gold flare */}
            <div className="absolute inset-0 bg-radial-gradient from-gold-900/10 to-transparent pointer-events-none" />

            {/* Google Rating badge metadata */}
            <img
              src="https://images.unsplash.com/photo-1571006682858-a24e0dae9ffa?auto=format&fit=crop&q=80&w=150"
              alt="Google reviews source badge marker"
              className="hidden"
            />
            
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400/80 mb-4 block">
              Google Maps Rating
            </span>

            <div className="font-brand text-6xl sm:text-7xl font-black text-white leading-none tracking-tight mb-2 select-none">
              4.4
            </div>

            {/* Render 5 dynamic gold stars */}
            <div className="flex items-center space-x-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < 4 ? "fill-gold-400 text-gold-400" : "fill-gold-400/25 text-gold-400/25"}
                />
              ))}
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal-200 mt-2">
              Based on <strong className="text-white">211 verified reviews</strong>
            </p>
            <p className="font-sans text-[11px] text-charcoal-400 font-light mt-1 max-w-[200px]">
              Recognized as Naraingarh's premier vegetarian venue.
            </p>

            {/* Horizontal line divider */}
            <div className="w-full h-px bg-charcoal-800 my-6" />

            {/* Sub-badges parameters */}
            <div className="space-y-3 w-full text-left text-xs text-charcoal-300">
              <div className="flex justify-between items-center">
                <span>Food & Sweets Taste</span>
                <span className="font-mono text-gold-300 font-bold">4.7 / 5</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rooftop Ambience</span>
                <span className="font-mono text-gold-300 font-bold">4.6 / 5</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cleanliness & Hygiene</span>
                <span className="font-mono text-gold-300 font-bold">4.8 / 5</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Testimonial block */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full relative">
            {/* Quotation mark decoration */}
            <Quote
              size={120}
              className="absolute -top-12 -left-6 text-gold-900/10 pointer-events-none transform -scale-y-100"
            />

            {/* Sliding Container Card */}
            <div className="bg-charcoal-900/40 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-gold-900/15 min-h-[300px] flex flex-col justify-between shadow-xl relative z-10">
              
              {/* Star rating and review date */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < activeTestimonial.rating ? "fill-gold-400 text-gold-400" : "text-charcoal-700"}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-charcoal-400">{activeTestimonial.date}</span>
              </div>

              {/* Comment text body */}
              <p className="font-sans text-base sm:text-lg italic text-charcoal-100 font-normal leading-relaxed mb-8 relative">
                "{activeTestimonial.comment}"
              </p>

              {/* Author signature block */}
              <div className="flex items-center justify-between border-t border-charcoal-800/80 pt-6">
                <div>
                  <h4 className="font-brand font-extrabold text-base text-gold-300">
                    {activeTestimonial.name}
                  </h4>
                  <p className="font-sans text-[11px] text-charcoal-400 font-semibold tracking-wider uppercase mt-0.5">
                    {activeTestimonial.location}
                  </p>
                </div>
                
                {/* Micro source tag */}
                <span className="px-2.5 py-1 rounded bg-charcoal-950/60 font-mono text-[9px] text-charcoal-400 tracking-wider">
                  Verified Local Review
                </span>
              </div>

            </div>

            {/* Slider Controls (indicators & arrows) */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Indicator dots navigation */}
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-8 bg-gold-400" : "w-2.5 bg-charcoal-700 hover:bg-gold-850"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Chevron arrows navigation */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg cursor-pointer bg-charcoal-900 hover:bg-gold-500/20 text-charcoal-300 hover:text-gold-200 border border-gold-900/20 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg cursor-pointer bg-charcoal-900 hover:bg-gold-500/20 text-charcoal-300 hover:text-gold-200 border border-gold-900/20 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
