import Link from "next/link";

export const metadata = { title: "About Us — Growing With Nature. Growing With Purpose." };

export default function About() {
  return (
    <div className="bg-[#fdfcf8]">
      {/* Hero */}
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="About hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/70 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" />
            <span className="text-white/90 text-xs tracking-widest uppercase font-semibold">About Us</span>
          </div>
          <h1 className="font-display text-[40px] lg:text-[64px] font-bold leading-none text-white">Growing With Nature.<br /><span className="italic font-normal text-[#a8e0a8]">Growing With Purpose.</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm lg:text-base leading-relaxed">Professional agricultural solutions focused on quality, sustainability and long-term growth.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">About Us</span></div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-5"><span className="text-xs font-semibold tracking-widest uppercase text-[#14532d]">Our Story</span></div>
            <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">Rooted in Agriculture,<br /><span className="italic font-normal text-[#1a5c2a]">Committed to Growth</span></h2>
            <div className="space-y-4 mt-6 text-[#5a6b5a] leading-relaxed text-[15px]">
              <p>Digital Agro Farming Services was founded with a clear purpose — to deliver practical, responsible and quality-focused agricultural solutions while contributing to a greener and more sustainable future.</p>
              <p>We work closely with landowners, farmers and organizations to develop productive agricultural spaces and thriving plantations. Every project is approached with attention to soil, climate, water and long-term productivity — ensuring results that are both practical and sustainable.</p>
              <p>Our focus spans agro farming, plantation development, farm planning, tree plantation and green belt creation. We believe agriculture is not just about cultivation, but about building landscapes that support livelihoods and nurture the environment.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#f8f5ee] rounded-2xl p-5 border border-stone-100"><div className="text-2xl mb-2">🌱</div><div className="font-semibold text-sm">Practical Solutions</div><div className="text-xs text-[#6b7c6b] mt-1">Ground-tested approaches tailored to your land.</div></div>
              <div className="bg-[#0e2e1f] rounded-2xl p-5 text-white"><div className="text-2xl mb-2">🌍</div><div className="font-semibold text-sm">Sustainable Vision</div><div className="text-xs text-white/60 mt-1">Farming that protects resources for tomorrow.</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" alt="Our story" className="w-full h-[560px] object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:w-[320px] bg-white rounded-3xl p-6 shadow-xl border border-stone-100">
              <div className="flex items-center gap-2 mb-3"><span className="w-2 h-2 bg-[#1a5c2a] rounded-full" /><span className="text-xs font-bold tracking-widest uppercase text-[#5a6b5a]">Our Approach</span></div>
              <p className="text-sm text-[#0e2e1f] font-medium leading-relaxed">We listen, assess, plan and nurture — ensuring every field has the best chance to thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-[#f8f5ee] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[28px] p-8 lg:p-10 border border-stone-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] flex items-center justify-center text-xl mb-6">🎯</div>
            <h3 className="font-display text-2xl font-bold text-[#0e2e1f]">Our Mission</h3>
            <p className="text-[#1a5c2a] font-medium italic mt-3 leading-relaxed">“To deliver practical, responsible and quality-focused agricultural solutions while contributing to a greener and more sustainable future.”</p>
            <p className="text-sm text-[#6b7c6b] leading-relaxed mt-4">We strive to make sustainable agriculture accessible and effective — helping you cultivate productivity without compromising environmental responsibility.</p>
          </div>
          <div className="bg-[#0e2e1f] rounded-[28px] p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a5c2a]/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl mb-6">🌟</div>
              <h3 className="font-display text-2xl font-bold">Our Vision</h3>
              <p className="text-[#a8e0a8] font-medium italic mt-3 leading-relaxed">“To become a trusted name in modern agro farming and plantation solutions.”</p>
              <p className="text-sm text-white/60 leading-relaxed mt-4">A future where every farm and plantation we touch stands as a model of healthy growth and environmental harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-4"><span className="text-xs font-semibold tracking-widest uppercase text-[#14532d]">Core Values</span></div>
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold leading-none text-[#0e2e1f]">Principles That <span className="italic font-normal text-[#1a5c2a]">Guide Us</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Quality", d: "Uncompromising attention to every detail, from soil preparation to plantation care.", i: "◆" },
            { t: "Sustainability", d: "Practices that conserve resources and ensure long-term productivity.", i: "♻️" },
            { t: "Integrity", d: "Honest advice, transparent planning and ethical agricultural practices.", i: "⬢" },
            { t: "Reliability", d: "Dependable execution and ongoing support you can count on.", i: "◈" },
            { t: "Innovation", d: "Blending traditional wisdom with modern agricultural insights.", i: "✦" },
            { t: "Customer Satisfaction", d: "Solutions centered on your goals, land and vision for growth.", i: "♥" },
          ].map((v) => (
            <div key={v.t} className="bg-white border border-stone-100 rounded-[24px] p-7 card-hover group">
              <div className="w-11 h-11 rounded-2xl bg-[#f8f5ee] group-hover:bg-[#0e2e1f] group-hover:text-white flex items-center justify-center transition-colors">{v.i}</div>
              <h3 className="font-semibold text-[#0e2e1f] mt-5">{v.t}</h3>
              <p className="text-sm text-[#6b7c6b] leading-relaxed mt-2">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16">
        <div className="relative rounded-[32px] overflow-hidden h-[420px] lg:h-[520px]">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80" alt="Farm panorama" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/80 via-[#0a1f12]/30 to-transparent" />
          <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center max-w-2xl">
            <h3 className="font-display text-2xl lg:text-4xl font-bold text-white leading-tight">Every Field Has a Story.<br /><span className="italic font-normal text-[#a8e0a8]">Let’s Write Yours.</span></h3>
            <p className="text-white/80 text-sm mt-4 max-w-md">We don’t make inflated claims. We let the quality of our work and the health of your farm speak for itself.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 text-white text-xs font-semibold">✓ Quality-Driven</span>
              <span className="bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 text-white text-xs font-semibold">✓ Sustainability First</span>
              <span className="bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 text-white text-xs font-semibold">✓ Customer Focused</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 lg:mx-8 mb-8">
        <div className="max-w-[1440px] mx-auto bg-[#0e2e1f] rounded-[24px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-medium">Want to discuss your agricultural requirements?</p>
          <div className="flex gap-3">
            <a href="tel:+919593069126" className="bg-white text-[#0e2e1f] px-6 py-3 rounded-full font-semibold text-sm">Call Now</a>
            <Link href="/contact" className="bg-[#1a5c2a] text-white px-6 py-3 rounded-full font-semibold text-sm">Contact Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
