// src/components/StrategyFinalCTA.jsx
import { useNavigate } from "react-router-dom";

export default function StrategyFinalCTA({ show = true }) {
  const navigate = useNavigate();

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Get Answers About{" "}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-500 bg-clip-text text-transparent">
              Strategy & Insights
            </span>
          </h2>

          {/* Sub text */}
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you're refining your roadmap or planning your next growth move,
            our team is ready to guide you with clarity and precision.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group relative overflow-hidden cursor-pointer
                rounded-xl bg-red-600 px-8 py-4
                text-sm sm:text-base font-semibold text-white
                shadow-md transition-all duration-300
                hover:bg-red-700 hover:shadow-lg
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-red-500/40
              "
            >
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get Your Answer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
