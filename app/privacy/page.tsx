import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 63° Modern Regional Buffet",
  description: "Privacy policy for 63° Modern Regional Buffet. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-brand-linen min-h-screen text-brand-text font-display overflow-x-clip">
      
      {/* ── CONTENT SECTION ── */}
      <section className="pt-44 pb-20 relative overflow-hidden bg-brand-linen border-b border-brand-burgundy/10">
        
        {/* Fine Architectural Grid backdrop */}
        <div className="absolute inset-0 bg-grid-bg opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(171,31,35,0.03),transparent)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="text-[#AB1F24] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-display text-brand-text leading-tight mb-8 tracking-tight uppercase">
            63 DEGREE MODERN REGIONAL BUFFET<br />
            <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">privacy policy</span>
          </h1>

          <div className="space-y-8 text-brand-text/85 leading-relaxed text-sm md:text-base font-light">
            <p>
              At 63 Degree Modern Regional Buffet, we are deeply committed to protecting your personal privacy. This regulatory policy outlines exactly how we collect, utilize, and securely safeguard your personal information when you interact with our services.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Information We Collect",
                  text: "We collect personal information such as your name, email address, phone number, and any other vital details you provide when completing a dining reservation or bespoke inquiry. We may also collect details related to your dining history, personal preferences, and hosting requests.",
                },
                {
                  title: "Payment Data",
                  text: "Payment details are temporarily collected to securely process buffet transactions, but we strictly do not store card or banking information on our hospitality servers.",
                },
                {
                  title: "Legal Disclosure",
                  text: "We may disclose your personal information only if explicitly required by local law or in direct response to valid legal requests.",
                },
                {
                  title: "Cookies & Sessions",
                  text: "Our website uses cookies to enhance your online digital experience by automatically recognizing your dining preferences, browser options, and repeated visits.",
                },
                {
                  title: "Policy Updates",
                  text: "We may update this Privacy Policy periodically to reflect corporate policy revisions. All changes will be promptly posted on our website.",
                },
              ].map((section) => (
                <div key={section.title} className="bg-brand-linen border border-[#AB1F24]/10 rounded-xl p-6 shadow-sm hover:border-[#AB1F24]/30 transition-all duration-300">
                  <h3 className="text-brand-text font-display text-lg mb-2 tracking-tight uppercase">{section.title}</h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#AB1F24]/5 border border-[#AB1F24]/10 rounded-xl p-6 relative overflow-hidden shadow-sm">
              <h3 className="text-brand-text font-display text-lg mb-2 relative z-10 uppercase tracking-tight">Contact Us</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed relative z-10 font-light mb-4">
                For any privacy-related concerns or data inquiries, please reach out to us at:
              </p>
              
              <div className="text-brand-text/80 text-sm space-y-1 relative z-10 font-medium">
                <p>63 Degree Modern Regional Buffet</p>
                <p>28, 2nd Floor, Plot No: 25, Mindspace Rd,</p>
                <p>Opposite Meenakshi Bamboos Road,</p>
                <p>P Janardhan Reddy Nagar, Gachibowli,</p>
                <p>Hyderabad, Telangana — 500081</p>
              </div>
              
              <p className="mt-6 relative z-10 font-semibold">
                <a href="tel:+919733386333" className="text-[#AB1F24] text-sm hover:text-[#AB1F24]/80 transition-colors">+91 97333 86333</a>
                <span className="mx-3 text-brand-text/20">|</span>
                <a href="mailto:reservations@63degrees.in" className="text-[#AB1F24] text-sm hover:text-[#AB1F24]/80 transition-colors">reservations@63degrees.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
