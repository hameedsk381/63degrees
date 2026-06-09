"use client";

import { gcp, images } from "@/lib/images";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, CheckCircle, UtensilsCrossed, ArrowRight, ChefHat, MapPin, Truck, Star, Quote, Users, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles } from "@/components/animations";

const mealOptions = ["Breakfast", "Lunch", "Dinner", "Breakfast & Lunch", "Lunch & Dinner", "Full Day"];
const eventOptions = [
  "Birthday", "Anniversary", "Engagement", "Wedding/Pre-Wedding", "Corporate Event",
  "Baby Shower", "Naming Ceremony", "Housewarming", "Festival Celebration", "Other",
];

const services = [
  { icon: ChefHat, title: "Expert Chefs On-Site", desc: "Our master chefs prepare and serve fresh at your venue, ensuring restaurant-quality dining." },
  { icon: Truck, title: "Complete Setup & Service", desc: "We bring everything — from cutlery to counters. Full-service setup and breakdown included." },
  { icon: Users, title: "Professional Staff", desc: "Trained serving staff, chefs, and coordinators assigned exclusively to your event." },
  { icon: UtensilsCrossed, title: "Customizable Menus", desc: "Choose from 250+ dishes or work with our chefs to create a bespoke menu for your guests." },
  { icon: Clock, title: "Flexible Timings", desc: "Breakfast, lunch, dinner, or full-day coverage — we adapt to your event schedule." },
  { icon: MapPin, title: "Across Hyderabad", desc: "We cater across all major venues in Hyderabad — banquets, farmhouses, offices, and homes." },
];

const galleryCategories = ["All", "Corporate", "Wedding", "Celebration"] as const;

const gallery = [
  { img: gcp("/images/1.jpg"), label: "Corporate Setup", category: "Corporate" },
  { img: gcp("/images/bi.png"), label: "Buffet Spread", category: "Corporate" },
  { img: gcp("/images/2024-02-07.jpg"), label: "Event Hall", category: "Corporate" },
  { img: gcp("/images/im2.jpg"), label: "Live Counter", category: "Corporate" },
  { img: gcp("/images/2.jpg"), label: "Wedding Reception", category: "Wedding" },
  { img: gcp("/images/4.jpg"), label: "Anniversary Setup", category: "Celebration" },
  { img: gcp("/images/food.jpg"), label: "Birthday Bash", category: "Celebration" },
  { img: gcp("/images/2024-03-07-2.jpg"), label: "Wedding Buffet", category: "Wedding" },
];

const testimonials = [
  { quote: "63 Degrees catered our annual company gala for 300 employees. The live grills counter was a huge hit and the Chicken Dum Biryani was absolutely authentic — our team still talks about it.", dish: "Chicken Dum Biryani", name: "Sneha Reddy", role: "HR Manager, Tech Corp" },
  { quote: "The Mutton Paya Soup they served at my daughter's wedding was phenomenal. Rich, aromatic, and slow-cooked to perfection. Our 500 guests are still raving about the entire spread.", dish: "Mutton Paya Soup", name: "Rajesh Khanna", role: "Parent of the Bride" },
];

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filteredGallery = activeCategory === "All" ? gallery : gallery.filter((g) => g.category === activeCategory);
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
    <div className="bg-brand-linen min-h-screen text-brand-text overflow-x-clip">

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={5} color="rgba(171,31,35,0.12)" />
        <div className="absolute inset-0">
          <Image src={images.ambiance[4]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="absolute inset-0 bg-warli opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />

        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Let Us Serve You</p>
          </Reveal>
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              CATERING <span className="font-accent italic text-brand-burgundy lowercase tracking-normal font-light">service</span>
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
      <section className="pt-0 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-brand-linen/50 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-4 uppercase tracking-tight">BRING THE BAAP OF BUFFETS TO YOUR EVENT</h2>
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
                Our catering service offers premium cuisine, professional service, and custom event planning. Whether it's a corporate gala or private wedding celebration, our team brings the same 250+ dish excellence that makes 63° Hyderabad's favorite culinary playground — directly to your venue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "50+", label: "Events Catered" },
              { num: "25K+", label: "Guests Served" },
              { num: "250+", label: "Dish Options" },
              { num: "4.8", label: "Avg. Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-brand-burgundy/10"
              >
                <p className="text-3xl md:text-4xl font-display text-brand-burgundy leading-none mb-2">{stat.num}</p>
                <p className="text-brand-text/50 text-[10px] font-bold tracking-[0.2em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-brand-linen/40 border-y border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.ambiance[1]} alt="" fill className="object-cover opacity-[0.03]" />
        </div>
        <div className="absolute inset-0 bg-blockprint opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-4 uppercase tracking-tight">
              WHAT WE <span className="text-brand-burgundy">OFFER</span>
            </h2>
            <p className="text-brand-text/70 max-w-xl mx-auto">End-to-end catering services designed for your event.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-brand-linen/70 backdrop-blur-md border border-brand-gold/15 shadow-md hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-brand-burgundy" />
                </div>
                <h3 className="text-lg font-display text-brand-text mb-3">{s.title}</h3>
                <p className="text-sm text-brand-text/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-16 bg-brand-linen">
        <div className="container-wide">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text leading-tight uppercase tracking-tight">
              PAST <span className="text-brand-burgundy">EVENTS</span>
            </h2>
          </Reveal>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-burgundy text-white shadow-lg"
                    : "bg-white/40 text-brand-text/60 border border-brand-burgundy/10 hover:border-brand-burgundy/30 hover:text-brand-burgundy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                
              >
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-bold tracking-wider uppercase">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.ambiance[3]} alt="" fill className="object-cover opacity-[0.06]" />
        </div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-rangoli opacity-[0.2] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-white leading-tight uppercase tracking-tight">
              TRUSTED BY <span className="text-brand-gold">HUNDREDS</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]"
              >
                <span className="inline-block px-4 py-1 mb-4 rounded-full bg-brand-gold/10 text-brand-gold text-[9px] font-bold tracking-[0.15em] uppercase border border-brand-gold/15">
                  {t.dish}
                </span>
                <Quote size={24} className="text-brand-gold/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-16 bg-brand-linen border-y border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.ambiance[5]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Form */}
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
                              <option value="">Select meal type</option>
                              {mealOptions.map((m) => <option key={m} value={m}>{m}</option>)}
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
                            <option value="">Select event type</option>
                            {eventOptions.map((e) => <option key={e} value={e}>{e}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="label-light">Additional Details</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="input-light resize-none" placeholder="Dietary preferences, special requests, theme setup, etc." />
                        </div>
                        <button
                          type="submit"
                          className="group relative w-full py-4 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex items-center justify-center gap-3 mt-6"
                        >
                          <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                          <span className="relative z-10">Submit Enquiry</span>
                          <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </ScaleIn>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-brand-burgundy/10 shadow-lg">
                  <h4 className="text-brand-text text-lg font-display mb-4 uppercase tracking-wider">Get In Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-burgundy/5 flex items-center justify-center shrink-0 border border-brand-burgundy/10">
                        <Phone size={14} className="text-brand-burgundy" />
                      </div>
                      <a href="tel:+919733386333" className="text-brand-text/80 hover:text-brand-burgundy text-sm transition-colors font-medium">+91 97333 86333</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-burgundy/5 flex items-center justify-center shrink-0 border border-brand-burgundy/10">
                        <Mail size={14} className="text-brand-burgundy" />
                      </div>
                      <a href="mailto:reservations@63degrees.in" className="text-brand-text/80 hover:text-brand-burgundy text-sm transition-colors break-all font-medium">reservations@63degrees.in</a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-brand-burgundy/10 shadow-lg">
                  <h4 className="text-brand-text text-lg font-display mb-4 uppercase tracking-wider">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    {[
                      "250+ masterpiece dishes to choose from",
                      "Live cooking counters on-site",
                      "Fully customizable menus",
                      "Freshly prepared on location",
                      "Pure Veg, Non-Veg & Jain options",
                      "Service across Hyderabad",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                        <span className="text-brand-text/80 text-sm font-light leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <Link
                  href="/book-a-table"
                  className="block bg-brand-linen/70 hover:bg-brand-linen rounded-3xl p-8 text-center group border border-brand-burgundy/10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-burgundy/5 flex items-center justify-center mx-auto mb-4 border border-brand-burgundy/10 group-hover:border-brand-burgundy/30 transition-colors">
                    <UtensilsCrossed size={20} className="text-brand-burgundy" />
                  </div>
                  <p className="text-brand-text/50 text-[10px] tracking-[0.2em] uppercase mb-2">Prefer to dine in?</p>
                  <p className="text-brand-text font-display text-2xl group-hover:text-brand-burgundy transition-colors">Book a Table →</p>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative bg-brand-linen overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.ambiance[7]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="absolute inset-0 bg-mandala opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="container-wide text-center">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-4 uppercase tracking-tight">
              LET'S PLAN YOUR <span className="font-accent italic text-brand-burgundy lowercase tracking-normal font-light">event</span>
            </h2>
            <p className="text-brand-text/70 text-base mb-8 max-w-md mx-auto font-light">
              Connect directly with our culinary concierge to discuss your bespoke event menu.
            </p>
            <a
              href="tel:+919733386333"
              className="group relative px-9 py-5 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <Phone size={14} className="relative z-10" />
              <span className="relative z-10">+91 97333 86333</span>
            </a>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
