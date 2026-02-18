import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cases = [
  {
    title: "Product Redesign Sprint",
    subtitle: "UX Audit • UI Refresh • Design System",
    metric: "+28% conversions",
    desc: "We simplified flows, improved hierarchy, and refined visual polish for a premium feel.",
  },
  {
    title: "Mobile App UX Upgrade",
    subtitle: "Research • Prototyping • Usability Testing",
    metric: "-35% drop-off",
    desc: "Reduced friction with clearer navigation, better onboarding, and smart micro-interactions.",
  },
  {
    title: "Enterprise Dashboard Design",
    subtitle: "IA • Components • Accessibility",
    metric: "2x faster tasks",
    desc: "Designed a clean, scalable dashboard with a component system for consistent delivery.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ExperienceDesignCaseStudies() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  const goCareers = () => navigate("/careers");

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* No bg image — only clean overlays */}
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2
            text-xs sm:text-sm font-semibold text-white/85 backdrop-blur
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "120ms" }}
          >
            Featured Work
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            Experience Design
          </div>

          <h2
            className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "240ms" }}
          >
            Highlights that show real impact
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-white/70 leading-7
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "360ms" }}
          >
            Premium design improves clarity, trust, and business outcomes — not just visuals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div
              key={c.title}
              className={`
                rounded-3xl border border-white/10
                bg-white/[0.05] backdrop-blur p-7 sm:p-8
                shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:bg-white/[0.07] hover:border-white/20
                hover:shadow-[0_22px_70px_rgba(16,185,129,0.18)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${480 + idx * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold text-white/65">{c.subtitle}</div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-extrabold text-emerald-200">
                  {c.metric}
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-white">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {c.desc}
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              {/* Learn more -> Careers */}
              <button
                type="button"
                onClick={goCareers}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold
                           text-white/75 hover:text-emerald-200 transition cursor-pointer"
              >
                Learn more <ArrowIcon />
              </button>
            </div>
          ))}
        </div>

        {/* Optional CTA (also to careers) */}
        <div
          className={`mt-14 flex items-center justify-center
          transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "980ms" }}
        >
          <button
            type="button"
            onClick={goCareers}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3
                       bg-emerald-600 text-white text-sm font-semibold
                       shadow-md hover:bg-emerald-700 transition"
          >
            Explore Careers <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
