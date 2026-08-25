import Link from "next/link";
export const metadata = { title: "Plantation Services — Green Spaces That Grow for Generations" };

export default function Plantation() {
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[400px] sm:h-[480px] lg:h-[560px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" alt="Plantation hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/55" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Plantation Services</span></div>
          <h1 className="font-display text-[38px] lg:text-[62px] font-bold leading-none text-white">Creating Green Spaces<br /><span className="italic font-normal text-[#a8e0a8]">That Grow for Generations</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm leading-relaxed">Tree plantation, green belt development and long-term plantation care — blending environmental responsibility with practical expertise.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Plantation</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { t: "Tree Plantation", d: "Large-scale tree plantation for farms, estates and green spaces.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
            { t: "Plantation Planning", d: "Strategic planning around species, spacing, soil and climate.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" },
            { t: "Farm Plantation Development", d: "Integrating plantation within agricultural and farm landscapes.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80" },
            { t: "Green Belt Development", d: "Creating protective and aesthetic green belts around properties.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80" },
            { t: "Tree Care & Maintenance", d: "Nurturing young plantations through structured care programs.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
            { t: "Plantation Management", d: "Ongoing management to ensure healthy, long-term growth.", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80" },
            { t: "Customized Plantation Projects", d: "Bespoke projects adapted to your vision, land and goals.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80", span: "lg:col-span-3" },
          ].map((c) => (
            <div key={c.t} className={`bg-white rounded-[24px] overflow-hidden border border-stone-100 card-hover ${c.span || ""}`}>
              <div className="h-48 overflow-hidden"><img src={c.img} alt={c.t} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
              <div className="p-6"><h3 className="font-semibold text-[#0e2e1f]">{c.t}</h3><p className="text-sm text-[#6b7c6b] mt-2 leading-relaxed">{c.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0e2e1f] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="font-display text-3xl font-bold text-white">Plan → Prepare → Plant → <span className="italic font-normal text-[#a8e0a8]">Nurture → Grow</span></h2><p className="text-white/60 text-sm mt-3">A proven process that ensures your plantation thrives.</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n: "01", t: "Plan", d: "Assess land & design plantation" },
              { n: "02", t: "Prepare", d: "Ready soil & resources" },
              { n: "03", t: "Plant", d: "Execute plantation" },
              { n: "04", t: "Nurture", d: "Care & monitoring" },
              { n: "05", t: "Grow", d: "Long-term flourishing" },
            ].map((s) => (
              <div key={s.n} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-xs font-bold tracking-widest text-[#a8e0a8]">{s.n}</div><div className="font-bold text-white mt-1">{s.t}</div><div className="text-xs text-white/60 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10"><a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20want%20to%20start%20a%20plantation%20project." target="_blank" className="inline-flex bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1fb255]">Start Your Plantation Project →</a></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <div className="rounded-[28px] overflow-hidden grid lg:grid-cols-2 bg-white border border-stone-100">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" alt="Saplings" className="w-full h-[380px] object-cover" />
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-[#0e2e1f]">Every Sapling Matters</h3><p className="text-sm text-[#5a6b5a] leading-relaxed mt-3">From selection to aftercare, we treat every plantation as a long-term investment in green infrastructure. Our customized approach ensures your green spaces grow healthy and resilient.</p>
            <div className="flex gap-3 mt-6"><a href="tel:+919593069126" className="bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-semibold text-sm">Call Now</a><Link href="/contact" className="border border-stone-200 px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0e2e1f] hover:text-white">Enquire Now</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
