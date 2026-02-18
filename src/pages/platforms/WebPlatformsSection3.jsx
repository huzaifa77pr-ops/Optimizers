export default function WebPlatformsSection3() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Subtle white background grid animation */
        @keyframes gridShift {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-40px,40px,0); }
        }
      `}</style>

      {/* Animated Light Grid Background */}
      <div
        className="absolute inset-1 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 2px, white 3px), linear-gradient(to bottom, black 3px, white 3px)",
          backgroundSize: "40px 4px",
          animation: "gridShift 20s linear infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div style={{ animation: "fadeUp 900ms ease-out both" }}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Why Platform Choice Matters
            </h2>

            <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed max-w-xl">
              The right web platform defines your scalability, performance,
              security, and long-term growth. We evaluate architecture,
              integration capability, and operational efficiency before
              selecting the ideal foundation for your system.
            </p>

            <div className="mt-8 h-px w-32 bg-black/20" />
          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {[
              {
                title: "Scalability",
                desc: "Infrastructure designed to grow with traffic, users, and data."
              },
              {
                title: "Security",
                desc: "Structured code, safe integrations, and enterprise-level safeguards."
              },
              {
                title: "Performance",
                desc: "Optimized builds focused on speed and measurable efficiency."
              },
              {
                title: "Flexibility",
                desc: "Customizable systems that evolve with your business model."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-8
                           shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                           transition-all duration-300 hover:-translate-y-1"
                style={{
                  animation: "fadeUp 900ms ease-out both",
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-black/70 leading-relaxed">
                  {item.desc}
                </p>

                {/* Premium Hover Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-black/10 transition-all duration-300" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
