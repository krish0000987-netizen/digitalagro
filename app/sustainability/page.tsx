import Link from "next/link";
export const metadata = { title: "Sustainable Agriculture — Growing Today. Protecting Tomorrow." };

export default function Sustainability() {
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[560px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80" alt="Sustainability hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/70 via-[#0a1f12]/40 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full animate-pulse" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Sustainable Agriculture</span></div>
          <h1 className="font-display text-[40px] lg:text-[64px] font-bold leading-none text-white">Growing Today.<br /><span className="italic font-normal text-[#a8e0a8]">Protecting Tomorrow.</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm leading-relaxed">Responsible farming that balances productivity with environmental care — for farms that thrive today and endure for generations.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Sustainability</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-[28px] border border-stone-100 overflow-hidden">
          <div className="p-8 lg:p-10">
            <h2 className="font-display text-3xl font-bold text-[#0e2e1f]">Why Sustainable<br /><span className="italic font-normal text-[#1a5c2a]">Agriculture Matters</span></h2>
            <div className="space-y-3 mt-5 text-sm text-[#5a6b5a] leading-relaxed">
              <p>Sustainable agriculture is not just an ideal — it’s practical farming that ensures long-term productivity while protecting the resources that make farming possible.</p>
              <p>From soil health to water conservation and plantation development, every decision shapes the future fertility of your land.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-[#f8f5ee] rounded-2xl p-4"><div className="font-semibold text-sm text-[#0e2e1f]">Long-term Yield</div><div className="text-xs text-[#6b7c6b] mt-1">Productivity that endures</div></div>
              <div className="bg-[#e8f5e9] rounded-2xl p-4"><div className="font-semibold text-sm text-[#0e2e1f]">Resource Care</div><div className="text-xs text-[#6b7c6b] mt-1">Soil & water protection</div></div>
            </div>
          </div>
          <div className="h-[380px] lg:h-[460px]"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" alt="Sustainable farm" className="w-full h-full object-cover" /></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "Responsible Farming", d: "Practices that prioritize soil health, biodiversity and ecological balance.", i: "🌱" },
            { t: "Efficient Resource Use", d: "Maximizing productivity while minimizing waste of water, nutrients and energy.", i: "💧" },
            { t: "Soil Care", d: "Maintaining fertility and structure for resilient, healthy crops.", i: "🌍" },
            { t: "Water-Conscious Farming", d: "Irrigation and water management that respects scarcity and sustainability.", i: "💦" },
            { t: "Plantation Development", d: "Growing green cover that sequesters carbon and supports ecosystems.", i: "🌳" },
            { t: "Green Spaces", d: "Creating landscapes that benefit communities and the environment.", i: "🏞️" },
            { t: "Long-term Productivity", d: "Farming today without compromising the harvests of tomorrow.", i: "🌾" },
            { t: "Environmental Responsibility", d: "A commitment to leave the land healthier than we found it.", i: "♻️" },
          ].map((c) => (
            <div key={c.t} className="bg-white border border-stone-100 rounded-[24px] p-6 card-hover">
              <div className="text-2xl mb-3">{c.i}</div><h3 className="font-semibold text-[#0e2e1f] text-sm">{c.t}</h3><p className="text-xs text-[#6b7c6b] leading-relaxed mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="bg-[#0e2e1f] rounded-[28px] p-8 lg:p-10">
          <div className="text-center mb-8"><h3 className="font-display text-2xl lg:text-3xl font-bold text-white">Agriculture + Nature + Technology + <span className="italic font-normal text-[#a8e0a8]">Sustainability</span></h3><p className="text-white/60 text-sm mt-2">Four pillars interconnected for resilient agricultural futures.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Agriculture", d: "Productive, organized farming systems.", c: "bg-[#1a5c2a]" },
              { t: "Nature", d: "Working with natural cycles and ecosystems.", c: "bg-[#2e7d32]" },
              { t: "Technology", d: "Modern insights applied practically.", c: "bg-[#c9a86a]" },
              { t: "Sustainability", d: "Ensuring continuity for generations.", c: "bg-white text-[#0e2e1f]" },
            ].map((card) => (
              <div key={card.t} className={`${card.c} ${card.t === "Sustainability" ? "text-[#0e2e1f]" : "text-white"} rounded-[20px] p-6 text-center`}>
                <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center font-bold ${card.t === "Sustainability" ? "bg-[#0e2e1f] text-white" : "bg-white/15"}`}>{card.t[0]}</div>
                <h4 className="font-bold mt-4">{card.t}</h4><p className={`text-xs mt-2 leading-relaxed ${card.t === "Sustainability" ? "text-[#5a6b5a]" : "text-white/70"}`}>{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[420px] rounded-[28px] overflow-hidden mx-6 lg:mx-8 mb-8">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Green future" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0e2e1f]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">A Greener Future <span className="italic font-normal text-[#a8e0a8]">Starts Today</span></h3>
          <p className="text-white/80 text-sm mt-3 max-w-xl">Let’s cultivate sustainability together. Your land, our expertise, nature’s balance.</p>
          <Link href="/contact" className="mt-6 bg-white text-[#0e2e1f] px-8 py-3.5 rounded-full font-bold">Talk About Sustainable Farming →</Link>
        </div>
      </section>
    </div>
  );
}
