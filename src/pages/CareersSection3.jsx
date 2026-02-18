// src/pages/CareersSection3.jsx
export default function CareersSection3() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridShift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-40px,40px,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* subtle white texture */}
      <div
        className="absolute inset-0 opacity-[0.035] anim"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          animation: "gridShift 22s linear infinite",
          willChange: "transform",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* LEFT STATEMENT */}
          <div
            className="lg:col-span-5"
            style={{ animation: "fadeUp 950ms ease-out both" }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Values
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Quality over volume.
            </h2>

            <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
              We don’t optimize for output — we optimize for impact. Every deliverable
              is expected to be clean, consistent, and built with intent.
            </p>

            <div className="mt-8 h-px w-40 bg-black/15" />
          </div>

          {/* RIGHT BULLETS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Communication",
                  desc: "Clear updates, clean expectations, and professional collaboration.",
                  accent: "emerald",
                },
                {
                  title: "Reliability",
                  desc: "We commit, we deliver — with consistency you can trust.",
                  accent: "rose",
                },
                {
                  title: "Attention to detail",
                  desc: "Typography, spacing, edge cases — the finish matters.",
                  accent: "emerald",
                },
                {
                  title: "Performance mindset",
                  desc: "Fast builds, efficient systems, and measurable improvements.",
                  accent: "rose",
                },
                {
                  title: "Client-first thinking",
                  desc: "We design decisions around outcomes — not assumptions.",
                  accent: "emerald",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className={`anim group relative rounded-3xl border border-black/10 bg-white p-7
                              shadow-[0_18px_70px_rgba(0,0,0,0.08)]
                              transition-transform duration-300 hover:-translate-y-1
                              ${idx === 4 ? "sm:col-span-2" : ""}`}
                  style={{
                    animation: "fadeUp 950ms ease-out both",
                    animationDelay: `${120 + idx * 120}ms`,
                  }}
                >
                  {/* Accent line */}
                  <div
                    className={`h-[2px] w-14 ${
                      item.accent === "emerald"
                        ? "bg-emerald-500/70"
                        : "bg-rose-500/70"
                    }`}
                  />

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/70 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* premium hover outline */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        item.accent === "emerald"
                          ? "inset 0 0 0 1px rgba(16,185,129,0.20), 0 22px 90px rgba(0,0,0,0.10)"
                          : "inset 0 0 0 1px rgba(244,63,94,0.18), 0 22px 90px rgba(0,0,0,0.10)",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
