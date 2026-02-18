// src/pages/platforms/EcommerceSection2.jsx
export default function EcommerceSection2() {
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
            Platform Options
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Choose the right commerce foundation.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            We recommend platforms based on your catalog size, operational complexity,
            integrations, and growth strategy — not trends.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Shopify",
              desc: "Fast launch, clean checkout, scalable e-commerce operations.",
              best: "Best for: Growth stores",
              tag: "Launch fast",
              accent: "emerald",
            },
            {
              title: "WooCommerce",
              desc: "WordPress-based commerce with deep customization flexibility.",
              best: "Best for: Content + store",
              tag: "Flexible",
              accent: "rose",
            },
            {
              title: "Headless Commerce",
              desc: "Custom storefront + API backend for maximum performance & control.",
              best: "Best for: High scale",
              tag: "Performance",
              accent: "emerald",
            },
            {
              title: "Custom Commerce",
              desc: "Enterprise workflows, unique logic, and complex integrations.",
              best: "Best for: Enterprise",
              tag: "Unlimited",
              accent: "rose",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim group relative rounded-3xl border border-black/10 bg-white p-7
                         shadow-[0_18px_70px_rgba(0,0,0,0.10)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 130}ms`,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-[11px]
                    ${
                      item.accent === "emerald"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-rose-200 bg-rose-50 text-rose-700"
                    }`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Best-for */}
              <p className="mt-6 text-xs text-black/60">{item.best}</p>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              {/* Premium hover outline */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    item.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.25), 0 22px 90px rgba(0,0,0,0.10)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.22), 0 22px 90px rgba(0,0,0,0.10)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
