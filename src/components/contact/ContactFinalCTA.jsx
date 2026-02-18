import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactFinalCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-[#070A0F] py-20 overflow-hidden">
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10 backdrop-blur",
            "shadow-[0_26px_80px_rgba(0,0,0,0.65)] transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Final step
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Ready when you are — let’s make it premium.
              </h2>

              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                If you want luxury UI, clean systems, and real performance — share your details
                and we’ll reply with a clear plan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@customisers.dev"
                  className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 hover:bg-rose-400 hover:shadow-rose-400/40 transition-all duration-300"
                >
                  Email Us
                </a>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:shadow-emerald-400/40 transition-all duration-300"
                >
                  See Projects
                </Link>

                <Link
                  to="/platforms/web-platforms"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.06] transition-all duration-300"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { t: "Clarity first", d: "Clear scope, timeline, and deliverables." },
                { t: "Premium polish", d: "Luxury UI + clean spacing + motion." },
                { t: "Fast performance", d: "Lightweight builds, no lag." },
                { t: "Long-term support", d: "Iterate, optimize, and grow." },
              ].map((x, i) => (
                <div
                  key={x.t}
                  className={[
                    "rounded-2xl border border-white/10 bg-white/[0.03] p-5",
                    "shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-all duration-1000 ease-out",
                    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                  ].join(" ")}
                  style={{ transitionDelay: `${220 + i * 90}ms` }}
                >
                  <p className="text-sm font-extrabold text-white">{x.t}</p>
                  <p className="mt-1 text-sm text-white/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-white/10" />
          
        </div>
      </div>
    </section>
  );
}
