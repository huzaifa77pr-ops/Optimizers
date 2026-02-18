import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#070A0F]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle top glow */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-500/8 blur-3xl" />

        {/* CENTER GRID LINES (only center area) */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          {/* faint grid */}
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

          {/* moving multicolor scan-lines (left -> right) */}
          <div className="absolute inset-0">
            <div className="aboutLine aboutLine--emerald" />
            <div className="aboutLine aboutLine--rose" />
            <div className="aboutLine aboutLine--sky" />
            <div className="aboutLine aboutLine--violet" />
          </div>

          {/* soft vignette edges so center only */}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_38%,transparent_72%)] bg-black/40" />
        </div>

        {/* subtle noise-ish overlay via gradients (cheap) */}
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[78vh] py-16 sm:py-20 lg:py-24 flex items-center">
          <div
            className={[
              "w-full transition-all duration-700 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                About Optimizers
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Precision. Craft.{" "}
                <span className="text-white/80">Premium growth</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
                We’re a luxury digital agency building high-performance experiences —
                from strategy and design to scalable development and growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
  {/* Green Button */}
  <Link
    to="/projects"
    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:shadow-emerald-400/40 transition-all duration-300"
  >
    Explore Work
  </Link>

  {/* Red Button */}
  <Link
    to="/contact"
    className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 hover:bg-rose-400 hover:shadow-rose-400/40 transition-all duration-300"
  >
    Let’s Talk
  </Link>
</div>


              {/* mini proof row */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  { k: "Luxury UI", v: "Minimal + premium" },
                  { k: "Performance", v: "Fast & scalable" },
                  { k: "Partnership", v: "Long-term focus" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
                  >
                    <p className="text-xs font-semibold tracking-wide text-white/60">
                      {item.k}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* right-side glass card (optional) */}
            <div className="mt-10 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[420px]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur">
                <p className="text-sm font-semibold text-white">What we stand for</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Clean systems, strong typography, thoughtful motion, and measurable outcomes —
                  engineered with care.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Strategy-first execution",
                    "Design with conversion intent",
                    "Engineering for speed & clarity",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-rose-400" />
                      <p className="text-sm text-white/80">{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-white/10" />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
