import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AIProcessSection from "../../components/AIProcessSection";
import AIServiceBoxesSection from "../../components/AIServiceBoxesSection";
import AIUseCasesSection from "../../components/AIUseCasesSection";
import AIProjectsSlider from "../../components/AIProjectsSlider";
import AIStatsSection from "../../components/AIStatsSection";
import AIFinalCTA from "../../components/AIFinalCTA";
import Footer from "../../components/Footer";

export default function AIConsulting() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full bg-black">
      {/* SECTION 1 — HERO (Dark AI animated grid) */}
      <section className="relative overflow-hidden">
        {/* ✅ Inline animation (no extra CSS file) */}
        <style>{`
          .aiWrap{ position:absolute; inset:0; pointer-events:none; overflow:hidden; }
          .aiGridA{
            position:absolute; inset:-22%;
            background-image:
              linear-gradient(to right, rgba(56,189,248,0.20) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56,189,248,0.20) 1px, transparent 1px);
            background-size: 46px 46px, 46px 46px;
            opacity:.80;
            transform: translate3d(0,0,0);
            will-change: transform, background-position;
            animation: aiDriftA 18s linear infinite;
          }
          .aiGridB{
            position:absolute; inset:-26%;
            background-image:
              linear-gradient(to right, rgba(2,132,199,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2,132,199,0.12) 1px, transparent 1px);
            background-size: 92px 92px, 92px 92px;
            opacity:.75;
            transform: translate3d(0,0,0);
            will-change: transform, background-position;
            animation: aiDriftB 28s linear infinite;
          }
          .aiSweep{
            position:absolute; inset:-45% -35%;
            background: linear-gradient(
              90deg,
              rgba(56,189,248,0.00) 0%,
              rgba(56,189,248,0.00) 42%,
              rgba(56,189,248,0.22) 50%,
              rgba(56,189,248,0.00) 58%,
              rgba(56,189,248,0.00) 100%
            );
            opacity:.55;
            filter: blur(0.6px);
            transform: translate3d(0,0,0) rotate(10deg);
            will-change: transform;
            animation: aiSweep 6.8s linear infinite;
          }
          .aiGlow{
            position:absolute; inset:0;
            background:
              radial-gradient(900px 520px at 20% 25%, rgba(56,189,248,0.20), transparent 60%),
              radial-gradient(900px 520px at 80% 35%, rgba(16,185,129,0.12), transparent 60%),
              radial-gradient(900px 520px at 55% 80%, rgba(244,63,94,0.10), transparent 65%),
              radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 55%);
          }
          @keyframes aiDriftA{
            0%{ transform: translate3d(-2%, -1%, 0); background-position: 0 0, 0 0; }
            100%{ transform: translate3d(2%, 1%, 0); background-position: 280px 240px, 280px 240px; }
          }
          @keyframes aiDriftB{
            0%{ transform: translate3d(1.6%, 1.1%, 0); background-position: 0 0, 0 0; }
            100%{ transform: translate3d(-1.6%, -1.1%, 0); background-position: 360px 300px, 360px 300px; }
          }
          @keyframes aiSweep{
            0%{ transform: translate3d(-30%, -10%, 0) rotate(10deg); }
            100%{ transform: translate3d(30%, 10%, 0) rotate(10deg); }
          }
          @media (prefers-reduced-motion: reduce){
            .aiGridA, .aiGridB, .aiSweep{ animation:none; }
          }
        `}</style>

        {/* Background */}
        <div className="absolute inset-0">
          <div className="aiWrap">
            <div className="aiGlow" />
            <div className="aiGridB" />
            <div className="aiGridA" />
            <div className="aiSweep" />
          </div>

          {/* readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "py-16 sm:py-20 lg:py-24",
              "transition-all duration-700 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* LEFT */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  AI Consulting
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Artificial Intelligence Consulting
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Turn data into intelligent decisions. We design AI roadmaps, automate
                  workflows, and integrate scalable solutions that deliver measurable impact —
                  without complexity.
                </p>

                {/* CTA */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="
                      group cursor-pointer relative overflow-hidden rounded-xl
                      bg-red-600 px-7 py-3.5 text-sm font-semibold text-white
                      shadow-[0_18px_60px_-40px_rgba(239,68,68,0.55)]
                      transition-all duration-300
                      hover:bg-red-700 hover:shadow-[0_22px_70px_-42px_rgba(239,68,68,0.65)]
                      active:scale-[0.98]
                      focus:outline-none focus:ring-2 focus:ring-red-500/40
                    "
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Book an AI Strategy Call</span>
                  </button>

                  <div className="text-sm text-white/70">
                    <span className="font-semibold text-white">Deliverables:</span>{" "}
                    roadmap • use cases • integration plan
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "AI Strategy & Roadmap",
                    "Automation",
                    "Analytics",
                    "Integrations",
                    "Responsible AI",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — luxury glass panel */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_18px_60px_-40px_rgba(0,0,0,0.65)]">
                  <p className="text-xs font-semibold tracking-widest text-white/60">
                    WHERE AI FITS BEST
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Customer Support", "Chatbots, routing, and faster resolution."],
                      ["Operations", "Automation workflows and reduced manual load."],
                      ["Marketing", "Segmentation, prediction, and smarter targeting."],
                      ["Decision Intelligence", "Forecasting, dashboards, and insights."],
                    ].map(([a, b]) => (
                      <div key={a} className="flex gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-300" />
                        <div>
                          <p className="text-sm font-extrabold text-white">{a}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/70">
                            {b}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-300/80 via-emerald-300/70 to-rose-300/70 opacity-90" />

                  <p className="mt-4 text-xs text-white/55">
                    Built for performance, security, and long-term scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AIProcessSection show={show}/>
      <AIServiceBoxesSection show={show}/>
      <AIUseCasesSection show={show}/>
      <AIProjectsSlider show={show}/>
      <AIStatsSection show={show}/>
      <AIFinalCTA show={show}/>
      <Footer/>
    </main>
  );
}
