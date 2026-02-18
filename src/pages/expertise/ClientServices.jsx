// src/pages/expertise/ClientServices.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientServicesSection2 from "../../components/ClientServicesSection2";
import ClientGoalsSection from "../../components/ClientGoalsSection";
import ClientRetainerModelsSection from "../../components/ClientRetainerModelsSection";
import ClientServicesFAQ from "../../components/ClientServicesFAQ";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";

export default function ClientServices() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* SECTION 1 — HERO (Moveable Animated Matrix BG + Black Title) */}
      <section className="relative overflow-hidden">
        {/* ✅ Moveable matrix background (clearly visible + continuously animated) */}
        <style>{`
          .mxWrap{
            position:absolute;
            inset:0;
            pointer-events:none;
            overflow:hidden;
          }

          /* base grid */
          .mxGridA{
            position:absolute;
            inset:-20%;
            background-image:
              linear-gradient(to right, rgba(14,165,233,0.26) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14,165,233,0.26) 1px, transparent 1px);
            background-size: 44px 44px, 44px 44px;
            opacity: .95;
            transform: translate3d(0,0,0);
            will-change: transform, background-position;
            animation: mxDriftA 18s linear infinite;
          }

          /* secondary larger grid for depth */
          .mxGridB{
            position:absolute;
            inset:-25%;
            background-image:
              linear-gradient(to right, rgba(2,132,199,0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(2,132,199,0.16) 1px, transparent 1px);
            background-size: 88px 88px, 88px 88px;
            opacity: .75;
            transform: translate3d(0,0,0);
            will-change: transform, background-position;
            animation: mxDriftB 26s linear infinite;
          }

          /* moving "matrix sweep" highlight */
          .mxSweep{
            position:absolute;
            inset:-40% -30%;
            background:
              linear-gradient(90deg,
                rgba(14,165,233,0.00) 0%,
                rgba(14,165,233,0.00) 40%,
                rgba(14,165,233,0.26) 50%,
                rgba(14,165,233,0.00) 60%,
                rgba(14,165,233,0.00) 100%);
            opacity: .55;
            filter: blur(0.6px);
            transform: translate3d(0,0,0) rotate(10deg);
            will-change: transform;
            animation: mxSweep 6.5s linear infinite;
          }

          /* soft glows (keep premium) */
          .mxGlow{
            position:absolute; inset:0;
            background:
              radial-gradient(900px 420px at 15% 20%, rgba(56,189,248,0.18), transparent 60%),
              radial-gradient(800px 380px at 85% 35%, rgba(16,185,129,0.12), transparent 60%),
              radial-gradient(900px 520px at 45% 85%, rgba(244,63,94,0.08), transparent 65%),
              linear-gradient(to bottom, rgba(224,242,254,0.75), rgba(255,255,255,1));
          }

          @keyframes mxDriftA{
            0%   { transform: translate3d(-2%, -1%, 0); background-position: 0px 0px, 0px 0px; }
            100% { transform: translate3d( 2%,  1%, 0); background-position: 260px 220px, 260px 220px; }
          }

          @keyframes mxDriftB{
            0%   { transform: translate3d( 1.5%,  1%, 0); background-position: 0px 0px, 0px 0px; }
            100% { transform: translate3d(-1.5%, -1%, 0); background-position: 320px 260px, 320px 260px; }
          }

          @keyframes mxSweep{
            0%   { transform: translate3d(-30%, -8%, 0) rotate(10deg); }
            100% { transform: translate3d( 30%,  8%, 0) rotate(10deg); }
          }

          @media (prefers-reduced-motion: reduce){
            .mxGridA, .mxGridB, .mxSweep{ animation:none; }
          }
        `}</style>

        {/* BG */}
        <div className="absolute inset-0">
          <div className="mxWrap">
            <div className="mxGlow" />
            <div className="mxGridB" />
            <div className="mxGridA" />
            <div className="mxSweep" />
          </div>

          {/* keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/55 to-white" />
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
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Client Services
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Ongoing support that keeps your growth on track.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  We don’t just deliver projects — we stay with you. From account
                  management to performance monitoring and continuous optimization,
                  we operate like your long-term growth partner.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                    <span className="relative">Talk to Client Services</span>
                  </button>

                  <div className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Response:</span>{" "}
                    typically within 24 hours
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Dedicated account manager",
                    "Monthly reporting",
                    "Optimization sprints",
                    "Priority support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-[0_18px_60px_-40px_rgba(2,8,23,0.45)] backdrop-blur">
                  <p className="text-xs font-semibold tracking-widest text-slate-500">
                    WHAT YOU GET
                  </p>

                  <div className="mt-4 space-y-4">
                    {[
                      ["Account Management", "Clear communication, priorities, and timelines."],
                      ["Performance Monitoring", "KPIs, tracking, and actionable reporting."],
                      ["Continuous Optimization", "Iterate, improve, and scale what works."],
                      ["Strategic Advisory", "Quarterly reviews and growth planning."],
                    ].map(([a, b]) => (
                      <div key={a} className="flex gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">{a}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{b}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />

                  <p className="mt-4 text-xs text-slate-500">
                    Premium service model designed for long-term partnerships.
                  </p>
                </div>
              </div>
              {/* /right */}
            </div>
          </div>
        </div>
      </section>
      <ClientServicesSection2 show={show}/>
      <ClientGoalsSection show={show}/>
      <ClientRetainerModelsSection show={show}/>
      <Testimonials/>
      <ClientServicesFAQ show={show}/>
      <Footer/>
    </main>
  );
}
