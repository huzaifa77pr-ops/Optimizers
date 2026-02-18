// src/components/Projects/AIProjectsSection.jsx
import { aiProjectsList } from "../../data/aiProjectsList";

export default function AIProjectsSection() {
  return (
    <section className="relative bg-white text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* ===== Title Top Left ===== */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 900ms ease-out both" }}
        >
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-[1.08]">
            AI Projects
          </h2>

          <p className="mt-4 text-sm md:text-base text-black leading-relaxed">
            Intelligent systems and machine learning builds engineered for performance and precision.
          </p>

          <div className="mt-7 h-px w-full bg-gradient-to-r from-black via-black to-transparent" />
        </div>

        {/* ===== Grid (3 + 3 Desktop) ===== */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjectsList.slice(0, 6).map((p, idx) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
              style={{
                animation: "fadeUp 900ms ease-out both",
                animationDelay: `${idx * 90}ms`,
              }}
            >
              <article
                className="relative overflow-hidden rounded-3xl border border-black/10 bg-white
                           shadow-[0_18px_70px_rgba(0,0,0,0.18)]
                           transition-transform duration-300 will-change-transform
                           hover:-translate-y-1"
              >
                {/* IMAGE (NO overlay) */}
                <div className="w-full">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight text-black">
                      {p.title}
                    </h3>

                    <span
                      className="rounded-full border border-black/15 bg-black px-3 py-1 text-[11px] text-white/90
                                 transition-colors duration-300 group-hover:border-emerald-300/40 group-hover:text-white"
                    >
                      Open ↗
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-black leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Premium Hover Glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(16,185,129,0.18), 0 22px 90px rgba(0,0,0,0.22)",
                  }}
                />
              </article>
            </a>
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
