// src/pages/CareersSection9.jsx
import { Link } from "react-router-dom";

export default function CareersSection9() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift {
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
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          animation: "drift 26s linear infinite",
          willChange: "transform",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div
          className="rounded-[2.25rem] border border-white/12 bg-white/[0.04] backdrop-blur-xl
                     shadow-[0_22px_90px_rgba(0,0,0,0.55)] overflow-hidden"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          {/* Top glow strip */}
          <div className="relative h-2 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 via-white/10 to-rose-400/50" />
          </div>

          <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left content */}
              <div className="lg:col-span-8">
                <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
                  Final Step
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
                  Not seeing your role?
                  <span className="text-white/90"> Send your portfolio anyway.</span>
                </h2>

                <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                  We’re always open to exceptional talent. If your work matches premium standards,
                  we’ll reach out when there’s a fit.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-xs text-white/70">
                    Craft-first
                  </span>
                  <span className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-xs text-white/70">
                    Performance mindset
                  </span>
                  <span className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-xs text-white/70">
                    Clear communication
                  </span>
                </div>
              </div>

              {/* Right CTA */}
              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-white/12 bg-black/35 p-6 sm:p-7">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Share your portfolio link and a short note. We’ll review with care.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white
                               transition-transform duration-300 hover:-translate-y-1 hover:bg-red-500"
                  >
                    Contact & Apply
                  </Link>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                  <p className="mt-4 text-xs text-white/55">
                    Same-tab route • No noise • Premium workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
