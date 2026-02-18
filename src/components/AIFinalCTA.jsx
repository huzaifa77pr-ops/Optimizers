import { useNavigate } from "react-router-dom";

export default function AIFinalCTA({ show = true }) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black">
      {/* subtle premium glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get answers about Artificial Intelligence Consulting
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
            Tell us what you’re building. We’ll recommend the right AI roadmap, use cases,
            and an implementation plan that fits your stack.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group cursor-pointer relative overflow-hidden rounded-xl
                bg-red-600 px-10 py-4 text-sm font-semibold text-white
                shadow-[0_18px_60px_-40px_rgba(239,68,68,0.60)]
                transition-all duration-300
                hover:bg-red-700 hover:shadow-[0_22px_70px_-42px_rgba(239,68,68,0.70)]
                active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-red-500/40
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get Your Answer</span>
            </button>
          </div>

          {/* small premium trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Strategy Call", "Roadmap", "Use Cases", "Deployment Plan"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
