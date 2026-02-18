import { useEffect, useMemo, useState } from "react";

function useCountUp({ to = 0, duration = 1200, start = 1, enabled = true }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    const from = start;
    const target = Math.max(start, to);
    const t0 = performance.now();

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      // smooth ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(from + (target - from) * eased);

      setValue(next);

      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    setValue(from);
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [to, duration, start, enabled]);

  return value;
}

function StatCard({ item, enabled, index }) {
  const num = useCountUp({
    to: item.target,
    duration: 1200 + index * 150,
    start: 1,
    enabled,
  });

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.06]">
      <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
        {num}
        {item.suffix}
      </div>

      <p className="mt-2 text-sm text-white/60">{item.label}</p>

      <div className="pointer-events-none absolute -bottom-7 -right-7 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl" />
    </div>
  );
}

export default function AboutStory() {
  const [show, setShow] = useState(false);
  const [startCount, setStartCount] = useState(false);

  const stats = useMemo(
    () => [
      { raw: "120+", label: "Projects Delivered" },
      { raw: "8+", label: "Industries Served" },
      { raw: "5 Years", label: "Digital Experience" },
      { raw: "98%", label: "Client Retention" },
    ],
    []
  );

  const parsedStats = useMemo(() => {
    return stats.map((s) => {
      // grab first number in string
      const m = s.raw.match(/(\d+)/);
      const target = m ? parseInt(m[1], 10) : 0;
      const suffix = s.raw.replace(String(target), "");
      return { target, suffix, label: s.label };
    });
  }, [stats]);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    // start counting slightly after section reveal begins
    const t = setTimeout(() => setStartCount(true), 250);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <section className="relative w-full bg-[#070A0F] py-20 overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "grid lg:grid-cols-2 gap-14 items-center transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* LEFT - STORY */}
          <div
            className={[
              "transition-all duration-1000 ease-out delay-100",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              We build digital systems <br />
              designed for clarity and growth.
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed text-base sm:text-lg">
              Optimizers was founded with one goal — to craft premium,
              high-performance experiences that feel luxury and convert with intent.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg">
              From strategy to design to engineering, we turn ideas into scalable
              products that look sharp, load fast, and grow confidently.
            </p>

            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-emerald-400 to-rose-400 rounded-full" />
          </div>

          {/* RIGHT - STATS */}
          <div
            className={[
              "grid grid-cols-2 gap-6 transition-all duration-1000 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            {parsedStats.map((item, index) => (
              <div
                key={item.label}
                className={[
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${260 + index * 90}ms` }}
              >
                <StatCard item={item} enabled={startCount} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
