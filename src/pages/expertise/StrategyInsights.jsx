import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StrategyServicesSection from "../../components/StrategyServicesSection";
import StrategyProcessSection from "../../components/StrategyProcessSection";
import StrategyCaseStudiesSection from "../../components/StrategyCaseStudiesSection";
import StrategyFinalCTA from "../../components/StrategyFinalCTA";
import Footer from "../../components/Footer";


export default function StrategyInsights() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full bg-white">
      <style>{`
        .hex-anim {
          /* HEX tiles with filled (dark) interiors + blue outline */
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='140' viewBox='0 0 160 140'%3E%3Cg stroke='%230ea5e9' stroke-opacity='0.28' stroke-width='1.4'%3E%3Cpath d='M40 4 L80 28 L80 68 L40 92 L0 68 L0 28 Z' fill='%23020b1a' fill-opacity='0.26'/%3E%3Cpath d='M120 4 L160 28 L160 68 L120 92 L80 68 L80 28 Z' fill='%23020b1a' fill-opacity='0.26'/%3E%3Cpath d='M80 68 L120 92 L120 132 L80 156 L40 132 L40 92 Z' transform='translate(0,-18)' fill='%23020b1a' fill-opacity='0.26'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 240px 210px;
          background-position: 0 0;
          animation: hexMove 16s linear infinite;
          transform: translateZ(0);
          will-change: background-position;
        }

        @keyframes hexMove {
          0%   { background-position: 0px 0px; }
          100% { background-position: 380px 280px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hex-anim { animation: none; }
        }
      `}</style>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        {/* Hexagon animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hex-anim absolute inset-0" />
          {/* subtle glow + luxury fades */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-white/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "py-16 sm:py-20 lg:py-24",
              "transition-all duration-700 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* LEFT TITLE */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Strategy & Insights
                </div>

                <h1 className="mt-5 text-left text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Decisions that feel
                  <span className="bg-gradient-to-r from-emerald-600 to-rose-500 bg-clip-text text-transparent">
                    {" "}
                    premium
                  </span>
                  .
                </h1>

                <p className="mt-5 max-w-2xl text-left text-base leading-relaxed text-slate-600 sm:text-lg">
                  We blend research, analytics, and positioning to craft a clear
                  roadmap—so every campaign, build, and launch moves with
                  purpose and measurable impact.
                </p>

                {/* CTA: click -> /contact */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
  type="button"
  onClick={() => navigate("/contact")}
  className="
    group relative overflow-hidden rounded-xl
    bg-red-600 px-6 py-3 text-sm font-semibold text-white
    shadow-sm transition
    hover:bg-red-700 hover:shadow-md
    active:scale-[0.99]
    focus:outline-none focus:ring-2 focus:ring-red-500/40
    cursor-pointer
  "
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  <span className="relative">Book a Strategy Session</span>
</button>

                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Discovery & Audit",
                    "Positioning",
                    "Go-to-Market",
                    "KPI Framework",
                    "Roadmaps",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — luxury glass cards */}
              <div className="lg:col-span-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold text-slate-500">
                      What you get
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      A strategy you can execute.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Clear priorities, timelines, and channel decisions—built
                      for performance and brand consistency.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                    <p className="text-xs font-semibold text-slate-500">
                      Insight layer
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Measure what matters.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      KPI mapping, funnel tracking, and optimization signals to
                      keep growth intentional.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">
                        Typical outcomes
                      </p>
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                        premium
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[
                        ["Clarity", "Roadmap"],
                        ["Focus", "KPIs"],
                        ["Speed", "Execution"],
                      ].map(([a, b]) => (
                        <div
                          key={a}
                          className="rounded-xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm backdrop-blur"
                        >
                          <p className="text-sm font-extrabold text-slate-900">
                            {a}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {b}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* /right */}
            </div>
          </div>
        </div>

      </section>
      <StrategyServicesSection show={show} />
      <StrategyProcessSection/>
      <StrategyCaseStudiesSection/>
      <StrategyFinalCTA/>
      <Footer/>

    </main>
    
  );
}
