// src/pages/platforms/MobilePlatformsSection3.jsx
export default function MobilePlatformsSection3() {
  return (
    <section className="relative overflow-hidden text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* Fixed BG Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/per.jpg')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.10),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Top heading */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
            Capabilities
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Built for real-world mobile performance.
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            We ship mobile platforms that stay fast under pressure — smooth UI,
            stable architecture, and clean delivery across devices.
          </p>

          <div className="mt-8 h-px w-44 bg-white/20" />
        </div>

        {/* Feature cards (stagger reveal) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Offline-Ready",
              desc: "Reliable flows that work even with weak or no internet.",
            },
            {
              title: "Secure by Design",
              desc: "Auth, storage, and API patterns built with safety in mind.",
            },
            {
              title: "Fast UI / UX",
              desc: "Smooth transitions, clean components, zero lag feel.",
            },
            {
              title: "Scalable Integrations",
              desc: "Payments, maps, analytics, chat, and custom APIs.",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.35)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 120}ms`,
              }}
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
