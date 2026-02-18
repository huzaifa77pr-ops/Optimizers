// src/components/AIUseCasesSection.jsx
import { useNavigate } from "react-router-dom";

export default function AIUseCasesSection({ show = true }) {
  const navigate = useNavigate();

  const cases = [
    {
      t: "Customer Support AI",
      d: "Assist agents, answer FAQs, route tickets, and reduce response time without losing quality.",
      k: "Faster support",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M6 12v4a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M10 19h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      t: "Predictive Analytics",
      d: "Forecast demand, spot churn risk, and turn historical data into clear next actions.",
      k: "Smarter decisions",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M4 19V5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M4 19h16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M7 14l3-3 3 2 4-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      t: "Marketing Intelligence",
      d: "Audience segmentation, scoring, and targeting based on intent — not assumptions.",
      k: "Higher ROAS",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M3 11l18-8-8 18-2-8-8-2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
          <path d="M13 13l6-10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      t: "Operations Automation",
      d: "Automate repetitive tasks with AI-assisted workflows to reduce cost and manual load.",
      k: "Lower overhead",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M7 7h10v10H7V7Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
          <path d="M4 12h3m10 0h3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M12 4v3m0 10v3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      t: "Recommendation Engines",
      d: "Personalize the experience using behavioral signals — improve discovery and conversion intent.",
      k: "More conversions",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M12 2l3 7 7 .5-5.4 4.5 1.8 7-6.4-4-6.4 4 1.8-7L2 9.5 9 9l3-7Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      t: "Fraud / Risk Signals",
      d: "Detect anomalies and suspicious patterns early with intelligent scoring and alerts.",
      k: "Reduced risk",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M12 2 20 6.5v7.2c0 4.6-3.2 7.9-8 8.8-4.8-.9-8-4.2-8-8.8V6.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
          <path d="M12 8v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M12 16h.01" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-slate-500">
                USE CASES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where AI delivers real value
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Practical applications across teams — designed for measurable outcomes, not hype.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group cursor-pointer relative overflow-hidden rounded-xl
                bg-red-600 px-7 py-3.5 text-sm font-semibold text-white
                shadow-md transition-all duration-300
                hover:bg-red-700 hover:shadow-lg
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-red-500/40
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Discuss Your Use Case</span>
            </button>
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Cards */}
          <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
            {cases.map((c) => (
              <div
                key={c.t}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-slate-200/70 bg-white/80 backdrop-blur
                  p-6 shadow-[0_10px_26px_-22px_rgba(2,8,23,0.25)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_18px_55px_-30px_rgba(2,8,23,0.38)]
                "
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
                  <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-emerald-200/18 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-xl
                      bg-slate-900 text-white
                      shadow-sm transition group-hover:opacity-95
                    "
                    aria-hidden="true"
                  >
                    {c.icon}
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {c.k}
                  </span>
                </div>

                <h3 className="relative mt-4 text-lg font-extrabold text-slate-900">
                  {c.t}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {c.d}
                </p>

                <div className="relative mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
              </div>
            ))}
          </div>

          {/* Right panel */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-[0_10px_26px_-22px_rgba(2,8,23,0.25)]">
              <p className="text-xs font-semibold tracking-widest text-slate-500">
                TYPICAL OUTCOMES
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                What teams usually get
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["↓", "Manual work"],
                  ["↑", "Decision speed"],
                  ["↑", "Conversion intent"],
                  ["↓", "Operational cost"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                    <p className="text-2xl font-extrabold text-slate-900">{k}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-600">{v}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Clear use-case definition + ROI estimates",
                  "Integration plan for your existing stack",
                  "Tracking + monitoring for production models",
                  "Responsible adoption guidelines",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="
                  mt-6 w-full cursor-pointer rounded-xl
                  bg-slate-900 px-6 py-3 text-sm font-semibold text-white
                  shadow-sm transition hover:opacity-95
                  active:scale-[0.99]
                  focus:outline-none focus:ring-2 focus:ring-slate-900/30
                "
              >
                Get a Proposal
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
