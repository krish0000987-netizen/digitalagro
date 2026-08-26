"use client";
import Link from "next/link";

export default function QRPage() {
  return (
    <div className="bg-[#fdfcf8]">
      {/* Hero */}
      <section className="relative h-[400px] sm:h-[460px] lg:h-[520px] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format&fit=crop" alt="QR hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1f12]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12]/70 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 bg-[#7bc47f] rounded-full animate-pulse" />
            <span className="text-white/90 text-xs tracking-widest uppercase font-semibold">Scannable QR Codes</span>
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[64px] font-bold leading-none text-white">Scan &amp; <span className="italic font-normal text-[#a8e0a8]">Connect Instantly</span></h1>
          <p className="text-white/80 max-w-xl mt-5 text-sm sm:text-base leading-relaxed">Point your phone camera at any QR code — no app needed. Open our website or start a WhatsApp chat with Digital Agro Farming Services in one tap.</p>
          <div className="flex gap-2 mt-3 text-white/60 text-xs"><Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">QR Codes</span></div>
        </div>
      </section>

      {/* Main QR Cards */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e8f5e9] rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#1a5c2a] rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#14532d]">Official QR Codes</span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[36px] font-bold leading-none text-[#0e2e1f]">Two QRs — <span className="italic font-normal text-[#1a5c2a]">Website + WhatsApp</span></h2>
          <p className="text-[#6b7c6b] text-sm mt-3">Save, print or share — perfect for farm boards, visiting cards, packaging and social media.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Website QR */}
          <div className="bg-white rounded-[28px] border border-stone-100 overflow-hidden shadow-sm">
            <div className="bg-[#0e2e1f] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0e2e1f] text-sm">🌐</span>
                <span className="font-bold text-sm tracking-wide">Scan to Visit Website</span>
              </div>
              <span className="bg-white/15 border border-white/20 px-3 py-1 rounded-full text-xs font-bold">WEBSITE</span>
            </div>
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="bg-[#f8f5ee] rounded-[24px] p-4 sm:p-6 border-2 border-stone-100">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md">
                  <img src="/qr/qr-website.png" alt="QR code to visit Digital Agro Farming Services website" className="w-64 h-64 sm:w-72 sm:h-72 object-contain" loading="eager" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0e2e1f] mt-6">Digital Agro Farming Services</h3>
              <p className="text-xs font-bold tracking-widest uppercase text-[#1a5c2a] mt-1">Website QR</p>
              <p className="text-sm text-[#6b7c6b] mt-3 max-w-sm leading-relaxed">Scans to <code className="bg-[#f8f5ee] px-2 py-1 rounded text-xs font-mono break-all">https://github.com/krish0000987-netizen/digitalagro</code><br /><span className="text-xs">Update to <code className="bg-[#e8f5e9] px-1 rounded">digitalagro.vercel.app</code> once live</span></p>
              <div className="flex gap-3 mt-6 w-full sm:w-auto">
                <a href="/qr/qr-website.png" download="Digital-Agro-Website-QR.png" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#0e2e1f] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-black">⬇ Download QR</a>
                <a href="https://github.com/krish0000987-netizen/digitalagro" target="_blank" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-stone-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-[#f8f5ee]">Open Site →</a>
              </div>
              <p className="text-[11px] text-[#9a9a9a] mt-3">Print size: 4×4 cm minimum for reliable scan</p>
            </div>
          </div>

          {/* WhatsApp QR */}
          <div className="bg-white rounded-[28px] border-2 border-[#25D366]/20 overflow-hidden shadow-sm">
            <div className="bg-[#25D366] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#25D366] text-sm">💬</span>
                <span className="font-bold text-sm tracking-wide">Scan to WhatsApp Us</span>
              </div>
              <span className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-bold">WHATSAPP</span>
            </div>
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="bg-[#e8f5e9] rounded-[24px] p-4 sm:p-6 border-2 border-[#c8e6c9]">
                <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md">
                  <img src="/qr/qr-whatsapp.png" alt="QR code to chat on WhatsApp +91 95930 69126" className="w-64 h-64 sm:w-72 sm:h-72 object-contain" loading="eager" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0e2e1f] mt-6">Chat on WhatsApp</h3>
              <p className="text-xs font-bold tracking-widest uppercase text-[#25D366] mt-1">+91 95930 69126</p>
              <p className="text-sm text-[#6b7c6b] mt-3 max-w-sm leading-relaxed">Scans to pre-filled message:<br /><code className="bg-[#f8f5ee] px-2 py-1 rounded text-xs break-all">Hello Digital Agro Farming Services...</code></p>
              <div className="flex gap-3 mt-6 w-full sm:w-auto">
                <a href="/qr/qr-whatsapp.png" download="Digital-Agro-WhatsApp-QR.png" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1fb255]">⬇ Download QR</a>
                <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-stone-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-[#f8f5ee]">Chat Now →</a>
              </div>
              <p className="text-[11px] text-[#9a9a9a] mt-3">📱 iPhone & Android camera — no app needed</p>
            </div>
          </div>
        </div>

        {/* Live Site QR + Instructions */}
        <div className="mt-8 grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <div className="bg-[#f8f5ee] rounded-[24px] border border-stone-100 p-6 flex gap-4 items-center">
            <div className="bg-white rounded-2xl p-3 shadow-sm shrink-0">
              <img src="/qr/qr-live-site.png" alt="Live site QR" className="w-24 h-24 object-contain" loading="lazy" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#0e2e1f]">Live Site QR</div>
              <div className="text-xs text-[#6b7c6b] mt-1 leading-relaxed">Future Vercel URL:<br /><code className="bg-white px-2 py-1 rounded text-xs">https://digitalagro.vercel.app</code><br />Will auto-work once deployed</div>
              <a href="/qr/qr-live-site.png" download className="inline-flex mt-2 text-xs font-bold text-[#1a5c2a]">Download →</a>
            </div>
          </div>

          <div className="bg-[#0e2e1f] rounded-[24px] p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="relative">
              <h4 className="font-bold flex items-center gap-2"><span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-xs">?</span> How to Use</h4>
              <ol className="mt-4 space-y-2 text-sm text-white/80 list-decimal list-inside">
                <li>Open your phone <b className="text-white">Camera</b> (iPhone/Android)</li>
                <li>Point at QR code — hold steady 1-2 seconds</li>
                <li>Tap the notification/banner that appears</li>
                <li>Website opens / WhatsApp chat starts instantly</li>
              </ol>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="bg-white text-[#0e2e1f] px-3 py-1.5 rounded-full text-xs font-bold">No app required</span>
                <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold">Print at 300 DPI</span>
                <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold">Works offline when printed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Print CTA */}
        <div className="mt-8 bg-white rounded-[24px] border border-stone-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#0e2e1f]">Need QR for Visiting Cards, Boards or Packaging?</h4>
            <p className="text-sm text-[#6b7c6b] mt-1">All 3 QR files are in <code className="bg-[#f8f5ee] px-2 py-1 rounded text-xs">public/qr/</code> — download above, print at 4×4 cm minimum, forest green on white ensures high contrast scan.</p>
          </div>
          <button onClick={() => window.print()} className="bg-[#0e2e1f] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black whitespace-nowrap">🖨️ Print This Page</button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#0e2e1f] via-[#14532d] to-[#1a5c2a] rounded-[24px] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Ready to Grow With Us?</h3>
            <p className="text-white/70 text-sm mt-1">Scan QR or contact directly — we respond quickly on WhatsApp.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+919593069126" className="bg-white text-[#0e2e1f] px-6 py-3 rounded-full font-bold text-sm">Call Now</a>
            <Link href="/contact" className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm">Contact Page →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
