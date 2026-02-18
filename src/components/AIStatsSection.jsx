import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function useInViewOnce(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setSeen(true);
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);

  return { ref, seen };
}

function animateNumber(from, to, durationMs, onUpdate) {
  const start = performance.now();

  function tick(now) {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const value = from + (to - from) * eased;
    onUpdate(value);
    if (t < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export default function AIStatsSection({ show = true }) {
  const navigate = useNavigate();
  const { ref, seen } = useInViewOnce(0.25);

  const stats = useMemo(
    () => [
      { value: 28, suffix: "%", label: "Decision speed improvement", hint: "Faster clarity with better signals" },
      { value: 40, suffix: "%", label: "Manual workload reduced", hint: "Automation + smarter workflows" },
      { value: 92, suffix: "%", label: "Client retention signal", hint: "Long-term partnership mindset" },
      { value: 14, suffix: "d", label: "Average MVP timeline", hint: "From idea to first working outcome" },
    ],
    []
  );

  const [nums, setNums] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!seen) return;

    stats.forEach((s, i) => {
      animateNumber(0, s.value, 900 + i * 120, (v) => {
        setNums((prev) => {
          const next = [...prev];
          next[i] = v;
          return next;
        });
      });
    });
  }, [seen, stats]);

  return (
    <section className="bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            PERFORMANCE SIGNALS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Outcomes we typically aim to deliver
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            Every engagement is different — these signals represent the type of measurable
            impact our AI consulting focuses on.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="
                group relative overflow-hidden rounded-2xl
                border border-slate-200/70 bg-white
                p-6 shadow-[0_12px_30px_-22px_rgba(2,8,23,0.25)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_55px_-32px_rgba(2,8,23,0.38)]
              "
            >
              {/* subtle luxury glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-emerald-200/18 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {Math.round(nums[i])}
                    <span className="text-xl font-extrabold text-slate-900">
                      {s.suffix}
                    </span>
                  </p>

                  <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    AI
                  </span>
                </div>

                <p className="mt-3 text-sm font-extrabold text-slate-900">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.hint}
                </p>

                <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate-600">
            Want a roadmap and metrics tailored to your business?
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="
              group cursor-pointer relative overflow-hidden rounded-xl
              bg-red-600 px-7 py-3.5 text-sm font-semibold text-white
              shadow-md transition-all duration-300
              hover:bg-red-700 hover:shadow-lg
              active:scale-[0.98]
              focus:outline-none focus:ring-2 focus:ring-red-500/40
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Get an AI Proposal</span>
          </button>

          <p className="text-xs text-slate-500">
            Strategy call • timeline • integration plan • deliverables
          </p>
        </div>
      </div>
    </section>
  );
}
