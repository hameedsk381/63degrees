"use client";

import { gcp, images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp, CinematicReveal, Reveal, ParallaxSection, FloatingParticles } from "@/components/animations";

export default function OurStoryPage() {
  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center pt-44 pb-20 overflow-hidden bg-brand-linen">
        <FloatingParticles count={5} color="rgba(171,31,35,0.12)" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[12]})`}} />
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-mandala opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              The Journey
            </p>
          </FadeUp>
          
          <CinematicReveal delay={0.25}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              OUR <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">story</span>
            </h1>
          </CinematicReveal>
          
          <FadeUp delay={0.5}>
            <p className="text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From a singular pure idea to Hyderabad's largest premier buffet experience. This is how 63 Degrees redefined modern luxury dining.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── NARRATIVE ── */}
      <ParallaxSection className="section-pad pt-0">
        <div className="container-wide max-w-5xl">
          <div className="space-y-24">
            
            {/* Chapter 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#AB1F24]/10">
                  <Image src={gcp("/images/im3.jpg")} alt="Culinary Origins" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-linen/20 to-transparent" />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={16} className="text-[#AB1F24]" />
                  <h3 className="text-brand-text/50 tracking-[0.25em] text-xs uppercase font-bold">The Spark</h3>
                </div>
                <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-6 uppercase tracking-tight">A PASSION FOR PERFECTION</h2>
                <div className="text-brand-text/80 space-y-4 text-sm leading-relaxed font-light">
                  <p>It started with a simple, yet powerful observation: buffet dining in Gachibowli had unfortunately become about quantity rather than pure quality. We wanted to change that completely.</p>
                  <p>Our founders, a collective of culinary experts with decades of global hospitality heritage, set out to design a space where every single dish, out of 250+, received the precise execution and presentation of a fine-dining á la carte masterpiece.</p>
                </div>
              </Reveal>
            </div>

            {/* Chapter 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal delay={0.2} className="md:order-2">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#AB1F24]/10">
                  <Image src={gcp("/images/2024-03-07-2.jpg")} alt="The 63 Degree Method" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-linen/20 to-transparent" />
                </div>
              </Reveal>
              <Reveal className="md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={16} className="text-[#AB1F24]" />
                  <h3 className="text-brand-text/50 tracking-[0.25em] text-xs uppercase font-bold">The Science</h3>
                </div>
                <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-6 uppercase tracking-tight">WHY 63 DEGREES?</h2>
                <div className="text-brand-text/80 space-y-4 text-sm leading-relaxed font-light">
                  <p>63 Degrees Celsius is a magical, celebrated temperature in the modern culinary world. It represents the perfect slow-cooking state to cook eggs to absolute flawless creaminess, and stands as a metaphor for the absolute precision we bring to all our culinary procedures.</p>
                  <p>This deep commitment to precision means we never cut corners. From our live charcoal grills to our intricate, grand dessert section, everything is crafted with meticulous attention to detail and absolute temperature control.</p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </ParallaxSection>

      {/* ── CTA ── */}
      <section className="section-pad bg-brand-linen/40 border-t border-[#AB1F24]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[23]})`}} />
        <div className="absolute inset-0 bg-lotus opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-6 uppercase tracking-tight">
              BE PART OF OUR <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">story</span>
            </h2>
            <Link 
              href="/book-a-table" 
              className="group relative px-9 py-5 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10">Reserve Your Table</span>
              <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
