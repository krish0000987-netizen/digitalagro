"use client";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* WhatsApp floating */}
      <a href="https://wa.me/919593069126?text=Hello%20Digital%20Agro%20Farming%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20agricultural%20services." target="_blank" className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-green-700/20 flex items-center justify-center text-white hover:scale-105 transition-transform group">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.59 2 2.15 6.42 2.15 10.85c0 1.56.41 3.08 1.19 4.42L2 22l6.9-1.81a9.82 9.82 0 0 0 4.7 1.2h.01c5.45 0 9.89-4.42 9.89-9.85 0-2.63-1.03-5.1-2.9-6.97l.45.32Zm-7.01 15.24h-.01a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-4.1 1.07 1.1-3.99-.2-.4a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.25 8.23Zm6.88-6.17c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.45.28-.82.09-.37-.19-1.57-.58-2.99-1.85-1.11-.99-1.86-2.21-2.08-2.58-.22-.37-.02-.57.17-.76.17-.17.37-.45.56-.67.19-.22.25-.37.37-.62.12-.25.06-.47-.03-.66-.09-.19-.84-2.02-1.15-2.77-.3-.72-.61-.62-.84-.63l-.72-.01c-.25 0-.66.09-1 .47-.34.37-1.31 1.28-1.31 3.12s1.34 3.62 1.53 3.87c.19.25 2.64 4.03 6.4 5.65.89.38 1.59.61 2.13.78.9.28 1.71.24 2.36.15.72-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.15-.34-.24-.71-.42Z"/></svg>
        <span className="absolute right-full mr-3 bg-[#0e2e1f] text-white text-xs px-3 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Chat on WhatsApp</span>
      </a>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-40 w-11 h-11 bg-white border border-stone-200 rounded-full shadow-lg flex items-center justify-center hover:bg-[#0e2e1f] hover:text-white hover:border-[#0e2e1f] transition-colors">
          ↑
        </button>
      )}
    </>
  );
}
