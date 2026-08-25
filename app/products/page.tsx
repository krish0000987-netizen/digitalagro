"use client";
import { useState } from "react";
import Link from "next/link";

const products = [
  { id: "01", name: "Product 01", desc: "Premium agricultural product — description editable by owner. Replace with your actual product details, specifications and images.", img: null },
  { id: "02", name: "Product 02", desc: "Premium agricultural product — description editable by owner. Replace with your actual product details and enquiry options.", img: null },
  { id: "03", name: "Product 03", desc: "Premium agricultural product — description editable by owner. Ideal for showcasing seeds, saplings or farm inputs.", img: null },
  { id: "04", name: "Product 04", desc: "Premium agricultural product — description editable by owner. Update with pricing, availability and details.", img: null },
  { id: "05", name: "Product 05", desc: "Premium agricultural product — description editable by owner.", img: null },
  { id: "06", name: "Product 06", desc: "Premium agricultural product — description editable by owner.", img: null },
  { id: "07", name: "Product 07", desc: "Premium agricultural product — description editable by owner.", img: null },
  { id: "08", name: "Product 08", desc: "Premium agricultural product — description editable by owner.", img: null },
];

export default function Products() {
  const [selected, setSelected] = useState<typeof products[0] | null>(null);
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Products hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Products</span></div>
          <h1 className="font-display text-[38px] lg:text-[60px] font-bold leading-none text-white">Explore Our<br /><span className="italic font-normal text-[#a8e0a8]">Agricultural Products</span></h1>
          <p className="text-white/80 max-w-xl mt-4 text-sm leading-relaxed">Browse our catalog. Each product card is fully editable — replace images, names and details with your own products.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Products</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-amber-600 mt-0.5">⚙️</span>
          <div><div className="font-semibold text-sm text-amber-900">Owner Product Management</div><p className="text-xs text-amber-800/70 leading-relaxed mt-1">All product cards below show <b>“YOUR PRODUCT IMAGE HERE”</b> placeholders. Simply replace the image, name, description, specifications and price for each product. Enquiry buttons are already wired to WhatsApp.</p></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-[24px] overflow-hidden border border-stone-100 shadow-sm card-hover group">
              <div className="h-56 bg-[#f8f5ee] border-b border-stone-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80")`, backgroundSize: "cover" }} />
                <div className="relative w-full h-32 rounded-2xl border-2 border-dashed border-[#c9a86a]/40 bg-white/80 flex flex-col items-center justify-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center">🖼️</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#5a6b5a]">Your Product Image Here</span>
                  <span className="text-[10px] text-[#9a9a9a]">800 × 800 px recommended</span>
                </div>
                <div className="absolute top-3 left-3 bg-[#0e2e1f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full">PRODUCT {p.id}</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[#0e2e1f]">{p.name}</h3>
                <p className="text-xs text-[#6b7c6b] leading-relaxed mt-2 line-clamp-3">{p.desc}</p>
                <div className="flex gap-2 mt-5">
                  <button onClick={() => setSelected(p)} className="flex-1 border border-stone-200 rounded-full py-2.5 text-xs font-semibold hover:bg-[#0e2e1f] hover:text-white hover:border-[#0e2e1f] transition-colors">View Details</button>
                  <a href={`https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}.`} target="_blank" className="flex-1 bg-[#1a5c2a] text-white rounded-full py-2.5 text-xs font-semibold text-center hover:bg-[#14532d]">Enquire Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-stone-100 rounded-[24px] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div><h3 className="font-display text-xl font-bold text-[#0e2e1f]">Looking for a specific agricultural product?</h3><p className="text-sm text-[#6b7c6b] mt-1">Tell us what you need — we’ll help you find the right solution.</p></div>
          <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20am%20looking%20for%20a%20specific%20agricultural%20product." target="_blank" className="bg-[#0e2e1f] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black">Send an Enquiry →</a>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="h-56 bg-[#f8f5ee] flex flex-col items-center justify-center border-b border-stone-100">
              <div className="w-full max-w-[260px] h-32 rounded-2xl border-2 border-dashed border-[#c9a86a]/40 bg-white flex flex-col items-center justify-center gap-2">
                <span className="text-xs font-bold tracking-widest uppercase text-[#5a6b5a]">Your Product Image Here</span>
                <span className="text-[10px] text-[#9a9a9a]">Replace with actual product photo</span>
              </div>
            </div>
            <div className="p-7">
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a]">Product {selected.id}</div>
              <h3 className="font-display text-2xl font-bold text-[#0e2e1f] mt-1">{selected.name}</h3>
              <p className="text-sm text-[#5a6b5a] leading-relaxed mt-3">{selected.desc}</p>
              <div className="bg-[#f8f5ee] rounded-2xl p-4 mt-5 text-xs text-[#6b7c6b] leading-relaxed">Editable fields: product name, short description, key information, specifications, price, images and enquiry link.</div>
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
