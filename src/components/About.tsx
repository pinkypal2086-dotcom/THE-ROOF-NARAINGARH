import { Award, ShieldCheck, Soup, Coffee, ArrowRight } from "lucide-react";

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const highlightPoints = [
    {
      icon: <Soup className="text-gold-400" size={20} />,
      title: "100% Pure Vegetarian",
      desc: "Priding ourselves in our strict hygiene, fresh sourcing, and 100% veg-only kitchen."
    },
    {
      icon: <Award className="text-gold-400" size={20} />,
      title: "Premium Rooftop Seating",
      desc: "Spectacular breezy outdoor terrace dining under the starry night skies of Naraingarh."
    },
    {
      icon: <ShieldCheck className="text-gold-400" size={20} />,
      title: "Authentic Sweets Corner",
      desc: "Displaying a masterfully prepared selection of local milk sweets and seasonal halwas."
    },
    {
      icon: <Coffee className="text-gold-400" size={20} />,
      title: "Family Celebrations",
      desc: "An upscale ambiance with a spacious 120+ seating capacity perfect for kitty parties & get-togethers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Background Decorative shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-gold-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Story Text & Narrative */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold-400 block mb-2">
                Naraingarh's Culinary Sanctuary
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">THE ROOF</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-300 mt-4 rounded-full" />
            </div>

            <p className="font-sans text-base sm:text-lg text-charcoal-200 font-light leading-relaxed">
              Located on the bustling <strong className="text-gold-200 font-semibold">Chandigarh-Nahan Road (Near Sharma Ice Factory, Naraingarh)</strong>, The Roof has established itself as Naraingarh’s absolute favorite destination for pure vegetarian modern dining. 
            </p>

            <p className="font-sans text-sm sm:text-base text-charcoal-300 leading-relaxed font-light">
              We seamlessly combine a beautiful aesthetic fine-dining indoor setting with a breathtakingly ambient open-air rooftop terrace. Whether you are searching for flavorful tandoori paneer tikka, crisp southern masala dosas, aromatic Chinese starters, or traditional milk sweets directly from our rich counter, we operate daily to craft exceptional dining moments for travellers and local households alike.
            </p>

            {/* Bullet Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlightPoints.map((item, idx) => (
                <div key={idx} className="flex space-x-3.5">
                  <div className="flex-shrink-0 mt-1 p-2 bg-charcoal-800 rounded-lg border border-gold-900/30">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-brand font-bold text-sm text-gold-200">{item.title}</h4>
                    <p className="text-xs text-charcoal-300 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dining Options Available badges & CTA */}
            <div className="pt-4 border-t border-charcoal-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="block text-xs font-mono text-gold-400/80 uppercase tracking-widest mb-1.5">
                  Available Services:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs font-medium rounded bg-gold-950/40 border border-gold-900/30 text-gold-300">
                    Dine-in (Rooftop / Indoor)
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded bg-gold-950/40 border border-gold-900/30 text-gold-300">
                    Fast Takeaway
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded bg-gold-950/40 border border-gold-900/30 text-gold-300">
                    Home Delivery
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate("contact")}
                className="flex items-center space-x-2 text-xs font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 uppercase tracking-widest group cursor-pointer hover:text-gold-200 transition-colors"
              >
                <span>Find our Location</span>
                <ArrowRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Pure premium photo showcase */}
          <div className="relative h-[450px] sm:h-[550px] w-full mt-8 lg:mt-0">
            {/* Primary Main Image - Seating Area with guests */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gold-900/40 transform hover:scale-[1.01] transition-transform duration-500 group">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEK2QZWT6wVbkWEW-NGkr9WygAwcp2uiW7ycOOkb4DNv8RkFlxxLBc6Jb3yQmLeonnBEVnQmc4gByG9cUx16BEphVOjUXe6XAuRapLJ0r4BZkLqjIU16DwyXtplLV6sbQHKYvWj=s1360-w1360-h1020-rw"
                alt="Cozy elegant indoor family dining space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="font-mono text-[10px] text-gold-300 uppercase tracking-widest bg-charcoal-950/80 px-2.5 py-1 rounded inline-block">
                  Family Seating
                </p>
                <h4 className="font-brand font-bold text-lg text-white mt-1.5">Cozy Rooftop & Indoor Dining</h4>
              </div>
            </div>

            {/* Decorative Gold Circular Stamp Badge */}
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-gradient-to-br from-gold-600 to-gold-300 rounded-full flex flex-col items-center justify-center p-3 text-center shadow-lg z-30 animate-[spin_25s_infinite_linear]">
              <span className="font-brand font-extrabold text-[10px] text-charcoal-950 leading-tight tracking-widest uppercase">
                100% PURE
              </span>
              <span className="font-display font-bold text-xs text-charcoal-950 block mt-1">
                VEG
              </span>
              <span className="font-sans text-[8px] text-charcoal-950 block tracking-tighter uppercase font-medium">
                NARAINGARH
              </span>
            </div>
            {/* Counter static shadow under badge */}
            <div className="absolute right-2 bottom-2 w-16 h-16 bg-gold-400/20 blur-xl rounded-full z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
