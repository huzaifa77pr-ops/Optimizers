// src/components/ClientServicesSection2.jsx
export default function ClientServicesSection2({ show = true }) {
  const items = [
    {
      title: "Account Management",
      desc: "A dedicated point of contact to keep priorities, updates, and timelines crystal clear.",
      bullets: ["Weekly check-ins", "Priority alignment", "Clear timelines"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M4 21a8 8 0 0 1 16 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Performance Monitoring",
      desc: "Track KPIs, user behavior, and growth signals—so decisions are data-backed, not guesswork.",
      bullets: ["KPI tracking", "Funnel insights", "Monthly reporting"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M7 14l3-3 3 2 4-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 19h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Continuous Optimization",
      desc: "Ongoing improvements to design, content, and performance—focused on measurable lift.",
      bullets: ["CRO sprints", "A/B ideas", "Performance tuning"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M12 2v4m0 12v4M4 12H2m20 0h-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7.5 7.5 5.7 5.7m12.6 12.6 1.8 1.8M16.5 7.5l1.8-1.8M7.5 16.5l-1.8 1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
    {
      title: "Strategic Advisory",
      desc: "Quarterly reviews and guidance to keep your roadmap aligned with business goals.",
      bullets: ["Quarterly planning", "Risk & opportunity", "Next-step roadmap"],
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M12 2 20 6.5v11L12 22 4 17.5v-11L12 2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v6l4 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-sky-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-widest text-slate-500">
              CLIENT SERVICES
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What ongoing support includes
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              A premium service model designed to keep performance high, priorities clear, and execution consistent.
            </p>
          </div>
        </div>

        {/* Cards (Responsive) */}
        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="
                group relative overflow-hidden rounded-2xl
                border border-sky-100/60 bg-white/75 backdrop-blur
                p-7 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.25)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_18px_55px_-28px_rgba(2,8,23,0.38)]
                hover:border-sky-200/70
              "
            >
              {/* Luxury glow hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-200/28 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-emerald-200/18 blur-3xl" />
              </div>

              {/* Icon */}
              <div className="relative flex items-center justify-center">
                <div
                  className="
                    flex h-16 w-16 items-center justify-center rounded-2xl
                    bg-gradient-to-b from-sky-50 to-white
                    ring-1 ring-slate-200/70
                    text-slate-900 transition
                    group-hover:text-sky-700
                  "
                >
                  {it.icon}
                </div>
              </div>

              <h3 className="relative mt-5 text-center text-xl font-extrabold text-slate-900">
                {it.title}
              </h3>

              <p className="relative mt-3 text-center text-sm leading-relaxed text-slate-600">
                {it.desc}
              </p>

              <ul className="relative mt-5 space-y-2">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mx-auto mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
