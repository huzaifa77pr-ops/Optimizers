import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExperienceDesignCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full bg-black">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-slate-0 bg-gradient-to-br from-slate-0 via-black to-emerald-0">
          {/* luxury glow */}
          
          

          <div className="relative px-6 sm:px-10 py-12 sm:py-14 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Get answers about Experience Design
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-100">
              Tell us what you’re building — we’ll recommend the best UX/UI approach for your goals.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-2xl px-7 py-3.5
                           bg-rose-600 text-white text-sm sm:text-base font-extrabold
                           shadow-[0_14px_30px_rgba(244,63,94,0.22)]
                           hover:bg-rose-700 transition"
              >
                Get Your Answer
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-xl bg-white/12 group-hover:bg-white/16 transition">
                  →
                </span>
              </Link>
            </div>

            {/* small trust line */}
            <div className="mt-6 text-xs sm:text-sm text-slate-200">
              Quick reply • Clear scope • Premium design direction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
