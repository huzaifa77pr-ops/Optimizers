import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutTeam() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const team = [
    {
      name: "Design Lead",
      role: "Experience & Interface Systems",
      desc: "Luxury UI, typography, interaction rules, and consistency across every screen.",
      accent: "emerald",
    },
    {
      name: "Engineering Lead",
      role: "Performance & Scalable Builds",
      desc: "Fast architecture, clean components, and production-grade implementation.",
      accent: "rose",
    },
    {
      name: "Growth Specialist",
      role: "Marketing & Optimization",
      desc: "Conversion-focused strategy, SEO foundations, and continuous growth loops.",
      accent: "emerald",
    },
  ];

  const skills = [
    "UI/UX Systems",
    "Web Apps",
    "E-commerce",
    "Mobile Platforms",
    "Digital Marketing",
    "AI Consulting",
    "Brand Strategy",
    "Performance",
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div
          className={[
            "max-w-2xl transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
            Team
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Senior specialists — aligned for premium delivery.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We work like a small, sharp team: design excellence, engineering precision, and growth
            strategy — all aligned under one premium standard.
          </p>
        </div>

        {/* team cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {team.map((m, i) => {
            const dot = m.accent === "emerald" ? "bg-emerald-600" : "bg-rose-600";
            const ring =
              m.accent === "emerald"
                ? "hover:border-emerald-200"
                : "hover:border-rose-200";

            return (
              <div
                key={m.name}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7",
                  "shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(2,6,23,0.14)]",
                  ring,
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${160 + i * 90}ms` }}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-slate-200/60 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      Leadership
                    </p>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    Senior
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                  {m.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {m.role}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>

                <div className="mt-6 h-px w-full bg-slate-200" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Premium UI", "Fast Delivery", "Clean Systems"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* skills strip */}
        <div
          className={[
            "mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7",
            "shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "520ms" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Capabilities you get
              </p>
              <p className="mt-1 text-sm text-slate-600">
                A balanced team — design, engineering, and growth under one system.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition-all duration-300"
            >
              About Team
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 hover:bg-rose-500 hover:shadow-rose-500/30 transition-all duration-300"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
