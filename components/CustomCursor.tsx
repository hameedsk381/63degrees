"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"none" | "hover" | "drag" | "view">("none");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 25, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 25, mass: 0.3 });
  const lastTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const el = e.target as HTMLElement;
      if (!el || el === lastTarget.current) return;
      lastTarget.current = el;

      if (el.closest("[data-cursor='drag']")) {
        setHoverState("drag");
      } else if (el.closest("[data-cursor='view']")) {
        setHoverState("view");
      } else if (el.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")) {
        setHoverState("hover");
      } else {
        setHoverState("none");
      }
    };

    const enter = () => setVisible(true);
    const leave = () => { setVisible(false); setHoverState("none"); };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  const isTextState = hoverState === "drag" || hoverState === "view";
  const isHover = hoverState === "hover";
  const w = isTextState ? 80 : isHover ? 48 : 32;
  const h = isTextState ? 80 : isHover ? 48 : 32;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center overflow-hidden"
        style={{
          x: springX,
          y: springY,
          width: w,
          height: h,
          marginLeft: -(w / 2),
          marginTop: -(h / 2),
          borderRadius: "50%",
          border: isTextState ? "none" : "1.5px solid rgba(171,31,35,0.6)",
          backgroundColor: isTextState ? "rgba(171,31,35,0.9)" : "transparent",
          backdropFilter: isTextState ? "blur(4px)" : "none",
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

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          marginLeft: -3,
          marginTop: -3,
          opacity: visible && !isTextState ? 1 : 0,
          scale: isHover ? 0.5 : 1,
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-brand-burgundy"
          style={{ boxShadow: "0 0 8px rgba(171,31,35,0.5)" }}
        />
      </motion.div>
    </>
  );
}
