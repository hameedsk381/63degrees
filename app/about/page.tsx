"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CheckCircle, ChefHat, Users, Clock, Award } from "lucide-react";
import { Reveal, ScaleIn, CinematicReveal, FadeUp, FloatingParticles } from "@/components/animations";

const features = [
  { icon: ChefHat, title: "Master Chefs", desc: "Our culinary team brings decades of experience from luxury hotels." },
  { icon: Users, title: "Family Friendly", desc: "A welcoming environment with special menus for children." },
  { icon: Clock, title: "Fresh Daily", desc: "Ingredients sourced daily to ensure the highest quality." },
  { icon: Award, title: "Premium Quality", desc: "Uncompromising standards in every dish we serve." },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-linen min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={20} color="rgba(171,31,35,0.2)" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.06),transparent)]" />
        <div className="absolute inset-0 bg-grid-bg opacity-10" />
        
        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Get To Know Us
            </p>
          </FadeUp>
          <CinematicReveal delay={0.25}>
            <h1 className="heading-xl text-[clamp(3.5rem,7vw,6rem)] text-brand-text leading-[0.9] mb-5">
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
      <section className="section-pad border-t border-brand-burgundy/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-burgundy/10">
                <Image
                  src="/images/im2.jpg"
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
                <h2 className="heading-lg text-4xl text-brand-text mb-6">
                  THE <span className="text-brand-burgundy">VISION</span>
                </h2>
                <div className="space-y-6 text-brand-text/80 leading-relaxed">
                  <p>
                    63 Degrees was born out of a passion for bringing together the best culinary traditions from around the world. The name "63 Degrees" refers to the precise temperature often used in culinary arts to achieve the perfect texture and flavor.
                  </p>
                  <p>
                    We realized that Hyderabad lacked a truly premium buffet experience—one that didn't just focus on quantity, but uncompromisingly on quality, ambiance, and service.
                  </p>
                  <p>
                    Today, with over 250 dishes on our menu, spanning from authentic regional Indian to vibrant Asian and classic Continental cuisines, we have established ourselves as the "Baap of Buffets".
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-pad bg-brand-linen border-t border-brand-burgundy/10">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="heading-lg text-4xl text-brand-text mb-4">
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
                <div className="bg-brand-linen rounded-2xl p-8 h-full text-center group border border-brand-burgundy/10 shadow-lg hover:shadow-xl hover:border-brand-burgundy/30 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-linen flex items-center justify-center mb-6 transition-all">
                    <f.icon size={24} className="text-brand-burgundy" />
                  </div>
                  <h3 className="text-xl font-display text-brand-text mb-3 tracking-wide">{f.title}</h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed group-hover:text-brand-text/80 transition-colors">
                    {f.desc}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(171,31,35,0.15),transparent)]" />
        <div className="container-wide relative z-10 text-center">
          <ScaleIn>
            <div className="bg-brand-dark rounded-3xl p-12 md:p-20 max-w-4xl mx-auto border border-brand-burgundy/30 shadow-[0_0_50px_rgba(171,31,35,0.2)]">
              <Star size={32} className="text-brand-gold mx-auto mb-6 opacity-80" />
              <h2 className="heading-lg text-[clamp(2.5rem,4vw,3.5rem)] text-white mb-6">
                EXPERIENCE THE MAGIC
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                Join us for an unforgettable culinary journey. Book your table now and taste the difference.
              </p>
              <a
                href="/book-a-table"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-burgundy text-white font-bold tracking-widest uppercase rounded-full hover:bg-[#820b1e] transition-colors shadow-lg"
              >
                Reserve a Table
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
