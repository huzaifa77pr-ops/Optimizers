// src/components/ClientRetainerModelsSection.jsx
import { useNavigate } from "react-router-dom";

export default function ClientRetainerModelsSection({ show = true }) {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Growth Retainer",
      tag: "Best for scaling",
      desc:
        "Consistent improvements and dependable support — ideal for teams that want steady momentum.",
      features: [
        "Monthly roadmap + priorities",
        "Retainer hours for updates",
        "Monthly performance report",
        "Email + ticketing support",
      ],
      accent: "from-sky-200 via-emerald-200 to-rose-200",
      cta: "Start Growth Retainer",
    },
    {
      name: "Performance Retainer",
      tag: "Conversion focused",
      desc:
        "Optimization-led execution — ideal for brands focused on CRO, funnels, and measurable lift.",
      features: [
        "Optimization sprints (CRO)",
        "Tracking + KPI refinement",
        "Experiment backlog",
        "Monthly reporting + insights",
      ],
      accent: "from-emerald-200 via-sky-200 to-rose-200",
      cta: "Request Performance Plan",
      featured: true,
    },
    {
      name: "Enterprise Partnership",
      tag: "Dedicated team",
      desc:
        "High-touch partnership — best for complex orgs requiring SLA, governance, and ongoing strategy.",
      features: [
        "Dedicated account lead",
        "SLA options + priority queue",
        "Quarterly strategy reviews",
        "Cross-team coordination",
      ],
      accent: "from-rose-200 via-sky-200 to-emerald-200",
      cta: "Talk Enterprise Support",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            SUPPORT MODELS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Retainers built for long-term results
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            Choose a model that matches your pace — from steady growth to performance-led optimization and enterprise partnerships.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "group relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur",
                "p-7 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.25)] transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_18px_55px_-28px_rgba(2,8,23,0.38)]",
                p.featured
                  ? "border-slate-900/20 ring-1 ring-slate-900/10"
                  : "border-slate-200/70 hover:border-slate-300/70",
              ].join(" ")}
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-emerald-200/18 blur-3xl" />
              </div>

              {/* top tag row */}
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-500">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {p.name}
                  </h3>
                </div>

                {p.featured ? (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Recommended
                  </span>
                ) : (
                  <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    Flexible
                  </span>
                )}
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>

              {/* divider */}
              <div
                className={[
                  "relative mt-6 h-[2px] w-16 rounded-full opacity-90",
                  `bg-gradient-to-r ${p.accent}`,
                ].join(" ")}
              />

              {/* features */}
              <ul className="relative mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="relative mt-7">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className={[
                    "w-full cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold transition",
                    p.featured
                      ? "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg focus:ring-red-500/40"
                      : "bg-slate-900 text-white shadow-sm hover:opacity-95 focus:ring-slate-900/30",
                    "active:scale-[0.99] focus:outline-none focus:ring-2",
                  ].join(" ")}
                >
                  {p.cta}
                </button>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Tailored scope • Clear deliverables • Predictable execution
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 rounded-2xl border border-slate-200/70 bg-slate-50/60 p-6 text-center">
          <p className="text-sm font-semibold text-slate-900">
            Not sure which model fits?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            We’ll recommend a plan based on your goals, timeline, and team structure.
          </p>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group cursor-pointer relative overflow-hidden rounded-xl
                bg-emerald-600 px-7 py-3 text-sm font-semibold text-white
                shadow-md transition-all duration-300
                hover:bg-emerald-700 hover:shadow-lg
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-emerald-500/40
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get a Recommendation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
