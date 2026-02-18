// src/pages/platforms/MobilePlatformsSection4.jsx
export default function MobilePlatformsSection4() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
            Platforms
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Native & cross-platform — engineered the premium way.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            Choose the stack that fits your product goals. We ship reliable builds
            with clean UX, stable architecture, and maintainable code.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "iOS",
              sub: "Swift / SwiftUI",
              desc: "Premium native performance with elegant UI and smooth transitions.",
              tag: "Best for: Apple-first apps",
            },
            {
              title: "Android",
              sub: "Kotlin",
              desc: "Stable, scalable Android builds with modern architecture patterns.",
              tag: "Best for: Android ecosystems",
            },
            {
              title: "React Native",
              sub: "Cross-Platform",
              desc: "Fast shipping across iOS & Android with consistent UI systems.",
              tag: "Best for: MVP → Scale",
            },
            {
              title: "Flutter",
              sub: "Cross-Platform",
              desc: "High-fidelity UI with strong performance across devices.",
              tag: "Best for: Rich UI apps",
            },
            {
              title: "PWA",
              sub: "Mobile Web",
              desc: "Installable web experiences with offline capability and fast delivery.",
              tag: "Best for: Web-first products",
            },
            {
              title: "Backend / API",
              sub: "Secure Integration",
              desc: "Auth, databases, analytics, payments, and custom APIs — production ready.",
              tag: "Best for: Full systems",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="anim group relative rounded-3xl border border-black/10 bg-white p-8
                         shadow-[0_18px_70px_rgba(0,0,0,0.10)]
                         transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: "fadeUp 950ms ease-out both",
                animationDelay: `${120 + idx * 120}ms`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/60">{item.sub}</p>
                </div>

                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/70">
                  Mobile
                </span>
              </div>

              {/* Body */}
              <p className="mt-5 text-sm text-black/70 leading-relaxed">
                {item.desc}
              </p>

              <p className="mt-6 text-xs text-black/60">
                {item.tag}
              </p>

              {/* Premium hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                   style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18), 0 22px 80px rgba(0,0,0,0.12)" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
