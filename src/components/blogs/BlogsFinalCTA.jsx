import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogsFinalCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28 text-white">
      {/* premium subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={[
            "rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur",
            "p-8 sm:p-10 md:p-12 shadow-[0_28px_90px_rgba(0,0,0,0.70)]",
            "transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] text-white/60 uppercase">
                Let’s build
              </p>

              <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Ready to turn insights into{" "}
                <span className="text-white/85">real results?</span>
              </h2>

              <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                If you want premium UI, clean systems, high performance, and growth that’s built
                on strategy — we can help you execute properly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-sm font-extrabold text-white
                             shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:shadow-rose-700/35
                             transition-all duration-300"
                >
                  Contact Us →
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-extrabold text-white
                             hover:bg-white/[0.07] transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { t: "Premium UI", d: "Luxury design & spacing" },
                { t: "Performance", d: "Fast & lightweight builds" },
                { t: "Systems", d: "Clean scalable architecture" },
                { t: "Growth", d: "Marketing & SEO execution" },
              ].map((x, i) => (
                <div
                  key={x.t}
                  className={[
                    "rounded-2xl border border-white/10 bg-white/[0.04] p-5",
                    "shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
                    "transition-all duration-1000 ease-out",
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