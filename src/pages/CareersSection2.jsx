// src/pages/CareersSection2.jsx
export default function CareersSection2() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridDrift {
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
          backgroundSize: "90px 90px",
          animation: "gridDrift 22s linear infinite",
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
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/90">
            Why Us
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl text-black/70 font-semibold tracking-tight leading-[1.1]">
            Work with a team that ships premium.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black leading-relaxed">
            We keep standards high and communication clean — so every project feels
            focused, intentional, and built to last.
          </p>

          <div className="mt-8 h-px w-44 bg-black" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Craft-First",
              desc: "We care about typography, spacing, polish — and performance.",
              accent: "emerald",
            },
            {
              title: "High Ownership",
              desc: "You lead your work end-to-end with trust and accountability.",
              accent: "rose",
            },
            {
              title: "Growth Mindset",
              desc: "Mentorship, feedback loops, and better systems over time.",
              accent: "emerald",
            },
            {
              title: "Real Impact",
              desc: "Client work that matters — shipped with clarity and consistency.",
              accent: "rose",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim group relative rounded-1xl border border-black/90 bg-black/70 p-7 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.35)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 130}ms`,
              }}
            >
              {/* Accent line */}
              <div
                className={`h-[2px] w-14 ${
                  item.accent === "emerald" ? "bg-emerald-300/70" : "bg-rose-300/70"
                }`}
              />

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              {/* Premium hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    item.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.22), 0 22px 90px rgba(0,0,0,0.50)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.20), 0 22px 90px rgba(0,0,0,0.50)",
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
