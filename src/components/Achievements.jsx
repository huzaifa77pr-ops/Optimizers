import Counter from "./Counter";

const stats = [
  { end: 100, suffix: "+", label: "Happy Customers" },
  { end: 100, suffix: "+", label: "Project Complete" },
  { end: 8, suffix: "+", label: "Years of Experience" },
  { end: 95, suffix: "+", label: "Client Satisfaction" },
];

export default function Achievements() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[720px] sm:min-h-[760px] lg:min-h-[710px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/move.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/90" />

        <div className="relative z-10 flex items-center py-12 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Our Achievements
              </h2>
              <p className="mt-2 sm:mt-3 text-white text-sm sm:text-lg">
                Trusted by Brands. Driven by Results.
              </p>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-white/15 bg-black/10 backdrop-blur-md
                    p-6 sm:p-8 lg:p-10
                    transition-all duration-300
                    hover:-translate-y-2 hover:bg-white/14 hover:border-white/30
                    hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                  "
                >
                  <div
                    className="
                      pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full
                      bg-emerald-400/15 blur-3xl
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                  <div
                    className="
                      pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full
                      bg-sky-400/12 blur-3xl
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-tr from-white/0 via-white/10 to-white/0
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      <Counter end={s.end} />
                      <span className="ml-1">{s.suffix}</span>
                    </div>

                    <div className="mt-2 sm:mt-3 text-slate-200 font-semibold text-sm sm:text-base">
                      {s.label}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="
                        h-full w-0 bg-emerald-400
                        transition-all duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="h-2 sm:h-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
