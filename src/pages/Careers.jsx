import Footer from "../components/Footer";
import CareersSection2 from "./CareersSection2";
import CareersSection3 from "./CareersSection3";
import CareersSection4 from "./CareersSection4";
import CareersSection5 from "./CareersSection5";
import CareersSection6 from "./CareersSection6";
import CareersSection7 from "./CareersSection7";
import CareersSection8 from "./CareersSection8";
import CareersSection9 from "./CareersSection9";

export default function Careers() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#05070b] text-white">
      <style>{`
        @keyframes fadeHero {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Slow mesh movement */
        @keyframes meshFloat {
          0%   { background-position: 20% 20%, 80% 40%, 40% 80%; }
          50%  { background-position: 30% 30%, 70% 50%, 50% 70%; }
          100% { background-position: 20% 20%, 80% 40%, 40% 80%; }
        }

        /* Very slow beam sweep */
        @keyframes beamSweep {
          0%   { transform: translateX(-40%) rotate(12deg); opacity: 0; }
          20%  { opacity: .18; }
          70%  { opacity: .12; }
          100% { transform: translateX(40%) rotate(12deg); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* ===== Background ===== */}
      <div
        className="absolute inset-0 anim"
        style={{ animation: "fadeHero 1.6s ease-out both" }}
      >
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-black" />

        {/* soft mesh blobs (very subtle white) */}
        <div
          className="absolute inset-0 anim"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.12), transparent 55%),
              radial-gradient(circle at 75% 35%, rgba(255,255,255,0.08), transparent 60%),
              radial-gradient(circle at 45% 80%, rgba(255,255,255,0.06), transparent 65%)
            `,
            backgroundSize: "130% 130%",
            filter: "blur(8px)",
            animation: "meshFloat 18s ease-in-out infinite",
          }}
        />

        {/* subtle static grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* soft white beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -left-1/2 top-[-30%] h-[160%] w-[45%] anim"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
              filter: "blur(1px)",
              animation: "beamSweep 12s ease-in-out infinite",
            }}
          />
        </div>

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.65)_65%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p
          className="text-xs tracking-[0.35em] uppercase text-white/60"
          style={{ animation: "fadeUp 1.1s ease-out both" }}
        >
          Careers
        </p>

        <h1
          className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
          style={{ animation: "fadeUp 1.3s ease-out both" }}
        >
          Build with Optimizers
        </h1>

        <p
          className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          style={{ animation: "fadeUp 1.5s ease-out both" }}
        >
          We hire for craft, clarity, and consistency — building premium digital
          products with performance-first standards.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeUp 1.7s ease-out both" }}
        >
          {["Remote-friendly", "High ownership", "Quality standards", "Growth mindset"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70 backdrop-blur-xl"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
          style={{ animation: "fadeUp 1.9s ease-out both" }}
        />
      </div>
    </section>
    <CareersSection2/>
    <CareersSection3/>
    <CareersSection4/>
    <CareersSection5/>
    <CareersSection6/>
    <CareersSection7/>
    <CareersSection8/>
    <CareersSection9/>
    <Footer/>
    </>
  );
}
