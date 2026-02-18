import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { dmProjects } from "../data/dmProjects";

export default function DigitalMarketingProjectsSlider({
  title = "Digital Marketing Projects",
  intervalMs = 2600,
}) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  // Duplicate list for seamless loop
  const items = useMemo(() => [...dmProjects, ...dmProjects], []);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  // Auto slide (pause on hover)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [paused, intervalMs]);

  // Apply transform based on current card width
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector("[data-card]");
    if (!firstCard) return;

    const cardW = firstCard.getBoundingClientRect().width;
    const gap = 18; // match gap in CSS
    const x = (cardW + gap) * index;

    track.style.transform = `translateX(${-x}px)`;
    track.style.transition = "transform 650ms cubic-bezier(.2,.8,.2,1)";

    // when moved beyond original list length -> jump back without animation
    if (index >= dmProjects.length) {
      const jumpAt = dmProjects.length;

      // after the animation ends, snap back
      const snap = setTimeout(() => {
        track.style.transition = "none";
        const snapX = (cardW + gap) * (index - jumpAt);
        track.style.transform = `translateX(${-snapX}px)`;
        // force reflow then restore transition for next moves
        track.getBoundingClientRect();
        track.style.transition = "transform 650ms cubic-bezier(.2,.8,.2,1)";
        setIndex((i) => i - jumpAt);
      }, 700);

      return () => clearTimeout(snap);
    }
  }, [index]);

  // ✅ NEW: manual controls (left/right)
  const prev = () => {
    setPaused(true);
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setPaused(true);
    setIndex((i) => i + 1);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* clean luxury background (no dark overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="flex items-end justify-between gap-5 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800">
              Case Studies{" "}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />{" "}
              Marketing
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div
          className="mt-10 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* ✅ NEW: Left/Right arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20
                       grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white
                       shadow-md hover:bg-slate-50 transition"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20
                       grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white
                       shadow-md hover:bg-slate-50 transition"
          >
            ›
          </button>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-[18px] will-change-transform">
              {items.map((p, i) => (
                <a
                  key={p.title + i}
                  data-card
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    group cursor-pointer
                    flex-shrink-0
                    w-[86%] sm:w-[48%] lg:w-[32%]
                    rounded-3xl border border-slate-200 bg-white
                    shadow-[0_14px_40px_rgba(2,6,23,0.10)]
                    overflow-hidden
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:border-slate-300
                    hover:shadow-[0_22px_60px_rgba(2,6,23,0.16)]
                  `}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.3";
                        e.currentTarget.style.objectFit = "contain";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">{p.meta}</p>
                      </div>

                      <div
                        className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900
                                      transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50"
                      >
                        →
                      </div>
                    </div>

                    <div className="mt-6 h-px w-full bg-slate-400" />

                    <div className="mt-4 text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition">
                      Open project
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        ›
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3
                       bg-emerald-600 text-white text-sm font-semibold
                       shadow-md hover:bg-emerald-700 transition"
          >
            View All Projects <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
