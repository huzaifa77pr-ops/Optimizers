import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutProof() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { k: "Delivery", v: "Fast, clean, consistent" },
    { k: "Quality", v: "Luxury UI + performance" },
    { k: "Retention", v: "Long-term partnerships" },
    { k: "Systems", v: "Scalable components" },
  ];

  const testimonials = [
    {
      quote:
        "The UI feels premium and the site loads extremely fast. Everything is clean, consistent, and built like a real system.",
      name: "Product Lead",
      company: "E-commerce Brand",
      accent: "emerald",
    },
    {
      quote:
        "They understood our goals quickly and shipped polished work without noise. Communication stayed clear from day one.",
      name: "Marketing Manager",
      company: "Growth Team",
      accent: "rose",
    },
    {
      quote:
        "Design + engineering were both strong. The result looks world-class and performs like a product, not a template.",
      name: "Founder",
      company: "Service Business",
      accent: "emerald",
    },
  ];

  const trust = [
    "Luxury brands",
    "E-commerce teams",
    "Startups & founders",
    "Service businesses",
    "Tech products",
    "Marketing teams",
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_at_top,rgba(15,23,42,0.08),transparent_60%)]" />
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
            Proof & trust
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Premium outcomes — backed by disciplined delivery.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We focus on clean systems, luxury detail, and performance — so the final result feels
            premium and works reliably at scale.
          </p>
        </div>

        {/* stats row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={[
                "rounded-3xl border border-slate-200 bg-white p-6",
                "shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(2,6,23,0.14)]",
                "transition-all duration-1000 ease-out",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: `${140 + i * 80}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {s.k}
              </p>

              <p className="mt-2 text-lg font-extrabold text-slate-900">{s.v}</p>

              <div className="mt-5 h-px w-full bg-slate-200" />

              
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const dot = t.accent === "emerald" ? "bg-emerald-600" : "bg-rose-600";
            const ring =
              t.accent === "emerald"
                ? "hover:border-emerald-200"
                : "hover:border-rose-200";

            return (
              <div
                key={t.name + t.company}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7",
                  "shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(2,6,23,0.14)]",
                  ring,
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${420 + i * 90}ms` }}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-slate-200/60 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${dot}`} />
                  <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Testimonial
                  </p>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="mt-6 h-px w-full bg-slate-200" />

                <div className="mt-4">
                  <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* trust strip */}
        <div
          className={[
            "mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7",
            "shadow-[0_18px_55px_rgba(2,6,23,0.10)] transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "760ms" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Trusted across teams
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Clean delivery for brands that care about quality and results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {trust.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:shadow-emerald-500/30 transition-all duration-300"
            >
              See Projects
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
