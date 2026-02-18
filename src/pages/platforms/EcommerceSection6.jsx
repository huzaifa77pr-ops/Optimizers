// src/pages/platforms/EcommerceSection6.jsx
export default function EcommerceSection6() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
            Performance & Security
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            A quality bar your store can scale on.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            We optimize speed, reliability, and trust — ensuring your storefront stays fast under
            traffic spikes and stable across campaigns.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Premium Quality Strip */}
        <div
          className="mt-12 rounded-3xl border border-black/10 bg-white p-8
                     shadow-[0_18px_70px_rgba(0,0,0,0.10)]"
          style={{ animation: "fadeUp 950ms ease-out both", animationDelay: "120ms" }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
                Targets
              </p>
              <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight">
                Core Web Vitals + secure checkout fundamentals.
              </h3>
              <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
                We focus on real, measurable outcomes — fast load, smooth interaction,
                optimized media, structured tracking, and safe integration patterns.
              </p>
            </div>

            {/* Accent badges */}
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-700">
                Speed Focus
              </span>
              <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs text-rose-700">
                Trust & Security
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs text-black/70">
                Monitoring Ready
              </span>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {/* Metrics / Checks */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Core Web Vitals",
                desc: "Optimized layout stability, interaction responsiveness, and load performance.",
                accent: "emerald",
              },
              {
                title: "Media Optimization",
                desc: "Images and assets tuned for fast delivery with smart formats and sizing.",
                accent: "rose",
              },
              {
                title: "Checkout Reliability",
                desc: "Frictionless payment flow with consistent validation and error handling.",
                accent: "emerald",
              },
              {
                title: "Secure Integrations",
                desc: "Safe API patterns, permissions, and clean third-party connection handling.",
                accent: "rose",
              },
              {
                title: "Tracking Accuracy",
                desc: "Events, pixels, and analytics configured for real attribution — not noise.",
                accent: "emerald",
              },
              {
                title: "Backups & Monitoring",
                desc: "Release stability with rollback mindset and ongoing operational visibility.",
                accent: "rose",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="anim group relative rounded-2xl border border-black/10 bg-white p-6
                           shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                           transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animation: "fadeUp 950ms ease-out both",
                  animationDelay: `${220 + idx * 110}ms`,
                }}
              >
                <div
                  className={`h-[2px] w-14 ${
                    item.accent === "emerald" ? "bg-emerald-500/70" : "bg-rose-500/70"
                  }`}
                />
                <h4 className="mt-4 text-base font-semibold tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-black/70 leading-relaxed">
                  {item.desc}
                </p>

                {/* hover outline */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      item.accent === "emerald"
                        ? "inset 0 0 0 1px rgba(16,185,129,0.20), 0 18px 70px rgba(0,0,0,0.08)"
                        : "inset 0 0 0 1px rgba(244,63,94,0.18), 0 18px 70px rgba(0,0,0,0.08)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
