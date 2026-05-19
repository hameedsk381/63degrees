"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { 
  FadeUp, 
  Reveal,
  Magnetic,
  FloatingParticles,
  CharReveal
} from "@/components/animations";

// Horizontal Scroll component
const HorizontalScrollGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const items = [
    { title: "Sizzling Starters", img: "/images/food.jpg" },
    { title: "Live Grills", img: "/images/im2.jpg" },
    { title: "Biryani & Rice", img: "/images/im3.jpg" },
    { title: "Decadent Desserts", img: "/images/3.jpg" }
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-linen border-y border-brand-burgundy/10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 md:top-32 left-6 md:left-12 z-20 pointer-events-none bg-brand-linen/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-brand-burgundy/10 max-w-lg">
          <p className="text-brand-burgundy text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2">The Menu</p>
          <h2 className="text-4xl md:text-7xl font-display text-brand-text max-w-sm leading-none drop-shadow-sm">
            250+ DISHES <span className="font-accent italic text-brand-burgundy font-light">to explore</span>
          </h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-[100vw] md:pl-[60vw] pr-20">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="relative w-[80vw] md:w-[45vw] h-[60vh] md:h-[70vh] shrink-0 rounded-2xl overflow-hidden group shadow-xl border border-brand-burgundy/10"
              data-cursor="drag"
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 md:p-12 flex items-end">
                <h3 className="text-3xl md:text-5xl font-display text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-xl pointer-events-none">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-brand-linen min-h-screen text-brand-text overflow-x-clip">
      
      {/* ── $10,000 ULTRA-LUXURY ARCHITECTURAL EDITORIAL HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-brand-linen flex items-center pt-44 lg:pt-44">
        
        {/* Fine Architectural Grid & Glowing Background */}
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_60%_50%_at_10%_10%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full min-h-[80vh] w-full">
          
          {/* Left Column: Premium Editorial Typography & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left relative z-20">
            
            {/* Top Micro-Metadata Parameter */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-6 text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#AB1F24] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#AB1F24] animate-pulse" />
              <span>01 / Experiential Buffet</span>
            </motion.div>
            
            {/* Stunning High-Fashion Editorial Typography (Completely non-breaking) */}
            <div className="overflow-hidden mb-6 w-full select-none">
              <h1 className="text-5xl sm:text-7xl lg:text-[4.5rem] xl:text-[5.8rem] leading-[0.9] font-display text-brand-text tracking-tighter">
                THE BAAP <br className="hidden sm:inline" />
                <span className="font-accent italic text-[#AB1F24] font-light text-4xl sm:text-6xl xl:text-[5rem] lowercase tracking-normal mr-3">of</span>
                BUFFETS
              </h1>
            </div>
            
            {/* Sophisticated Editorial Brand Intro Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-xl border-l-2 border-[#AB1F24] pl-6 py-1 my-4"
            >
              <p className="text-brand-text/80 text-base md:text-lg font-light leading-relaxed tracking-wide">
                Step into Hyderabad's ultimate culinary canvas. A meticulously choreographed showcase featuring over <strong className="font-semibold text-[#AB1F24] tracking-normal">250+ gourmet masterpieces</strong>, combining grand heritage flavors with live operational drama.
              </p>
            </motion.div>

            {/* Premium Interactive Call-To-Actions (Always Above-The-Fold) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link 
                href="/book-a-table" 
                className="group relative px-8 py-4 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-[#820b1e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10">Reserve A Table</span>
                <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </Link>
              
              <Link 
                href="/menu" 
                className="group px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-text border border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 bg-brand-linen/40 backdrop-blur-sm hover:-translate-y-1"
              >
                Explore Menu
              </Link>
            </motion.div>

            {/* Elegant Operational Architectural Coordinates */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-brand-burgundy/10 pt-6 text-[10px] tracking-[0.2em] uppercase text-brand-text/50"
            >
              <div>
                <span className="text-[#AB1F24] font-bold">Location:</span> 17.4483° N, 78.3741° E (Hyd)
              </div>
              <div>
                <span className="text-[#AB1F24] font-bold">Hours:</span> 12 PM — 11:30 PM
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Media Showcase Frame */}
          <div className="lg:col-span-5 relative z-10 w-full flex items-center justify-center py-6 lg:py-0">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative w-full aspect-[4/5] sm:aspect-[1.2] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/15 group"
            >
              {/* Dynamic Ken-Burns Zoom Cinematic Image */}
              <Image
                src="/images/2024-03-07-2.jpg"
                alt="63 Degrees Grand Ambience"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-brand-dark/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Asymmetrical High-End Floating Glassmorphism Counter Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 sm:-left-8 z-30 flex items-center justify-center p-6 md:p-8 rounded-2xl bg-brand-linen/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
            >
              <div className="absolute inset-0 rounded-2xl bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
              
              {/* Interactive Dashed Gold/Burgundy Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-xl border border-[#AB1F24]/25 border-dashed"
              />
              
              <div className="text-center relative z-10 px-4 py-2">
                <span className="block text-4xl sm:text-5xl font-display text-[#AB1F24] leading-none tracking-tight">250+</span>
                <span className="block text-brand-text/60 text-[9px] font-bold uppercase tracking-[0.25em] mt-1.5">Gourmet Masterpieces</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>


      {/* ── EDITORIAL STORY SECTION ── */}
      <section className="section-pad bg-brand-linen relative z-20 py-32 overflow-hidden">
        <div className="container-wide max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 relative z-10">
              <Reveal>
                <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                  The Experience
                </p>
                <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none mb-8">
                  THE <span className="font-accent italic text-brand-burgundy font-light">Art</span> <br />
                  OF DINING
                </h2>
                <div className="space-y-6 text-brand-text/80 text-sm md:text-base leading-relaxed max-w-md">
                  <p>
                    We redefine the buffet experience by merging extreme variety with uncompromising culinary excellence.
                  </p>
                  <p>
                    With over 250 dishes curated daily by master chefs, every plate is a masterpiece. From authentic Hyderabadi biryanis to sophisticated live grills and decadent international desserts.
                  </p>
                </div>
                
                <div className="mt-12">
                  <Magnetic>
                    <Link href="/about" className="inline-flex items-center gap-3 text-brand-text text-xs font-bold tracking-widest uppercase hover:text-brand-burgundy transition-colors group">
                      <span className="w-8 h-8 rounded-full border border-brand-burgundy/20 flex items-center justify-center group-hover:border-brand-burgundy/50 group-hover:bg-brand-burgundy/10 transition-all">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </span>
                      Discover Our Story
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 relative h-[60vh] md:h-[80vh] w-full">
              <div className="absolute inset-0 bg-radial-glow opacity-50" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-0 w-4/5 h-4/5 rounded-3xl overflow-hidden border border-brand-burgundy/10 shadow-xl"
                data-cursor="view"
              >
                <Image src="/images/1.jpg" alt="Dining" fill className="object-cover" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 bottom-10 w-3/5 h-[45%] rounded-3xl overflow-hidden border border-brand-burgundy/10 shadow-2xl z-20"
                data-cursor="view"
              >
                <Image src="/images/im2.jpg" alt="Interior" fill className="object-cover" />
                <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HORIZONTAL SCROLL GALLERY ── */}
      <HorizontalScrollGallery />

      {/* ── ASYMMETRICAL HIGHLIGHTS ── */}
      <section className="py-32 bg-brand-linen border-b border-brand-burgundy/10 relative">
        <div className="container-wide">
          <Reveal className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text">
              UNCOMPROMISING <br />
              <span className="font-accent italic text-brand-burgundy font-light">Quality</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-32">
            {[
              { title: "Live Grills", desc: "Experience the sizzle. Premium meats and vegetables grilled right at your table.", img: "/images/food.jpg", offset: "mt-0" },
              { title: "Grand Ambiance", desc: "A sprawling luxury dining space designed for both intimate dates and grand family celebrations.", img: "/images/2024-03-07-2.jpg", offset: "md:mt-32" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className={`flex flex-col ${item.offset} group`}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-2xl" data-cursor="view">
                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-3xl font-display text-brand-text mb-4 group-hover:text-brand-burgundy transition-colors">{item.title}</h3>
                  <p className="text-brand-text/70 text-sm md:text-base leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAGNETIC CTA ── */}
      <section className="py-40 bg-brand-dark relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(171,31,35,0.15),transparent)]" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <Reveal>
            <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-8 text-center">Ready to Feast?</p>
          </Reveal>
          
          <FadeUp delay={0.2}>
            <Magnetic>
              <Link href="/book-a-table" className="group relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-dark border border-white/[0.05] flex flex-col items-center justify-center hover:border-brand-burgundy/50 transition-colors duration-500 overflow-hidden shadow-[0_0_50px_rgba(171,31,35,0.2)]">
                <div className="absolute inset-0 bg-brand-burgundy/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] rounded-full" />
                <span className="font-accent italic text-brand-gold text-xl md:text-2xl font-light mb-1 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">Reserve</span>
                <span className="font-display text-4xl md:text-5xl text-white relative z-10 transition-transform duration-500 group-hover:-translate-y-2">A TABLE</span>
                <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 text-white z-10">
                  <ArrowRight size={24} className="-rotate-45" />
                </div>
              </Link>
            </Magnetic>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
