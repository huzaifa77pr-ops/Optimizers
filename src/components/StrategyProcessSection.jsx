// src/components/StrategyProcessSection.jsx
export default function StrategyProcessSection({ show = true }) {
  const steps = [
    { n: "01", t: "Discovery", d: "Goals, constraints, stakeholders — aligned into a clear direction." },
    { n: "02", t: "Research", d: "Competitors, audience intent, and market signals — turned into insights." },
    { n: "03", t: "Positioning", d: "Messaging pillars and differentiation — crafted for premium perception." },
    { n: "04", t: "Roadmap", d: "Priorities, milestones, timelines — so execution stays predictable." },
    { n: "05", t: "Measurement", d: "KPI mapping and tracking plan — measure what truly matters." },
    { n: "06", t: "Optimization", d: "Experiment loops and refinement — continuous improvement with intent." },
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* ✅ Inline CSS ONLY for line animation (no extra file) */}
        <style>{`
          .procLine { background-size: 220% 100%; animation: procFlow 3.6s linear infinite; }
          @keyframes procFlow { 0% { background-position: 0% 0%; } 100% { background-position: 220% 0%; } }
          @media (prefers-reduced-motion: reduce) { .procLine { animation: none; } }
        `}</style>

        {/* Heading */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-widest text-slate-100">
              OUR PROCESS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Strategy that becomes execution.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              A clear, repeatable framework — built for premium outcomes and measurable impact.
            </p>
          </div>
        </div>

        {/* Animated luxury line */}
        <div className="mt-10">
          <div className="relative mx-auto h-[2px] w-full max-w-5xl overflow-hidden rounded-full bg-slate-100">
            <div className="procLine absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.0),rgba(56,189,248,0.55),rgba(16,185,129,0.40),rgba(244,63,94,0.35),rgba(56,189,248,0.0))]" />
          </div>
        </div>

        {/* Steps cards (Responsive) */}
        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="
                group relative overflow-hidden rounded-2xl
                border border-slate-200/70 bg-white/90 backdrop-blur
                p-6 shadow-[0_12px_34px_-22px_rgba(2,8,23,0.30)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_22px_60px_-34px_rgba(2,8,23,0.45)]
              "
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-rose-900/15 blur-3xl" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-900">
                    STEP {s.n}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {s.t}
                  </h3>
                </div>

                <div
                  className="
                    flex h-12 w-12 items-center justify-center rounded-2xl
                    bg-gradient-to-b from-sky-50 to-white
                    ring-1 ring-slate-200/70
                    text-slate-900 transition group-hover:text-sky-700
                  "
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-slate-900">
                {s.d}
              </p>

              <div className="relative mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-900 opacity-80" />
            </div>
          ))}
        </div>

        {/* Deliverables strip */}
        <div className="mt-10 rounded-2xl border border-slate-100/70 bg-slate-100/90 p-6 shadow-[0_10px_26px_-22px_rgba(2,8,23,0.28)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest text-slate-900">
                DELIVERABLES
              </p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">
                What you receive
              </p>
              <p className="mt-1 text-sm text-slate-900">
                Clean documentation, clear priorities, and a plan your team can execute.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Strategy Doc", "KPI Framework", "Channel Plan", "Roadmap", "Audit Summary"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
