"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, CheckCircle, UtensilsCrossed, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles } from "@/components/animations";

const mealOptions = ["Breakfast", "Lunch", "Dinner", "Breakfast & Lunch", "Lunch & Dinner", "Full Day"];
const eventOptions = [
  "Birthday", "Anniversary", "Engagement", "Wedding/Pre-Wedding", "Corporate Event",
  "Baby Shower", "Naming Ceremony", "Housewarming", "Festival Celebration", "Other",
];

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", persons: "", meal: "", date: "", location: "", event: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={15} color="rgba(171,31,35,0.12)" />
        
        {/* Architectural backdrop */}
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Let Us Serve You
            </p>
          </Reveal>
          
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              CATERING <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">service</span>
            </h1>
          </CinematicReveal>
          
          <Reveal delay={0.4}>
            <p className="text-brand-text/80 text-base max-w-xl mx-auto font-light leading-relaxed">
              Let 63° bring the grand feast to your event. From intimate corporate gatherings to massive family celebrations — we choreograph it all.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INTRO CARD ── */}
      <section className="section-pad pt-0">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-brand-linen/50 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-4 uppercase tracking-tight">
                BRING THE BAAP OF BUFFETS TO YOUR EVENT
              </h2>
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
                Our catering service offers a seamless blend of delicious premium cuisine, professional service, and custom event planning. Whether it's a corporate gala or private wedding celebration, our team brings the same 250+ dish excellence that makes 63° Hyderabad's favorite culinary playground — directly to your venue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="section-pad bg-brand-linen/40 border-y border-[#AB1F24]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">
            
            {/* Enquiry Form */}
            <div className="md:col-span-3">
              <ScaleIn>
                <div className="bg-brand-linen rounded-3xl p-8 md:p-10 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
                  <h3 className="text-2xl font-display text-brand-text mb-2">Tell Us About Your Event</h3>
                  <p className="text-brand-text/50 text-sm mb-8">Fill in the details below and our team will get back to you within 24 hours.</p>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-16"
                      >
                        <div className="w-20 h-20 bg-green-500/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/10">
                          <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h4 className="text-2xl font-display text-brand-text mb-2">Thank You!</h4>
                        <p className="text-brand-text/70 text-sm leading-relaxed max-w-sm mx-auto">
                          Your catering enquiry has been received. Our hospitality representative will contact you shortly to plan your menu.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Your Name *</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="input-light" placeholder="Enter your name" />
                          </div>
                          <div>
                            <label className="label-light">Phone Number *</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="input-light" placeholder="Enter your phone" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Email Address</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} className="input-light" placeholder="Enter your email" />
                          </div>
                          <div>
                            <label className="label-light">Number of Persons *</label>
                            <input type="number" name="persons" value={form.persons} onChange={handleChange} required min="10" className="input-light" placeholder="Approx count" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Meal Type *</label>
                            <select name="meal" value={form.meal} onChange={handleChange} required className="input-light">
                              <option value="" className="text-brand-text/45">Select meal type</option>
                              {mealOptions.map((m) => <option key={m} value={m} className="text-brand-text">{m}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="label-light">Event Date *</label>
                            <input type="date" name="date" value={form.date} onChange={handleChange} required className="input-light" />
                          </div>
                        </div>

                        <div>
                          <label className="label-light">Event Location *</label>
                          <input type="text" name="location" value={form.location} onChange={handleChange} required className="input-light" placeholder="Venue address or area in Hyderabad" />
                        </div>

                        <div>
                          <label className="label-light">Event Type *</label>
                          <select name="event" value={form.event} onChange={handleChange} required className="input-light">
                            <option value="" className="text-brand-text/45">Select event type</option>
                            {eventOptions.map((e) => <option key={e} value={e} className="text-brand-text">{e}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="label-light">Additional Details</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="input-light resize-none" placeholder="Dietary preferences, special requests, theme setup, etc." />
                        </div>

                        <button 
                          type="submit" 
                          className="group relative w-full py-4 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex items-center justify-center gap-3 mt-6"
                        >
                          <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                          <span className="relative z-10">Submit Enquiry</span>
                          <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </ScaleIn>
            </div>

            {/* Sidebar Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-[#AB1F24]/10 shadow-lg">
                  <h4 className="text-brand-text text-lg font-display mb-4 uppercase tracking-wider">Get In Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#AB1F24]/5 flex items-center justify-center shrink-0 border border-[#AB1F24]/10">
                        <Phone size={14} className="text-[#AB1F24]" />
                      </div>
                      <a href="tel:+919733386333" className="text-brand-text/80 hover:text-[#AB1F24] text-sm transition-colors font-medium">
                        +91 97333 86333
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#AB1F24]/5 flex items-center justify-center shrink-0 border border-[#AB1F24]/10">
                        <Mail size={14} className="text-[#AB1F24]" />
                      </div>
                      <a href="mailto:reservations@63degrees.in" className="text-brand-text/80 hover:text-[#AB1F24] text-sm transition-colors break-all font-medium">
                        reservations@63degrees.in
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-[#AB1F24]/10 shadow-lg">
                  <h4 className="text-brand-text text-lg font-display mb-4 uppercase tracking-wider">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    {[
                      "250+ masterpiece dishes to choose from",
                      "Choreographed live operational drama",
                      "Fully customizable menus",
                      "Intricately prepared fresh on-site",
                      "Pure Veg, Non-Veg & Jain options",
                      "Gourmet service across Hyderabad",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-[#AB1F24] shrink-0 mt-0.5" />
                        <span className="text-brand-text/80 text-sm font-light leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <Link 
                  href="/book-a-table" 
                  className="block bg-brand-linen/70 hover:bg-brand-linen rounded-3xl p-8 text-center group border border-[#AB1F24]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-[#AB1F24]/5 flex items-center justify-center mx-auto mb-4 border border-[#AB1F24]/10 group-hover:border-[#AB1F24]/30 transition-colors">
                    <UtensilsCrossed size={20} className="text-[#AB1F24]" />
                  </div>
                  <p className="text-brand-text/50 text-[10px] tracking-[0.2em] uppercase mb-2">Prefer to dine in?</p>
                  <p className="text-brand-text font-display text-2xl group-hover:text-[#AB1F24] transition-colors">Book a Table →</p>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section-pad relative z-10 bg-brand-linen">
        <div className="container-wide text-center">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-4 uppercase tracking-tight">
              LET'S PLAN YOUR <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">event</span>
            </h2>
            <p className="text-brand-text/70 text-base mb-8 max-w-md mx-auto font-light">
              Connect directly with our culinary concierge to discuss your bespoke event menu.
            </p>
            <a 
              href="tel:+919733386333" 
              className="group relative px-9 py-5 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <Phone size={14} className="relative z-10" />
              <span className="relative z-10">+91 97333 86333</span>
            </a>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
