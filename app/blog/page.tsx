import Link from "next/link";
export const metadata = { title: "Agriculture Insights & Farming Knowledge — Blog" };

const posts = [
  { title: "Modern Approaches to Better Farming", cat: "Farming Tips", date: "Aug 15, 2026", desc: "Exploring contemporary techniques that blend traditional wisdom with modern agricultural insights for healthier yields.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80" },
  { title: "Why Plantation Planning Matters", cat: "Plantation", date: "Aug 10, 2026", desc: "Thoughtful plantation planning ensures species, spacing and soil work together for long-term green success.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" },
  { title: "Building More Sustainable Agricultural Systems", cat: "Sustainable Farming", date: "Aug 05, 2026", desc: "How sustainable practices protect resources while maintaining productivity for future generations.", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80" },
  { title: "Soil Health: The Foundation of Great Farming", cat: "Agriculture", date: "Jul 28, 2026", desc: "Understanding soil composition and care as the cornerstone of every successful farm.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80" },
  { title: "Tree Plantation for Green Belt Development", cat: "Tree Plantation", date: "Jul 20, 2026", desc: "Green belts offer environmental, aesthetic and protective benefits — here’s how to plan them right.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
  { title: "Effective Farm Management Throughout the Year", cat: "Farm Management", date: "Jul 12, 2026", desc: "Seasonal maintenance and operational planning to keep your farm productive year-round.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
  { title: "Emerging Agricultural Trends to Watch", cat: "Agricultural Trends", date: "Jul 02, 2026", desc: "From sustainable inputs to plantation innovation — trends shaping the future of farming.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80" },
  { title: "Water Management for Resilient Farming", cat: "Sustainable Farming", date: "Jun 25, 2026", desc: "Smart water management strategies that support crops while conserving precious resources.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
];

export default function Blog() {
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[360px] sm:h-[420px] lg:h-[480px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80" alt="Blog hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Blog / Insights</span></div>
          <h1 className="font-display text-[38px] lg:text-[58px] font-bold leading-none text-white">Agriculture Insights<br /><span className="italic font-normal text-[#a8e0a8]">& Farming Knowledge</span></h1>
          <p className="text-white/80 max-w-xl mt-4 text-sm leading-relaxed">Knowledge, tips and ideas for modern agriculture — editable articles the owner can update anytime.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Blog</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2">
          {["All", "Farming Tips", "Plantation", "Agriculture", "Sustainable Farming", "Tree Plantation", "Farm Management", "Agricultural Trends"].map((c) => (
            <span key={c} className={`px-4 py-2 rounded-full text-xs font-semibold border ${c === "All" ? "bg-[#0e2e1f] text-white border-[#0e2e1f]" : "bg-white border-stone-200 text-[#5a6b5a]"}`}>{c}</span>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-[24px] overflow-hidden border border-stone-100 card-hover group">
              <div className="h-48 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#0e2e1f] shadow-md">{p.cat}</div>
              </div>
              <div className="p-6">
                <div className="text-xs text-[#9a9a9a]">{p.date} • Digital Agro Farming Services</div>
                <h3 className="font-semibold text-[#0e2e1f] leading-tight mt-2 group-hover:text-[#1a5c2a] transition-colors">{p.title}</h3>
                <p className="text-xs text-[#6b7c6b] leading-relaxed mt-2 line-clamp-3">{p.desc}</p>
                <button className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#1a5c2a] mt-4">Read More →</button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center text-sm text-amber-800">All articles above are editable placeholders — the owner can replace titles, categories, images and content easily.</div>
      </section>
    </div>
  );
}
