"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: "01",
    name: "ACTIVE-80",
    subtitle: "Activator • Wetter • Spreader",
    variant: "100 ml",
    price: 140,
    mrp: "₹140",
    desc: "All Purpose Nonionic Spray Adjuvant Concentrate for use in Fungicides, Herbicides, Insecticides, Foliar Fertilizers & Plant Nutrients. Increases crop yield by improving pesticide coverage. Proven Tested.",
    benefits: ["Wetter & Spreader", "Improves Coverage", "Higher Yield"],
    img: "/products/active-80-100ml-140.jpg",
    tag: "STARTER",
    color: "bg-[#e8f5e9] border-[#c8e6c9]",
  },
  {
    id: "02",
    name: "ACTIVMAX",
    subtitle: "Biostimulant • Ecofriendly",
    variant: "100 ml",
    price: 180,
    mrp: "₹180",
    desc: "Ecofriendly Biostimulant derived from organic plant sources. Improves plant growth, crop productivity and greenness. Blue-label trusted formulation.",
    benefits: ["Organic Source", "Growth Booster", "Greenness"],
    img: "/products/activmax-100ml-180.jpg",
    tag: "BIOSTIMULANT",
    color: "bg-[#e3f2fd] border-[#90caf9]",
  },
  {
    id: "03",
    name: "ACTIVE-80 GOLD",
    subtitle: "With Natural Vegetable Based Surfactants",
    variant: "500 ml",
    price: 700,
    mrp: "₹700",
    desc: "Gold edition of ACTIVE-80 with natural vegetable based surfactants. Same all-purpose adjuvant power, enhanced with premium spreading for maximum pesticide efficiency.",
    benefits: ["Gold Formula", "Vegetable Surfactant", "Premium Coverage"],
    img: "/products/active-80-gold-500ml-700.jpg",
    tag: "GOLD • POPULAR",
    color: "bg-[#fff8e1] border-[#ffe082]",
  },
  {
    id: "04",
    name: "ACTIVMAX",
    subtitle: "Best Seller • 500 ml",
    variant: "500 ml",
    price: 800,
    mrp: "₹800",
    desc: "Best Seller — 500 ml ACTIVMAX Biostimulant. Large economy pack for full-season crop care. Ecofriendly, organic-derived, loved by thousands of farmers.",
    benefits: ["Best Seller", "500 ml Economy", "Full Season Care"],
    img: "/products/activmax-500ml-800.jpg",
    tag: "BEST SELLER",
    color: "bg-[#e3f2fd] border-[#1e88e5]",
  },
  {
    id: "05",
    name: "ACTIVE-80",
    subtitle: "Jumbo Pack • For Large Farms",
    variant: "5 Ltr",
    price: 4500,
    mrp: "₹4,500",
    desc: "5 Ltr jumbo can for large farms and plantation projects. Same proven ACTIVE-80 formulation — ideal for bulk spraying across paddy, chilli, ginger, brinjal and plantation crops.",
    benefits: ["5 Ltr Jumbo", "Bulk Saving", "Plantation Ready"],
    img: "/products/active-80-5ltr-4500.jpg",
    tag: "JUMBO 5 LTR",
    color: "bg-[#e8f5e9] border-[#2e7d32]",
  },
];

const moreProducts = [
  { name: "SmartKavach", desc: "Disease protection shield — complements ACTIVE-80 for healthy crop defense.", img: "/digitalagro/farmer-6.jpg" },
  { name: "ActiveZime", desc: "Bio-enzyme for nutrient uptake — pairs with ACTIVMAX for green growth.", img: "/digitalagro/farmer-6.jpg" },
  { name: "Expert Advisory", desc: "Soil test + spray advisory — as seen with brinjal & paddy happy farmers.", img: "/digitalagro/farmer-7.jpg" },
];

export default function Products() {
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e2e1f] via-[#14532d] to-[#0e2e1f]" />
        <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:flex items-center justify-center gap-4 p-8 opacity-95">
          <div className="grid grid-cols-3 gap-3">
            {products.slice(0, 3).map((p) => (
              <div key={p.name + p.variant} className="bg-white rounded-2xl p-3 shadow-xl rotate-1 hover:rotate-0 transition-transform">
                <img src={p.img} alt={p.name} className="w-24 h-32 object-contain mx-auto" />
                <div className="text-center mt-2"><div className="text-[11px] font-bold">{p.name}</div><div className="text-[10px] text-[#6b7c6b]">{p.variant} • {p.mrp}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full animate-pulse" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Products • Pricing as per Your Documents</span></div>
          <h1 className="font-display text-[36px] lg:text-[58px] font-bold leading-none text-white">Our Products<br /><span className="italic font-normal text-[#a8e0a8]">With Real Pricing</span></h1>
          <p className="text-white/80 max-w-xl mt-4 text-sm leading-relaxed">5 real product variants from <b>/Downloads/products</b> — pricing exactly as named in your files. Tap any product to order via WhatsApp.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-white text-[#0e2e1f] px-4 py-2 rounded-full text-xs font-bold">100 ml from ₹140</span>
            <span className="bg-[#c9a86a] text-[#0e2e1f] px-4 py-2 rounded-full text-xs font-bold">500 ml ₹700–₹800</span>
            <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold">5 Ltr ₹4,500</span>
          </div>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Products</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="bg-[#e8f5e9] border border-[#c8e6c9] rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-[#0e2e1f] text-white flex items-center justify-center text-sm">₹</span>
            <div><div className="font-semibold text-sm text-[#0e2e1f]">Pricing Exactly as Per Your File Names</div><p className="text-xs text-[#5a6b5a] leading-relaxed">100ml - 140 Rupees • 100ml - 180 Rupees • 500ML - 700 • 500ml - 800 • 5 ltr 4,500 — All images now live in <code className="bg-white px-1 py-0.5 rounded text-xs">/public/products</code> and displayed below.</p></div>
          </div>
          <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20want%20to%20order%20products." target="_blank" className="bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap">Order on WhatsApp →</a>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id + p.variant} className={`bg-white rounded-[28px] overflow-hidden border-2 shadow-sm card-hover group flex flex-col ${p.color}`}>
              <div className="relative bg-white p-6 flex flex-col items-center">
                <div className="absolute top-4 left-4 bg-[#0e2e1f] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">{p.tag}</div>
                <div className="absolute top-4 right-4 bg-[#c9a86a] text-[#0e2e1f] text-xs font-bold px-3 py-1.5 rounded-full">{p.mrp}</div>
                <img src={p.img} alt={p.name} className="w-40 h-52 object-contain mt-6 group-hover:scale-105 transition-transform duration-500" />
                <div className="mt-4 text-center">
                  <h3 className="font-display text-xl font-bold text-[#0e2e1f] leading-none">{p.name}</h3>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#1a5c2a] mt-1">{p.subtitle}</p>
                  <p className="text-xs text-[#6b7c6b] mt-1">{p.variant} • <span className="font-bold text-[#0e2e1f]">{p.mrp}</span></p>
                </div>
              </div>
              <div className="px-6 pb-6 flex flex-col flex-1 bg-[#fcfcf8] border-t border-stone-100">
                <p className="text-xs text-[#5a6b5a] leading-relaxed mt-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.benefits.map((b) => (
                    <span key={b} className="bg-white border border-stone-200 rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#0e2e1f]">{b}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <button onClick={() => setSelected(p)} className="border border-stone-300 rounded-full py-3 text-xs font-bold hover:bg-[#0e2e1f] hover:text-white hover:border-[#0e2e1f] transition-colors">View Details</button>
                  <a href={`https://wa.me/919593069126?text=${encodeURIComponent(`Hello Digital Agro Farming Services, I want to order ${p.name} ${p.variant} at ${p.mrp}. Please confirm availability.`)}`} target="_blank" className="bg-[#1a5c2a] text-white rounded-full py-3 text-xs font-bold text-center hover:bg-[#14532d]">Order ₹{p.price} →</a>
                </div>
                <div className="text-[11px] text-center text-[#9a9a9a] mt-2">Cash on delivery / enquiry • +91 95930 69126</div>
              </div>
            </div>
          ))}
        </div>

        {/* More products from farmer range */}
        <div className="mt-10">
          <h3 className="font-display text-lg font-bold text-[#0e2e1f]">Also Available — Farmer-Trusted Range</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {moreProducts.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-4 border border-stone-100 flex gap-4 items-center">
                <img src={m.img} alt={m.name} className="w-16 h-20 object-cover object-top rounded-xl border border-stone-100" />
                <div><div className="font-bold text-sm text-[#0e2e1f]">{m.name}</div><div className="text-xs text-[#6b7c6b] leading-relaxed mt-1">{m.desc}</div><a href="https://wa.me/919593069126" target="_blank" className="text-xs font-bold text-[#1a5c2a] mt-2 inline-block">Enquire →</a></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mt-10 bg-white rounded-[24px] border border-stone-100 overflow-hidden">
          <div className="bg-[#0e2e1f] text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h3 className="font-bold">Complete Price List — As Per Your Documents</h3>
            <span className="bg-[#c9a86a] text-[#0e2e1f] px-3 py-1 rounded-full text-xs font-bold">Exact file-name pricing</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f8f5ee] text-xs tracking-widest uppercase text-[#5a6b5a]">
                <tr><th className="text-left px-6 py-3">Product</th><th className="text-left px-6 py-3">Variant</th><th className="text-left px-6 py-3">Price</th><th className="text-left px-6 py-3">Use</th><th className="px-6 py-3">Order</th></tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-[#fcfcf8]">
                    <td className="px-6 py-4 font-bold text-[#0e2e1f]">{p.name}</td>
                    <td className="px-6 py-4 text-[#5a6b5a]">{p.variant}</td>
                    <td className="px-6 py-4"><span className="bg-[#e8f5e9] text-[#0e2e1f] px-3 py-1 rounded-full font-bold text-xs">{p.mrp}</span></td>
                    <td className="px-6 py-4 text-xs text-[#6b7c6b] max-w-[260px]">{p.desc.slice(0, 80)}…</td>
                    <td className="px-6 py-4"><a href={`https://wa.me/919593069126?text=${encodeURIComponent(`Order ${p.name} ${p.variant} ${p.mrp}`)}`} target="_blank" className="bg-[#1a5c2a] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-black">WhatsApp</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-[#f8f5ee] text-xs text-[#6b7c6b] flex flex-wrap gap-3 justify-between">
            <span>💳 Prices as per your file names — update anytime in /public/products</span>
            <span>📞 Order / bulk enquiry: <a href="tel:+919593069126" className="font-bold text-[#0e2e1f]">+91 95930 69126</a></span>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-[#0e2e1f] to-[#1a5c2a] rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div><h3 className="font-display text-xl font-bold">Need Bulk Pricing or Combo Offer?</h3><p className="text-white/70 text-sm mt-1">Ask for wholesale rates for 5 Ltr and multi-product combos — we’ll share best price on WhatsApp.</p></div>
          <a href="https://wa.me/919593069126?text=Hello%2C%20I%20want%20bulk%2Fcombo%20pricing%20for%20Digital%20Agro%20products." target="_blank" className="bg-white text-[#0e2e1f] px-8 py-3.5 rounded-full font-bold hover:bg-[#f4f1ea] whitespace-nowrap">Get Bulk Price →</a>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-white p-8 flex flex-col items-center border-b border-stone-100">
              <img src={selected.img} alt={selected.name} className="w-44 h-56 object-contain" />
              <div className="mt-4 text-center"><div className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a]">{selected.subtitle}</div><h3 className="font-display text-2xl font-bold text-[#0e2e1f]">{selected.name} • {selected.variant}</h3><div className="mt-2 inline-flex bg-[#0e2e1f] text-white px-4 py-2 rounded-full font-bold">{selected.mrp}</div></div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 bg-stone-100 rounded-full flex items-center justify-center font-bold">×</button>
            </div>
            <div className="p-7">
              <p className="text-sm text-[#5a6b5a] leading-relaxed">{selected.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.benefits.map((b) => (
                  <span key={b} className="bg-[#e8f5e9] rounded-full px-3 py-1 text-xs font-semibold text-[#0e2e1f]">{b}</span>
                ))}
              </div>
              <div className="bg-[#f8f5ee] rounded-2xl p-4 mt-5 text-xs text-[#6b7c6b] leading-relaxed">File: <code>{selected.img.split('/').pop()}</code> — Price <b>{selected.mrp}</b> as per your original file name. To change, rename file and update price in <code>app/products/page.tsx</code>.</div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button onClick={() => setSelected(null)} className="border border-stone-200 rounded-full py-3 font-semibold text-sm">Close</button>
                <a href={`https://wa.me/919593069126?text=${encodeURIComponent(`Hello, I want to order ${selected.name} ${selected.variant} at ${selected.mrp}`)}`} target="_blank" className="bg-[#1a5c2a] text-white rounded-full py-3 font-semibold text-sm text-center">Order on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
