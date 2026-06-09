"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles } from "@/components/animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={5} color="rgba(171,31,35,0.12)" />
        <div className="absolute inset-0">
          <Image src={images.ambiance[18]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-lotus opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          </Reveal>
          
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              CONTACT <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">us</span>
            </h1>
          </CinematicReveal>
          
          <Reveal delay={0.4}>
            <p className="text-brand-text/80 text-base max-w-xl mx-auto font-light leading-relaxed">
              Have a question, feedback, or need help with a reservation? We're here to assist you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INFO & FORM ── */}
      <section className="section-pad pt-0">
        <div className="container-wide max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-8 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#AB1F24]" />
                    </div>
                    <div>
                      <h3 className="text-brand-text font-display text-xl mb-2 tracking-tight uppercase">Location</h3>
                      <p className="text-brand-text/80 text-sm leading-relaxed mb-4 font-light">
                        28, 2nd Floor, Plot No: 25, Mindspace Rd, opposite Meenakshi Bamboos Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500081
                      </p>
                      <a 
                        href="https://maps.google.com/?q=63+Degree+Modern+Regional+Buffet" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#AB1F24] text-xs font-semibold hover:text-brand-gold transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center mb-4">
                      <Phone size={18} className="text-[#AB1F24]" />
                    </div>
                    <h3 className="text-brand-text font-display text-lg mb-1 uppercase tracking-tight">Call Us</h3>
                    <a href="tel:+919733386333" className="text-brand-text/80 hover:text-brand-gold text-sm transition-colors block font-medium">+91 97333 86333</a>
                  </div>

                  <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center mb-4">
                      <Mail size={18} className="text-[#AB1F24]" />
                    </div>
                    <h3 className="text-brand-text font-display text-lg mb-1 uppercase tracking-tight">Email</h3>
                    <a href="mailto:reservations@63degrees.in" className="text-brand-text/80 hover:text-brand-gold text-sm transition-colors block break-all font-medium">reservations@63degrees.in</a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-8 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} className="text-[#AB1F24]" />
                    <h3 className="text-brand-text font-display text-xl uppercase tracking-tight">Operating Hours</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-brand-burgundy/10 pb-2">
                      <span className="text-brand-text/60 font-light">Mon - Fri (Lunch)</span>
                      <span className="text-brand-text/85 font-medium">12:00 PM – 3:30 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-burgundy/10 pb-2">
                      <span className="text-brand-text/60 font-light">Mon - Fri (Dinner)</span>
                      <span className="text-brand-text/85 font-medium">7:00 PM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-burgundy/10 pb-2">
                      <span className="text-brand-text/60 font-light">Sat - Sun (Lunch)</span>
                      <span className="text-brand-text/85 font-medium">12:00 PM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-brand-text/60 font-light">Sat - Sun (Dinner)</span>
                      <span className="text-brand-text/85 font-medium">7:00 PM – 11:30 PM</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ScaleIn delay={0.2}>
                <div className="bg-brand-linen rounded-3xl p-8 md:p-12 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
                  
                  <h2 className="text-2xl font-display text-brand-text mb-2 relative z-10 tracking-tight uppercase">Send a Message</h2>
                  <p className="text-brand-text/50 text-sm mb-8 relative z-10">We will get back to you within 24 hours.</p>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="text-center py-12 relative z-10"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500/5 border border-green-500/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-brand-text text-2xl font-display mb-2">Message Sent!</h3>
                        <p className="text-brand-text/75 text-sm">Thank you for reaching out. Our team will contact you shortly.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Your Name</label>
                            <input type="text" required className="input-light" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                          </div>
                          <div>
                            <label className="label-light">Phone Number</label>
                            <input type="tel" required className="input-light" placeholder="+91 90000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                          </div>
                        </div>
                        
                        <div>
                          <label className="label-light">Email Address</label>
                          <input type="email" required className="input-light" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        </div>
                        
                        <div>
                          <label className="label-light">Message</label>
                          <textarea rows={4} required className="input-light resize-none" placeholder="How can we help you?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                        </div>
                        
                        <button 
                          type="submit" 
                          className="group relative w-full py-4 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
                        >
                          <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                          <span className="relative z-10">Send Message</span>
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </ScaleIn>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="h-[400px] md:h-[500px] w-full relative border-t border-[#AB1F24]/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5683933096236!2d78.36154677516597!3d17.43250888346252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fb57a07ec5%3A0x6e24df61f9d505ff!2s63%20Degree%20Modern%20Regional%20Buffet!5e0!3m2!1sen!2sin!4v1716382103503!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  );
}
