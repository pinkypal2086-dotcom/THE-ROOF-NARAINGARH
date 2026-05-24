import { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { Plus, Minus, MessageCircle, PhoneCall, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1"); // pre-open the first FAQ for visual aesthetics

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-charcoal-900 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Commonly Asked Questions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-2">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 font-brand">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stateful Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border border-gold-900/10 transition-all duration-300 ${
                  isOpen
                    ? "bg-charcoal-850/80 border-gold-400/30 shadow-[0_4px_25px_rgba(222,184,116,0.05)]"
                    : "bg-charcoal-900/40 hover:bg-charcoal-850/50"
                }`}
              >
                {/* Accordion header button toggler */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold-500/20 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-brand font-bold text-sm sm:text-base text-white hover:text-gold-200 transition-colors pr-4">
                    {item.question}
                  </span>
                  
                  {/* Indicator Icon */}
                  <div className={`p-1.5 rounded-full border text-gold-300 transition-transform duration-300 ${
                    isOpen ? "bg-gold-500/10 border-gold-400/40 rotate-180" : "bg-charcoal-950/40 border-charcoal-800"
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Accordion expandable text area */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-300 leading-relaxed font-light border-t border-charcoal-800/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA help box block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-charcoal-900/90 to-charcoal-850/80 border border-gold-900/25 shadow-xl relative overflow-hidden">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gold-950/80 rounded-xl border border-gold-400/20 text-gold-300 self-center">
              <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="font-brand font-extrabold text-sm sm:text-base text-white">
                Still have questions or special requirements?
              </h4>
              <p className="font-sans text-xs text-charcoal-300 font-light mt-1">
                Whether you need a full customized menu, special seating layout, or allergic reviews, feel free to directly message our managers.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href="https://wa.me/919258581616?text=Hi%20The%20Roof%20Naraingarh,%20I%20have%20some%20questions%20regarding%20menu/reservations!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full cursor-pointer bg-charcoal-950 hover:bg-gold-500/15 text-xs font-bold text-gold-300 tracking-wider uppercase border border-gold-400/30 hover:border-gold-300 flex items-center justify-center space-x-1.5 transition-all text-center w-full sm:w-auto"
            >
              <MessageCircle size={14} className="text-gold-400" />
              <span>WhatsApp Manager</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
