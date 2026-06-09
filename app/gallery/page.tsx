"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { PlayCircle, X, ZoomIn } from "lucide-react";
import { Reveal, CinematicReveal, FloatingParticles } from "@/components/animations";
import { categories, mediaItems, videos, type GalleryMedia } from "./media";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  const filteredMedia = activeCategory === "All"
    ? mediaItems
    : activeCategory === "Videos"
      ? videos
      : mediaItems.filter(item => item.category === activeCategory || (activeCategory === "Food" && item.category === "Desserts"));

  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── HERO ── */}
      <section className="relative pt-44 pb-16 overflow-hidden bg-brand-linen">
        <FloatingParticles count={5} color="rgba(171,31,35,0.12)" />
        <div className="absolute inset-0">
          <Image src={images.ambiance[8]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-paisley opacity-[0.25] mix-blend-overlay pointer-events-none" />
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
              A premium visual window into the luxurious ambiance, grand interiors, legendary culinary spreads, and signature buffet moments that await you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="py-8 border-t border-brand-burgundy/10 sticky top-20 z-40 bg-brand-linen/85 backdrop-blur-xl">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border relative ${
                    isActive
                      ? "border-[#AB1F24]/30 text-[#AB1F24] shadow-sm"
                      : "bg-brand-linen border-brand-burgundy/10 text-brand-text/60 hover:text-[#AB1F24] hover:border-[#AB1F24]/30 shadow-sm"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeGalleryCategory"
                      className="absolute inset-0 bg-[#AB1F24]/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <LayoutGroup id="gallery-layout">
        {/* ── GRID ── */}
        <section className="section-pad pt-8">
          <div className="container-wide max-w-7xl">
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredMedia.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={`gallery-card-${item.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setSelectedMedia(item)}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={item.thumbnail}
                        alt={`${item.title} video thumbnail`}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    {/* Premium Crimson Overlay on hover */}
                    <div className="absolute inset-0 bg-[#AB1F24]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      {item.type === "image" ? (
                        <ZoomIn size={24} className="text-white drop-shadow-lg" />
                      ) : (
                        <PlayCircle size={38} className="text-white drop-shadow-lg" />
                      )}
                    </div>
                    {item.type === "video" && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-brand-dark/80 to-transparent">
                        <p className="text-white text-xs font-bold tracking-[0.12em] uppercase leading-snug">
                          {item.title}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0506]/98 backdrop-blur-xl p-4 md:p-8"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-brand-linen/10 hover:bg-[#AB1F24] rounded-full text-white transition-colors z-50 border border-white/10"
              >
                <X size={24} />
              </button>
              <motion.div
                layoutId={`gallery-card-${selectedMedia.id}`}
                className={`relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${
                  selectedMedia.type === "video"
                    ? "max-w-4xl h-[78vh] bg-black"
                    : "max-w-5xl aspect-video"
                }`}
              >
                {selectedMedia.type === "image" ? (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    fill
                    className="object-contain"
                  />
                ) : selectedMedia.src ? (
                  <video
                    src={selectedMedia.src}
                    poster={selectedMedia.poster}
                    controls
                    autoPlay
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={`https://drive.google.com/file/d/${selectedMedia.driveId}/preview`}
                    title={selectedMedia.title}
                    className="h-full w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                )}
              </motion.div>
              {selectedMedia.type === "video" && !selectedMedia.src && (
                <a
                  href={`https://drive.google.com/file/d/${selectedMedia.driveId}/view`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/70 hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  Open video in Drive
                </a>
              )}
              <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-xs tracking-widest uppercase">
                {filteredMedia.findIndex(item => item.id === selectedMedia.id) + 1} / {filteredMedia.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
