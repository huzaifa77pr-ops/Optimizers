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
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 900ms ease-out both" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.08]">
            Software Projects
          </h2>
          <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
            Real product snapshots — scroll inside the phone to reveal the second screen.
          </p>
          <div className="mt-7 h-px w-full bg-gradient-to-r from-black via-black to-transparent" />
        </div>

        {/* 3 Mobiles */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.slice(0, 3).map((p, idx) => {
            // ✅ Expect your data to have images like:
            // p.images = ["/img1.jpg", "/img2.jpg"]
            // If not, it will use fallback placeholders (change these paths)
            const img1 = p?.images?.[0] || "/projects/software-1.jpg";
            const img2 = p?.images?.[1] || "/projects/software-2.jpg";

            return (
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
                  {/* frame ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-black/90" />

                  {/* Top bezel */}
                  <div className="relative h-11 bg-black">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-2.5 h-5 w-28 -translate-x-1/2 rounded-full bg-black/90" />
                    {/* small speaker dot */}
                    <div className="absolute left-1/2 top-[18px] h-1 w-10 -translate-x-1/2 rounded-full bg-white/10" />
                  </div>

                  {/* ✅ Screen (ONLY this scrolls, not inner box) */}
                  <div
                    className="relative h-[540px] overflow-y-auto bg-white"
                    style={{
                      scrollbarWidth: "thin",
                      WebkitOverflowScrolling: "touch",
                      scrollSnapType: "y mandatory",
                    }}
                  >
                    {/* tiny header inside screen */}
                    <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-black/10">
                      <div className="px-5 py-3 flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold tracking-tight text-black truncate">
                            {p.title}
                          </h3>
                          <p className="mt-0.5 text-[11px] text-black/60 truncate">
                            {p.subtitle}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/70">
                          v1
                        </span>
                      </div>
                    </div>

                    {/* ✅ Image 1 */}
                    <div className="px-5 pt-5 pb-4" style={{ scrollSnapAlign: "start" }}>
                      <div className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
                        <img
                          src={img1}
                          alt={`${p.title} screen 1`}
                          className="w-full object-cover"
                        />
                      </div>

                      <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3">
                        <p className="text-xs font-semibold tracking-wide text-black/70">
                          Scroll inside the phone to see the next screen ↓
                        </p>
                      </div>
                    </div>

                    {/* ✅ Image 2 (reveals when you scroll) */}
                    <div className="px-5 pb-6" style={{ scrollSnapAlign: "start" }}>
                      <div className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
                        <img
                          src={img2}
                          alt={`${p.title} screen 2`}
                          className="w-full object-cover"
                        />
                      </div>

                      <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3">
                        <p className="text-xs text-black/65 leading-relaxed">
                          Second screen revealed — looks like a real mobile flow.
                        </p>
                      </div>
                    </div>

                     <div className="px-5 pb-6" style={{ scrollSnapAlign: "start" }}>
                      <div className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
                        <img
                          src={img2}
                          alt={`${p.title} screen 2`}
                          className="w-full object-cover"
                        />
                      </div>

                      <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3">
                        <p className="text-xs text-black/65 leading-relaxed">
                          Second screen revealed — looks like a real mobile flow.
                        </p>
                      </div>
                    </div>

                    {/* bottom breathing space */}
                    <div className="h-6" />
                  </div>

                  {/* Bottom bezel */}
                  <div className="relative h-11 bg-black">
                    {/* Home indicator */}
                    <div className="absolute left-1/2 top-4 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/25" />
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
            );
          })}
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
