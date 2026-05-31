"use client";

import React, { ReactNode, useRef, useState, useEffect, createContext, useContext, useMemo, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";

/* ─── Shared easing ─── */
export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeSpring = { type: "spring" as const, stiffness: 200, damping: 20 };
export const easeSpringLight = { type: "spring" as const, stiffness: 150, damping: 15 };
export const easeSpringSoft = { type: "spring" as const, stiffness: 120, damping: 18 };

/* ─── FadeUp ─── */
type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
};
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 40,
  className = "",
  once = true,
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── FadeIn ─── */
type FadeInProps = { children: ReactNode; delay?: number; className?: string };
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container + item ─── */
const StaggerContext = createContext(0);

type StaggerContainerProps = {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
};
export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  return (
    <StaggerContext.Provider value={staggerDelay}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
          hidden: {},
        }}
        className={className}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

type StaggerItemProps = { children: ReactNode; className?: string };
export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleIn ─── */
type ScaleInProps = { children: ReactNode; delay?: number; className?: string };
export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── SlideIn ─── */
type SlideInProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
};
export function SlideIn({ children, direction = "left", delay = 0, className = "" }: SlideInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const offset = 60;
  const variants = {
    left: { x: -offset },
    right: { x: offset },
    up: { y: offset },
    down: { y: -offset },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ParallaxSection ─── */
type ParallaxSectionProps = { children: ReactNode; speed?: number; className?: string };
export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </section>
  );
}

/* ─── AnimatedCounter ─── */
type AnimatedCounterProps = {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};
export function AnimatedCounter({ from = 0, to, suffix = "", duration = 2, className = "" }: AnimatedCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

/* ─── TextReveal ─── */
type TextRevealProps = {
  children: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};
export function TextReveal({ children, delay = 0, className = "", as: Tag = "p" }: TextRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = children.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.65, 0, 0.35, 1] }}
          >
            {word}{i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─── CharacterReveal ─── */
type CharRevealProps = {
  children: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};
export function CharReveal({ children, delay = 0, className = "", as: Tag = "p" }: CharRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <Tag ref={ref} className={className}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.03, ease: easeOutExpo }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ─── FloatingParticles (dark-mode optimized) ─── */
type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};
type FloatingParticlesProps = {
  count?: number;
  color?: string;
  className?: string;
};
export function FloatingParticles({ count = 4, color = "rgba(255,90,0,0.2)", className = "" }: FloatingParticlesProps) {
  const particles = useMemo(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    return arr;
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            willChange: "transform",
          }}
          animate={{
            y: [0, -20, 0, -10, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Orb (dark-mode enhanced) ─── */
type OrbProps = {
  size?: number;
  color?: string;
  blur?: number;
  className?: string;
  speed?: number;
};
export function Orb({ size = 300, color = "rgba(255,90,0,0.1)", blur = 80, className = "", speed = 8 }: OrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [size * 0.15, -size * 0.15]);
  const x = useTransform(scrollYProgress, [0, 1], [size * -0.05, size * 0.05]);

  return (
    <div ref={ref} className={`absolute pointer-events-none ${className}`}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          filter: `blur(${blur}px)`,
          y, x,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ─── TiltCard ─── */
type TiltCardProps = { children: ReactNode; className?: string; tiltDegree?: number };
export function TiltCard({ children, className = "", tiltDegree = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * tiltDegree);
    setRotateY(x * tiltDegree);
  };

  const handleLeave = () => { setRotateX(0); setRotateY(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className={className}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Magnetic ─── */
type MagneticProps = { children: ReactNode; className?: string; strength?: number };
export function Magnetic({ children, className = "", strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rAF = useRef(0);

  const handleMove = (e: React.MouseEvent) => {
    cancelAnimationFrame(rAF.current);
    rAF.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      setPos({ x, y });
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(rAF.current);
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── GlowCard (dark-mode enhanced) ─── */
type GlowCardProps = { children: ReactNode; className?: string; color?: string };
export function GlowCard({ children, className = "", color = "rgba(255,90,0,0.12)" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${color}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ─── Reveal ─── */
type RevealProps = { children: ReactNode; className?: string; delay?: number };
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── BlurReveal ─── */
type BlurRevealProps = { children: ReactNode; className?: string; delay?: number };
export function BlurReveal({ children, className = "", delay = 0 }: BlurRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 1, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── CinematicReveal ─── */
type CinematicRevealProps = { children: ReactNode; className?: string; delay?: number };
export function CinematicReveal({ children, className = "", delay = 0 }: CinematicRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)", scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleStagger ─── */
type ScaleStaggerProps = { children: ReactNode; className?: string; delay?: number };
export function ScaleStagger({ children, className = "", delay = 0 }: ScaleStaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ParallaxImage ─── */
type ParallaxImageProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};
export function ParallaxImage({ children, speed = 0.15, className = "" }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
