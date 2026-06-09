"use client";

import { gcp } from "@/lib/images";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, Users, UtensilsCrossed, Sparkles, Music, Clock, ArrowRight, Star, Quote, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles, StaggerContainer, StaggerItem } from "@/components/animations";

const occasionOptions = [
  "Birthday", "Anniversary", "Family Gathering", "Office Party",
  "Corporate Celebration", "Get Together", "Engagement", "Other",
];

const features = [
  { icon: Users, title: "Capacity up to 50 Guests", desc: "Our dedicated private dining sanctuary comfortably accommodates intimate gatherings and corporate celebrations." },
  { icon: UtensilsCrossed, title: "Customized Menu", desc: "Choose from our 250+ masterpiece dishes or collaborate with our chefs to sculpt a personalized menu." },
  { icon: Sparkles, title: "Dedicated Staff", desc: "Enjoy bespoke attention with an expert culinary service team assigned exclusively to your party." },
  { icon: Music, title: "Ambiance & Decor", desc: "Tailor the atmosphere with custom floral decor, signature lighting, and curated audio arrangements." },
  { icon: Clock, title: "Flexible Timing", desc: "Select pristine afternoon lunch slots or grand evening dinner bookings with fluid scheduling." },
];

const packages = [
  {
    name: "Silver",
    price: "₹849",
    per: "per person",
    features: ["Access to full buffet spread", "Dedicated serving area", "Standard decor setup", "Soft beverages included", "Complimentary welcome drink"],
    popular: false,
  },
  {
    name: "Gold",
    price: "₹1,199",
    per: "per person",
    features: ["All Silver features", "Customized 4-course menu", "Premium decor & floral setup", "Live music arrangement", "Photo booth corner"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹1,599",
    per: "per person",
    features: ["All Gold features", "Personalized 6-course menu", "VIP decor & lighting", "Live band performance", "Customized return gifts"],
    popular: false,
  },
];

const galleryImages = [
  { img: gcp("/images/1.jpg"), label: "Elegant Setup" },
  { img: gcp("/images/2024-02-07.jpg"), label: "Event Hall" },
  { img: gcp("/images/im2.jpg"), label: "Decor Details" },
  { img: gcp("/images/4.jpg"), label: "Dining Area" },
];

const testimonials = [
  { quote: "The Grilled Fish in Lemon Butter Sauce at our anniversary dinner was divine. Perfectly seared, flaky, and paired beautifully with the curated wine. The private dining team made it unforgettable.", dish: "Grilled Fish Lemon Butter", name: "Vikram & Neha", role: "Anniversary Celebration" },
  { quote: "Their Angara Chicken Tikka was the highlight of our corporate dinner. Smoky, spicy, and cooked to perfection in the live tandoor. Our clients were thoroughly impressed.", dish: "Angara Chicken Tikka", name: "Arun Mehta", role: "Corporate Event" },
];

export default function PrivateDiningPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", guests: "", meal: "", date: "", time: "", occasion: "", message: "",
  });
  const [selectedPackage, setSelectedPackage] = useState("Gold");

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
        <div className="absolute inset-0 bg-mandala opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />

        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Exclusive Celebrations</p>
          </Reveal>
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              PRIVATE <span className="font-accent italic text-brand-burgundy lowercase tracking-normal font-light">dining</span>
            </h1>
          </CinematicReveal>
          <Reveal delay={0.4}>
            <p className="text-brand-text/80 text-base max-w-xl mx-auto font-light leading-relaxed">
              Celebrate your life's milestone moments in an intimate, highly exclusive setting with 250+ masterpiece dishes and personalized concierge service.
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
              <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-4 uppercase tracking-tight">YOUR EVENT, YOUR WAY</h2>
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
                Whether it's a milestone birthday, executive dinner, or intimate family reunion — our private dining experiences offer the perfect blend of world-class food, elegant atmosphere, and bespoke white-glove service. Host your guests in a sanctuary that is exclusively yours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="pb-16">
        <div className="container-wide">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text leading-tight uppercase tracking-tight">
              THE <span className="text-brand-burgundy">SETUP</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                
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

      {/* ── FEATURES ── */}
      <section className="py-16 bg-brand-linen/40 border-y border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-paisley opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-4 uppercase tracking-tight">THE EXPERIENCE</h2>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-2xl p-8 h-full border border-brand-gold/15 shadow-md hover:border-brand-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center mb-6">
                    <f.icon size={20} className="text-brand-burgundy" />
                  </div>
                  <h3 className="text-xl font-display text-brand-text mb-3 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-sm text-brand-text/70 font-light leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-16 bg-brand-linen relative overflow-hidden">
        <div className="absolute inset-0 bg-blockprint opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-4 uppercase tracking-tight">CHOOSE YOUR <span className="text-brand-burgundy">PACKAGE</span></h2>
            <p className="text-brand-text/70 max-w-xl mx-auto">Curated packages designed to make your event unforgettable.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer ${
                  pkg.popular
                    ? "border-brand-gold bg-white/60 backdrop-blur-sm shadow-2xl scale-[1.02] md:scale-105"
                    : "border-brand-burgundy/15 bg-brand-linen/60 hover:border-brand-burgundy/30 shadow-lg"
                }`}
                onClick={() => setSelectedPackage(pkg.name)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-brand-gold text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}
                <div className={pkg.popular ? "mt-4" : ""}>
                  <h3 className="text-2xl font-display text-brand-text mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-display text-brand-burgundy">{pkg.price}</span>
                    <span className="text-sm text-brand-text/50">{pkg.per}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-brand-text/70">
                        <CheckCircle size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedPackage(pkg.name)}
                    className={`block w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-center transition-all duration-500 ${
                      pkg.popular
                        ? "bg-brand-gold text-white hover:bg-brand-amber shadow-lg"
                        : "border border-brand-burgundy/30 text-brand-burgundy hover:bg-brand-burgundy hover:text-white"
                    }`}
                  >
                    {selectedPackage === pkg.name ? "Selected" : "Select Package"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-lotus opacity-[0.2] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-white leading-tight uppercase tracking-tight">
              WHAT OUR <span className="text-brand-gold">GUESTS SAY</span>
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
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-white font-bold text-sm mt-3">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-16 bg-brand-linen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Form */}
            <div className="md:col-span-3">
              <ScaleIn>
                <div className="bg-brand-linen rounded-3xl p-8 md:p-10 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
                  <h3 className="text-2xl font-display text-brand-text mb-2 uppercase tracking-tight">Reserve Your Private Event</h3>
                  <p className="text-brand-text/50 text-sm mb-4">
                    Selected package: <span className="text-brand-burgundy font-bold">{selectedPackage}</span>
                  </p>
                  <p className="text-brand-text/50 text-sm mb-8">Fill in the details below and our bespoke events concierge will reach out within 24 hours.</p>

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
                          Your private dining enquiry has been received. Our exclusive events representative will contact you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Your Name *</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="input-light" />
                          </div>
                          <div>
                            <label className="label-light">Phone Number *</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="input-light" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Email Address</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} className="input-light" />
                          </div>
                          <div>
                            <label className="label-light">Number of Guests *</label>
                            <input type="number" name="guests" value={form.guests} onChange={handleChange} required min="2" className="input-light" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Meal Preference *</label>
                            <select name="meal" value={form.meal} onChange={handleChange} required className="input-light">
                              <option value="">Select meal</option>
                              <option value="Lunch">Lunch</option>
                              <option value="Dinner">Dinner</option>
                            </select>
                          </div>
                          <div>
                            <label className="label-light">Event Date *</label>
                            <input type="date" name="date" value={form.date} onChange={handleChange} required className="input-light" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="label-light">Preferred Time *</label>
                            <input type="time" name="time" value={form.time} onChange={handleChange} required className="input-light" />
                          </div>
                          <div>
                            <label className="label-light">Occasion *</label>
                            <select name="occasion" value={form.occasion} onChange={handleChange} required className="input-light">
                              <option value="">Select occasion</option>
                              {occasionOptions.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="label-light">Additional Details</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="input-light resize-none" placeholder="Dietary needs, special arrangements, decor themes..." />
                        </div>
                        <button
                          type="submit"
                          className="group relative w-full py-4 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex items-center justify-center gap-3 mt-6"
                        >
                          <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                          <span className="relative z-10">Submit Enquiry</span>
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
                <div className="bg-brand-linen/70 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-lg">
                  <h4 className="text-brand-text text-lg font-display mb-4 uppercase tracking-wider">Get In Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center shrink-0 border border-brand-gold/15">
                        <Phone size={14} className="text-brand-burgundy" />
                      </div>
                      <a href="tel:+919733386333" className="text-brand-text/80 hover:text-brand-gold text-sm transition-colors font-medium">+91 97333 86333</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center shrink-0 border border-brand-gold/15">
                        <Mail size={14} className="text-brand-burgundy" />
                      </div>
                      <a href="mailto:reservations@63degrees.in" className="text-brand-text/80 hover:text-brand-gold text-sm transition-colors break-all font-medium">reservations@63degrees.in</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center shrink-0 border border-brand-gold/15">
                        <MapPin size={14} className="text-brand-burgundy" />
                      </div>
                      <span className="text-brand-text/80 text-sm font-medium">Gachibowli, Hyderabad</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <Link
                  href="/catering"
                  className="block bg-brand-linen/70 hover:bg-brand-linen rounded-3xl p-8 text-center group border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <p className="text-brand-text/50 text-[10px] tracking-[0.2em] uppercase mb-2">Hosting a larger event?</p>
                  <p className="text-brand-text font-display text-2xl group-hover:text-brand-gold transition-colors">Explore Catering <ArrowRight size={18} className="inline -rotate-45" /></p>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
