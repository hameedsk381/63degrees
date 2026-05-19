# 63° Modern Regional Buffet — Tech Knowledge

## Project
Restaurant website for 63° Modern Regional Buffet, Gachibowli, Hyderabad.
URL: https://63degrees.in
GA4: G-HK73FG7276 | WhatsApp: +91 97333 86333 | Email: reservations@63degrees.in

## Stack
- Next.js 14.2.3 (App Router, static generation)
- React 18, TypeScript 5, Tailwind CSS 3.4
- Framer Motion 11.2 (animations), Lucide React 0.383 (icons), Lenis 1.3 (smooth scroll)

## Routes (17 static pages)
| Path | File | Title |
|------|------|-------|
| `/` | `app/page.tsx` | Home |
| `/about` | `app/about/page.tsx` | About Us |
| `/our-story` | `app/our-story/page.tsx` | Our Story |
| `/menu` | `app/menu/page.tsx` | Menu |
| `/catering` | `app/catering/page.tsx` | Catering Service |
| `/private-dining` | `app/private-dining/page.tsx` | Private Dining |
| `/book-a-table` | `app/book-a-table/page.tsx` | Book a Table |
| `/gallery` | `app/gallery/page.tsx` | Photo Gallery |
| `/faq` | `app/faq/page.tsx` | FAQ |
| `/contact` | `app/contact/page.tsx` | Contact Us |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy |
| `/terms` | `app/terms/page.tsx` | Terms & Conditions |
| `/robots.txt` | `app/robots.ts` | — |
| `/sitemap.xml` | `app/sitemap.ts` | — |
| `/_not-found` | `app/not-found.tsx` | 404 |

Each content route has its own `layout.tsx` for per-page metadata (title, description, OG, canonical).

## Global Components (in `app/layout.tsx`)
- `JsonLd` — Restaurant+LocalBusiness schema
- `Analytics` — GA4 script (next/script afterInteractive)
- `WhatsAppButton` — fixed bottom-right, pre-filled message
- `Navbar` — glass nav with links, Reserve Now CTA, mobile menu
- `Footer`
- `CustomCursor` — custom cursor component

## Navbar Links (order)
Home → About Us → Our Story → Menu → Book a Table → Catering → Private Dining → Gallery → FAQ → Contact Us

## Key Components
- `components/JsonLd.tsx` — Restaurant schema with address, geo, hours, rating, menu, social
- `components/FaqJsonLd.tsx` — FAQPage schema (17 Q&A)
- `components/GalleryJsonLd.tsx` — ImageGallery schema (20 images)
- `components/Analytics.tsx` — GA4 G-HK73FG7276
- `components/WhatsAppButton.tsx` — WhatsApp floating button
- `components/animations.tsx` — 18 animation components (FadeUp, StaggerContainer, Reveal, ScaleIn, BlurReveal, TextReveal, CharReveal, ParallaxSection, AnimatedCounter, TiltCard, Magnetic, GlowCard, Orb, FloatingParticles, etc.)

## Tailwind Theme
- **Colors**: flame (orange #ff5a00), crimson (#c41230), saffron (#f5a623), gold (#d4a853)
- **Fonts**: display=Bebas Neue, body=DM Sans, accent=Playfair Display, inter=Inter
- **Bg images**: noise, grain, radial-flame, radial-glow, radial-crimson, radial-gold
- **Shadows**: glow-sm/glow/glow-lg, glass, gold, elevated
- **Animations**: shimmer, float, pulse-soft, drift, spin-slow, ping-slow, glow-pulse, ken-burns
- **Easings**: in-out-expo (0.87,0,0.13,1), in-out-quart (0.76,0,0.24,1), out-expo (0.16,1,0.3,1)
- **Spacing**: 18(4.5rem), 88(22rem), 128(32rem)
- **Border radius**: 4xl(2rem), 5xl(2.5rem)

## Page Patterns
- Each page uses a consistent layout: hero section (gradient bg, h1 with gradient text split) → content sections → CTA
- "use client" pages use framer-motion for scroll animations via Reveal/FadeUp/ScaleIn/StaggerContainer
- Form pages (contact, catering, private-dining, book-a-table) all have: glass form, sidebar with contact info + selling points, loading spinner, thank-you state
- Sections use `section-pad` class and `glass` utility class

## Business Info
- **Pricing**: Veg ₹749+, Non-Veg ₹849+, Kids ₹399+, Under 5 FREE (+taxes)
- **Hours**: Mon-Fri 12-3:30PM / 7-11PM, Sat 12-4PM / 7-11:30PM, Sun 12-4:30PM / 7-11PM
- **Address**: 28, 2nd Floor, Plot 25, Mindspace Rd, opp Meenakshi Bamboos Road, Gachibowli, Hyderabad 500081
- **Google Maps**: 17.4435, 78.3665
- **Social**: instagram.com/63degreeshyd, facebook.com/63degreeshyd
- **Rating**: 5.0 (2320+ reviews)
- **Cuisine**: Indian, Regional, Andhra, Chinese, Continental (250+ dishes)
- **Capacity**: ~150 guests

## Book a Table Flow (3-step)
1. Meal toggle (Lunch/Dinner) → Date → Time slot (2 slots per meal) → Guest counters (Veg/Non-Veg/Kids with +/- buttons)
2. Name, phone, email, occasion, special requests → OTP verify (mock: code=0000)
3. Summary with price breakdown → Offer code (WELCOME10 or 63OFF = 10% off) → Confirm
- Pricing: Veg ₹749 × count, Non-Veg ₹849 × count, Kids ₹399 × count

## Public Images (25 files)
1.jpg 2.jpg 2.webp 2024-02-07.jpg 2024-03-07-2.jpg 3.jpg 3.webp 4.jpg 4.webp
63-degrees.jpg 63B.png bi.png food.jpg Im1.jpg im2.jpg im3.jpg IMG_1953-1.jpg
Live-Muice.webp logo.png resta-img20.png resta-img21.png resta-img47.png resta-img48.png
Schezwan-Paneer.jpg Web-cover.jpg.jpeg

## Build
`npm run build` — all static, zero errors expected. 17 pages, ~87-146 kB per route.
