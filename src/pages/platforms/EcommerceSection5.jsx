// src/pages/platforms/EcommerceSection5.jsx
export default function EcommerceSection5() {
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

      {/* subtle animated grid */}
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

      {/* vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
            Integrations
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Payments, shipping, analytics — connected end-to-end.
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            We integrate the tools that power modern commerce operations — so your store runs smoothly
            from checkout to fulfillment and customer retention.
          </p>

          <div className="mt-8 h-px w-44 bg-white/20" />
        </div>

        {/* Integrations Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Payments",
              desc: "Stripe, PayPal, and local gateways with clean checkout flows.",
              accent: "emerald",
              chips: ["Stripe", "PayPal", "Local Gateways"],
            },
            {
              title: "Shipping & Fulfillment",
              desc: "Courier integrations, rate logic, tracking, and automated updates.",
              accent: "rose",
              chips: ["DHL", "FedEx", "Local Couriers"],
            },
            {
              title: "Inventory & ERP",
              desc: "Stock sync, SKUs, warehouses, and operational automation.",
              accent: "emerald",
              chips: ["Inventory Sync", "ERP", "Warehouses"],
            },
            {
              title: "Email & SMS",
              desc: "Lifecycle campaigns for retention, recovery, and reactivation.",
              accent: "rose",
              chips: ["Flows", "Abandoned Cart", "Retention"],
            },
            {
              title: "Analytics & Tracking",
              desc: "GA4, pixels, events, and conversion attribution you can trust.",
              accent: "emerald",
              chips: ["GA4", "Meta Pixel", "Events"],
            },
            {
              title: "Support & CRM",
              desc: "Live chat, ticketing, and CRM integration for better service.",
              accent: "rose",
              chips: ["Chat", "Tickets", "CRM"],
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim group relative rounded-3xl border border-white/12 bg-white/[0.04] p-8 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.38)]
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

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[12px] text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              {/* Premium hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    item.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.22), 0 22px 90px rgba(0,0,0,0.50)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.20), 0 22px 90px rgba(0,0,0,0.50)",
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
