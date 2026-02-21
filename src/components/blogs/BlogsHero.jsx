import { useEffect, useState } from "react";

export default function BlogsHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-28 md:py-36">

      {/* ===== FAST WHITE HACKER RAIN ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-[12px] leading-4 text-white/40 whitespace-pre
                       animate-[rainFast_3s_linear_infinite]"
            style={{
              left: `${i * 6}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
{`01010101
10101010
11001010
10110101
01011010
10101001
01100110
11010101
01010110
10101101
11010101
01011010`}
          </div>
        ))}

        <style>{`
          @keyframes rainFast {
            from { transform: translateY(-120%); }
            to   { transform: translateY(120%); }
          }
        `}</style>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div
          className={`max-w-4xl transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-white/60 uppercase">
            Knowledge Base
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Blogs
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Deep insights on scalable systems, performance architecture,
            digital growth and artificial intelligence — built for modern teams.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:flex sm:flex-wrap gap-10">
            {[
              { number: "50+", label: "Articles Published" },
              { number: "5+", label: "Core Categories" },
              { number: "Weekly", label: "Fresh Insights" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-extrabold text-white">
                  {item.number}
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}