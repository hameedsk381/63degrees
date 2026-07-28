"use client";

import { gcp, images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Reveal, FadeUp } from "@/components/animations";

// Menu Data
const starters = [
  { name: "Sweet Corn Veg Soup", tag: "VEG", desc: "Classic thick soup with sweet corn kernels." },
  { name: "Chicken Manchow Soup", tag: "SPICY", desc: "Spicy dark brown soup with minced chicken and crispy noodles." },
  { name: "Paneer Tikka", tag: "VEG", desc: "Cottage cheese marinated in yogurt and spices, grilled in tandoor." },
  { name: "Crispy Corn", tag: "VEG", desc: "Batter fried corn kernels tossed with spices." },
  { name: "Chicken Tikka", tag: "SPICY", desc: "Boneless chicken marinated in spiced yogurt and roasted." },
  { name: "Apollo Fish", tag: "SIGNATURE", desc: "Hyderabadi style spicy batter-fried fish." },
  { name: "Tandoori Prawns", tag: "LIVE GRILL", desc: "Jumbo prawns marinated and grilled live." },
  { name: "Mutton Seekh Kebab", tag: "NON-VEG", desc: "Minced mutton skewers grilled to perfection." },
];

const chefRecommended = [
  { img: gcp("/images/Schezwan-Paneer.jpg"), name: "Schezwan Paneer", tag: "SIGNATURE", desc: "Crispy paneer tossed in fiery schezwan sauce." },
  { img: gcp("/images/Im1.jpg"), name: "Tandoori Prawns", tag: "LIVE GRILL", desc: "Jumbo prawns marinated and grilled live." },
  { img: gcp("/images/im3.jpg"), name: "Chicken Dum Biryani", tag: "FAVORITE", desc: "Signature fragrant basmati rice cooked with marinated chicken." },
];

const mainCourse = [
  { name: "Dal Makhani", tag: "VEG", desc: "Black lentils slow-cooked overnight with butter and cream." },
  { name: "Paneer Butter Masala", tag: "VEG", desc: "Cottage cheese cubes in a rich tomato gravy." },
  { name: "Mutton Rogan Josh", tag: "NON-VEG", desc: "Classic Kashmiri mutton curry." },
  { name: "Butter Chicken", tag: "SIGNATURE", desc: "Tender chicken cooked in a creamy tomato sauce." },
  { name: "Mutton Dum Biryani", tag: "NON-VEG", desc: "Traditional Hyderabadi mutton biryani." },
  { name: "Assorted Breads", tag: "VEG", desc: "Naan, Roti, and Kulcha fresh from the tandoor." },
];

const desserts = [
  { name: "Gulab Jamun", tag: "VEG", desc: "Deep-fried milk dumplings soaked in sugar syrup." },
  { name: "Rasmalai", tag: "SIGNATURE", desc: "Cottage cheese dumplings in sweetened thickened milk." },
  { name: "Chocolate Brownie", tag: "VEG", desc: "Warm gooey chocolate brownie served with vanilla ice cream." },
  { name: "Assorted Pastries", tag: "VEG", desc: "A selection of fine international pastries." },
  { name: "Fresh Cut Fruits", tag: "VEG", desc: "Seasonal exotic fruits." },
  { name: "Choice of Ice Creams", tag: "VEG", desc: "Classic and premium ice cream flavors." },
];

const ClassicMenuItem = ({ name, tag, desc }: { name: string, tag: string, desc: string }) => (
  <div className="mb-8 group">
    <div className="flex items-end mb-2 w-full">
      <h5 className="font-display text-xl md:text-2xl text-brand-text leading-none m-0">{name}</h5>
      <div className="flex-grow border-b-[2px] border-dotted border-brand-burgundy/30 mx-4 mb-1.5 opacity-50 transition-opacity duration-300 group-hover:opacity-100 min-w-[20px]"></div>
      <span className="font-bold tracking-widest uppercase text-[10px] md:text-xs text-brand-burgundy whitespace-nowrap bg-brand-burgundy/5 px-2 py-1 rounded shrink-0">{tag}</span>
    </div>
    <p className="text-brand-text/60 text-sm md:text-base font-light italic">{desc}</p>
  </div>
);

export default function MenuPage() {
  return (
    <div className="bg-brand-linen min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-brand-linen">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{backgroundImage:`url(${images.ambiance[17]})`}} />
        <div className="absolute inset-0 bg-blockprint opacity-[0.25] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-grid-bg opacity-[0.04] pointer-events-none" />
        
        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.15}>
            <p className="text-brand-burgundy text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Buffet Experience</p>
          </FadeUp>
          <Reveal delay={0.25}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-brand-text leading-[0.9] mb-5">
              OUR <span className="text-brand-burgundy">MENU</span> MIXED
            </h1>
          </Reveal>
          <FadeUp delay={0.5}>
            <p className="text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Explore a curated selection of our 250+ global delicacies, presented in classic elegance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STARTERS & GRILLS ── */}
      <section className="py-20 relative overflow-hidden bg-white/50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-2">Menus Of The Day</h2>
            <p className="text-brand-text/50 italic">Starters & Live Grills</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {starters.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <ClassicMenuItem {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX 1 ── */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-brand-dark flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60" 
          style={{backgroundImage:`url(${images.ambiance[11]})`}} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/80" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white drop-shadow-lg">
            <span className="font-accent italic text-brand-gold font-light pr-3">The</span>
            Art of Dining
          </h2>
        </div>
      </section>

      {/* ── CHEF'S RECOMMENDED ── */}
      <section className="py-24 relative overflow-hidden bg-brand-linen">
        <div className="absolute inset-0 bg-mandala opacity-[0.1] mix-blend-overlay pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-2">
              <span className="text-brand-burgundy">Chef's</span> Recommended
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {chefRecommended.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-64 md:h-72 w-full mb-6 rounded-2xl overflow-hidden shadow-lg border border-brand-burgundy/10">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-brand-linen/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Star size={16} className="text-brand-burgundy" />
                  </div>
                </div>
                <ClassicMenuItem name={item.name} tag={item.tag} desc={item.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX 2 ── */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-brand-dark flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60" 
          style={{backgroundImage:`url(${images.ambiance[14]})`}} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/80" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white drop-shadow-lg">
            <span className="font-accent italic text-brand-gold font-light pr-3">Exquisite</span>
            Flavors
          </h2>
        </div>
      </section>

      {/* ── MAIN COURSE & DESSERTS ── */}
      <section className="py-20 relative overflow-hidden bg-white/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            
            <div>
              <div className="mb-10 text-left">
                <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-2">Dinner Classics</h2>
                <p className="text-brand-text/50 italic">Main Course</p>
              </div>
              <div>
                {mainCourse.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.05}>
                    <ClassicMenuItem {...item} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10 text-left">
                <h2 className="text-3xl md:text-4xl font-display text-brand-text mb-2">Decadent Sweets</h2>
                <p className="text-brand-text/50 italic">Desserts & Pastries</p>
              </div>
              <div>
                {desserts.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.05}>
                    <ClassicMenuItem {...item} />
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-linen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{backgroundImage:`url(${images.ambiance[9]})`}} />
        <div className="container-wide text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 leading-tight">
              EXPERIENCE THE <span className="text-brand-burgundy">FULL MENU</span>
            </h2>
            <p className="text-brand-text/70 mb-10 max-w-md mx-auto">
              Join us to taste over 250+ dishes crafted daily by our master chefs.
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
