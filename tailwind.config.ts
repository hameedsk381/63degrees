import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: "#AB1F24",
          gold: "#BA7E2B",
          amber: "#E58E27",
          dark: "#231F20",
          linen: "#F8F0E3",
          text: "#3C3633",
        },
        flame: {
          50: "#fff4ed",
          100: "#ffe5cc",
          200: "#ffc894",
          300: "#ffa05b",
          400: "#ff7a2a",
          500: "#ff5a00",
          600: "#e04400",
          700: "#cc4800",
          800: "#932600",
          900: "#7a2100",
        },
        crimson: {
          400: "#e61a3a",
          500: "#c41230",
          600: "#a30e27",
          700: "#9e0e26",
          800: "#820b1e",
        },
        saffron: {
          400: "#f7b84a",
          500: "#f5a623",
          600: "#d48f1a",
        },
        gold: {
          300: "#e8c97a",
          400: "#d4a853",
          500: "#c4953e",
        },
        dark: {
          950: "#050506",
          900: "#0a0a0c",
          800: "#111114",
          700: "#1a1a1e",
          600: "#222228",
          500: "#2a2a32",
          400: "#3a3a44",
          300: "#52525e",
          200: "#71717e",
          100: "#a1a1ae",
        },
      },
      fontFamily: {
        display: ["Jost", "sans-serif"],
        body: ["Jost", "sans-serif"],
        accent: ["Playfair Display", "serif"],
        inter: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.02'/%3E%3C/svg%3E\")",
        "radial-flame": "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,90,0,0.1) 0%, transparent 70%)",
        "radial-glow": "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,90,0,0.06) 0%, transparent 60%)",
        "radial-crimson": "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(196,18,48,0.06) 0%, transparent 60%)",
        "radial-gold": "radial-gradient(ellipse 50% 40% at 70% 50%, rgba(212,168,83,0.05) 0%, transparent 60%)",
        "radial-flame-dark": "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,90,0,0.08) 0%, transparent 70%)",
        "radial-glow-dark": "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,90,0,0.05) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255,90,0,0.12)",
        "glow": "0 0 40px rgba(255,90,0,0.18)",
        "glow-lg": "0 0 60px rgba(255,90,0,0.25)",
        "glass": "0 8px 32px rgba(0,0,0,0.4)",
        "glass-sm": "0 4px 16px rgba(0,0,0,0.3)",
        "gold": "0 0 30px rgba(212,168,83,0.1)",
        "elevated": "0 20px 60px rgba(0,0,0,0.4)",
        "ember": "0 0 30px rgba(255,90,0,0.25), 0 4px 15px rgba(255,90,0,0.2)",
        "ember-lg": "0 0 50px rgba(255,90,0,0.3), 0 8px 30px rgba(255,90,0,0.25)",
      },
      animation: {
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "drift": "drift 8s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "ken-burns": "ken-burns 20s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "smoke-drift": "smoke-drift 12s ease-in-out infinite",
        "ember-float": "ember-float 4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(8px, -8px)" },
          "66%": { transform: "translate(-4px, 4px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.05) translate(-0.5%, -0.5%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "smoke-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "25%": { transform: "translate(20px, -30px) scale(1.1)", opacity: "0.5" },
          "50%": { transform: "translate(-10px, -50px) scale(1.05)", opacity: "0.2" },
          "75%": { transform: "translate(15px, -20px) scale(0.95)", opacity: "0.4" },
        },
        "ember-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translateY(-20px) scale(1.2)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      letterSpacing: {
        "widest-2": "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
