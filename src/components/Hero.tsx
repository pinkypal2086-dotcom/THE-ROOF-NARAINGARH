import { ArrowRight, MessageCircle, Phone, Calendar, ShoppingCart, Star } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-charcoal-950"
    >
      {/* Background Cinematic Image with warm parallax dark mask overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEK2QZWT6wVbkWEW-NGkr9WygAwcp2uiW7ycOOkb4DNv8RkFlxxLBc6Jb3yQmLeonnBEVnQmc4gByG9cUx16BEphVOjUXe6XAuRapLJ0r4BZkLqjIU16DwyXtplLV6sbQHKYvWj=s1360-w1360-h1020-rw"
          alt="The Roof Naraingarh premium rooftop dining space"
          className="w-full h-full object-cover scale-105 motion-safe:animate-[pulse_8s_infinite_ease-in-out]"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial gradients and soft orange/gold vignettes for rich atmosphere and high readability contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/80 to-charcoal-950 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/40 to-charcoal-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/50 to-charcoal-950/90 z-10" />
      </div>

      {/* Decorative Warm Light Source Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-600/10 blur-[130px] rounded-full z-10 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        {/* Subtitle badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-gold-400/30 text-gold-300 text-xs font-mono tracking-widest uppercase mb-6 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
          <span>The Ultimate Pure Veg Experience in Naraingarh</span>
          <span className="text-gold-400/60 font-sans font-bold">•</span>
          <span className="flex items-center text-gold-300">
            <Star size={12} className="fill-gold-400 text-gold-400 mr-0.5" />
            4.4★ (210+ reviews)
          </span>
        </div>

        {/* Cinematic Title headings */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          <span className="block font-sans font-extralight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-200 to-white text-3xl sm:text-5xl md:text-6xl mb-1 sm:mb-2 uppercase">
            A Feast Under The Stars
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 gold-glow font-brand drop-shadow-xl select-none">
            THE ROOF
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-xl text-charcoal-200 font-light leading-relaxed mb-10 sm:mb-12">
          Experience authentic multi-cuisine excellence in Naraingarh's premier vegetarian rooftop sanctuary. Delight in freshly prepared <span className="text-gold-200 font-medium">North & South Indian</span> specialties, savory <span className="text-gold-200 font-medium">Chinese</span> treats, gourmet Pizzas, and dynamic high-quality <span className="text-gold-200 font-medium">Mithai & Sweets</span> under open skies.
        </p>

        {/* Primary Call to actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate("menu")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-950 font-sans font-extrabold text-sm tracking-widest uppercase rounded-full cursor-pointer hover:shadow-[0_0_25px_rgba(222,184,116,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Explore Menu
          </button>
          
          <button
            onClick={() => onNavigate("contact")}
            className="w-full sm:w-auto px-8 py-4 bg-charcoal-900/80 hover:bg-charcoal-800 text-white font-sans font-bold text-sm tracking-widest uppercase rounded-full border border-gold-400/40 hover:border-gold-300 cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Calendar size={16} className="text-gold-400" />
            <span>Reserve A Table</span>
          </button>
        </div>

        {/* Floating details section for key locations and hours */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-gold-900/20 pt-8">
          <div>
            <h4 className="text-gold-400/60 font-mono text-[10px] tracking-widest uppercase mb-1">Cuisine Type</h4>
            <p className="text-charcoal-50 font-brand font-medium text-sm">100% Pure Vegetarian</p>
          </div>
          <div>
            <h4 className="text-gold-400/60 font-mono text-[10px] tracking-widest uppercase mb-1">Serving Hours</h4>
            <p className="text-charcoal-50 font-brand font-medium text-sm">11 AM – 11 PM Daily</p>
          </div>
          <div>
            <h4 className="text-gold-400/60 font-mono text-[10px] tracking-widest uppercase mb-1">Ambience</h4>
            <p className="text-charcoal-50 font-brand font-medium text-sm">Rooftop & Cozy Lounge</p>
          </div>
          <div>
            <h4 className="text-gold-400/60 font-mono text-[10px] tracking-widest uppercase mb-1">Perfect For</h4>
            <p className="text-charcoal-50 font-brand font-medium text-sm">Family & Celebrations</p>
          </div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <button
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-charcoal-300 hover:text-gold-300 transition-colors animate-bounce cursor-pointer focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1 text-gold-400/80">Scroll to Explore</span>
        <ChevronDown size={18} className="text-gold-400" />
      </button>

      {/* Embedded style or utility function inside JSX */}
    </section>
  );
}

function ChevronDown({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
