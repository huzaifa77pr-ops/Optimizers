import { useEffect, useState } from "react";

export default function ForSaleSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      
      {/* Subtle luxury background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Small Tag */}
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-6">
            Exclusive Premium Templates
          </p>

          {/* Main FOR SALE text */}
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-white to-rose-400 bg-clip-text text-transparent">
              FOR SALE
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">
            High-end website templates crafted with luxury minimal UI, glass cards,
            strong typography and lightweight animations. Built for agencies,
            SaaS, portfolios and modern brands.
          </p>

          {/* Decorative line */}
          <div className="mt-10 flex justify-center">
            <div className="h-[2px] w-40 bg-gradient-to-r from-emerald-400 via-white to-rose-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}