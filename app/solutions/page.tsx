import Link from "next/link";
export const metadata = { title: "Farming Solutions — Practical Solutions for Modern Agriculture" };

const blocks = [
  { t: "Farm Planning", d: "Structured planning that aligns your land’s strengths with your agricultural goals. We help map out a clear, achievable path from vision to cultivation.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { t: "Agricultural Development", d: "End-to-end development support — preparing land, organizing spaces and establishing foundations for productive farming.", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" },
  { t: "Plantation Solutions", d: "Custom plantation strategies integrating species selection, spacing and long-term care for thriving green cover.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" },
  { t: "Irrigation & Water Management", d: "Water-conscious planning to ensure crops receive what they need while conserving this vital resource.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { t: "Farm Maintenance", d: "Ongoing maintenance that keeps farms healthy, orderly and productive — season after season.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80" },
  { t: "Sustainable Farming Practices", d: "Environmentally responsible methods that protect soil health and support long-term productivity.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" },
  { t: "Customized Projects", d: "Every project is tailored — scale, crop, climate and vision all shape the solution we create together.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80" },
];

export default function Solutions() {
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[400px] sm:h-[460px] lg:h-[520px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80" alt="Solutions hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Farming Solutions</span></div>
          <h1 className="font-display text-[38px] lg:text-[62px] font-bold leading-none text-white">Practical Solutions<br /><span className="italic font-normal text-[#a8e0a8]">for Modern Agriculture</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm leading-relaxed">Comprehensive agricultural solutions designed around your land, climate and vision.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Solutions</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 lg:py-16 space-y-8">
        {blocks.map((b, i) => (
          <div key={b.t} className={`grid lg:grid-cols-2 gap-8 items-center bg-white rounded-[28px] overflow-hidden border border-stone-100 p-3 lg:p-3 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-[20px] overflow-hidden h-[320px]"><img src={b.img} alt={b.t} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div className="px-4 lg:px-8 py-4">
              <div className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a]">0{i + 1} — Solution</div>
              <h3 className="font-display text-2xl font-bold text-[#0e2e1f] mt-2">{b.t}</h3>
              <p className="text-sm text-[#5a6b5a] leading-relaxed mt-3">{b.d}</p>
              <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20discuss%20a%20farming%20solution." target="_blank" className="inline-flex mt-6 border border-[#0e2e1f] text-[#0e2e1f] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0e2e1f] hover:text-white transition-colors">Discuss This Solution →</a>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0e2e1f] mx-6 lg:mx-8 rounded-[28px] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
        <div><h3 className="text-white font-display text-2xl font-bold">Need a Custom Agricultural Plan?</h3><p className="text-white/60 text-sm mt-2">Let’s discuss your requirements and create a tailored solution.</p></div>
        <Link href="/contact" className="bg-white text-[#0e2e1f] px-8 py-3.5 rounded-full font-bold">Get Consultation →</Link>
      </section>
    </div>
  );
}
