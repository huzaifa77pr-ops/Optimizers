import { useEffect, useState } from "react";

function Icon({ type }) {
  // simple inline SVGs (no external libs)
  const common = "h-5 w-5";
  switch (type) {
    case "strategy":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 18V6m0 12h16M8 16l3-4 3 2 4-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "design":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20h16M7 16l10-10 2 2-10 10H7v-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "performance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20.5 11a8.5 8.5 0 1 1-17 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7h10v10H7V7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 10h3M17 10h3M10 4v3M10 17v3M14 4v3M14 17v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "transparency":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5C6.5 5 3 12 3 12s3.5 7 9 7 9-7 9-7-3.5-7-9-7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function AboutDifferentiators() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const cards = [
    {
      type: "strategy",
      title: "Strategy-first execution",
      desc: "We align goals, audience, and positioning before design and build — so outcomes stay focused.",
      accent: "emerald",
    },
    {
      type: "design",
      title: "Luxury UI that converts",
      desc: "Minimal layouts, strong typography, and intentional motion — made to feel premium and perform.",
      accent: "rose",
    },
    {
      type: "performance",
      title: "Performance engineering",
      desc: "Fast load times, clean architecture, and scalable code — built for real traffic and growth.",
      accent: "emerald",
    },
    {
      type: "systems",
      title: "Systems over pages",
      desc: "Reusable sections, consistent design rules, and modular components that evolve with you.",
      accent: "rose",
    },
    {
      type: "transparency",
      title: "Transparent partnership",
      desc: "Clear updates, clean timelines, and proactive communication — no surprises, no chaos.",
      accent: "emerald",
    },
    {
      type: "spark",
      title: "Quality over noise",
      desc: "We ship fewer, better things — with polish, clarity, and a premium standard.",
      accent: "rose",
    },
  ];

  return (
    <section className="relative w-full bg-[#070A0F] py-20 overflow-hidden">
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div
          className={[
            "max-w-2xl transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            What makes us different
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Premium work isn’t just design — it’s discipline.
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            We combine luxury-grade UI with performance-focused engineering — and build clean systems
            that stay consistent as your brand scales.
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const glow =
              c.accent === "emerald"
                ? "shadow-emerald-500/10 hover:shadow-emerald-500/20"
                : "shadow-rose-500/10 hover:shadow-rose-500/20";

            const dot =
              c.accent === "emerald" ? "bg-emerald-400" : "bg-rose-400";

            const iconColor =
              c.accent === "emerald" ? "text-emerald-300" : "text-rose-300";

            return (
              <div
                key={c.title}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur transition-all duration-300",
                  "hover:-translate-y-1 hover:bg-white/[0.06]",
                  glow,
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${180 + i * 80}ms` }}
              >
                {/* corner glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03]">
                    <span className={iconColor}>
                      <Icon type={c.type} />
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    <p className="text-sm font-semibold tracking-wide text-white/70">
                      Advantage
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-white">
                  {c.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-6 h-px w-full bg-white/10" />

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
