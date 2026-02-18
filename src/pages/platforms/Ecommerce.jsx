import Footer from "../../components/Footer";
import EcommerceSection2 from "./EcommerceSection2";
import EcommerceSection3 from "./EcommerceSection3";
import EcommerceSection4 from "./EcommerceSection4";
import EcommerceSection5 from "./EcommerceSection5";
import EcommerceSection6 from "./EcommerceSection6";

// src/pages/platforms/Ecommerce.jsx
export default function Ecommerce() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#05070b] text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Multi-color lines movement (full hero) */
        @keyframes linesMoveA {
          0%   { background-position: 0% 0%, 100% 100%, 40% 60%; }
          50%  { background-position: 60% 30%, 40% 70%, 70% 40%; }
          100% { background-position: 0% 0%, 100% 100%, 40% 60%; }
        }

        @keyframes linesMoveB {
          0%   { transform: translate3d(0,0,0); opacity: .22; }
          50%  { transform: translate3d(-18px, 10px, 0); opacity: .32; }
          100% { transform: translate3d(0,0,0); opacity: .22; }
        }

        /* subtle scan shimmer */
        @keyframes shimmer {
          0%   { transform: translateX(-45%) skewX(-10deg); opacity: 0; }
          20%  { opacity: .25; }
          70%  { opacity: .12; }
          100% { transform: translateX(45%) skewX(-10deg); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* ===== Background Layers ===== */}
      <div className="absolute inset-0">
        {/* Base depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-black" />

        {/* Very subtle grid for premium texture */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Multi-color diagonal lines (clearly visible) */}
        <div
          className="absolute inset-0 anim"
          style={{
            backgroundImage: `
              repeating-linear-gradient(115deg, rgba(16,185,129,0.55) 0 2px, transparent 2px 64px),
              repeating-linear-gradient(115deg, rgba(244,63,94,0.45) 0 2px, transparent 2px 86px),
              repeating-linear-gradient(115deg, rgba(59,130,246,0.35) 0 2px, transparent 2px 110px)
            `,
            backgroundSize: "120% 120%, 130% 130%, 140% 140%",
            animation: "linesMoveA 7.5s ease-in-out infinite",
            willChange: "background-position",
            opacity: 0.9,
          }}
        />

        {/* Extra moving wash so whole hero feels alive */}
        <div
          className="absolute inset-0 anim"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06), transparent 48%)",
            filter: "blur(20px)",
            animation: "linesMoveB 6.8s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Shimmer sweep */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full anim"
          style={{ animation: "shimmer 6.2s ease-in-out infinite", willChange: "transform,opacity" }}
        >
          <div className="absolute left-0 top-0 h-full w-[42%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[1px]" />
        </div>

        {/* Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.60)_64%,rgba(0,0,0,0.90)_100%)]" />
      </div>

      {/* ===== Content ===== */}
      <div
        className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center"
        style={{ animation: "fadeInUp 950ms ease-out both" }}
      >
        <p className="text-xs tracking-[0.35em] uppercase text-white/60">
          Platforms
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          E-Commerce Systems Built to Convert
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Premium storefronts engineered for speed, trust, and checkout performance —
          built to scale with inventory, campaigns, and growth.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["Speed", "CRO", "Checkout", "Automation", "Scale"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70 backdrop-blur-xl"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
    <EcommerceSection2/>
    <EcommerceSection3/>
    <EcommerceSection4/>
    <EcommerceSection5/>
    <EcommerceSection6/>
    <Footer/>
    </>
  );
}
