// src/components/Projects/ProjectsHero.jsx
export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] text-white">
      <style>{`
        /* Slow reveal on load */
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Subtle drifting grid */
        @keyframes gridDrift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-56px, 56px, 0); }
        }

        /* Scanline sweep (terminal vibe) */
        @keyframes scanSweep {
          0%   { transform: translateY(-20%); opacity: 0; }
          15%  { opacity: .35; }
          55%  { opacity: .22; }
          100% { transform: translateY(120%); opacity: 0; }
        }

        /* Glitch shimmer (very soft) */
        @keyframes shimmerX {
          0%   { transform: translateX(-40%) skewX(-12deg); opacity: 0; }
          20%  { opacity: .18; }
          60%  { opacity: .12; }
          100% { transform: translateX(40%) skewX(-12deg); opacity: 0; }
        }

        /* Circuit pulse using background-position */
        @keyframes circuitPulse {
          0%   { background-position: 0% 0%, 100% 100%, 40% 70%; opacity: .55; }
          50%  { background-position: 30% 15%, 70% 85%, 55% 60%; opacity: .75; }
          100% { background-position: 0% 0%, 100% 100%, 40% 70%; opacity: .55; }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* ===== Background Layers (Hacker vibe, no characters) ===== */}
      <div className="absolute inset-0">
        {/* Base dark depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_55%),linear-gradient(to_bottom,rgba(2,6,12,0.25),rgba(0,0,0,0.92))]" />

        {/* Micro grid (premium tech texture) */}
        <div
          className="absolute inset-0 opacity-[0.10] anim"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            animation: "gridDrift 20s linear infinite",
            willChange: "transform",
          }}
        />

        {/* Circuit lines (SVG pattern) — animated via background-position */}
        <div
          className="absolute inset-0 opacity-[0.22] anim"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.18)' stroke-width='1'%3E%3Cpath d='M40 120h160v80h120v120h160'/%3E%3Cpath d='M70 360h120v-90h160v90h100'/%3E%3Cpath d='M120 70v120h80v80h120v160'/%3E%3Cpath d='M380 90v110h-90v120h110v120'/%3E%3Ccircle cx='200' cy='200' r='3' fill='rgba(255,255,255,0.25)'/%3E%3Ccircle cx='320' cy='320' r='3' fill='rgba(255,255,255,0.25)'/%3E%3Ccircle cx='410' cy='200' r='3' fill='rgba(255,255,255,0.25)'/%3E%3C/g%3E%3C/svg%3E"),
              radial-gradient(circle at 20% 25%, rgba(16,185,129,0.10), transparent 45%),
              radial-gradient(circle at 80% 30%, rgba(244,63,94,0.08), transparent 46%)
            `,
            backgroundRepeat: "repeat, no-repeat, no-repeat",
            backgroundSize: "520px 520px, 900px 900px, 900px 900px",
            animation: "circuitPulse 9.5s ease-in-out infinite",
            mixBlendMode: "screen",
            willChange: "background-position, opacity",
          }}
        />

        {/* Scanline sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/3 left-0 h-40 w-full bg-gradient-to-b from-transparent via-white/12 to-transparent blur-[0.6px] anim"
            style={{
              animation: "scanSweep 5.6s ease-in-out infinite",
              willChange: "transform, opacity",
            }}
          />
        </div>

        {/* Soft shimmer band (glitch-like but premium) */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full anim"
          style={{ animation: "shimmerX 7.2s ease-in-out infinite", willChange: "transform,opacity" }}
        >
          <div className="absolute left-0 top-0 h-full w-[38%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[1px]" />
        </div>

        {/* Vignette for luxury focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.60)_62%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      {/* ===== Center Content (no buttons, no right section) ===== */}
      <div
        className="relative mx-auto max-w-4xl px-6 pt-20 pb-14 md:pt-28 md:pb-20 text-center"
        style={{ animation: "heroReveal 950ms ease-out both" }}
      >
        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-white/60">
          Projects
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Projects. Clean. Premium. Precise.{" "}
        </h1>

        <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
          Clean systems, premium UI, and performance-first builds — without heavy
          effects or distracting “matrix” rain.
        </p>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
