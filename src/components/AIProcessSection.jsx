// src/components/AIProcessSection.jsx
export default function AIProcessSection({ show = true }) {
  const steps = [
    { t: "Collect Data", tone: "slate" },
    { t: "Prepare Data", tone: "sky" },
    { t: "Train Model", tone: "red" },
    { t: "Evaluate Model", tone: "slateLight" },
    { t: "Deploy Model", tone: "navy" },
  ];

  const toneMap = {
    slate: "bg-slate-600 text-white",
    slateLight: "bg-slate-400 text-white",
    sky: "bg-sky-600 text-white",
    red: "bg-red-600 text-white",
    navy: "bg-slate-900 text-white",
  };

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
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Our Process
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Our team takes care of the entire development process — from data ingestion
              and preparation to deploying models to your applications, devices, and APIs.
            </p>
          </div>
        </div>

        {/* Flow */}
        <div className="mt-10">
          {/* ✅ Desktop/Tablet: GRID (starts from full left, no overflow) */}
          <div className="hidden lg:block">
            {/* wrapper starts from left, and stays inside page */}
            <div className="grid grid-cols-5 gap-5">
              {steps.map((s, idx) => (
                <div key={s.t} className="relative">
                  <div
                    className={[
                      "w-full rounded-2xl px-6 py-10 text-center",
                      "shadow-[0_14px_40px_-30px_rgba(2,8,23,0.40)]",
                      "transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-40px_rgba(2,8,23,0.55)]",
                      toneMap[s.tone],
                    ].join(" ")}
                  >
                    <p className="text-lg font-extrabold tracking-tight">{s.t}</p>
                  </div>

                  
                </div>
              ))}
            </div>

            {/* Retrain loop */}
            <div className="mt-8 flex items-center justify-center gap-3 text-slate-500">
              <div className="h-[2px] w-24 border-t-2 border-dotted border-slate-300" />
              <span className="text-sm font-semibold">Re-train Model</span>
              <div className="h-[2px] w-24 border-t-2 border-dotted border-slate-300" />
            </div>
          </div>

          {/* Mobile/Small screens: vertical flow */}
          <div className="lg:hidden">
            <div className="space-y-4">
              {steps.map((s, idx) => (
                <div key={s.t}>
                  <div
                    className={[
                      "rounded-2xl px-6 py-7 text-center",
                      "shadow-[0_12px_34px_-26px_rgba(2,8,23,0.35)]",
                      toneMap[s.tone],
                    ].join(" ")}
                  >
                    <p className="text-base sm:text-lg font-extrabold tracking-tight">
                      {s.t}
                    </p>
                  </div>

                  {idx !== steps.length - 1 && (
                    <div className="flex items-center justify-center py-2">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-300">
                        <path
                          d="M12 6v12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 14l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-slate-500">
              <div className="h-[2px] w-20 border-t-2 border-dotted border-slate-300" />
              <span className="text-xs sm:text-sm font-semibold">Re-train Model</span>
              <div className="h-[2px] w-20 border-t-2 border-dotted border-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
