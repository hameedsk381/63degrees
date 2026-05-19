"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";
    
    // Minimum load time for theatrical effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-linen"
        >
          {/* Subtle noise over loader */}
          <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0, rotate: 10 }}
              animate={{ y: "0%", opacity: 1, rotate: 0 }}
              exit={{ y: "-100%", opacity: 0, rotate: -10 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-center gap-4"
            >
              <div className="relative w-48 h-20 flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="63 Degrees Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Loading Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-burgundy to-brand-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
