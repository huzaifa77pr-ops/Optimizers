// src/components/AIProjectsSlider.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { aiProjects } from "../data/aiProjects";

export default function AIProjectsSlider({ show = true }) {
  const projects = aiProjects;
  const total = projects.length;

  // ✅ 3 cards visible on desktop, 2 on md, 1 on mobile
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // ✅ responsive perView (no heavy libs)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, total - perView);

  const clamp = (v) => Math.min(Math.max(v, 0), maxIndex);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // ✅ auto slide
  useEffect(() => {
    if (paused || total <= perView) return;
    timerRef.current = setInterval(() => next(), 3200);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, total, perView, maxIndex]);

  // ✅ keep index valid when perView changes
  useEffect(() => {
    setIndex((i) => clamp(i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, total]);

  // visible slides (slice)
  const visible = useMemo(() => {
    return projects.slice(index, index + perView);
  }, [projects, index, perView]);

  if (!projects?.length) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-slate-500">
                PROJECTS
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                AI projects showcase
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Auto slider — hover to pause, arrows to control, click any project to open.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="
                  cursor-pointer rounded-xl border border-slate-200 bg-white
                  p-3 text-slate-900 shadow-sm transition
                  hover:bg-slate-50 hover:shadow-md
                  active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-sky-500/30
                "
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M15 5l-7 7 7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                className="
                  cursor-pointer rounded-xl border border-slate-200 bg-white
                  p-3 text-slate-900 shadow-sm transition
                  hover:bg-slate-50 hover:shadow-md
                  active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-sky-500/30
                "
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M9 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider area (pause on hover) */}
        <div
          className="mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 3 cards row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="
                  group block cursor-pointer overflow-hidden rounded-2xl
                  border border-slate-200/70 bg-white
                  shadow-[0_14px_45px_-30px_rgba(2,8,23,0.35)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_22px_70px_-45px_rgba(2,8,23,0.55)]
                  focus:outline-none focus:ring-2 focus:ring-sky-500/30
                "
              >
                {/* image */}
                <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
  <img
    src={p.img}
    alt={p.title}
    className="
      h-full w-full object-cover
      brightness-105 contrast-105
      transition duration-500
      group-hover:scale-[1.04]
      group-hover:brightness-250
    "
    loading="lazy"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

  <div className="absolute left-4 top-4">
    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
      {p.tag}
    </span>
  </div>
</div>


                {/* content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
                    <span className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                      Open
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          d="M7 17L17 7M10 7h7v7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Dots (pages) */}
          <div className="mt-6 flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition cursor-pointer",
                  i === index ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
            <span className="ml-2 text-xs text-slate-500">
              {paused ? "Paused" : "Auto"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
