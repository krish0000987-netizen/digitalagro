import Link from "next/link";
export const metadata = { title: "Agro Farming Services — Complete Agricultural Solutions" };

const services = [
  { title: "Farm Development", desc: "We assist in planning and developing agricultural spaces tailored to your land’s potential. From land assessment to layout planning, we help transform open ground into organized, productive farmland ready for cultivation.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", points: ["Site evaluation & land assessment", "Farm layout & spatial planning", "Development roadmap"] },
  { title: "Crop Cultivation Support", desc: "Professional support for cultivation planning and farming activities. We help you align crop choices with soil conditions, climate and water availability for healthier growth and better productivity.", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", points: ["Cultivation planning", "Seasonal guidance", "Growth monitoring support"] },
  { title: "Soil & Land Preparation", desc: "Healthy soil is the foundation of successful farming. Our land preparation support focuses on optimizing soil conditions for strong root development and sustainable fertility.", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80", points: ["Soil assessment support", "Land preparation guidance", "Fertility optimization"] },
  { title: "Irrigation Support", desc: "Water is precious. We present irrigation-related solutions with a focus on efficient use, helping you plan water management that supports crops while conserving resources.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", points: ["Water management planning", "Efficient irrigation guidance", "Resource-conscious approach"] },
  { title: "Farm Maintenance", desc: "Farming doesn’t end at planting. Our ongoing care and maintenance solutions help keep your farm healthy, organized and productive throughout the year.", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", points: ["Regular maintenance support", "Plant health care", "Operational upkeep"] },
  { title: "Customized Farming Solutions", desc: "Every farm is unique. We adapt solutions according to your project requirements — whether it’s scale, crop type, soil condition or long-term vision — creating a plan that fits you.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", points: ["Bespoke project planning", "Scale & crop adaptability", "Long-term partnership"] },
];

export default function Services() {
  return (
    <div className="bg-[#fdfcf8]">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" alt="Services hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/60" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 w-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5"><span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full" /><span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Agro Farming Services</span></div>
          <h1 className="font-display text-[38px] lg:text-[62px] font-bold leading-none text-white">Complete Agro<br /><span className="italic font-normal text-[#a8e0a8]">Farming Solutions</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm leading-relaxed">From soil to harvest — professional support for every stage of your farming journey.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Services</span></div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12">
        <div className="bg-[#e8f5e9] rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#c8e6c9]">
          <p className="text-sm text-[#0e2e1f] font-medium">Have a farming requirement? Let’s discuss a plan tailored to your land.</p>
          <a href="tel:+919593069126" className="bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap">Discuss Your Farming Requirement →</a>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-16 space-y-10">
        {services.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-0 bg-white rounded-[28px] overflow-hidden border border-stone-100 shadow-sm card-hover ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="h-[340px] lg:h-auto overflow-hidden relative">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase text-[#0e2e1f] shadow-md">0{i + 1}</div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-[#0e2e1f]">{s.title}</h3>
              <p className="text-sm text-[#5a6b5a] leading-relaxed mt-3">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-[#0e2e1f]"><span className="w-6 h-6 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#1a5c2a] text-xs">✓</span>{p}</li>
                ))}
              </ul>
              <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20discuss%20my%20farming%20requirement%20regarding%20{service}." target="_blank" className="inline-flex self-start mt-6 bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-black transition-colors">Discuss Your Farming Requirement →</a>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-6 lg:mx-8 mb-8">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#0e2e1f] to-[#1a5c2a] rounded-[28px] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div><h3 className="font-display text-2xl font-bold text-white">Let’s Plan Your Farm Together</h3><p className="text-white/60 text-sm mt-2">Contact us for a consultation tailored to your land and goals.</p></div>
          <div className="flex gap-3"><a href="tel:+919593069126" className="bg-white text-[#0e2e1f] px-7 py-3.5 rounded-full font-semibold text-sm">Call +91 95930 69126</a><Link href="/contact" className="bg-[#25D366] text-white px-7 py-3.5 rounded-full font-semibold text-sm">WhatsApp Us</Link></div>
        </div>
      </section>
    </div>
  );
}
