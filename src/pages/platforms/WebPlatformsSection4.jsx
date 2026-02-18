export default function WebPlatformsSection4() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes subtleGridMove {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-60px,60px,0); }
        }
      `}</style>

      {/* Subtle animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "subtleGridMove 25s linear infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* Section Heading */}
        <div
          className="text-center max-w-3xl mx-auto"
          style={{ animation: "fadeUp 900ms ease-out both" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Platform Capability Overview
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
            A structured comparison to help you understand which platform aligns
            with your digital objectives and growth strategy.
          </p>

          <div className="mt-8 h-px w-40 mx-auto bg-white/20" />
        </div>

        {/* Comparison Blocks */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Shopify",
              best: "E-Commerce",
              scale: "High",
              custom: "Moderate"
            },
            {
              title: "WordPress",
              best: "Content & Marketing",
              scale: "Medium",
              custom: "High"
            },
            {
              title: "Headless",
              best: "Scalable Systems",
              scale: "Very High",
              custom: "Very High"
            },
            {
              title: "Custom Stack",
              best: "Enterprise Apps",
              scale: "Unlimited",
              custom: "Unlimited"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8
                         transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 900ms ease-out both",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <p>
                  <span className="text-white/90">Best For:</span> {item.best}
                </p>
                <p>
                  <span className="text-white/90">Scalability:</span> {item.scale}
                </p>
                <p>
                  <span className="text-white/90">Customization:</span> {item.custom}
                </p>
              </div>

              {/* Premium hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     boxShadow:
                       "inset 0 0 0 1px rgba(255,255,255,0.2), 0 20px 60px rgba(0,0,0,0.6)",
                   }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
