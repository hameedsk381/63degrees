"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Reveal, ScaleIn, CinematicReveal, FloatingParticles } from "@/components/animations";

const categories = ["All", "Ambiance", "Food", "Events"];

const images = [
  { id: 1, src: "/images/1.jpg", category: "Ambiance", alt: "63 Degrees Grand Seating Interior" },
  { id: 2, src: "/images/im2.jpg", category: "Food", alt: "Exquisite Signature Buffet Curries" },
  { id: 3, src: "/images/3.jpg", category: "Desserts", alt: "Bespoke Dessert Section Display" },
  { id: 4, src: "/images/4.jpg", category: "Ambiance", alt: "Private Dining Sanctuary Seating" },
  { id: 5, src: "/images/food.jpg", category: "Food", alt: "Live Operational Grill Drama" },
  { id: 6, src: "/images/im3.jpg", category: "Food", alt: "Premium Global Spread Showcase" },
  { id: 7, src: "/images/2024-03-07-2.jpg", category: "Ambiance", alt: "Linen Fine Seating Ambience" },
  { id: 8, src: "/images/Schezwan-Paneer.jpg", category: "Food", alt: "Live Hot Schezwan Delicacies" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory || (activeCategory === "Food" && img.category === "Desserts"));

  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── HERO ── */}
      <section className="relative pt-44 pb-16 overflow-hidden bg-brand-linen">
        <FloatingParticles count={15} color="rgba(171,31,35,0.12)" />
        
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <Reveal>
            <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Visual Tour</p>
          </Reveal>
          
          <CinematicReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-display text-brand-text leading-[0.9] mb-5 tracking-tight uppercase">
              THE <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">gallery</span>
            </h1>
          </CinematicReveal>
          
          <Reveal delay={0.4}>
            <p className="text-brand-text/80 text-base max-w-xl mx-auto font-light leading-relaxed">
              A premium visual window into the luxurious ambiance, grand interiors, and legendary culinary spreads that await you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="py-8 border-t border-brand-burgundy/10 sticky top-20 z-40 bg-brand-linen/85 backdrop-blur-xl">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#AB1F24]/10 border-[#AB1F24]/30 text-[#AB1F24] shadow-sm"
                    : "bg-brand-linen border-brand-burgundy/10 text-brand-text/60 hover:text-[#AB1F24] hover:border-[#AB1F24]/30 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section-pad pt-8">
        <div className="container-wide max-w-7xl">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedImage(i)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  {/* Premium Crimson Overlay on hover */}
                  <div className="absolute inset-0 bg-[#AB1F24]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <ZoomIn size={24} className="text-white drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0506]/98 backdrop-blur-xl p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-brand-linen/10 hover:bg-[#AB1F24] rounded-full text-white transition-colors z-50 border border-white/10"
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].alt} 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-xs tracking-widest uppercase">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
