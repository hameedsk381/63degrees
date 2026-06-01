"use client";

import { useRef, useState } from "react";
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

const HorizontalScrollGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const items = [
    { title: "Sizzling Starters", img: "/images/food.jpg" },
    { title: "Live Grills", img: "/images/im2.jpg" },
    { title: "Biryani & Rice", img: "/images/im3.jpg" },
    { title: "Decadent Desserts", img: "/images/3.jpg" },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-linen border-y border-brand-burgundy/10">
      <div className="absolute inset-0 bg-blockprint opacity-[0.2] mix-blend-overlay pointer-events-none" />
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 md:top-32 left-6 md:left-12 z-20 pointer-events-none bg-brand-linen/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-brand-burgundy/10 max-w-lg">
          <h2 className="text-4xl md:text-7xl font-display text-brand-text max-w-sm leading-none drop-shadow-sm">
            250+ DISHES <span className="font-accent italic text-brand-burgundy font-light">to explore</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-[100vw] md:pl-[60vw] pr-20">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative w-[80vw] md:w-[45vw] h-[60vh] md:h-[70vh] shrink-0 rounded-2xl overflow-hidden group shadow-xl border border-brand-burgundy/10"
              
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-brand-linen min-h-screen text-brand-text overflow-x-clip">

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen flex items-center pt-20 lg:pt-24">

        <div className="absolute inset-0 bg-mandala opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[70vw] h-[70vw] rounded-full bg-brand-burgundy/5 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-amber/4 blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[85vh] w-full">

          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.92] font-display text-brand-text tracking-tight">
                THE BAAP<br />
                <span className="font-accent italic text-brand-burgundy font-light text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.8rem] lowercase tracking-normal">of</span>{' '}
                BUFFETS
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easeOut }}
              className="mt-6 max-w-xl text-brand-text/70 text-base md:text-lg leading-relaxed font-karla"
            >
              Hyderabad's ultimate buffet experience —{' '}
              <span className="text-brand-burgundy font-semibold">250+ gourmet dishes</span>, live grills,
              and indulgent desserts crafted by master chefs daily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/book-a-table"
                className="group relative px-8 py-4 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-0.5 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10">Reserve A Table</span>
                <ArrowRight size={14} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </Link>

              <Link
                href="/menu"
                className="group px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-text border border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold transition-all duration-500 hover:-translate-y-0.5"
              >
                Explore Menu
              </Link>
            </motion.div>

          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] flex items-center justify-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: easeOut }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/20 group glass-light"
            >
              <Image
                src="/images/2024-03-07-2.jpg"
                alt="63 Degrees Grand Ambience"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/30 via-brand-burgundy/5 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: easeOut }}
                className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-light border border-white/40 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-brand-gold/20 ring-2 ring-white/50">
                    <Image src="/images/food.jpg" alt="Signature dish" fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-brand-text truncate">Signature Buffet Experience</p>
                    <p className="text-[10px] text-brand-text/50 mt-0.5">250+ dishes · Live counters · Desserts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: easeOut }}
              className="absolute -bottom-2 -left-4 sm:-left-6 z-30 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 rotate-[-6deg] hidden sm:block"
            >
              <Image src="/images/Schezwan-Paneer.jpg" alt="Signature dish" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/20 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: easeOut }}
              className="absolute -top-3 -right-3 z-30 flex items-center gap-2 px-4 py-2.5 rounded-full glass-light border border-brand-gold/20 text-brand-text shadow-xl"
            >
              <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-bold">4.8</span>
            </motion.div>
          </div>

        </div>
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
              { img: "/images/1.jpg", label: "Grand Dining Hall", span: "lg:col-span-2 lg:row-span-2" },
              { img: "/images/im2.jpg", label: "Live Grills Station" },
              { img: "/images/IMG_1953-1.jpg", label: "Premium Starters" },
              { img: "/images/food.jpg", label: "Chef's Specials" },
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS & OPERATION ── */}
      <section className="relative py-24 bg-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-blockprint opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(171,31,35,0.03),transparent)]" />
        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              WHEN WE{"'"}RE <span className="font-accent italic text-brand-burgundy font-light">Open</span>
            </h2>
            <p className="text-brand-text/60 text-sm mt-4 max-w-md mx-auto">
              Two flexible dining slots per session — reserve your preferred time.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Sun, title: "Lunch Buffet", days: "Monday — Saturday",
                slots: ["12:00 PM — 2:00 PM", "2:00 PM — 4:00 PM"],
                price: "₹749", tag: "Mon-Sat",
              },
              {
                icon: Moon, title: "Dinner Buffet", days: "Monday — Sunday",
                slots: ["7:00 PM — 9:00 PM", "9:00 PM — 11:00 PM"],
                price: "₹999", tag: "Mon-Sun",
              },
            ].map((session, i) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className="relative p-8 md:p-10 rounded-3xl bg-white/40 backdrop-blur-sm border border-brand-burgundy/10 hover:border-brand-gold/30 transition-all duration-500 shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-burgundy/10 flex items-center justify-center">
                    <session.icon size={24} className="text-brand-burgundy" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase border border-brand-gold/20">
                    {session.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-display text-brand-text mb-1">{session.title}</h3>
                <p className="text-brand-text/50 text-sm mb-6">{session.days}</p>
                <div className="space-y-3 mb-6">
                  {session.slots.map((slot, j) => (
                    <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-brand-burgundy/[0.02] border border-brand-burgundy/5">
                      <Clock size={14} className="text-brand-burgundy shrink-0" />
                      <div className="flex-1">
                        <p className="text-brand-text text-sm font-medium">{slot}</p>
                        <p className="text-brand-text/40 text-[10px] tracking-wider uppercase">Slot {j + 1}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-brand-text/50">from</span>
                        <p className="text-lg font-display text-brand-burgundy">{session.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-brand-text/40 text-[10px] tracking-wider uppercase">
                  + Sunday Brunch Special ₹1,199
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen border-y border-brand-burgundy/5 overflow-hidden">
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

      {/* ── SIGNATURE DISHES ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-dark via-dark-900 to-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-warli opacity-[0.25] mix-blend-overlay pointer-events-none text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_30%,rgba(186,126,43,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4">From Our Kitchen</p>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-none">
              SIGNATURE <span className="font-accent italic text-brand-gold font-light">Dishes</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/Schezwan-Paneer.jpg", name: "Schezwan Paneer", desc: "Crispy cottage cheese tossed in spicy schezwan sauce" },
              { img: "/images/Im1.jpg", name: "Grilled Delights", desc: "Premium meats grilled to perfection at your table" },
              { img: "/images/63-degrees.jpg", name: "Hyderabadi Biryani", desc: "Aromatic basmati layered with tender meat & saffron" },
              { img: "/images/3.jpg", name: "Decadent Desserts", desc: "An indulgent spread of international & Indian sweets" },
            ].map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5">
                  <Image src={dish.img} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-display text-xl mb-1">{dish.name}</h3>
                    <p className="text-white/60 text-sm">{dish.desc}</p>
                  </div>
                </div>
                <div className="mt-4 md:hidden">
                  <h3 className="text-white font-display text-lg">{dish.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen overflow-hidden">
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
                title: "Lunch Buffet",
                price: "₹749",
                period: "/ person",
                icon: Sun,
                features: ["250+ gourmet dishes", "Live grills station", "Salad & soup bar", "Dessert spread", "Soft beverages included"],
                accent: "border-brand-burgundy/20",
              },
              {
                title: "Dinner Buffet",
                price: "₹999",
                period: "/ person",
                icon: Moon,
                features: ["Full dinner spread", "Live grills & kebabs", "Biryanis & curries", "International cuisine", "Dessert & ice cream bar"],
                popular: true,
                accent: "border-brand-gold",
              },
              {
                title: "Weekend Special",
                price: "₹1,199",
                period: "/ person",
                icon: Sparkles,
                features: ["All dinner features", "Premium seafood", "Live sushi counter", "Chef's specials", "Complimentary drinks"],
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
              { img: "/images/2024-02-07.jpg", label: "Elegant Interiors", tall: true },
              { img: "/images/2.jpg", label: "Warm Ambiance" },
              { img: "/images/4.jpg", label: "Premium Setup", tall: true },
              { img: "/images/bi.png", label: "Festive Spread" },
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

      {/* ── PERFECT FOR ── */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-linen via-warm-50 to-brand-linen overflow-hidden">
        <div className="absolute inset-0 bg-lotus opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_70%,rgba(186,126,43,0.03),transparent)]" />

        <div className="container-wide relative z-10">
              <Reveal className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none">
              PERFECT FOR <span className="font-accent italic text-brand-burgundy font-light">Every Occasion</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Family Gatherings", desc: "Spacious seating for large families with diverse palates. Everyone finds their favorite dish." },
              { icon: Building2, title: "Corporate Events", desc: "Impress your team with a premium buffet experience. Customizable packages available." },
              { icon: Cake, title: "Celebrations", desc: "Birthdays, anniversaries, and more. Let us make your special day unforgettable." },
              { icon: UtensilsCrossed, title: "Date Nights", desc: "Elegant ambiance and gourmet dining — the perfect setting for a romantic evening." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeOut }}
                className="p-8 rounded-3xl border border-brand-burgundy/5 bg-white/40 hover:bg-white/60 transition-colors duration-500 group shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-burgundy/10 flex items-center justify-center mb-6 group-hover:bg-brand-burgundy/20 transition-colors duration-500">
                  <item.icon size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-xl font-display text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">{item.desc}</p>
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
              <h2 className="text-4xl md:text-6xl font-display text-brand-text leading-none mb-8">
                WE BRING THE <span className="font-accent italic text-brand-burgundy font-light">Feast</span><br />
                TO YOU
              </h2>
              <p className="text-brand-text/70 text-base leading-relaxed mb-8 max-w-md">
                From intimate gatherings to grand corporate events, our catering service brings the same
                250+ dish buffet experience to your venue. Fully customizable menus, professional staff,
                and full-service execution.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { icon: Users, label: "50-500 Guests" },
                  { icon: UtensilsCrossed, label: "Custom Menus" },
                  { icon: Phone, label: "End-to-End Setup" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-brand-text/70">
                    <s.icon size={18} className="text-brand-burgundy" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/catering"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-burgundy rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-burgundy/90 transition-all duration-500 shadow-xl hover:shadow-2xl"
              >
                <PartyPopper size={16} />
                Enquire About Catering
              </Link>
            </Reveal>

            <Reveal delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-brand-burgundy/10">
                  <Image src="/images/1.jpg" alt="Catering & Events" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-brand-dark text-white shadow-2xl border border-white/5 hidden sm:block">
                  <p className="text-3xl font-display text-brand-gold">50+</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Events Hosted</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HORIZONTAL SCROLL GALLERY ── */}
      <HorizontalScrollGallery />

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
              { title: "Live Grills", desc: "Experience the sizzle. Premium meats and vegetables grilled right at your table.", img: "/images/food.jpg", offset: "mt-0" },
              { title: "Grand Ambiance", desc: "A sprawling luxury dining space designed for both intimate dates and grand family celebrations.", img: "/images/2024-03-07-2.jpg", offset: "md:mt-32" },
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
