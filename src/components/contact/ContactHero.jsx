import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background (light + dark visible animation, NO circles) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Center animated area */}
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[92vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.2rem]">
          {/* base grid (dark + clear) */}
          <div className="absolute inset-0 opacity-[0.62] contactGridMove [background-image:linear-gradient(rgba(2,6,23,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />

          {/* subtle diagonal hatch */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(135deg,rgba(2,6,23,0.9)_0,rgba(2,6,23,0.9)_1px,transparent_1px,transparent_14px)]" />

          {/* diagonal sweeps */}
          <div className="absolute inset-0">
            <div className="contactSweep contactSweep--1" />
            <div className="contactSweep contactSweep--2" />
            <div className="contactSweep contactSweep--3" />
          </div>

          {/* fade edges so focus stays center */}
          <div className="absolute inset-0 bg-white/45 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]" />

          {/* subtle border */}
          <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-slate-900/10" />
        </div>

        {/* top vignette */}
        <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_top,rgba(2,6,23,0.10),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[78vh] flex items-center py-16 sm:py-20">
          <div
            className={[
              "w-full transition-all duration-1000 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Contact Customisers
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Let’s Build Something{" "}
                <span className="text-slate-700">Premium</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                Tell us what you’re building — we’ll respond with clarity, next steps,
                and a premium plan that fits your goals.
              </p>

              {/* Buttons (Start a Project removed) */}
              <div className="mt-8 flex flex-wrap gap-3">
                {/* Green */}
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  View Work
                </Link>

                {/* RED Explore Platforms */}
                <Link
                  to="/platforms/web-platforms"
                  className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 hover:bg-rose-500 hover:shadow-rose-500/30 transition-all duration-300"
                >
                  Explore Platforms
                </Link>
              </div>

              {/* mini info */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  { k: "Response time", v: "Within 24 hours" },
                  { k: "Timezone", v: "PKT (UTC+5)" },
                  { k: "Focus", v: "Luxury + performance" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 shadow-[0_14px_40px_rgba(2,6,23,0.08)]"
                  >
                    <p className="text-xs font-semibold tracking-wide text-slate-500">
                      {x.k}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-slate-900">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* right card */}
            <div className="mt-10 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[420px]">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 sm:p-7 shadow-[0_20px_60px_rgba(2,6,23,0.10)] backdrop-blur">
                <p className="text-sm font-extrabold text-slate-900">
                  What to include
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Share your goals, timeline, and any reference links. If you have a brief,
                  you can attach it in the form.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Project goal + audience",
                    "Required pages/features",
                    "Deadline / timeline",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-rose-600" />
                      <p className="text-sm text-slate-700">{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-slate-900/10" />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
