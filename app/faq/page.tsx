"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MapPin, Clock, IndianRupee, Users, Baby, Car, UtensilsCrossed, Star } from "lucide-react";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles } from "@/components/animations";
import FaqJsonLd from "@/components/FaqJsonLd";

const faqs = [
  { q: "What is 63° Modern Regional Buffet?", a: "63° is a premium buffet restaurant in Gachibowli, Hyderabad offering 250+ dishes across Indian, Chinese, Continental, and regional cuisines. Known as 'The Baap of Buffets in Hyderabad', we offer a grand dining experience with live counters, biryanis, desserts, and more — all under one roof.", icon: UtensilsCrossed },
  { q: "Where is 63° located?", a: "63° is located at: 28, 2nd Floor, Plot No: 25, Mindspace Rd, opposite Meenakshi Bamboos Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500081. We're easily accessible from all parts of the city.", icon: MapPin },
  { q: "What are the buffet timings?", a: (
      <div className="space-y-2">
        <p><strong>Weekdays (Mon-Fri):</strong></p>
        <p className="pl-4">Lunch: 12:00 PM – 3:30 PM</p>
        <p className="pl-4">Dinner: 7:00 PM – 11:00 PM</p>
        <p className="mt-2"><strong>Saturday:</strong></p>
        <p className="pl-4">Lunch: 12:00 PM – 4:00 PM</p>
        <p className="pl-4">Dinner: 7:00 PM – 11:30 PM</p>
        <p className="mt-2"><strong>Sunday:</strong></p>
        <p className="pl-4">Lunch: 12:00 PM – 4:30 PM</p>
        <p className="pl-4">Dinner: 7:00 PM – 11:00 PM</p>
      </div>
    ), icon: Clock },
  { q: "What is the buffet price?", a: (
      <div className="space-y-2">
        <p><strong>Our buffet pricing is very competitive for the quality and variety we offer.</strong></p>
        <p className="pl-4">Veg Buffet: ₹749 + taxes</p>
        <p className="pl-4">Non-Veg Buffet: ₹849 + taxes</p>
        <p className="mt-3 text-brand-text/50 text-xs">Prices may vary on weekends, festivals, and special events. Call us for the latest offers and group discounts!</p>
      </div>
    ), icon: IndianRupee },
  { q: "Do I need to book a table in advance?", a: "Walk-ins are always welcome, but advance reservations are recommended — especially for weekends, large groups, and dinner peak hours. You can call us at +91 97333 86333 or visit our Contact page to reserve your table.", icon: Phone },
  { q: "What cuisines do you serve?", a: "We serve a grand multi-cuisine spread including: North Indian, South Indian, Andhra, Hyderabadi, Chinese, Continental, Italian, BBQ & live grills, Chaat, salads, soups, and an expansive dessert section with 10+ sweets. Total: 250+ dishes daily.", icon: UtensilsCrossed },
  { q: "Do you have a kids buffet?", a: "Yes! Kids are welcome. Children under 5 years dine free of cost. We have a separate kids-friendly section with dishes tailored to young palates.", icon: Baby },
  { q: "Do you offer vegetarian and Jain options?", a: "Absolutely! We offer a wide selection of vegetarian dishes daily. Jain options are available on request — please inform our staff in advance and we will be happy to accommodate.", icon: Star },
  { q: "Is parking available?", a: "Yes, ample parking space is available for both two-wheelers and four-wheelers at our Gachibowli location.", icon: Car },
  { q: "Is 63° suitable for large group bookings?", a: "Absolutely! With our spacious venue, we are one of Hyderabad's best venues for office teams, college groups, family functions, and celebrations. Group discounts may be available on request.", icon: Users },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      <FaqJsonLd />
      
      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-brand-linen border-b border-brand-burgundy/10">
        <FloatingParticles count={5} color="rgba(171,31,35,0.12)" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[20]})`}} />
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Got Questions?</p>
          </Reveal>
          
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              FREQUENTLY <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">asked</span>
            </h1>
          </CinematicReveal>
          
          <Reveal delay={0.4}>
            <p className="text-brand-text/80 text-base max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about 63° — from buffet pricing and operational timings to group dining, parking, and dietary requests.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ LIST ── */}
      <section className="section-pad pt-20 bg-brand-linen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[21]})`}} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const Icon = faq.icon;
              return (
                <Reveal key={i} delay={Math.min(i * 0.05, 0.4)}>
                  <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? "bg-brand-linen border-brand-gold/30 shadow-md" : "bg-brand-linen/60 border-brand-gold/10 hover:border-brand-gold/25"}`}>
                    <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center gap-4 p-5 text-left">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-brand-gold/10 border-brand-gold/25 text-brand-gold" : "bg-brand-linen border-brand-gold/10 text-brand-text/50"}`}>
                        <Icon size={18} />
                      </div>
                      <span className={`flex-1 text-sm font-medium transition-colors ${isOpen ? "text-[#AB1F24]" : "text-brand-text"}`}>{faq.q}</span>
                      <ChevronDown size={16} className={`text-brand-text/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-[#AB1F24]" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          transition={{ duration: 0.3 }} 
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 pl-16 pr-12">
                            <div className="text-brand-text/80 text-sm leading-relaxed border-t border-brand-gold/15 pt-4 font-light">
                              {faq.a}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section-pad bg-brand-linen/40 border-t border-[#AB1F24]/10 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[22]})`}} />
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <ScaleIn>
            <div className="bg-brand-linen rounded-3xl p-10 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
              <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Still have questions?</p>
              <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-4 uppercase tracking-tight">WE'RE HERE TO HELP</h2>
              <p className="text-brand-text/60 text-sm mb-8 font-light leading-relaxed">Can't find what you're looking for? Give us a call directly or send us a digital message.</p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10">Contact Us</span>
                </Link>
                
                <a 
                  href="tel:+919733386333" 
                  className="group px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-text border border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 bg-brand-linen/40 backdrop-blur-sm hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <Phone size={14} /> 
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
