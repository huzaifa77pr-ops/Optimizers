// src/pages/platforms/MobilePlatformsSection2.jsx
export default function MobilePlatformsSection2() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT TEXT */}
          <div
            className="lg:col-span-6"
            style={{ animation: "fadeUp 950ms ease-out both" }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Mobile Foundations
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Premium mobile experiences — built for speed, stability, and scale.
            </h2>

            <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
              We design and engineer mobile systems with clean UX, strong
              architecture, and reliable delivery. From MVPs to enterprise-grade
              apps — every build stays performance-first and maintainable.
            </p>

            {/* feature bullets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {[
                "Offline-ready flows",
                "Secure auth & data",
                "Smooth animations (no lag)",
                "Scalable API integration",
              ].map((t, i) => (
                <div
                  key={t}
                  className="flex items-start gap-3"
                  style={{
                    animation: "fadeUp 950ms ease-out both",
                    animationDelay: `${120 + i * 90}ms`,
                  }}
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />
                  <p className="text-sm text-black/70 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 h-px w-44 bg-black/15" />
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="lg:col-span-6"
            style={{ animation: "fadeUp 1100ms ease-out both", animationDelay: "120ms" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_70px_rgba(0,0,0,0.12)]">
              {/* ✅ IMAGE PATH HERE */}
              <img
                src="/mobile.jpg"
                alt="Mobile platform preview"
                loading="lazy"
                className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
              />

              {/* premium frame line (no overlay on image, only border already) */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
