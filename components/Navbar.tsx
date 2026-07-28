"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/animations";
import TopBar from "./TopBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Private Dining", href: "/private-dining" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHome
            ? "py-4 bg-brand-linen/95 backdrop-blur-xl border-b border-brand-burgundy/10 shadow-sm top-0 lg:top-[33px]"
            : "py-6 bg-brand-linen/80 backdrop-blur-md lg:bg-transparent top-0 lg:top-[33px]"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          
          {/* Logo */}
          <Magnetic>
            <Link href="/" className="relative z-50 flex items-center gap-3 group" >
              <div className="relative w-32 h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="63 Degrees Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </Magnetic>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest transition-colors relative group text-brand-text hover:text-brand-gold"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-brand-gold group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Magnetic>
            <Link
              href="/book-a-table"
              className="px-6 py-3 bg-[#AB1F24] rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-[#820b1e] transition-all duration-500 shadow-md hover:shadow-lg"
              
            >
              Reserve A Table
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-brand-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-[#AB1F24]" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-brand-linen flex flex-col justify-center px-8 border-b border-brand-burgundy/15"
          >
            {/* Fine Architectural Grid backdrop */}
            <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
            
            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-display text-brand-text hover:text-[#AB1F24] transition-colors uppercase tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 pt-6 border-t border-brand-burgundy/10"
              >
                <Link
                  href="/book-a-table"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 text-[#AB1F24] hover:text-[#820b1e] font-accent italic text-3xl font-light transition-colors"
                >
                  Reserve a Table <ArrowRight size={24} className="-rotate-45" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
