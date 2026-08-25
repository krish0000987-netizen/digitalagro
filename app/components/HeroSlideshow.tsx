"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
    title: "Growing Better.",
    highlight: "Farming Smarter.",
    sub: "Building a Greener Future.",
    desc: "Professional agro farming and plantation solutions designed to cultivate healthy, productive and sustainable agricultural environments.",
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
    title: "Creating Green",
    highlight: "Spaces That Last.",
    sub: "Plantation for Generations.",
    desc: "From planning to nurturing — we help you build thriving plantations and green belts that grow for decades.",
  },
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80",
    title: "Modern Farming",
    highlight: "Rooted in Nature.",
    sub: "Driven by Expertise.",
    desc: "Practical, responsible agricultural solutions blending traditional wisdom with modern sustainable practices.",
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80",
    title: "Cultivating",
    highlight: "Healthy Harvests.",
    sub: "Sustainably & Responsibly.",
    desc: "Soil care, water-conscious farming and long-term productivity — for farms that thrive today and tomorrow.",
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80",
    title: "Sunrise Over",
    highlight: "Greener Fields.",
    sub: "Your Farm, Our Passion.",
    desc: "Let's grow something that lasts. Talk to our team about your agricultural requirements today.",
  },
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);
  const s = slides[idx];
  return (
    <section className="relative h-[88vh] min-h-[560px] sm:min-h-[640px] max-h-[880px] overflow-hidden bg-[#0e2e1f]">
      {/* Images */}
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-all duration-[1400ms] ease-in-out ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.06]"}`}>
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f12]/85 via-[#0a1f12]/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-16 sm:pt-16 pb-16 sm:pb-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#7bc47f] rounded-full animate-pulse" />
            <span className="text-white/90 text-xs tracking-[0.16em] uppercase font-semibold">Digital Agro Farming Services</span>
          </div>

          <h1 className="font-display font-bold leading-[0.9] tracking-tight text-white">
            <span className="block text-[34px] sm:text-[48px] lg:text-[72px]">{s.title}</span>
            <span className="block text-[34px] sm:text-[48px] lg:text-[72px] text-[#a8e0a8] italic font-normal">{s.highlight}</span>
            <span className="block text-[26px] sm:text-[36px] lg:text-[52px] font-light opacity-90 mt-1">{s.sub}</span>
          </h1>

          <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed mt-6 max-w-xl text-balance">{s.desc}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/services" className="inline-flex items-center gap-3 bg-[#1a5c2a] hover:bg-[#144523] text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-colors shadow-xl shadow-black/20">
              Explore Our Services <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">→</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0e2e1f] px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#f4f1ea] transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="tel:+919593069126" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 text-white hover:bg-white hover:text-[#0e2e1f] transition-colors">
              <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-sm">☎</span>
              <span className="text-sm font-semibold">Call / WhatsApp: +91 95930 69126</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`transition-all duration-500 rounded-full ${i === idx ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3 z-20">
        <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-semibold rotate-90 origin-center whitespace-nowrap">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fdfcf8] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
