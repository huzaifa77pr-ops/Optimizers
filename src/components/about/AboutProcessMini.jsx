import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutProcessMini() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    {
      title: "Discover",
      desc: "Goals, audience, positioning, and constraints.",
      tag: "Clarity",
    },
    {
      title: "Design",
      desc: "Luxury UI, typography system, and interaction rules.",
      tag: "Craft",
    },
    {
      title: "Build",
      desc: "Fast, scalable implementation with clean structure.",
      tag: "Performance",
    },
    {
      title: "Launch",
      desc: "QA, polish, deployment, and go-live readiness.",
      tag: "Precision",
    },
    {
      title: "Optimize",
      desc: "Iteration, growth loops, and continuous improvements.",
      tag: "Growth",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#070A0F]">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft animated blobs */}
        <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl aboutBlobFloat" />
        <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-rose-500/10 blur-3xl aboutBlobFloat2" />
        <div className="absolute left-[-140px] bottom-[-140px] h-[520px] w-[520px] rounded-full bg-sky-500/8 blur-3xl aboutBlobFloat3" />

        {/* subtle moving grid */}
        <div className="absolute inset-0 opacity-[0.18] aboutGridMove [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={[
            "max-w-2xl transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            Our process
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            A clean workflow — designed to ship premium work.
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            We keep it simple: clear strategy, luxury design, fast builds, and continuous optimization.
            No noise — just disciplined delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          {/* top progress line */}
          <div
            className={[
              "relative h-[2px] w-full max-w-5xl transition-all duration-1000 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <div className="absolute inset-0 w-full rounded-full bg-gradient-to-r from-emerald-400/70 via-white/30 to-rose-400/70 aboutLineFill" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={[
                  "relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-all duration-300",
                  "hover:-translate-y-1 hover:bg-white/[0.06]",
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${220 + i * 90}ms` }}
              >
                {/* step dot */}
                <div className="absolute -top-3 left-6 h-6 w-6 rounded-full border border-white/15 bg-[#070A0F] grid place-items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                  Step {i + 1}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={[
              "mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur",
              "shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-all duration-1000 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "720ms" }}
          >
            <p className="text-sm sm:text-base font-semibold text-white/80">
              Want a premium roadmap for your project?
              <span className="text-white/60"> Let’s map it clearly.</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:shadow-emerald-400/40 transition-all duration-300"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 hover:bg-rose-400 hover:shadow-rose-400/40 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
