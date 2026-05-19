export default function TermsPage() {
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
            <span className="font-accent italic text-[#AB1F24] lowercase tracking-normal font-light">terms and conditions</span>
          </h1>

          <div className="space-y-8 text-brand-text/85 leading-relaxed text-sm md:text-base font-light">
            <p>
              By dining at 63 Degree Modern Regional Buffet, you agree to abide by the following terms and conditions. We reserve the absolute right to update or modify these terms at any time without prior corporate notice.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Reservations & Cancellations",
                  text: "Reservations are highly recommended but not mandatory. Please notify our concierge of any changes or cancellations at least 6 hours in advance of your slot.",
                },
                {
                  title: "Buffet Hours & Pricing",
                  text: "Our buffet service is available during designated operational hours only. Please refer to our website or contact our desk for current buffet timings. Prices are per guest and subject to change without prior notice. All listed prices are exclusive of applicable GST.",
                },
                {
                  title: "Payment",
                  text: "We accept all major credit cards, debit cards, UPI, and cash. Full payment is strictly required at the time of dining completion.",
                },
                {
                  title: "Food Safety & Allergies",
                  text: "We adhere to strict international food safety and hygiene standards. Guests with food allergies or dietary restrictions must inform our hosting staff before dining. To promote sustainability, we request our guests to avoid food wastage. Leftover buffet food cannot be packed for takeaway.",
                },
                {
                  title: "Lost Property & Valuables",
                  text: "63 Degree Modern Regional Buffet is not liable for any loss, theft, or damage to personal belongings. Please keep your personal valuables safe.",
                },
                {
                  title: "Behavior & Conduct",
                  text: "We strive to provide a premium dining experience for all guests. Disruptive, inappropriate, or disrespectful behavior will not be tolerated. Management reserves the absolute right to refuse service to anyone at its sole discretion.",
                },
                {
                  title: "Health & Safety",
                  text: "Please follow all local health regulations and guidelines. Guests exhibiting symptoms of active illness are kindly requested to postpone their dining visit.",
                },
                {
                  title: "Governing Law",
                  text: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which 63 Degree Modern Regional Buffet operates.",
                },
              ].map((section) => (
                <div key={section.title} className="bg-brand-linen border border-[#AB1F24]/10 rounded-xl p-6 shadow-sm hover:border-[#AB1F24]/30 transition-all duration-300">
                  <h3 className="text-brand-text font-display text-lg mb-2 tracking-tight uppercase">{section.title}</h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed font-light">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#AB1F24]/5 border border-[#AB1F24]/10 rounded-xl p-6 relative overflow-hidden shadow-sm">
              <p className="text-brand-text/80 text-sm leading-relaxed relative z-10">
                For any questions regarding these regulatory terms, please contact our concierge at{" "}
                <a href="tel:+919733386333" className="text-[#AB1F24] font-semibold hover:text-[#AB1F24]/80 transition-colors">+91 97333 86333</a> or email{" "}
                <a href="mailto:reservations@63degrees.in" className="text-[#AB1F24] font-semibold hover:text-[#AB1F24]/80 transition-colors">reservations@63degrees.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
