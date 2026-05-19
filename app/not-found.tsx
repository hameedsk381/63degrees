"use client";

import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { CinematicReveal, Reveal, FloatingParticles } from "@/components/animations";

export default function NotFound() {
  return (
    <div className="bg-brand-linen min-h-screen flex items-center justify-center pt-20 text-brand-text font-display overflow-x-clip relative">
      
      {/* Fine Architectural Grid backdrop */}
      <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
      <FloatingParticles count={15} color="rgba(171,31,35,0.12)" />

      <div className="container-wide relative z-10 text-center max-w-2xl mx-auto">
        <Reveal>
          <div className="w-20 h-20 rounded-2xl bg-brand-linen border border-[#AB1F24]/10 flex items-center justify-center mx-auto mb-8 shadow-md">
            <UtensilsCrossed size={32} className="text-[#AB1F24] opacity-90 animate-pulse" />
          </div>
        </Reveal>

        <CinematicReveal delay={0.2}>
          <h1 className="text-8xl md:text-9xl font-display text-[#AB1F24] leading-none mb-2 drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display text-brand-text mb-6 uppercase tracking-tight">
            PAGE NOT FOUND
          </h2>
        </CinematicReveal>

        <Reveal delay={0.4}>
          <p className="text-brand-text/70 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed font-light">
            Oops! It seems this dish is missing from our menu. The page you are looking for does not exist or has been moved.
          </p>
          
          <Link 
            href="/" 
            className="group relative px-9 py-5 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <span className="relative z-10">Return to Homepage</span>
            <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
