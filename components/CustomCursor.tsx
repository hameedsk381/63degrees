"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"none" | "hover" | "drag" | "view">("none");

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    let lastTarget: HTMLElement | null = null;
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || target === lastTarget) return;
      lastTarget = target;
      
      if (target.closest("[data-cursor='drag']")) {
        setHoverState("drag");
      } else if (target.closest("[data-cursor='view']")) {
        setHoverState("view");
      } else if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")) {
        setHoverState("hover");
      } else {
        setHoverState("none");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  const isTextState = hoverState === "drag" || hoverState === "view";
  const isHover = hoverState === "hover";

  return (
    <>
      {/* Outer cursor / Text Container */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center overflow-hidden"
        animate={{
          x: pos.x - (isTextState ? 40 : isHover ? 24 : 16),
          y: pos.y - (isTextState ? 40 : isHover ? 24 : 16),
          width: isTextState ? 80 : isHover ? 48 : 32,
          height: isTextState ? 80 : isHover ? 48 : 32,
          backgroundColor: isTextState ? "rgba(171,31,35,0.9)" : "transparent",
          backdropFilter: isTextState ? "blur(4px)" : "none",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          border: isTextState ? "none" : "1.5px solid rgba(171,31,35,0.6)",
          mixBlendMode: "normal",
        }}
      >
        <AnimatePresence mode="wait">
          {isTextState && (
            <motion.span
              key={hoverState}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-white text-[10px] font-bold tracking-widest uppercase font-display"
            >
              {hoverState.toUpperCase()}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible && !isTextState ? 1 : 0,
          scale: isHover ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.3 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-brand-burgundy"
          style={{ boxShadow: "0 0 8px rgba(171,31,35,0.5)" }}
        />
      </motion.div>
    </>
  );
}
