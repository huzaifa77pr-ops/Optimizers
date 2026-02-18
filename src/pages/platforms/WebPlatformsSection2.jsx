import { webPlatformsData } from "../../data/webPlatformsData";

export default function WebPlatformsSection2() {
  return (
    <section className="relative bg-white text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Section Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 800ms ease-out both" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Platforms We Build On
          </h2>

          <p className="mt-4 text-base text-black/70 leading-relaxed">
            Each platform is selected based on scalability, flexibility,
            and business goals — ensuring long-term digital success.
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {webPlatformsData.map((platform, index) => (
            <div
              key={platform.id}
              className="group relative rounded-3xl border border-black/10 bg-white p-8
                         shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                         transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 900ms ease-out both",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Platform Name */}
              <h3 className="text-xl font-semibold tracking-tight">
                {platform.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-black/70 leading-relaxed">
                {platform.desc}
              </p>

              {/* Hover Border Glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(0,0,0,0.2), 0 20px 80px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
