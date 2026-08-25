"use client";
import { useState } from "react";
import Link from "next/link";

const images = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", cat: "Fields", label: "Lush Agricultural Field" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", cat: "Plantation", label: "Tree Plantation" },
  { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80", cat: "Farming", label: "Modern Farming" },
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", cat: "Agriculture", label: "Crop Cultivation" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", cat: "Nature", label: "Sunrise Farm Landscape" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", cat: "Trees", label: "Tropical Trees" },
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", cat: "Projects", label: "Farm Development" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", cat: "Fields", label: "Green Farm Panorama" },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", cat: "Trees", label: "Plantation Field" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", cat: "Nature", label: "Forest Plantation" },
  { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80", cat: "Projects", label: "Agricultural Operations" },
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", cat: "Farming", label: "Field Preparation" },
];

const cats = ["All", "Farming", "Plantation", "Trees", "Fields", "Projects", "Agriculture", "Nature"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "All" ? images : images.filter((i) => i.cat === filter);
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Gallery hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Gallery / Projects</span></div>
          <h1 className="font-display text-[40px] lg:text-[60px] font-bold leading-none text-white">Our Agricultural<br /><span className="italic font-normal text-[#a8e0a8]">World</span></h1>
          <p className="text-white/80 max-w-xl mt-4 text-sm leading-relaxed">A curated collection of fields, plantations and agricultural landscapes.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Gallery</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${filter === c ? "bg-[#0e2e1f] text-white border-[#0e2e1f]" : "bg-white border-stone-200 text-[#5a6b5a] hover:border-[#0e2e1f] hover:text-[#0e2e1f]"}`}>{c}</button>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-8">
        <div className="columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={i} onClick={() => setLightbox(img.src)} className="break-inside-avoid rounded-[20px] overflow-hidden group cursor-pointer relative">
              <img src={img.src} alt={img.label} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-white font-medium text-sm">{img.label}</div>
                <div className="text-white/70 text-xs">{img.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="relative rounded-[28px] overflow-hidden h-[340px] flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80" alt="Every field" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0e2e1f]/60" />
          <div className="relative text-center px-6">
            <h3 className="font-display text-3xl font-bold text-white">Every Field Has a <span className="italic font-normal text-[#a8e0a8]">Story.</span></h3>
            <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">Editable project placeholders — replace with your own project names and details whenever ready.</p>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Lightbox" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" />
          <button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold">×</button>
        </div>
      )}
    </div>
  );
}
