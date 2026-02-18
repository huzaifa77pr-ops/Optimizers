import { useEffect, useState } from "react";

export default function AboutMissionVision() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const principles = [
    { title: "Craft with intent", desc: "Luxury design that guides attention and converts." },
    { title: "Performance first", desc: "Fast, clean builds with real-world scalability." },
    { title: "Clarity over noise", desc: "Minimal systems, strong typography, sharp structure." },
    { title: "Ownership mindset", desc: "We treat your product like a long-term asset." },
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-rose-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
            Mission & Vision
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            A premium standard — built into every delivery.
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Our mission and vision guide everything we create — combining clarity,
            precision, and performance into systems that feel premium and grow confidently.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Mission */}
          <div
            className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Mission
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              Build high-performance digital experiences that feel premium.
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We combine strategy, luxury UI, and precise engineering to create
              scalable digital systems that look sharp, load fast, and deliver
              measurable results.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Strategy", "Luxury UI", "Engineering", "Growth"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div
            className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-rose-400/10 blur-3xl" />

            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Vision
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              Become the benchmark for luxury-grade digital systems.
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We aim to help modern brands look world-class, operate efficiently,
              and grow through digital ecosystems that are beautiful, fast, and future-ready.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Clarity", "Speed", "Scalability", "Partnership"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div
          className={`mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${360 + i * 80}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm font-extrabold text-slate-900">{p.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
