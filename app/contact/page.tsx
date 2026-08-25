"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[400px] sm:h-[460px] lg:h-[520px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Contact hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full animate-pulse" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Contact Us</span></div>
          <h1 className="font-display text-[42px] lg:text-[64px] font-bold leading-none text-white">Let’s Grow<br /><span className="italic font-normal text-[#a8e0a8]">Together</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm leading-relaxed">Have an agricultural, farming or plantation requirement? Get in touch with Digital Agro Farming Services.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Contact</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_1.6fr] gap-8">
          {/* Left contact info */}
          <div className="space-y-6">
            <div className="bg-[#0e2e1f] rounded-[28px] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a5c2a]/20 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-xl font-bold">Digital Agro Farming Services</h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">Professional agro farming and plantation solutions for a greener future.</p>
                <div className="mt-8 space-y-5">
                  <div>
                    <div className="text-white/50 text-xs tracking-widest uppercase font-semibold">Phone / WhatsApp</div>
                    <a href="tel:+919593069126" className="text-2xl font-bold mt-1 block hover:text-[#7bc47f]">+91 95930 69126</a>
                    <div className="flex gap-2 mt-3">
                      <a href="tel:+919593069126" className="bg-white text-[#0e2e1f] px-5 py-2.5 rounded-full font-semibold text-sm">Call Now</a>
                      <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-sm">WhatsApp</a>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <div className="text-white/50 text-xs tracking-widest uppercase font-semibold">Business Hours</div>
                    <div className="text-white/80 text-sm mt-2">Open for enquiries — get in touch anytime via phone or WhatsApp.</div>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <div className="text-white/50 text-xs tracking-widest uppercase font-semibold">Location</div>
                    <div className="text-white text-sm mt-2 font-medium">Business Location — Add Google Maps Location</div>
                    <div className="text-white/60 text-xs mt-1">Replace this placeholder with your exact address and embed.</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="bg-[#25D366] rounded-[20px] p-6 flex items-center gap-4 hover:bg-[#1fb255] transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl">💬</div>
              <div className="text-white"><div className="font-bold">Chat With Us on WhatsApp</div><div className="text-sm opacity-90">+91 95930 69126 — Quick response</div></div>
              <span className="ml-auto text-white text-xl">→</span>
            </a>

            <div className="bg-[#f8f5ee] border border-stone-200 rounded-[20px] p-6">
              <h4 className="font-semibold text-[#0e2e1f]">Business Location</h4>
              <p className="text-xs text-[#6b7c6b] mt-1">Map placeholder — owner will provide exact location.</p>
              <div className="mt-4 h-48 bg-[#e8e5de] rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-[#c9a86a]/30">
                <span className="text-2xl">📍</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#5a6b5a] mt-2">Google Maps Embed Here</span>
                <span className="text-[11px] text-[#9a9a9a]">Replace with actual iframe embed</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[28px] border border-stone-100 p-8 lg:p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-[#0e2e1f]">Send an Enquiry</h3>
            <p className="text-sm text-[#6b7c6b] mt-2">Fill in your details and we’ll get back to you promptly.</p>

            {submitted && <div className="mt-6 bg-[#e8f5e9] border border-[#c8e6c9] rounded-2xl p-4 text-sm text-[#1a5c2a] font-medium">Thank you! Your enquiry has been received. We’ll contact you soon at +91 95930 69126.</div>}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Full Name *</label><input required placeholder="Your name" className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors" /></div>
                <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Phone Number *</label><input required placeholder="+91 95930 69126" className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Email</label><input type="email" placeholder="your@email.com" className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors" /></div>
                <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Location</label><input placeholder="City / District" className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors" /></div>
              </div>
              <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Service Required</label><select className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors"><option>Select a service</option><option>Agro Farming</option><option>Plantation Services</option><option>Farm Development</option><option>Sustainable Agriculture</option><option>Farming Solutions</option><option>Custom Requirement</option></select></div>
              <div><label className="text-xs font-semibold tracking-widest uppercase text-[#5a6b5a]">Message</label><textarea rows={4} placeholder="Tell us about your agricultural requirement..." className="mt-2 w-full bg-[#f8f5ee] border border-stone-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-[#1a5c2a] focus:bg-white transition-colors resize-none" /></div>
              <button type="submit" className="w-full bg-[#0e2e1f] hover:bg-black text-white rounded-full py-4 font-bold tracking-wide transition-colors">Submit Enquiry →</button>
              <p className="text-xs text-center text-[#9a9a9a]">By submitting, you agree to be contacted at +91 95930 69126</p>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-[24px] overflow-hidden border border-stone-200 h-[360px] bg-[#f4f1ea] flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80")`, backgroundSize: "cover" }} />
          <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg border border-stone-100 text-center">
            <div className="text-sm font-bold text-[#0e2e1f]">📍 Business Location — Add Google Maps Location</div>
            <div className="text-xs text-[#6b7c6b] mt-1">Embed your Google Maps iframe here</div>
          </div>
        </div>
      </section>
    </div>
  );
}
