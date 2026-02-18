// src/pages/platforms/EcommerceSection4.jsx
export default function EcommerceSection4() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 220% 50%; }
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
            CRO Framework
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            A conversion pipeline designed to reduce drop-off.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            We optimize each stage of the buying journey — from first click to repeat purchase —
            with clarity, trust signals, and friction-free checkout.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Flow strip */}
        <div className="mt-12">
          {/* animated line */}
          <div className="relative h-px w-full bg-black/10 overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 w-[55%] anim"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(16,185,129,0.0), rgba(16,185,129,0.55), rgba(244,63,94,0.55), rgba(16,185,129,0.0))",
                backgroundSize: "200% 100%",
                animation: "flow 2.8s linear infinite",
                opacity: 0.9,
              }}
            />
          </div>

          {/* Steps */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Traffic",
                desc: "Targeted acquisition with clean tracking and intent-focused messaging.",
                accent: "emerald",
              },
              {
                step: "02",
                title: "Landing",
                desc: "Fast load, clear offer, and strong visual hierarchy to build confidence.",
                accent: "rose",
              },
              {
                step: "03",
                title: "Product Page",
                desc: "Persuasive copy, gallery, variants, and trust elements that answer doubts.",
                accent: "emerald",
              },
              {
                step: "04",
                title: "Cart",
                desc: "Minimal friction, smart upsells, transparent fees, and easy edits.",
                accent: "rose",
              },
              {
                step: "05",
                title: "Checkout",
                desc: "Fewer fields, quick payment options, and maximum trust signals.",
                accent: "emerald",
              },
              {
                step: "06",
                title: "Post-Purchase",
                desc: "Retention flows, email/SMS, reviews, and repeat purchase automation.",
                accent: "rose",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="anim group relative rounded-3xl border border-black/10 bg-white p-8
                           shadow-[0_18px_70px_rgba(0,0,0,0.10)]
                           transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animation: "fadeUp 950ms ease-out both",
                  animationDelay: `${120 + idx * 120}ms`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                      Step {item.step}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-[11px]
                      ${
                        item.accent === "emerald"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-rose-200 bg-rose-50 text-rose-700"
                      }`}
                  >
                    CRO
                  </span>
                </div>

                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  {item.desc}
                </p>

                {/* premium hover outline */}
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
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
