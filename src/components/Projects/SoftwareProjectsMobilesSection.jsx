// src/components/Projects/SoftwareProjectsMobilesSection.jsx
import { softwareProjects } from "../../data/softwareProjects";

export default function SoftwareProjectsMobilesSection() {
  return (
    <section className="relative bg-white text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Title (top-left) */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 900ms ease-out both" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.08]">
            Software Projects
          </h2>
          <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
            Three product-style snapshots — each shown inside a mobile screen with scrollable content.
          </p>
          <div className="mt-7 h-px w-full bg-gradient-to-r from-black via-black to-transparent" />
        </div>

        {/* 3 Mobiles */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.slice(0, 3).map((p, idx) => (
            <article
              key={p.id}
              className="group"
              style={{
                animation: "fadeUp 900ms ease-out both",
                animationDelay: `${idx * 120}ms`,
              }}
            >
              {/* Mobile Shell */}
              <div
                className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[2.4rem]
                           border border-black/10 bg-white
                           shadow-[0_18px_70px_rgba(0,0,0,0.14)]
                           transition-transform duration-300 will-change-transform
                           group-hover:-translate-y-1"
              >
                {/* Side frame shine */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-black/90" />

                {/* Top bezel (mobile-like color) */}
                <div className="relative h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/ via-black/50 to-black/" />
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 h-5 w-28 -translate-x-1/2 rounded-full bg-black/90 backdrop-blur" />
                </div>

                {/* Screen */}
                <div className="px-6 pt-5 pb-30">
                  {/* Header inside screen */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-black">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-black/60">{p.subtitle}</p>
                    </div>

                    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/70">
                      v1
                    </span>
                  </div>

                  {/* Scrollable content area INSIDE mobile */}
                  <div className="mt-20">
                    <div
                      className="h-[260px] overflow-y-auto rounded-2xl border border-white/10 bg-white
                                 px-4 py-4 text-sm leading-relaxed text-black/70"
                      style={{
                        scrollbarWidth: "thin",
                      }}
                    >
                      <pre className="whitespace-pre-wrap font-sans">
                        {p.content}
                      </pre>
                    </div>

                    
                    
                  </div>
                </div>

                {/* Bottom bezel (mobile-like color) */}
                <div className="relative h-10">
                  <div className="absolute inset-0 bg-gradient-to-r" />
                  {/* Home indicator */}
                  <div className="absolute left-1/2 top-3 h-1.5 w-28 -translate-x-1/2 rounded-full bg-black/55" />
                </div>

                {/* Premium hover outline (no overlay on screen) */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(16,185,129,0.18), inset 0 0 0 2px rgba(244,63,94,0.10)",
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
