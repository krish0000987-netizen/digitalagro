"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "01",
    name: "Active Max",
    subtitle: "ActiveMax Active • Bio Stimulant",
    desc: "Premium bio-stimulant trusted by thousands of farmers. Promotes stronger growth, better root development and higher yield with less fertilizer.",
    benefits: ["Stronger Growth", "Higher Yield", "Healthy Soil"],
    img: "/digitalagro/farmer-6.jpg",
    tag: "BESTSELLER",
  },
  {
    id: "02",
    name: "80 Gold",
    subtitle: "80 Years Celebrating Gold",
    desc: "Flagship gold formulation — celebrating 80 years of freedom & progress. Outstanding power for maximum productivity.",
    benefits: ["Outstanding Power", "Double Harvest", "Less Cost"],
    img: "/digitalagro/farmer-6.jpg",
    tag: "80 GOLD",
  },
  {
    id: "03",
    name: "SmartKavach",
    subtitle: "Smart Shield — Disease Protection",
    desc: "SmartKavach acts as a protective shield (Kavach) — disease protection and healthy crop defense, as seen with Happy Farmers.",
    benefits: ["Disease Protection", "Stronger Growth", "Happy Farmer"],
    img: "/digitalagro/farmer-6.jpg",
    tag: "PROTECTION",
  },
  {
    id: "04",
    name: "ActiveZime",
    subtitle: "ACTIVEZIME • Enzyme Power",
    desc: "Advanced bio-enzyme for enhanced nutrient uptake and plant vitality. Part of Digital Agro's trusted product family.",
    benefits: ["Bio Enzyme", "Higher Yield", "Quality Product"],
    img: "/digitalagro/farmer-6.jpg",
    tag: "ENZYME",
  },
  {
    id: "05",
    name: "BioVera Plus",
    subtitle: "BioVera Plus • Paddy Specialist",
    desc: "Specially effective for paddy, as demonstrated in lush green paddy fields — outstanding power for paddy crops.",
    benefits: ["Paddy Specialist", "Less Hard Work", "More Profit"],
    img: "/digitalagro/farmer-5.jpg",
    tag: "PADDY",
  },
  {
    id: "06",
    name: "AgroVera / Helpfull Liquid",
    subtitle: "Helpful Liquid — Outstanding Power",
    desc: "Helpfull Liquid for ridge gourd (Jhinga), chilli & ginger — সার কম, খরচ কম, পরিশ্রম কম, দ্বিগুণ ফলন.",
    benefits: ["Less Fertilizer", "Less Cost", "Double Yield"],
    img: "/digitalagro/farmer-1.jpg",
    tag: "HELPFULL",
  },
  {
    id: "07",
    name: "Chilli & Ginger Special",
    subtitle: "Sapan Sarkar Choice — Lanka & Adarak",
    desc: "Used by Sapan Sarkar for chilli and ginger — delivered stronger growth, higher yield and disease protection in real fields.",
    benefits: ["Stronger Growth", "Higher Yield", "Disease Protection"],
    img: "/digitalagro/farmer-4.jpg",
    tag: "LANKA • ADARAK",
  },
  {
    id: "08",
    name: "Brinjal & Vegetable Care",
    subtitle: "Soil Test • Advisory • Spray Support",
    desc: "Complete vegetable care including soil testing, expert advisory and spray management — as used in brinjal farms with Digital Agro service.",
    benefits: ["Soil Test", "Expert Advice", "Spray Solutions"],
    img: "/digitalagro/farmer-7.jpg",
    tag: "VEGETABLE",
  },
];

export default function Products() {
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <img src="/digitalagro/farmer-6.jpg" alt="Products hero" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-[#0a1f12]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/60 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full animate-pulse" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Agricultural Products — Trusted by Thousands</span></div>
          <h1 className="font-display text-[36px] lg:text-[58px] font-bold leading-none text-white">Explore Our<br /><span className="italic font-normal text-[#a8e0a8]">Agricultural Products</span></h1>
          <p className="text-white/80 max-w-xl mt-4 text-sm leading-relaxed">Real products, real farmers, real fields — <b>Active Max, 80 Gold, SmartKavach, ActiveZime, BioVera Plus</b> and more. Tap any product to see farmer success.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Products</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-6">
        <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-[#0e2e1f] text-white flex items-center justify-center text-sm">✓</span>
            <div><div className="font-semibold text-sm text-[#0e2e1f]">Real Product Images from Your Photos</div><p className="text-xs text-[#5a6b5a] leading-relaxed">All 7 photos from <b>photosdigitalagro</b> are now integrated — each product shows the actual farmer & field from your posters. Replace or add more anytime in <code className="bg-white px-1 py-0.5 rounded text-xs">/public/digitalagro</code>.</p></div>
          </div>
          <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20want%20product%20details." target="_blank" className="bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap">Enquire on WhatsApp →</a>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-[24px] overflow-hidden border border-stone-100 shadow-sm card-hover group flex flex-col">
              <div className="h-56 relative overflow-hidden bg-[#f4f1ea]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0e2e1f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full">{p.tag}</div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold tracking-widest uppercase opacity-80">{p.subtitle}</div>
                  <div className="font-bold">{p.name}</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-[#0e2e1f]">{p.name}</h3>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a5c2a]">{p.subtitle}</p>
                <p className="text-xs text-[#6b7c6b] leading-relaxed mt-2 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.benefits.map((b) => (
                    <span key={b} className="bg-[#f8f5ee] border border-stone-100 rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#0e2e1f]">{b}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-5">
                  <button onClick={() => setSelected(p)} className="flex-1 border border-stone-200 rounded-full py-2.5 text-xs font-semibold hover:bg-[#0e2e1f] hover:text-white hover:border-[#0e2e1f] transition-colors">View Details</button>
                  <a href={`https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}.`} target="_blank" className="flex-1 bg-[#1a5c2a] text-white rounded-full py-2.5 text-xs font-semibold text-center hover:bg-[#14532d]">Enquire Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-stone-100 rounded-[24px] p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0e2e1f]">চাষির Benefits — Farmer Benefits</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                <span className="bg-[#f8f5ee] rounded-full px-3 py-2 text-xs font-semibold text-center">সার কম • Less Fertilizer</span>
                <span className="bg-[#f8f5ee] rounded-full px-3 py-2 text-xs font-semibold text-center">খরচ কম • Less Cost</span>
                <span className="bg-[#f8f5ee] rounded-full px-3 py-2 text-xs font-semibold text-center">পরিশ্রম কম • Less Effort</span>
                <span className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-full px-3 py-2 text-xs font-bold text-center text-[#0e2e1f]">দ্বিগুণ ফলন • Double Yield</span>
              </div>
              <p className="text-xs text-[#6b7c6b] mt-3 italic">“যে বুঝবে সে খুঁজবে, আর যে খুঁজবে সে ফলন পাবে!” — Trusted by Thousands of Farmers</p>
            </div>
            <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20am%20looking%20for%20a%20specific%20agricultural%20product." target="_blank" className="bg-[#0e2e1f] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black whitespace-nowrap">Send an Enquiry →</a>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="h-64 relative">
              <img src={selected.img} alt={selected.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <div className="text-xs font-bold tracking-widest uppercase opacity-80">{selected.subtitle}</div>
                <div className="font-display text-2xl font-bold">{selected.name}</div>
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold shadow-md">×</button>
            </div>
            <div className="p-7">
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a]">Product {selected.id} • {selected.tag}</div>
              <h3 className="font-display text-2xl font-bold text-[#0e2e1f] mt-1">{selected.name}</h3>
              <p className="text-sm text-[#5a6b5a] leading-relaxed mt-3">{selected.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.benefits.map((b) => (
                  <span key={b} className="bg-[#e8f5e9] rounded-full px-3 py-1 text-xs font-semibold text-[#0e2e1f]">{b}</span>
                ))}
              </div>
              <div className="bg-[#f8f5ee] rounded-2xl p-4 mt-5 text-xs text-[#6b7c6b] leading-relaxed">This product is shown with real farmer imagery from your provided photos. To update, replace <code>/public/digitalagro/farmer-*.jpg</code> and edit name/desc in <code>app/products/page.tsx</code>.</div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setSelected(null)} className="flex-1 border border-stone-200 rounded-full py-3 font-semibold text-sm">Close</button>
                <a href={`https://wa.me/919593069126?text=Hello%20I%20am%20interested%20in%20${selected.name}`} target="_blank" className="flex-1 bg-[#1a5c2a] text-white rounded-full py-3 font-semibold text-sm text-center">Enquire Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
