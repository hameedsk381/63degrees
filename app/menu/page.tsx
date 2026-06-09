"use client";

import { gcp, images } from "@/lib/images";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, Flame, Leaf, Fish, Beef, Coffee, Soup, Utensils, UtensilsCrossed, Cherry, ChefHat, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FloatingParticles, Reveal, Magnetic, GlowCard, FadeUp } from "@/components/animations";

const categories = [
  { id: "all", label: "All Items", icon: UtensilsCrossed },
  { id: "soups", label: "Soups & Salads", icon: Soup },
  { id: "starters-veg", label: "Veg Starters", icon: Leaf },
  { id: "starters-nonveg", label: "Non-Veg Starters", icon: Flame },
  { id: "live-grills", label: "Live Grills", icon: Flame },
  { id: "main-veg", label: "Veg Main Course", icon: Leaf },
  { id: "main-nonveg", label: "Non-Veg Main Course", icon: Beef },
  { id: "seafood", label: "Seafood", icon: Fish },
  { id: "biryani", label: "Biryani & Rice", icon: Utensils },
  { id: "desserts", label: "Desserts", icon: Cherry },
  { id: "beverages", label: "Beverages", icon: Coffee },
];

const menuItems = [
  { id: 1, name: "Sweet Corn Veg Soup", category: "soups", type: "veg", desc: "Classic thick soup with sweet corn kernels." },
  { id: 2, name: "Chicken Manchow Soup", category: "soups", type: "non-veg", desc: "Spicy dark brown soup with minced chicken and crispy noodles.", spicy: true },
  { id: 3, name: "Paneer Tikka", category: "starters-veg", type: "veg", desc: "Cottage cheese marinated in yogurt and spices, grilled in tandoor." },
  { id: 4, name: "Crispy Corn", category: "starters-veg", type: "veg", desc: "Batter fried corn kernels tossed with spices." },
  { id: 5, name: "Chicken Tikka", category: "starters-nonveg", type: "non-veg", desc: "Boneless chicken marinated in spiced yogurt and roasted.", spicy: true },
  { id: 6, name: "Apollo Fish", category: "seafood", type: "non-veg", desc: "Hyderabadi style spicy batter-fried fish.", spicy: true },
  { id: 7, name: "Tandoori Prawns", category: "live-grills", type: "non-veg", desc: "Jumbo prawns marinated and grilled live." },
  { id: 8, name: "Mutton Rogan Josh", category: "main-nonveg", type: "non-veg", desc: "Classic Kashmiri mutton curry." },
  { id: 9, name: "Dal Makhani", category: "main-veg", type: "veg", desc: "Black lentils slow-cooked overnight with butter and cream." },
  { id: 10, name: "Hyderabadi Chicken Dum Biryani", category: "biryani", type: "non-veg", desc: "Signature fragrant basmati rice cooked with marinated chicken.", spicy: true },
  { id: 11, name: "Gulab Jamun", category: "desserts", type: "veg", desc: "Deep-fried milk dumplings soaked in sugar syrup." },
  { id: 12, name: "Chocolate Brownie", category: "desserts", type: "veg", desc: "Warm gooey chocolate brownie served with vanilla ice cream." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -10 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  exit: { opacity: 0, y: -20, rotateX: 10, transition: { duration: 0.2 } },
};

const Marquee = () => (
  <div className="relative flex overflow-hidden whitespace-nowrap bg-brand-burgundy border-y border-brand-burgundy/80 py-4 mb-16 shadow-[0_0_30px_rgba(171,31,35,0.2)]">
    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
    <motion.div
      className="flex space-x-12 shrink-0 items-center"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex space-x-12 shrink-0 items-center text-3xl md:text-5xl font-display tracking-wider">
          <span className="text-white">250+ DISHES</span>
          <span className="text-brand-gold">✦</span>
          <span className="text-white">THE BAAP OF BUFFETS</span>
          <span className="text-brand-gold">✦</span>
          <span className="font-accent italic text-brand-linen font-light">Global Spread</span>
          <span className="text-brand-gold">✦</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-linen min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-brand-linen">
        <FloatingParticles count={4} color="rgba(171,31,35,0.1)" />
        <div className="absolute inset-0">
          <Image src={images.ambiance[0]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="absolute inset-0 bg-blockprint opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.04),transparent)]" />

        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Curated For You</p>
          </FadeUp>
          <Reveal delay={0.25}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-brand-text leading-[0.9] mb-5">
              EXPLORE OUR <span className="text-brand-burgundy">MENU</span>
            </h1>
          </Reveal>
          <FadeUp delay={0.5}>
            <p className="text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From sizzling live grills to decadent desserts — discover 250+ dishes crafted to perfection.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURED CATEGORIES ── */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: gcp("/images/Im1.jpg"), label: "Live Grills", count: "12+ varieties" },
              { img: gcp("/images/63-degrees.jpg"), label: "Biryani & Rice", count: "8+ styles" },
              { img: gcp("/images/Schezwan-Paneer.jpg"), label: "Starters", count: "40+ options" },
              { img: gcp("/images/3.jpg"), label: "Desserts", count: "25+ delights" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative h-52 rounded-2xl overflow-hidden group cursor-pointer"
                
              >
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-display text-lg">{item.label}</h3>
                  <p className="text-white/50 text-xs mt-1">{item.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Reveal>
        <Marquee />
      </Reveal>

      {/* ── MENU CONTENT ── */}
      <section className="container-wide relative z-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">

          {/* Sidebar */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-6 lg:space-y-8 z-20">
            <Reveal>
              <div className="relative" >
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/50" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 bg-brand-linen/60 backdrop-blur-md border border-brand-burgundy/10 rounded-xl text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-brand-burgundy/50 transition-colors shadow-sm"
                />
              </div>

              <div className="mt-4 lg:mt-8 bg-brand-linen/60 backdrop-blur-xl rounded-2xl p-4 border border-brand-burgundy/10 shadow-xl overflow-hidden">
                <h3 className="hidden lg:block text-brand-text/60 text-[10px] font-bold tracking-widest uppercase mb-4 pl-4 border-b border-brand-burgundy/10 pb-2">
                  Categories
                </h3>
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-1 lg:pb-0 whitespace-nowrap">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <Magnetic key={cat.id} strength={0.15}>
                        <button
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex items-center gap-3 lg:gap-4 shrink-0 px-4 py-2.5 lg:py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                            isActive
                              ? "bg-brand-burgundy/5 border border-brand-burgundy/20"
                              : "border border-transparent hover:bg-brand-burgundy/5"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeCategoryIndicator"
                              className="absolute left-0 bottom-0 lg:top-0 w-full lg:w-1 h-1 lg:h-full bg-brand-burgundy"
                            />
                          )}
                          <cat.icon size={16} className={isActive ? "text-brand-burgundy" : "text-brand-text/40 group-hover:text-brand-burgundy/80 transition-colors"} />
                          <span className={`text-sm transition-colors ${
                            isActive
                              ? "text-brand-burgundy font-accent italic text-base font-bold"
                              : "text-brand-text/80 group-hover:text-brand-burgundy font-medium"
                          }`}>
                            {cat.label}
                          </span>
                        </button>
                      </Magnetic>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Items Grid */}
          <div className="lg:col-span-9 min-h-[50vh]">
            <Reveal delay={0.2}>
              <div className="bg-brand-linen/80 backdrop-blur-md rounded-2xl p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-brand-burgundy/10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-display text-brand-text">
                  {searchQuery ? "Search Results" : categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wider uppercase text-brand-text/80">
                  <Magnetic strength={0.2}>
                    <div className="flex items-center gap-2 bg-brand-linen px-3 py-1.5 rounded-full border border-brand-burgundy/10 cursor-pointer hover:border-green-500/50 transition-colors shadow-sm" >
                      <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span> Veg
                    </div>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <div className="flex items-center gap-2 bg-brand-linen px-3 py-1.5 rounded-full border border-brand-burgundy/10 cursor-pointer hover:border-brand-burgundy/50 transition-colors shadow-sm" >
                      <span className="w-2 h-2 rounded-full bg-brand-burgundy shadow-[0_0_8px_rgba(171,31,35,0.4)]"></span> Non-Veg
                    </div>
                  </Magnetic>
                </div>
              </div>
            </Reveal>

            <LayoutGroup id="menu-layout">
              <motion.div layout className="grid md:grid-cols-2 gap-4">
                <AnimatePresence>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        style={{ perspective: 1000 }}
                      >
                        <GlowCard className="bg-brand-linen rounded-2xl p-5 border border-brand-burgundy/10 shadow-md h-full flex flex-col group hover:shadow-xl hover:border-brand-burgundy/30 transition-all duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-start gap-3">
                              <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.type === 'veg' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-brand-burgundy shadow-[0_0_8px_rgba(171,31,35,0.4)]'}`} />
                              <h3 className="text-brand-text font-display text-xl tracking-wide group-hover:text-brand-burgundy transition-colors">{item.name}</h3>
                            </div>
                            {item.spicy && (
                              <div className="flex items-center gap-1 bg-brand-burgundy/10 text-brand-burgundy px-2 py-0.5 rounded text-[10px] font-bold tracking-wider border border-brand-burgundy/20 shrink-0">
                                <Flame size={10} /> SPICY
                              </div>
                            )}
                          </div>
                          <p className="text-brand-text/60 text-sm leading-relaxed pl-5 group-hover:text-brand-text/80 transition-colors flex-grow">
                            {item.desc}
                          </p>
                        </GlowCard>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      key="no-items"
                      layout
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="col-span-full py-32 text-center text-brand-text/40"
                    >
                      <UtensilsCrossed size={48} className="mx-auto mb-6 opacity-20" />
                      <p className="font-display text-2xl text-brand-text/60">No dishes found matching your criteria.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>
        </div>
      </section>

      {/* ── CHEF'S RECOMMENDATION ── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(171,31,35,0.06),transparent)]" />

        <div className="container-wide relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Chef&apos;s Selection</p>
            <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
              MUST-TRY <span className="font-accent italic text-brand-gold font-light">Specials</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: gcp("/images/Schezwan-Paneer.jpg"), name: "Schezwan Paneer", tag: "Chef's Signature", desc: "Our most ordered starter — crispy, spicy, and absolutely addictive." },
              { img: gcp("/images/im3.jpg"), name: "Chicken Dum Biryani", tag: "Guest Favorite", desc: "Fragrant layered biryani slow-cooked to perfection in sealed dum." },
              { img: gcp("/images/3.jpg"), name: "Gulab Jamun", tag: "Best Seller", desc: "Warm, soft milk dumplings drenched in rose-scented sugar syrup." },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5"
              >
                <div className="relative h-64">
                  <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-white/[0.02]">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-bold tracking-wider uppercase mb-3">{item.tag}</span>
                  <h3 className="text-white font-display text-xl mb-2">{item.name}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-linen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.ambiance[9]} alt="" fill className="object-cover opacity-[0.04]" />
        </div>
        <div className="container-wide text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 leading-tight">
              READY TO <span className="text-brand-burgundy">TASTE</span> IT ALL?
            </h2>
            <p className="text-brand-text/70 mb-10 max-w-md mx-auto">
              Come experience 250+ dishes at Hyderabad's favorite buffet destination.
            </p>
            <Link
              href="/book-a-table"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-burgundy text-white font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-burgundy/90 transition-colors shadow-xl text-xs"
            >
              Reserve a Table <ArrowRight size={14} className="-rotate-45" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
