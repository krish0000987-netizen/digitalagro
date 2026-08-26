import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f12] text-white relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#1a5c2a] flex items-center justify-center font-bold">DA</div>
              <div>
                <div className="font-bold leading-none">Digital Agro</div>
                <div className="text-xs tracking-[0.18em] uppercase text-white/60">Farming Services</div>
              </div>
            </div>
            <p className="text-white/65 leading-relaxed text-sm max-w-sm">
              Professional agro farming and plantation solutions designed to help cultivate healthy, productive and sustainable agricultural environments. Growing better, farming smarter.
            </p>
            <div className="flex gap-3 mt-6">
              {["F", "In", "Ig", "Yt"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1a5c2a] flex items-center justify-center text-xs font-semibold transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/65">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Plantation", "/plantation"],
                ["Products", "/products"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["QR Codes", "/qr"],
              ].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white hover:pl-1 transition-all">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/services" className="hover:text-white">Agro Farming</Link></li>
              <li><Link href="/plantation" className="hover:text-white">Plantation</Link></li>
              <li><Link href="/services" className="hover:text-white">Farm Development</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainable Agriculture</Link></li>
              <li><Link href="/solutions" className="hover:text-white">Farming Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 tracking-wide text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</div>
                <a href="tel:+919593069126" className="text-lg font-semibold text-white hover:text-[#7bc47f]">+91 95930 69126</a>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Business Enquiry</div>
                <p className="text-white/70">Available for consultation and project discussions</p>
              </div>
              <div className="flex gap-2 pt-2">
                <a href="tel:+919593069126" className="flex-1 bg-white text-[#0a1f12] rounded-full py-3 text-center font-semibold text-sm hover:bg-[#f4f1ea]">Call Now</a>
                <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="flex-1 bg-[#25D366] text-white rounded-full py-3 text-center font-semibold text-sm">WhatsApp</a>
              </div>
              {/* QR Codes - Scannable (Enlarged for Footer) */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <a href="https://github.com/krish0000987-netizen/digitalagro" target="_blank" className="bg-white rounded-2xl p-3 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform">
                  <img src="/qr/qr-website.png" alt="Scan to visit website" className="w-28 h-28 sm:w-32 sm:h-32 object-contain" loading="lazy" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#0e2e1f] text-center leading-tight">Scan to Visit<br />Website</span>
                </a>
                <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services" target="_blank" className="bg-white rounded-2xl p-3 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform">
                  <img src="/qr/qr-whatsapp.png" alt="Scan to WhatsApp" className="w-28 h-28 sm:w-32 sm:h-32 object-contain" loading="lazy" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#0e2e1f] text-center leading-tight">Scan to<br />WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-white/40 text-center">📱 Scan with any camera — opens instantly</p>
            </div>
          </div>
        </div>

        {/* Prominent Scannable QR Banner — Footer */}
        <div className="mt-8 bg-white rounded-[24px] p-5 sm:p-6 flex flex-col lg:flex-row items-center gap-6 shadow-lg">
          <div className="flex gap-3 sm:gap-4 shrink-0">
            <div className="bg-[#f8f5ee] rounded-2xl p-2 sm:p-3 border border-stone-100">
              <img src="/qr/qr-website.png" alt="Footer QR Website - Scan to visit" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" loading="lazy" />
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#0e2e1f] text-center mt-2">Website</p>
            </div>
            <div className="bg-[#e8f5e9] rounded-2xl p-2 sm:p-3 border border-[#c8e6c9]">
              <img src="/qr/qr-whatsapp.png" alt="Footer QR WhatsApp - Scan to chat" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" loading="lazy" />
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#0e2e1f] text-center mt-2">WhatsApp</p>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-3 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#0e2e1f]">Scannable QR — Footer</span>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#0e2e1f] leading-tight">Scan to Visit Instantly — No Typing Needed</h4>
            <p className="text-sm text-[#5a6b5a] leading-relaxed mt-2">Point your phone camera at the QR codes — <b className="text-[#0e2e1f]">Website</b> opens our site, <b className="text-[#0e2e1f]">WhatsApp</b> starts chat with <b>+91 95930 69126</b>. Save, print, or share at your shop, farm board or visiting card.</p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              <a href="/qr" className="inline-flex items-center gap-2 bg-[#0e2e1f] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-black">View All QRs →</a>
              <a href="/qr/qr-website.png" download="Digital-Agro-Footer-QR-Website.png" className="inline-flex items-center gap-2 border border-stone-200 px-5 py-2.5 rounded-full font-bold text-xs text-[#0e2e1f] hover:bg-[#f8f5ee]">⬇ Download Website QR</a>
              <a href="https://wa.me/919593069126" target="_blank" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-xs">WhatsApp Now</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/50">
          <p>© 2026 Digital Agro Farming Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7bc47f] rounded-full animate-pulse" /> Growing Better. Farming Smarter.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
