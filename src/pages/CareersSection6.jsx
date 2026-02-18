// src/pages/CareersSection6.jsx
export default function CareersSection6() {
  const items = [
    {
      title: "Clean Work",
      desc: "Readable structure, consistent spacing, and reliable delivery quality.",
      accent: "emerald",
    },
    {
      title: "Fast Learning",
      desc: "You adapt quickly, ask the right questions, and ship improvements.",
      accent: "rose",
    },
    {
      title: "Strong Fundamentals",
      desc: "Solid basics — code, design, systems, or marketing foundations.",
      accent: "emerald",
    },
    {
      title: "Team Collaboration",
      desc: "Clear communication, respectful feedback, and ownership culture.",
      accent: "rose",
    },
    {
      title: "Consistency",
      desc: "You show up, follow through, and keep standards stable over time.",
      accent: "emerald",
    },
    {
      title: "Client Mindset",
      desc: "You think in outcomes — not just tasks — and protect the final result.",
      accent: "rose",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f4f6] text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes softShift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-34px,34px,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06] anim"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          animation: "softShift 28s linear infinite",
          willChange: "transform",
        }}
      />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.65),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
            What We Look For
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            A quality bar we protect.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            We’re a small team with premium standards — we value craft, clarity, and consistency.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="anim group relative rounded-3xl border border-black/10 bg-white p-8
                         shadow-[0_18px_70px_rgba(0,0,0,0.08)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 120}ms`,
              }}
            >
              {/* accent line */}
              <div
                className={`h-[2px] w-14 ${
                  it.accent === "emerald" ? "bg-emerald-500/70" : "bg-rose-500/70"
                }`}
              />

              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {it.title}
              </h3>

              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                {it.desc}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              {/* premium hover outline */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    it.accent === "emerald"
                      ? "inset 0 0 0 1px rgba(16,185,129,0.18), 0 22px 90px rgba(0,0,0,0.10)"
                      : "inset 0 0 0 1px rgba(244,63,94,0.16), 0 22px 90px rgba(0,0,0,0.10)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
