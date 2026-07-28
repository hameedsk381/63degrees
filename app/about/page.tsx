"use client";

import { gcp, images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ChefHat, Users, Clock, Award, Heart, Sparkles, ArrowRight, Coffee, Leaf, Music, UtensilsCrossed, Flame } from "lucide-react";
import { Reveal, ScaleIn, CinematicReveal, FadeUp, FloatingParticles } from "@/components/animations";

const features = [
  { icon: UtensilsCrossed, title: "250+ Buffet Delicacies", desc: "An unparalleled spread of global and regional cuisines crafted to perfection." },
  { icon: Flame, title: "Live Cooking Stations", desc: "Watch our master chefs sizzle, grill, and toss your favorites right before you." },
  { icon: Users, title: "Perfect for Families & Groups", desc: "A welcoming, spacious environment designed for grand celebrations and intimate dinners alike." },
  { icon: Award, title: "Premium Dining Experience", desc: "Luxurious ambiance paired with uncompromising quality and top-tier hospitality." },
];

const values = [
  { icon: Heart, title: "Passion for Food", desc: "Every dish is crafted with love and attention to detail.", img: gcp("/images/food.jpg") },
  { icon: Leaf, title: "Fresh Ingredients", desc: "We source locally and seasonally for the finest produce.", img: gcp("/images/IMG_1953-1.jpg") },
  { icon: Users, title: "Guest First", desc: "Your satisfaction is the measure of our success.", img: gcp("/images/im2.jpg") },
  { icon: Sparkles, title: "Constant Innovation", desc: "Our menu evolves continuously with new creations.", img: gcp("/images/3.jpg") },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-linen min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={4} color="rgba(171,31,35,0.15)" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[16]})`}} />
        <div className="absolute inset-0 bg-mandala opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.06),transparent)]" />
        <div className="absolute inset-0 bg-grid-bg opacity-10" />

        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Get To Know Us
            </p>
          </FadeUp>
          <CinematicReveal delay={0.25}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-brand-text leading-[0.9] mb-5">
              ABOUT <span className="text-brand-burgundy">63 DEGREES</span>
            </h1>
          </CinematicReveal>
          <FadeUp delay={0.5}>
            <p className="text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We are Hyderabad's premier destination for luxury buffet dining, offering an unparalleled spread of global cuisines in a sophisticated setting.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 border-t border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-paisley opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-burgundy/10">
                <Image
                  src={gcp("/images/im2.jpg")}
                  alt="63 Degrees Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-display text-4xl drop-shadow-md">Since 2023</p>
                  <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase drop-shadow-md">Serving Excellence</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-6 leading-tight">
                  THE <span className="text-brand-burgundy">VISION</span>
                </h2>
                <div className="space-y-6 text-brand-text/80 leading-relaxed">
                  <p>
                    63 Degrees was born out of a passion for bringing together the best culinary traditions from around the world. The name &ldquo;63 Degrees&rdquo; refers to the precise temperature often used in culinary arts to achieve the perfect texture and flavor.
                  </p>
                  <p>
                    We realized that Hyderabad lacked a truly premium buffet experience—one that didn&apos;t just focus on quantity, but uncompromisingly on quality, ambiance, and service.
                  </p>
                  <p>
                    Today, with over 250 dishes on our menu, spanning from authentic regional Indian to vibrant Asian and classic Continental cuisines, we have established ourselves as the &ldquo;Baap of Buffets&rdquo;.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{backgroundImage:`url(${images.ambiance[11]})`}} />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-warli opacity-[0.2] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "250+", label: "Gourmet Dishes Daily" },
              { num: "2.5L+", label: "Happy Guests Served" },
              { num: "12", label: "Live Cooking Counters" },
              { num: "4.8", label: "Average Guest Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display text-brand-gold leading-none mb-2">{stat.num}</p>
                <p className="text-white/50 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-brand-linen border-t border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[13]})`}} />
        <div className="absolute inset-0 bg-blockprint opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="container-wide">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 leading-tight">
                WHY CHOOSE <span className="text-brand-burgundy">US</span>
              </h2>
              <p className="text-brand-text/70 max-w-2xl mx-auto">
                What sets us apart from ordinary dining experiences.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScaleIn key={f.title} delay={i * 0.1}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full text-center group border border-brand-burgundy/10 shadow-lg hover:shadow-xl hover:border-brand-burgundy/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-burgundy/5 flex items-center justify-center mb-6 group-hover:bg-brand-burgundy/10 transition-colors">
                    <f.icon size={24} className="text-brand-burgundy" />
                  </div>
                  <h3 className="text-xl font-display text-brand-text mb-3">{f.title}</h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed group-hover:text-brand-text/80 transition-colors">
                    {f.desc}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-24 bg-brand-linen border-t border-brand-burgundy/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-lotus opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="container-wide">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 leading-tight">
              WHAT WE <span className="text-brand-burgundy">STAND FOR</span>
            </h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-brand-burgundy/10 hover:border-brand-burgundy/25 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                  <Image src={v.img} alt={v.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-burgundy/10 flex items-center justify-center">
                      <v.icon size={20} className="text-brand-burgundy" />
                    </div>
                    <h3 className="text-xl font-display text-brand-text">{v.title}</h3>
                  </div>
                  <p className="text-brand-text/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE EXPERIENCE ── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{backgroundImage:`url(${images.ambiance[15]})`}} />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-rangoli opacity-[0.2] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4">More Than Just Food</p>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
              THE COMPLETE <span className="font-accent italic text-brand-gold font-light">Experience</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Music, title: "Live Music", desc: "Enjoy curated playlists and live performances every weekend." },
              { icon: Coffee, title: "Premium Beverages", desc: "From fresh juices to mocktails, our beverage bar complements every meal." },
              { icon: Users, title: "Events & Celebrations", desc: "Private dining spaces for birthdays, anniversaries, and corporate events." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-burgundy/10 flex items-center justify-center mb-5">
                  <item.icon size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-xl font-display text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden bg-brand-linen">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[17]})`}} />
        <div className="absolute inset-0 bg-mandala opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="container-wide">
          <Reveal>
            <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden bg-brand-dark border border-brand-burgundy/20 shadow-[0_0_60px_rgba(171,31,35,0.15)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(171,31,35,0.1),transparent)]" />
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <Star size={32} className="text-brand-gold mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight">
                  EXPERIENCE THE <span className="text-brand-gold">MAGIC</span>
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                  Join us for an unforgettable culinary journey. Book your table now and taste the difference.
                </p>
                <Link
                  href="/book-a-table"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-burgundy text-white font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-burgundy/90 transition-colors shadow-lg text-xs"
                >
                  Reserve a Table <ArrowRight size={14} className="-rotate-45" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
