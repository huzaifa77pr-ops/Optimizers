// src/components/StrategyCaseStudiesSection.jsx
import { useNavigate } from "react-router-dom";

export default function StrategyCaseStudiesSection({ show = true }) {
  const navigate = useNavigate();

  const cases = [
    {
      tag: "Growth Strategy",
      title: "From scattered marketing to a clear, measurable plan.",
      problem:
        "Multiple channels were active, but results were inconsistent and tracking was unclear.",
      approach:
        "We aligned goals, built a KPI framework, mapped the funnel, and redesigned the channel roadmap.",
      outcome: ["Clear KPIs + reporting", "Focused channel plan", "Faster execution cycles"],
      metric: " +32% lead quality",
    },
    {
      tag: "Experience + IA",
      title: "A premium site structure that users can actually navigate.",
      problem:
        "Content was strong but discoverability was weak — users couldn’t find what mattered.",
      approach:
        "We rebuilt information architecture, simplified navigation, and refined messaging hierarchy.",
      outcome: ["Cleaner structure", "Better content flow", "Higher engagement"],
      metric: " -18% bounce rate",
    },
    {
      tag: "Positioning",
      title: "Sharper messaging that increased trust and conversion intent.",
      problem:
        "The offer was valuable, but the message felt generic and didn’t differentiate.",
      approach:
        "We created positioning pillars, tightened copy, and mapped content to user intent.",
      outcome: ["Premium tone", "Clear value props", "Conversion-first copy"],
      metric: " +21% form starts",
    },
  ];

  return (
    <section className="bg-sky-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-slate-500">
                OUTCOMES
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Strategy that shows results.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                A few examples of how our strategy work translates into clarity, direction, and measurable lift.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
  {/* Green Button */}
  <button
    type="button"
    onClick={() => navigate("/projects")}
    className="
      cursor-pointer rounded-xl
      bg-emerald-600 px-5 py-3 text-sm font-semibold text-white
      shadow-sm transition
      hover:bg-emerald-700 hover:shadow-md
      active:scale-[0.98]
      focus:outline-none focus:ring-2 focus:ring-emerald-500/40
    "
  >
    View Projects
  </button>

  {/* Red Button */}
  <button
    type="button"
    onClick={() => navigate("/contact")}
    className="
      group cursor-pointer relative overflow-hidden rounded-xl
      bg-red-600 px-5 py-3 text-sm font-semibold text-white
      shadow-sm transition
      hover:bg-red-700 hover:shadow-md
      active:scale-[0.98]
      focus:outline-none focus:ring-2 focus:ring-red-500/40
    "
  >
    {/* shine effect */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    <span className="relative">Request a Strategy Call</span>
  </button>
</div>

          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="
                group relative overflow-hidden rounded-2xl
                border border-sky-100/60 bg-white/70 backdrop-blur
                p-7 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.25)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_18px_55px_-26px_rgba(2,8,23,0.38)]
                hover:border-sky-200/70
              "
            >
              {/* Luxury hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-emerald-200/18 blur-3xl" />
              </div>

              {/* Tag + Metric */}
              <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                  {c.tag}
                </span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  {c.metric}
                </span>
              </div>

              <h3 className="relative mt-5 text-xl font-extrabold text-slate-900">
                {c.title}
              </h3>

              <div className="relative mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-400">
                    PROBLEM
                  </p>
                  <p className="mt-1">{c.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-400">
                    APPROACH
                  </p>
                  <p className="mt-1">{c.approach}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-400">
                    OUTCOME
                  </p>
                  <ul className="mt-2 space-y-2">
                    {c.outcome.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* bottom divider */}
              <div className="relative mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          *Metrics shown are representative examples and vary by industry, budget, and baseline.
        </div>
      </div>
    </section>
  );
}
