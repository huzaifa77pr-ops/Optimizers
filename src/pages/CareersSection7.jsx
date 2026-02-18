// src/pages/CareersSection7.jsx
export default function CareersSection7() {
  const benefits = [
    {
      title: "Flexible Schedule",
      desc: "Work with focus hours and clear delivery expectations.",
      accent: "emerald",
    },
    {
      title: "Remote Options",
      desc: "Remote-friendly workflows with clean async communication.",
      accent: "rose",
    },
    {
      title: "Growth & Mentorship",
      desc: "Feedback loops, guidance, and skill-building through real projects.",
      accent: "emerald",
    },
    {
      title: "Premium Client Work",
      desc: "Projects that demand quality — and improve your portfolio fast.",
      accent: "rose",
    },
    {
      title: "Tools & Systems",
      desc: "Structured processes, templates, and documentation that reduce chaos.",
      accent: "emerald",
    },
    {
      title: "Performance-Based Growth",
      desc: "Clear progression based on reliability, ownership, and outcomes.",
      accent: "rose",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-60px,60px,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* subtle animated grid */}
      <div
        className="absolute inset-0 opacity-[0.06] anim"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          animation: "drift 26s linear infinite",
          willChange: "transform",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
            Benefits
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Simple benefits. Strong standards.
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            We keep the environment focused — enabling you to do high-quality work without noise.
          </p>

          <div className="mt-8 h-px w-44 bg-white/20" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => (
            <div
              key={b.title}
              className="anim group relative rounded-3xl border border-white/12 bg-white/[0.04] p-8 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.42)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 120}ms`,
              }}
            >
              {/* Accent line */}
              <div
                className={`h-[2px] w-14 ${
                  b.accent === "emerald" ? "bg-emerald-300/70" : "bg-rose-300/70"
                }`}
              />

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                {b.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {b.desc}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              {/* Premium hover outline */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl"
                style={{
                  boxShadow:
                    b.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.22), 0 22px 90px rgba(0,0,0,0.55)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.20), 0 22px 90px rgba(0,0,0,0.55)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
