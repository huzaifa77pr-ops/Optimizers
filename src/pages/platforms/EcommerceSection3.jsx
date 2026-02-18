// src/pages/platforms/EcommerceSection3.jsx
export default function EcommerceSection3() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridDrift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-60px,60px,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* Subtle animated grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] anim"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          animation: "gridDrift 22s linear infinite",
          willChange: "transform",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.90)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
            Store Experience
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Pillars that drive conversion & trust.
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            Every e-commerce build is structured around user confidence, checkout clarity,
            and performance — so your store doesn’t just look premium, it sells.
          </p>

          <div className="mt-8 h-px w-44 bg-white/20" />
        </div>

        {/* 6 Blocks */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Conversion-First UX",
              desc: "Clear hierarchy, persuasive layout, and friction-free navigation.",
              accent: "emerald",
            },
            {
              title: "Product Discovery",
              desc: "Smart filters, search UX, and collections that guide decisions.",
              accent: "rose",
            },
            {
              title: "Checkout Optimization",
              desc: "Fast checkout, minimal steps, trust signals, and reduced drop-off.",
              accent: "emerald",
            },
            {
              title: "Mobile Performance",
              desc: "Speed-focused builds with clean components and optimized media.",
              accent: "rose",
            },
            {
              title: "Trust & Credibility",
              desc: "Reviews, policies, badges, social proof, and clean visual authority.",
              accent: "emerald",
            },
            {
              title: "SEO-Ready Structure",
              desc: "Indexable pages, schema, clean URLs, and content-first foundation.",
              accent: "rose",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-8 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.35)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 120}ms`,
              }}
            >
              {/* Accent line */}
              <div
                className={`h-[2px] w-14 ${
                  item.accent === "emerald" ? "bg-emerald-300/70" : "bg-rose-300/70"
                }`}
              />

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              {/* Premium hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    item.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.22), 0 22px 90px rgba(0,0,0,0.45)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.20), 0 22px 90px rgba(0,0,0,0.45)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
