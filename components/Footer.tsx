"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative bg-brand-linen border-t border-brand-burgundy/10 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-brand-burgundy/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(171,31,35,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="md:col-span-5"
            variants={fadeUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5">
              <div className="relative w-40 h-16">
                <Image 
                  src="/images/logo.png" 
                  alt="63 Degrees Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-brand-text/70 text-sm leading-relaxed max-w-sm mb-7">
              63 Degrees Modern Regional Buffet offers a diverse culinary experience in Hyderabad,
              featuring an array of flavorful dishes to tantalize your taste buds. The Baap of
              Buffets — 250+ dishes under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-brand-burgundy/10 flex items-center justify-center text-brand-text/50 hover:text-brand-burgundy hover:border-brand-burgundy/30 transition-all duration-300 bg-brand-linen"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-3"
            variants={fadeUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-brand-text/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/our-story", label: "Our Story" },
                { href: "/menu", label: "Our Menu" },
                { href: "/contact", label: "Contact Us" },
                { href: "/contact", label: "Reservations" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-brand-text/70 hover:text-brand-gold text-sm transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={10} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-4"
            variants={fadeUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-brand-text/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={14} className="text-brand-burgundy mt-0.5 flex-shrink-0" />
                <p className="text-brand-text/70 text-sm leading-relaxed group-hover:text-brand-text transition-colors">
                  28, 2nd Floor, Plot No: 25, Mindspace Rd, opposite Meenakshi Bamboos Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500081
                </p>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={14} className="text-brand-burgundy flex-shrink-0" />
                <a href="tel:+919733386333" className="text-brand-text/70 hover:text-brand-gold text-sm transition-colors">
                  +91 97333 86333
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={14} className="text-brand-burgundy flex-shrink-0" />
                <a href="mailto:reservations@63degrees.in" className="text-brand-text/70 hover:text-brand-gold text-sm transition-colors">
                  reservations@63degrees.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-brand-burgundy/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-brand-text/60 text-xs">
            &copy; {new Date().getFullYear()} 63 Degrees Modern Regional Buffet. All rights reserved.
            <span className="ml-2 text-brand-text/40">Brand owned by White Elephant Food Works.</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-brand-text/50 text-[10px]">
              Designed and Developed by{" "}
              <a href="https://wmwpl.com/" target="_blank" rel="noreferrer" className="hover:text-brand-burgundy transition-colors">
                Wanderers
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg border border-brand-burgundy/10 flex items-center justify-center text-brand-text/50 hover:text-brand-burgundy hover:border-brand-burgundy/30 transition-all duration-300 bg-brand-linen"
              aria-label="Scroll to top"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
