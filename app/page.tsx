"use client";

import { gcp, images } from "@/lib/images";
import { videos as gcpVideos } from "@/lib/videos";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Star,
  Quote,
  Users,
  Building2,
  Cake,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sun,
  Moon,
  Sparkles,
  UtensilsCrossed,
  PartyPopper,
  Phone,
} from "lucide-react";
import {
  FadeUp,
  Reveal,
  Magnetic,
  easeOut,
} from "@/components/animations";

const ExpandableGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const items = [
    { title: "Chef's Special", media: gcp("/images/IMG_1953-1.jpg"), isVideo: false, desc: "A curated masterpiece of flavor." },
    { title: "Live Grills", media: gcpVideos.testimonial3.mp4, isVideo: true, desc: "Sizzling perfection at your table." },
    { title: "Chef's Love", media: gcp("/images/food.jpg"), isVideo: false, desc: "Crafted with passion and heritage." },
    { title: "Dessert Wonderland", media: gcpVideos.dessertWonderland.mp4, isVideo: true, desc: "A sweet conclusion to your feast." },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-linen relative border-y border-brand-burgundy/10 overflow-hidden">
      <div className="absolute inset-0 bg-blockprint opacity-[0.15] mix-blend-overlay pointer-events-none" />
      <div className="container-wide relative z-10">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Culinary Excellence</p>
          <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
            A FEAST FOR <span className="font-accent italic text-brand-burgundy font-light">The Senses</span>
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row h-[70vh] w-full gap-4 md:gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(0)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.22,1,0.36,1] shadow-xl border border-brand-burgundy/10 ${
                hoveredIndex === i ? "flex-[4] md:flex-[5]" : "flex-1"
              }`}
            >
              {item.isVideo ? (
                <video
                  src={item.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image src={item.media} alt={item.title} fill className="object-cover" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className={`transition-all duration-700 overflow-hidden ${
                  hoveredIndex === i ? "max-h-20 opacity-100 mb-2" : "max-h-0 opacity-0 mb-0"
                }`}>
                  <p className="text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase drop-shadow-md">{item.desc}</p>
                </div>
                <h3 className={`text-white font-display leading-tight transition-all duration-700 drop-shadow-lg ${
                  hoveredIndex === i ? "text-3xl md:text-5xl" : "text-xl md:text-2xl truncate md:whitespace-normal md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-12 md:left-14 md:w-max"
                }`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "The Schezwan Paneer at 63° is absolutely addictive! Tangy, spicy, and perfectly charred on the outside — it's the dish that keeps me coming back every week. The live counter experience takes it to another level.",
    dish: "Schezwan Paneer",
    name: "Priya Sharma",
    role: "Food Blogger",
    rating: 5,
  },
  {
    quote: "Their Hyderabadi Dum Biryani transported me straight back to the old city. Perfectly layered rice, tender meat that falls off the bone, and just the right amount of masala. This is the real deal.",
    dish: "Hyderabadi Dum Biryani",
    name: "Rahul & Anjali Mehta",
    role: "Regular Guests",
    rating: 5,
  },
  {
    quote: "I never knew dessert could be this good until I tried their Gulab Jamun. Warm, syrupy, and melt-in-your-mouth soft. My kids polished off a whole tray while we enjoyed the live grills counter.",
    dish: "Gulab Jamun",
    name: "Suresh Reddy",
    role: "Family of 8",
    rating: 5,
  },
  {
    quote: "The Chilli Garlic Noodles at the live counter are a showstopper. Watching the chef toss them in the wok with clouds of smoke, then tasting that perfect wok hei — pure theatre on a plate.",
    dish: "Chilli Garlic Noodles",
    name: "Arun Kumar",
    role: "Corporate Client",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden min-h-[280px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: easeOut }}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center px-4">
              <span className="inline-block px-5 py-1.5 mb-6 rounded-full bg-brand-burgundy/5 text-brand-burgundy text-[10px] font-bold tracking-[0.2em] uppercase border border-brand-burgundy/10">
                {testimonials[current].dish}
              </span>
              <Quote size={40} className="text-brand-burgundy/20 mb-6" />
              <p className="text-lg md:text-xl text-brand-text/80 leading-relaxed font-light italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-text font-bold text-sm">{testimonials[current].name}</p>
              <p className="text-brand-text/50 text-xs">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-brand-burgundy/20 flex items-center justify-center hover:bg-brand-burgundy/5 hover:border-brand-burgundy/40 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} className="text-brand-text/60" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "bg-brand-burgundy w-6" : "bg-brand-burgundy/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-brand-burgundy/20 flex items-center justify-center hover:bg-brand-burgundy/5 hover:border-brand-burgundy/40 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} className="text-brand-text/60" />
        </button>
      </div>
    </div>
  );
};

const VideoSlider = () => {
  const [active, setActive] = useState(0);

  const slides = [
    { video: gcpVideos.mainVideo2.mp4, title: "Signature Starters", desc: "Premium meats and vegetables grilled right at your table." },
    { video: gcpVideos.testimonial3.mp4, title: "Live Cooking", desc: "Watch our master chefs toss, stir, and flame your favorites." },
    { video: gcpVideos.dessertMedley.mp4, title: "Decadent Desserts", desc: "An indulgent spread of international & Indian sweets." },
    { video: gcpVideos.mocktails.mp4, title: "Craft Mocktails", desc: "Refreshing beverages to perfectly complement your feast." },
    { video: gcpVideos.mainVideo.mp4, title: "The Buffet Experience", desc: "Over 250+ gourmet dishes curated daily." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 md:mt-16 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative bg-black aspect-[4/5] md:aspect-[21/9]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <video
            src={slides[active].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8 z-10">
        <div className="max-w-xl w-full">
          <motion.h3 
            key={`title-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-white mb-2 md:mb-4 drop-shadow-lg"
          >
            {slides[active].title}
          </motion.h3>
          <motion.p 
            key={`desc-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-base md:text-lg drop-shadow-md font-karla"
          >
            {slides[active].desc}
          </motion.p>
        </div>

        <div className="flex items-center gap-3 shrink-0 bg-black/40 backdrop-blur-xl p-3 rounded-full border border-white/20 shadow-xl w-full md:w-auto justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden transition-all duration-500 cursor-pointer rounded-full ${
                active === i ? "w-12 h-2 md:w-16 md:h-2 bg-brand-gold shadow-[0_0_10px_rgba(186,126,43,0.5)]" : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-brand-linen min-h-screen text-brand-text overflow-x-clip">

      {/* ── FULL-SCREEN VIDEO HERO ── */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <video
          src={gcpVideos.mainVideo.mp4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-brand-dark/10" />
        <div className="absolute inset-0 bg-mandala opacity-[0.15] mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeOut }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.9] font-display text-white tracking-tight drop-shadow-2xl">
              THE BAAP<br />
              <span className="font-accent italic text-brand-gold font-light text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] lowercase tracking-normal">of</span>{' '}
              BUFFETS
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeOut }}
            className="mt-6 text-white/70 text-base md:text-lg max-w-xl mx-auto font-karla"
          >
            Hyderabad's ultimate buffet experience — 250+ gourmet dishes, live grills,
            and indulgent desserts crafted by master chefs daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/book-a-table"
              className="group relative px-10 py-4 bg-brand-gold rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-0.5 flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-brand-amber translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10">Reserve A Table</span>
              <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </Link>

            <Link
              href="/menu"
              className="group px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white/80 border border-white/30 hover:border-white hover:text-white transition-all duration-500 hover:-translate-y-0.5"
            >
              Explore Menu
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ── VISUAL JOURNEY ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-paisley opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide">
          <Reveal className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              A VISUAL <span className="font-accent italic text-brand-burgundy font-light">Journey</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: gcp("/images/1.jpg"), label: "Grand Dining Hall", span: "lg:col-span-2 lg:row-span-2" },
              { img: gcp("/images/im2.jpg"), label: "Live Grills Station" },
              { img: gcp("/images/IMG_1953-1.jpg"), label: "Chef's Special" },
              { img: gcp("/images/food.jpg"), label: "Chef's Love" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className={`relative overflow-hidden rounded-3xl group cursor-pointer ${item.span || ""} ${item.span ? "min-h-[40vh] md:min-h-[60vh]" : "min-h-[28vh] md:min-h-[35vh]"}`}
                
              >
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-white text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMBIANCE GALLERY ── */}
      <section className="relative min-h-screen bg-brand-dark overflow-hidden flex items-stretch">
        <div className="grid lg:grid-cols-2 w-full">
          <div className="relative h-[50vh] lg:min-h-screen overflow-hidden">
            <video
              src={gcpVideos.mainVideo2.mp4}
              poster={gcpVideos.testimonial3.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative h-[50vh] lg:min-h-screen overflow-hidden">
            <Image src={gcp("/images/1.jpg")} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
          <div className="text-center max-w-2xl px-8 py-12 md:px-16 md:py-16 relative z-10 bg-brand-dark/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-3xl" />
            <div className="relative z-10">
              <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Experience</p>
              <h2 className="text-5xl md:text-7xl font-display text-white leading-none mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                A VISUAL <span className="font-accent italic text-brand-gold font-light">Feast</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-md mx-auto font-karla drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Every corner of 63 Degrees tells a story. From the warm glow of our chandeliers to the sizzle of live grills — immerse yourself in an atmosphere crafted for unforgettable dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen border-y border-brand-burgundy/5 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[6]})`}} />
        <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-lotus opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Guest Book</p>
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              WHAT OUR <span className="font-accent italic text-brand-burgundy font-light">Guests Say</span>
            </h2>
          </Reveal>
          <TestimonialCarousel />
          <Reveal className="text-center mt-12">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-sm text-brand-text/60">
                <Star size={16} className="text-brand-gold fill-brand-gold" />
                <span><strong className="text-brand-text">4.8</strong> Google Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-text/60">
                <Star size={16} className="text-brand-gold fill-brand-gold" />
                <span><strong className="text-brand-text">4.7</strong> Zomato Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-text/60">
                <Users size={16} className="text-brand-burgundy" />
                <span><strong className="text-brand-text">50K+</strong> Happy Guests</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CULINARY SHOWCASE (VIDEO SLIDER) ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-dark via-dark-900 to-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-warli opacity-[0.25] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_30%,rgba(186,126,43,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-8">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4">From Our Kitchen</p>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-none">
              CULINARY <span className="font-accent italic text-brand-gold font-light">Showcase</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <VideoSlider />
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[2]})`}} />
        <div className="absolute inset-0 bg-rangoli opacity-[0.3] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              CHOOSE YOUR <span className="font-accent italic text-brand-burgundy font-light">Experience</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Veg Buffet",
                price: "₹1,326",
                period: "/ person",
                icon: Sun,
                features: ["250+ gourmet dishes", "Live grills station", "Salad & soup bar", "Premium desserts", "Soft beverages included"],
                accent: "border-brand-burgundy/20",
              },
              {
                title: "Non-Veg Buffet",
                price: "₹1,431",
                period: "/ person",
                icon: Moon,
                features: ["Full non-veg spread", "Live grills & kebabs", "Biryanis & curries", "International cuisine", "Dessert & ice cream bar"],
                popular: true,
                accent: "border-brand-gold",
              },
              {
                title: "Kids Buffet",
                price: "₹663",
                period: "/ child",
                icon: Sparkles,
                features: ["Child-friendly dishes", "Mini pizzas & pastas", "Ice cream counter", "Sweet treats", "Soft drinks"],
                accent: "border-brand-burgundy/20",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className={`relative rounded-3xl p-8 border-2 ${plan.accent} bg-white/40 backdrop-blur-sm ${
                  plan.popular ? "scale-[1.02] md:scale-105 shadow-2xl" : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-brand-gold text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}
                <div className={`${plan.popular ? "mt-4" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-brand-burgundy/10 flex items-center justify-center mb-6">
                    <plan.icon size={24} className="text-brand-burgundy" />
                  </div>
                  <h3 className="text-xl font-display text-brand-text mb-1">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-display text-brand-burgundy">{plan.price}</span>
                    <span className="text-sm text-brand-text/50">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-brand-text/70">
                        <svg className="w-4 h-4 text-brand-burgundy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-a-table"
                    className={`block w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-center transition-all duration-500 ${
                      plan.popular
                        ? "bg-brand-gold text-white hover:bg-brand-amber shadow-lg"
                        : "border border-brand-burgundy/30 text-brand-burgundy hover:bg-brand-burgundy hover:text-white"
                    }`}
                  >
                    Reserve A Table
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE VIBE ── */}
      <section className="relative py-20 md:py-32 bg-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-mandala opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="container-wide">
          <Reveal className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              STEP INTO <span className="font-accent italic text-brand-burgundy font-light">Luxury</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: gcp("/images/2024-02-07.jpg"), label: "Elegant Interiors", tall: true },
              { img: gcp("/images/2.jpg"), label: "Warm Ambiance" },
              { img: gcp("/images/4.jpg"), label: "Premium Setup", tall: true },
              { img: gcp("/images/bi.png"), label: "Festive Spread" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-brand-burgundy/10 ${item.tall ? "min-h-[45vh] md:min-h-[70vh]" : "min-h-[35vh] md:min-h-[50vh]"}`}
                
              >
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between">
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.label}</span>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Play size={16} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <p className="text-brand-text/50 text-sm">
              Tap to explore our virtual tour
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PERFECT FOR (IMAGE CARDS) ── */}
      <section className="relative py-20 md:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-lotus opacity-[0.15] mix-blend-overlay pointer-events-none" />
        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-10 md:mb-16">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Every Occasion</p>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-none">
              PERFECT FOR <span className="font-accent italic text-brand-gold font-light">Every Moment</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: gcp("/images/1.jpg"), icon: "👨‍👩‍👧‍👦", title: "Family Gatherings" },
              { img: gcp("/images/4.jpg"), icon: "🏢", title: "Corporate Events" },
              { img: gcp("/images/2024-02-07.jpg"), icon: "🎂", title: "Celebrations" },
              { img: gcp("/images/bi.png"), icon: "❤️", title: "Date Nights" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="text-xl font-display text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVATE EVENTS & CATERING ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-paisley opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none mb-8 uppercase">
                WE SERVE AN <br/><span className="font-accent italic text-brand-burgundy font-light normal-case">Unforgettable</span><br />
                Feast
              </h2>
              <p className="text-brand-text/70 text-base leading-relaxed mb-8 max-w-md">
                Experience a modern regional buffet with over 250+ carefully curated dishes, live cooking stations, premium desserts, and authentic flavours from across India. Every visit is crafted to delight your taste buds and create lasting memories.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { icon: UtensilsCrossed, label: "250+ Buffet Delicacies" },
                  { icon: Users, label: "Live Cooking Stations" },
                  { icon: Cake, label: "Premium Desserts" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-brand-text/70">
                    <s.icon size={18} className="text-brand-burgundy" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/book-a-table"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-burgundy/90 transition-all duration-500 shadow-xl hover:shadow-2xl"
              >
                <PartyPopper size={16} />
                Reserve a Table
              </Link>
            </Reveal>

            <Reveal delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-brand-burgundy/10">
                  <Image src={gcp("/images/1.jpg")} alt="Catering & Events" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-brand-dark text-white shadow-2xl border border-white/5 hidden sm:block">
                  <p className="text-3xl font-display text-brand-gold">1L+</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Customers Served</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EXPANDABLE GALLERY ── */}
      <ExpandableGallery />

      {/* ── QUALITY HIGHLIGHTS ── */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen border-b border-brand-burgundy/10 relative">
        <div className="absolute inset-0 bg-warli opacity-[0.2] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide">
          <Reveal className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text">
              UNCOMPROMISING <br />
              <span className="font-accent italic text-brand-burgundy font-light">Quality</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-32">
            {[
              { title: "Live Grills", desc: "Experience the sizzle. Premium meats and vegetables grilled right at your table.", img: gcp("/images/food.jpg"), offset: "mt-0" },
              { title: "Grand Ambiance", desc: "A sprawling luxury dining space designed for both intimate dates and grand family celebrations.", img: gcp("/images/2024-03-07-2.jpg"), offset: "md:mt-32" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className={`flex flex-col ${item.offset} group`}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-2xl" >
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

      {/* ── CTA ── */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{backgroundImage:`url(${images.ambiance[10]})`}} />
        <div className="absolute inset-0 bg-rangoli opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_30%,rgba(186,126,43,0.03),transparent)]" />

        <div className="relative z-10 flex flex-col items-center">
          <Reveal>
            <p className="text-brand-burgundy text-xs font-bold tracking-[0.3em] uppercase mb-8 text-center">Ready to Feast?</p>
          </Reveal>

          <FadeUp delay={0.2}>
            <Magnetic>
              <Link href="/book-a-table" className="group relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-linen border border-brand-burgundy/10 flex flex-col items-center justify-center hover:border-brand-burgundy/30 transition-colors duration-500 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-brand-burgundy/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] rounded-full" />
                <span className="font-accent italic text-brand-burgundy text-xl md:text-2xl font-light mb-1 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">Reserve</span>
                <span className="font-display text-4xl md:text-5xl text-brand-text relative z-10 transition-transform duration-500 group-hover:-translate-y-2">A TABLE</span>
                <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 text-brand-burgundy z-10">
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
