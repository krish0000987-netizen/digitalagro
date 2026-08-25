"use client";
import { useState } from "react";

const farmers = [
  { src: "/digitalagro/farmer-1.jpg", name: "Safikul Kabiraj", crop: "Ridge Gourd (Jhinga)", note: "প্রযুক্তির কৃষির শক্তি — সঠিক ব্যবস্থাপনাই সাফল্যের চাবিকাঠি", tag: "Happy Farmer" },
  { src: "/digitalagro/farmer-2.jpg", name: "Active Farmer", crop: "Ridge Gourd Farm", note: "Smart Farming. Healthy Future.", tag: "AgroVera User" },
  { src: "/digitalagro/farmer-3.jpg", name: "Progressive Farmer", crop: "Green Vegetables", note: "Digital Agro Farming Service — Real Results in the Field", tag: "Verified User" },
  { src: "/digitalagro/farmer-4.jpg", name: "Sapan Sarkar", crop: "Chilli & Ginger", note: "লঙ্কা ও আদারাক — সার কম, খরচ কম, দ্বিগুণ ফলন", tag: "Helpfull Liquid" },
  { src: "/digitalagro/farmer-5.jpg", name: "Paddy Farmer", crop: "Paddy Field", note: "BioVera Plus — Outstanding Power for Paddy", tag: "BioVera Plus" },
  { src: "/digitalagro/farmer-6.jpg", name: "Independence Day Farmer", crop: "80th Independence Day", note: "80 Years of Freedom — Trusted by Thousands of Farmers", tag: "Active Max • 80 Gold" },
  { src: "/digitalagro/farmer-7.jpg", name: "Brinjal Farmer", crop: "Brinjal Farm", note: "উন্নত কৃষি, সমৃদ্ধ ভবিষ্যৎ — পরামর্শ • পন্য • প্রযুক্তি • সাফল্য", tag: "Soil Test & Advisory" },
];

export default function HappyFarmers() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="bg-[#f8f5ee] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#0e2e1f]">Happy Farmer — Better Farming, Better Future</span>
            </div>
            <h2 className="font-display text-[32px] lg:text-[46px] font-bold leading-none text-[#0e2e1f]">
              Trusted by <span className="italic font-normal text-[#1a5c2a]">Thousands</span> of Farmers
            </h2>
            <p className="text-[#6b7c6b] text-sm mt-3 max-w-xl leading-relaxed">
              Real farmers, real fields, real results. Our products — <b>Active Max, 80 Gold, SmartKavach, ActiveZime, BioVera Plus</b> — are helping farmers achieve <b>Stronger Growth • Higher Yield • Disease Protection</b> with less fertilizer, less cost, less effort.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#0e2e1f] text-white px-4 py-2 rounded-full text-xs font-bold">✓ Quality Products</span>
            <span className="bg-white border border-stone-200 px-4 py-2 rounded-full text-xs font-bold text-[#0e2e1f]">✓ Better Yield</span>
            <span className="bg-white border border-stone-200 px-4 py-2 rounded-full text-xs font-bold text-[#0e2e1f]">✓ Healthy Soil</span>
          </div>
        </div>

        {/* Premium masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {farmers.map((f) => (
            <div key={f.src} onClick={() => setActive(f.src)} className="group bg-white rounded-[28px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
              <div className="relative h-[420px] overflow-hidden bg-[#e8f5e9]">
                <img src={f.src} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-[#0e2e1f] shadow-md">
                  {f.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-[11px] tracking-widest uppercase font-bold opacity-80">{f.crop}</div>
                  <div className="font-bold text-lg leading-tight">{f.name}</div>
                  <div className="text-xs text-white/80 leading-relaxed mt-1 line-clamp-2">{f.note}</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0e2e1f]">View Story</span>
                <span className="w-8 h-8 rounded-full bg-[#f4f1ea] group-hover:bg-[#0e2e1f] group-hover:text-white flex items-center justify-center text-sm transition-colors">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight bar like poster */}
        <div className="mt-8 bg-[#0e2e1f] rounded-[20px] p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
          <div className="flex flex-wrap gap-2">
            <span className="bg-white text-[#0e2e1f] px-3 py-1.5 rounded-full text-xs font-bold">ACTIVE MAX</span>
            <span className="bg-[#c9a86a] text-[#0e2e1f] px-3 py-1.5 rounded-full text-xs font-bold">80 GOLD</span>
            <span className="bg-[#1a5c2a] border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold">SmartKavach</span>
            <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold">ACTIVEZIME</span>
            <span className="bg-[#25D366] px-3 py-1.5 rounded-full text-xs font-bold">BioVera Plus</span>
          </div>
          <div className="text-sm font-medium text-white/80 text-center">
            <span className="text-white font-bold">স্মার্ট কৃষক, স্মার্ট দেশ</span> • Smart Farmer, Smart Nation • <span className="italic">যে বুঝবে সে খুঁজবে, আর যে খুঁজবে সে ফলন পাবে!</span>
          </div>
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActive(null)}>
          <img src={active} alt="Farmer" className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl object-contain" />
          <button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold shadow-lg">×</button>
        </div>
      )}
    </section>
  );
}
