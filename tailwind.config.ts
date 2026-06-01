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
        warm: {
          50: "#fef2f2",
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
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
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-karla)", "sans-serif"],
        body: ["var(--font-karla)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
        heading: ["var(--font-bebas)", "sans-serif"],
        karla: ["var(--font-karla)", "sans-serif"],
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

        "mandala": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.3' opacity='0.15'%3E%3Ccircle cx='50' cy='50' r='48'/%3E%3Ccircle cx='50' cy='50' r='36'/%3E%3Ccircle cx='50' cy='50' r='24'/%3E%3Ccircle cx='50' cy='50' r='12'/%3E%3C/g%3E%3Cg fill='currentColor' opacity='0.06'%3E%3Ccircle cx='50' cy='4' r='1.5'/%3E%3Ccircle cx='50' cy='96' r='1.5'/%3E%3Ccircle cx='4' cy='50' r='1.5'/%3E%3Ccircle cx='96' cy='50' r='1.5'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.2' opacity='0.08'%3E%3Cpath d='M50 12 L56 24 L50 36 L44 24Z'/%3E%3Cpath d='M50 64 L56 76 L50 88 L44 76Z'/%3E%3Cpath d='M12 50 L24 56 L36 50 L24 44Z'/%3E%3Cpath d='M64 50 L76 56 L88 50 L76 44Z'/%3E%3C/g%3E%3C/svg%3E\")",
        "paisley": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.4' opacity='0.12'%3E%3Cpath d='M50 25 Q70 40 65 60 Q60 75 50 82 Q40 75 35 60 Q30 40 50 25Z'/%3E%3Cpath d='M50 45 Q58 52 55 62 Q50 72 45 62 Q42 52 50 45Z'/%3E%3Cpath d='M50 20 Q45 15 50 10 Q55 15 50 20Z'/%3E%3C/g%3E%3Ccircle cx='50' cy='50' r='1.5' fill='currentColor' opacity='0.05'/%3E%3C/svg%3E\")",
        "blockprint": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.3' opacity='0.12'%3E%3Crect x='28' y='28' width='24' height='24' rx='2'/%3E%3Crect x='34' y='34' width='12' height='12' rx='1'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.3' opacity='0.08'%3E%3Cpath d='M40 24 L44 28 L36 28Z'/%3E%3Cpath d='M40 56 L44 52 L36 52Z'/%3E%3Cpath d='M24 40 L28 44 L28 36Z'/%3E%3Cpath d='M56 40 L52 44 L52 36Z'/%3E%3C/g%3E%3Cg fill='currentColor' opacity='0.04'%3E%3Ccircle cx='40' cy='20' r='1'/%3E%3Ccircle cx='40' cy='60' r='1'/%3E%3Ccircle cx='20' cy='40' r='1'/%3E%3Ccircle cx='60' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        "warli": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.5' opacity='0.1'%3E%3Ccircle cx='50' cy='32' r='12'/%3E%3Cpath d='M38 50 L50 58 L62 50'/%3E%3Cpath d='M42 58 L50 65 L58 58'/%3E%3Cline x1='50' y1='22' x2='50' y2='18'/%3E%3Cline x1='38' y1='25' x2='25' y2='20'/%3E%3Cline x1='62' y1='25' x2='75' y2='20'/%3E%3C/g%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.3' opacity='0.06'%3E%3Cline x1='0' y1='78' x2='30' y2='78'/%3E%3Cline x1='70' y1='78' x2='100' y2='78'/%3E%3C/g%3E%3C/svg%3E\")",
        "rangoli": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' opacity='0.07'%3E%3Ccircle cx='40' cy='40' r='2.5'/%3E%3Ccircle cx='40' cy='20' r='1.5'/%3E%3Ccircle cx='40' cy='60' r='1.5'/%3E%3Ccircle cx='20' cy='40' r='1.5'/%3E%3Ccircle cx='60' cy='40' r='1.5'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='55' cy='25' r='1'/%3E%3Ccircle cx='25' cy='55' r='1'/%3E%3Ccircle cx='55' cy='55' r='1'/%3E%3Ccircle cx='40' cy='10' r='1'/%3E%3Ccircle cx='40' cy='70' r='1'/%3E%3Ccircle cx='10' cy='40' r='1'/%3E%3Ccircle cx='70' cy='40' r='1'/%3E%3C/g%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.2' opacity='0.06'%3E%3Cline x1='20' y1='40' x2='40' y2='20'/%3E%3Cline x1='40' y1='20' x2='60' y2='40'/%3E%3Cline x1='60' y1='40' x2='40' y2='60'/%3E%3Cline x1='40' y1='60' x2='20' y2='40'/%3E%3C/g%3E%3C/svg%3E\")",
        "lotus": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='currentColor' stroke-width='0.4' opacity='0.1'%3E%3Cpath d='M50 85 Q30 55 38 30 Q44 20 50 28 Q56 20 62 30 Q70 55 50 85Z'/%3E%3Cpath d='M50 78 Q36 55 42 36 Q46 28 50 34 Q54 28 58 36 Q64 55 50 78Z'/%3E%3Cpath d='M25 48 Q12 38 15 28 Q18 21 25 27 Q28 33 25 48Z'/%3E%3Cpath d='M75 48 Q88 38 85 28 Q82 21 75 27 Q72 33 75 48Z'/%3E%3C/g%3E%3Ccircle cx='50' cy='52' r='3' fill='currentColor' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0,0,0,0.4)",
        "glass-sm": "0 4px 16px rgba(0,0,0,0.3)",
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
