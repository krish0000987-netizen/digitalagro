"use client";
import { useState, useRef } from "react";

export default function HomeVideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-[#0e2e1f] relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("/digitalagro/farmer-1.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-[#0e2e1f]/95" />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">Farmer Testimonial • Live from the Field</span>
            </div>
            <h2 className="font-display text-[32px] lg:text-[46px] font-bold leading-none text-white">
              Hear From Our <span className="italic font-normal text-[#a8e0a8]">Happy Farmers</span>
            </h2>
            <p className="text-white/60 text-sm mt-3 max-w-xl leading-relaxed">
              Real experience from the field — our farmer in the paddy/vegetable farm shares how Digital Agro products made a difference. Watch the full 6-minute story.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white text-[#0e2e1f] px-4 py-2 rounded-full text-xs font-bold">✓ Real Field Video</span>
            <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold">🎥 6:53 mins</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-8 items-start">
          {/* Video Player */}
          <div className="relative rounded-[28px] overflow-hidden bg-black shadow-2xl shadow-black/30 group">
            <div className="relative aspect-[9/16] max-h-[680px] mx-auto bg-black">
              <video
                ref={videoRef}
                controls={playing}
                poster="/videos/farmer-testimonial-thumb.jpg"
                preload="metadata"
                playsInline
                className="w-full h-full object-contain"
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
              >
                <source src="/videos/farmer-testimonial-web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 hover:bg-black/35 transition-colors group/btn"
                >
                  <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover/btn:scale-105 transition-transform">
                    <span className="text-[#0e2e1f] text-2xl ml-1">▶</span>
                  </span>
                  <span className="mt-4 bg-white/90 backdrop-blur text-[#0e2e1f] px-4 py-2 rounded-full text-xs font-bold">▶ Watch Farmer Testimonial</span>
                  <span className="mt-2 text-white/80 text-xs">Tap to play • 6:53 • 42 MB</span>
                </button>
              )}
            </div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs">▶</div>
                <div>
                  <div className="text-white text-sm font-bold leading-none">Farmer Testimonial</div>
                  <div className="text-white/70 text-xs">Digital Agro Farming Service</div>
                </div>
              </div>
              <a href="/videos/farmer-testimonial-web.mp4" download className="bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-[#0e2e1f]">Download</a>
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-4">
            <div className="bg-white rounded-[24px] p-6 border border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-xl">🌾</div>
              <h3 className="font-bold text-[#0e2e1f] mt-3">Why Farmers Trust Us</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#5a6b5a]">
                <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Real field results — ridge gourd, paddy, chilli, ginger, brinjal</li>
                <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Products: ACTIVE-80, ACTIVMAX, 80 GOLD, SmartKavach</li>
                <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Less fertilizer, less cost, double yield</li>
                <li className="flex gap-2"><span className="text-[#1a5c2a]">✓</span> Soil test & expert advisory included</li>
              </ul>
              <a href="https://wa.me/919593069126?text=Hello%20I%20watched%20your%20farmer%20video%20and%20want%20details" target="_blank" className="mt-5 flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full py-3 font-bold text-sm">💬 Ask About Video Products</a>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[24px] p-6 text-white">
              <h4 className="font-bold">Video Info</h4>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div className="flex justify-between"><span>Format</span><span className="text-white font-medium">MP4 • 480×854 • 29.75 fps</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="text-white font-medium">6:53 (413 sec)</span></div>
                <div className="flex justify-between"><span>Size</span><span className="text-white font-medium">42 MB (web-optimized)</span></div>
                <div className="flex justify-between"><span>Original</span><span className="text-white font-medium">53 MB</span></div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href="tel:+919593069126" className="flex-1 bg-white text-[#0e2e1f] rounded-full py-2.5 text-center font-bold text-sm">Call Now</a>
                <a href="/videos/farmer-testimonial-web.mp4" target="_blank" className="flex-1 bg-white/10 border border-white/20 text-white rounded-full py-2.5 text-center font-bold text-sm">Open Fullscreen</a>
              </div>
            </div>

            <div className="bg-[#c9a86a] rounded-[24px] p-5 flex items-center gap-4">
              <img src="/videos/farmer-testimonial-thumb.jpg" alt="Thumb" className="w-14 h-20 object-cover rounded-xl border border-white/30" />
              <div>
                <div className="font-bold text-[#0e2e1f] text-sm">Farmer with Sprayer — Live Field</div>
                <div className="text-xs text-[#0e2e1f]/70 mt-1 leading-relaxed">Shot in your actual field, bamboo trellis, green crops — authentic testimonial, no studio.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/50 text-xs">Video from <code className="bg-white/10 px-2 py-1 rounded">/Downloads/videosagro</code> → now at <code className="bg-white/10 px-2 py-1 rounded">/public/videos/farmer-testimonial-web.mp4</code> — poster <code className="bg-white/10 px-2 py-1 rounded">farmer-testimonial-thumb.jpg</code></p>
        </div>
      </div>
    </section>
  );
}
