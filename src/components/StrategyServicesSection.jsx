// src/components/StrategyServicesSection.jsx
export default function StrategyServicesSection({ show = true }) {
  const services = [
    {
      title: "Technical Strategy",
      desc:
        "After an audit and analysis, we define high-level technical requirements and constraints to shape a clear implementation roadmap.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16h-11A2.5 2.5 0 0 1 4 13.5v-8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 20h8M10 16v4m4-4v4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7.5 8.5 6 10l1.5 1.5M16.5 8.5 18 10l-1.5 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Foundational Strategy",
      desc:
        "We align goals, define your audience, and set target KPIs — creating a solid foundation for sustainable growth.",
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
            d="M12 2v20M4 6.5l16 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
        </svg>
      ),
    },
    {
      title: "Information Architecture",
      desc:
        "We structure content, navigation, and hierarchy to maximize usability and findability — improving the user experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M7 3h10v5H7V3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v5m-5 0h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M5 13h4v5H5v-5Zm10 0h4v5h-4v-5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Content Strategy",
      desc:
        "We refine messaging and map content to intent — creating compelling narratives that build trust and drive conversions.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10">
          <path
            d="M6 4h12M6 8h12M6 12h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14.5 14.5 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
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
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Digital Strategy Consulting Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-slate-600">
            A clear foundation, smarter structure, and content that converts — all aligned to measurable outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="
                group relative overflow-hidden rounded-2xl
                border border-sky-100/60 bg-white/70 backdrop-blur
                p-7 shadow-[0_10px_30px_-18px_rgba(2,8,23,0.25)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_18px_50px_-26px_rgba(2,8,23,0.35)]
                hover:border-sky-200/70
              "
            >
              {/* soft luxury glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
              </div>

              {/* icon */}
              <div className="relative flex items-center justify-center">
                <div
                  className="
                    flex h-16 w-16 items-center justify-center rounded-2xl
                    bg-gradient-to-b from-sky-50 to-white
                    ring-1 ring-sky-100/70
                    text-slate-900
                    transition
                    group-hover:text-sky-700
                  "
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="relative mt-5 text-center text-xl font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="relative mt-3 text-center text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

              <div className="relative mx-auto mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
