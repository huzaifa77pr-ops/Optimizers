// src/pages/platforms/MobilePlatformsSection5.jsx
export default function MobilePlatformsSection5() {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* LEFT TEXT */}
          <div
            className="lg:col-span-4"
            style={{ animation: "fadeUp 950ms ease-out both" }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Delivery
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Build & release pipeline.
            </h2>

            <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
              A structured workflow that keeps quality high and delivery fast —
              from discovery to store release and post-launch monitoring.
            </p>

            <div className="mt-8 h-px w-40 bg-black/15" />
          </div>

          {/* RIGHT TIMELINE */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* vertical spine (mobile) */}
              <div className="absolute left-3 top-0 hidden h-full w-px bg-black/10 sm:block lg:hidden" />

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {[
                  {
                    step: "01",
                    title: "Discovery & Requirements",
                    desc: "Goals, users, scope, and technical feasibility — defined clearly.",
                  },
                  {
                    step: "02",
                    title: "UI/UX Prototype",
                    desc: "Wireframes, UI system, and key flows validated before build.",
                  },
                  {
                    step: "03",
                    title: "Development",
                    desc: "Clean architecture, fast UI, APIs, and platform-specific optimizations.",
                  },
                  {
                    step: "04",
                    title: "QA + Device Testing",
                    desc: "Real-device testing, edge cases, performance checks, and fixes.",
                  },
                  {
                    step: "05",
                    title: "Store Preparation",
                    desc: "Screenshots, metadata, compliance, and release configuration.",
                  },
                  {
                    step: "06",
                    title: "Release + Monitoring",
                    desc: "Launch, analytics, crash monitoring, and iteration planning.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.step}
                    className="anim group relative rounded-3xl border border-black/10 bg-white p-7
                               shadow-[0_18px_70px_rgba(0,0,0,0.08)]
                               transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      animation: "fadeUp 950ms ease-out both",
                      animationDelay: `${120 + idx * 120}ms`,
                    }}
                  >
                    {/* connector dot (mobile/tablet) */}
                    <div className="absolute -left-1 top-7 hidden sm:block lg:hidden">
                      <span className="block h-3 w-3 rounded-full bg-black" />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
                          Step {item.step}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/70">
                        Pipeline
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-black/70 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* premium hover border */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        boxShadow:
                          "inset 0 0 0 1px rgba(0,0,0,0.16), 0 22px 80px rgba(0,0,0,0.10)",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* bottom divider */}
              <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
