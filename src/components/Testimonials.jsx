import { useEffect, useMemo, useRef, useState } from "react";

function Stars({ value = 5 }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < full;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${active ? "text-amber-400" : "text-white/20"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.27l5.18 3.04-1.39-5.99L20.5 9.9l-6.16-.53L12 3.7 9.66 9.37 3.5 9.9l4.71 4.42-1.39 5.99L12 17.27z" />
          </svg>
        );
      })}
    </div>
  );
}

function useInViewOnce(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const reviews = [
  {
    name: "PapaLavi",
    role: "Walmart Onboarding Expert",
    img: "/papa.jpg",
    rating: 5,
    text:
      "OPTIMIZERS LLC delivered a clean website with a premium feel. The UI is fast, responsive, and the conversion-focused layout made a real difference.",
  },
  {
    name: "Sir William",
    role: "Startup CEO",
    img: "/boy.jpg",
    rating: 5,
    text:
      "From strategy to execution, everything was smooth. They communicated clearly and delivered on time. The end result looks modern and professional.",
  },
  {
    name: "Sara Jonathan",
    role: "Marketing Manager",
    img: "/girl1.jpg",
    rating: 4,
    text:
      "The design quality is top-notch. Our brand looks stronger online now, and the site performs great on mobile. Highly recommended.",
  },
  {
    name: "JohnSnow",
    role: "Agency Partner",
    img: "/boy1.jpg",
    rating: 5,
    text:
      "Their attention to detail is impressive. The animations and layout are subtle but premium—exactly what we wanted for a tech-focused brand.",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInViewOnce(0.16);

  const delays = useMemo(() => reviews.map((_, i) => i * 120), []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div
          className={`text-center transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <p className="text-emerald-300 font-extrabold tracking-widest text-sm">
            TESTIMONIALS
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            What Clients Say
          </h2>
          <p className="mt-3 text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Real feedback from businesses we’ve helped—focused on quality, performance, and results.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex gap-5 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
            {reviews.map((r, idx) => (
              <article
                key={r.name}
                className={`
                  group relative min-w-[280px] sm:min-w-0
                  overflow-hidden rounded-2xl
                  border border-white/10 bg-white/5 backdrop-blur
                  p-6 sm:p-7
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-white/20 hover:bg-white/7
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.60)]
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{
                  transitionDelay: inView ? `${delays[idx]}ms` : "0ms",
                }}
              >
                <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-extrabold text-white truncate">{r.name}</p>
                    <p className="text-xs text-slate-300 truncate">{r.role}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Stars value={r.rating} />
                </div>

                <p className="mt-4 text-slate-200 leading-relaxed text-sm">
                  “{r.text}”
                </p>

                <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 sm:hidden text-center text-xs text-slate-400">
            Swipe to see more →
          </div>
        </div>
      </div>
    </section>
  );
}
