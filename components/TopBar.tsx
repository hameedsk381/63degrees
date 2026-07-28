"use client";

import Link from "next/link";
import { MapPin, Phone, Instagram, Youtube, Facebook } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex items-center justify-between w-full border-b border-brand-burgundy/10 bg-transparent py-2 px-8 z-50 relative">
      <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.15em] text-brand-text/70 uppercase">
        <a href="https://maps.app.goo.gl/rB4v4u2k1Xm1QfJbA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#AB1F24] transition-colors">
          <MapPin size={12} className="text-[#AB1F24]" />
          <span>Near AIG Hospital, Gachibowli</span>
        </a>
        <a href="tel:+919733386333" className="flex items-center gap-2 hover:text-[#AB1F24] transition-colors">
          <Phone size={12} className="text-[#AB1F24]" />
          <span>+91 973 338 6333</span>
        </a>
        <a href="tel:+919644415551" className="flex items-center gap-2 hover:text-[#AB1F24] transition-colors">
          <Phone size={12} className="text-[#AB1F24]" />
          <span>+91 964 4415551</span>
        </a>
      </div>
      <div className="flex items-center gap-4 text-brand-text/70">
        <a href="https://www.instagram.com/63degreeshyd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB1F24] transition-colors">
          <Instagram size={14} />
        </a>
        <a href="https://www.youtube.com/@63DegreesModernRegionalBuffet" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB1F24] transition-colors">
          <Youtube size={14} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554823130382" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB1F24] transition-colors">
          <Facebook size={14} />
        </a>
      </div>
    </div>
  );
}
