"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Gift, CheckCircle, ChevronRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal, ScaleIn, GlowCard } from "@/components/animations";

export default function BookTablePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    phone: "",
    email: "",
    specialRequest: "",
    otp: "",
    promo: "",
  });
  const [promoApplied, setPromoApplied] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Success
    }, 1500);
  };

  const applyPromo = () => {
    if (form.promo.toLowerCase() === "baap10") setPromoApplied(true);
  };

  const timeSlots = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"];

  return (
    <div className="bg-brand-linen min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli opacity-[0.25] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(171,31,35,0.06),transparent)] pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Reservations</p>
            <h1 className="heading-xl text-[clamp(2.5rem,5vw,4rem)] text-brand-text mb-4">
              BOOK YOUR <span className="text-brand-burgundy">TABLE</span>
            </h1>
            <p className="text-brand-text/70 text-sm">Secure your spot at Hyderabad's largest buffet.</p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <ScaleIn>
              <div className="bg-brand-linen rounded-3xl p-6 md:p-10 border border-brand-burgundy/10 shadow-lg">
                
                {/* Stepper */}
                {step < 4 && (
                  <div className="flex items-center justify-between mb-8 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-brand-linen -z-10" />
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-brand-burgundy -z-10 transition-all duration-500" 
                      style={{ width: `${((step - 1) / 2) * 100}%` }} 
                    />
                    {[1, 2, 3].map((num) => (
                      <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        step >= num ? "bg-brand-burgundy text-white shadow-md" : "bg-brand-linen text-brand-text/40 border border-brand-burgundy/20"
                      }`}>
                        {step > num ? <CheckCircle size={14} /> : num}
                      </div>
                    ))}
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form key="step1" onSubmit={handleNext} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-display text-brand-text mb-6">Reservation Details</h2>
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2 flex items-center gap-2"><Calendar size={12}/> Date</label>
                          <input type="date" required className="w-full h-12 px-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2 flex items-center gap-2"><Users size={12}/> Guests</label>
                          <select required className="w-full h-12 px-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}>
                            {[...Array(20)].map((_, i) => <option key={i+1} value={i+1}>{i+1} Person{i>0?'s':''}</option>)}
                            <option value="20+">20+ (Group Booking)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-8">
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-3 flex items-center gap-2"><Clock size={12}/> Select Time</label>
                        <div className="flex flex-wrap gap-3">
                          {timeSlots.map(time => (
                            <button
                              key={time} type="button"
                              onClick={() => setForm({...form, time})}
                              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                                form.time === time 
                                  ? "bg-brand-burgundy text-white shadow-md border border-brand-burgundy" 
                                  : "bg-brand-linen text-brand-text/70 border border-brand-burgundy/20 hover:border-brand-burgundy/50"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button type="submit" disabled={!form.date || !form.time} className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-bold tracking-widest uppercase rounded-xl hover:bg-[#820b1e] transition-colors shadow-lg w-full disabled:opacity-50 disabled:cursor-not-allowed">
                        Continue to Contact Details <ChevronRight size={16} className="ml-2" />
                      </button>
                    </motion.form>
                  )}

                  {step === 2 && (
                    <motion.form key="step2" onSubmit={handleNext} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-display text-brand-text mb-6">Contact Information</h2>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2">Full Name</label>
                          <input type="text" required placeholder="John Doe" className="w-full h-12 px-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors placeholder:text-brand-text/30" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2">Phone Number</label>
                          <input type="tel" required placeholder="+91 90000 00000" className="w-full h-12 px-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors placeholder:text-brand-text/30" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2">Email Address (Optional)</label>
                        <input type="email" placeholder="john@example.com" className="w-full h-12 px-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors placeholder:text-brand-text/30" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                      <div className="mb-8">
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/70 mb-2">Special Requests</label>
                        <textarea rows={3} placeholder="Anniversary, window seat, allergies..." className="w-full p-4 rounded-xl bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50 transition-colors placeholder:text-brand-text/30 resize-none" value={form.specialRequest} onChange={e => setForm({...form, specialRequest: e.target.value})} />
                      </div>
                      <div className="flex gap-4">
                        <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center px-8 py-4 bg-brand-linen text-brand-text font-bold tracking-widest uppercase rounded-xl border border-brand-burgundy/20 hover:bg-brand-linen transition-colors flex-1">Back</button>
                        <button type="submit" className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-bold tracking-widest uppercase rounded-xl hover:bg-[#820b1e] transition-colors shadow-lg flex-1">Verify OTP <ChevronRight size={16} className="ml-2"/></button>
                      </div>
                    </motion.form>
                  )}

                  {step === 3 && (
                    <motion.form key="step3" onSubmit={handleVerify} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="text-center mb-8">
                        <ShieldCheck size={40} className="text-brand-burgundy mx-auto mb-4" />
                        <h2 className="text-2xl font-display text-brand-text mb-2">Verify Your Number</h2>
                        <p className="text-brand-text/60 text-sm">We've sent a 4-digit code to {form.phone}</p>
                      </div>
                      <div className="flex justify-center gap-4 mb-8">
                        {[1, 2, 3, 4].map(i => (
                          <input key={i} type="text" maxLength={1} required className="w-14 h-14 text-center text-xl font-bold rounded-xl bg-brand-linen border border-brand-burgundy/20 text-brand-text focus:border-brand-burgundy outline-none shadow-inner" />
                        ))}
                      </div>
                      <button type="submit" disabled={loading} className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-bold tracking-widest uppercase rounded-xl hover:bg-[#820b1e] transition-colors shadow-lg w-full disabled:opacity-50">
                        {loading ? "Verifying..." : "Confirm Reservation"}
                      </button>
                    </motion.form>
                  )}

                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-500" />
                      </div>
                      <h2 className="text-3xl font-display text-brand-text mb-4">Booking Confirmed!</h2>
                      <p className="text-brand-text/70 mb-8 max-w-sm mx-auto">
                        Thank you, {form.name}. Your table for {form.guests} on {form.date} at {form.time} is reserved. We've sent the details via SMS.
                      </p>
                      <button onClick={() => window.location.href='/'} className="inline-flex items-center justify-center px-8 py-4 bg-brand-linen text-brand-text font-bold tracking-widest uppercase rounded-xl border border-brand-burgundy/20 hover:bg-brand-linen transition-colors">Return to Home</button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </ScaleIn>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.2}>
              <GlowCard className="bg-brand-linen rounded-3xl p-6 border border-brand-burgundy/10 shadow-md">
                <h3 className="text-brand-text font-display text-lg mb-4 flex items-center gap-2"><Gift size={16} className="text-brand-burgundy"/> Apply Promo Code</h3>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 h-10 px-3 rounded-lg bg-brand-linen/50 border border-brand-burgundy/10 text-brand-text focus:outline-none focus:border-brand-burgundy/50" value={form.promo} onChange={e => setForm({...form, promo: e.target.value})} disabled={promoApplied} />
                  <button type="button" onClick={applyPromo} disabled={promoApplied || !form.promo} className="bg-brand-text hover:bg-brand-burgundy text-white px-4 rounded-lg text-xs font-semibold disabled:opacity-50 transition-colors">
                    {promoApplied ? "Applied" : "Apply"}
                  </button>
                </div>
                {promoApplied && <p className="text-green-600 text-xs mt-2 font-medium">10% discount applied successfully!</p>}
              </GlowCard>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-brand-linen rounded-3xl p-6 border border-brand-burgundy/10 shadow-md">
                <h3 className="text-brand-text font-display text-lg mb-4">Location Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                    <p className="text-brand-text/70 leading-relaxed">28, 2nd Floor, Plot 25, Mindspace Rd, Gachibowli, Hyderabad</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                    <p className="text-brand-text/70">+91 97333 86333</p>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-brand-burgundy/5 border border-brand-burgundy/20">
                  <p className="text-brand-burgundy text-xs font-semibold text-center tracking-wide">WALK-INS ARE ALSO WELCOME</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
