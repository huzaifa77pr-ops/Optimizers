import Footer from "../../components/Footer";
import MobilePlatformsSection2 from "./MobilePlatformsSection2";
import MobilePlatformsSection3 from "./MobilePlatformsSection3";
import MobilePlatformsSection4 from "./MobilePlatformsSection4";
import MobilePlatformsSection5 from "./MobilePlatformsSection5";

export default function MobilePlatforms() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#05070b] text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Fast grid movement */
        @keyframes gridDrift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-120px, 120px, 0); }
        }

        /* Big boxes fast move */
        @keyframes boxesMoveA {
          0%   { transform: translate3d(0,0,0); }
          50%  { transform: translate3d(-40px, 25px, 0); }
          100% { transform: translate3d(0,0,0); }
        }

        /* Small boxes fast move */
        @keyframes boxesMoveB {
          0%   { transform: translate3d(0,0,0); }
          50%  { transform: translate3d(35px, -22px, 0); }
          100% { transform: translate3d(0,0,0); }
        }

        /* Scan sweep faster */
        @keyframes scanSweep {
          0%   { transform: translateY(-120%); opacity: 0; }
          20%  { opacity: .6; }
          80%  { opacity: .3; }
          100% { transform: translateY(140%); opacity: 0; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">

        {/* Dark Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-black" />

        {/* Moving grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            animation: "gridDrift 12s linear infinite",
          }}
        />

        {/* Big white border boxes */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, white 0 2px, transparent 2px 180px), repeating-linear-gradient(90deg, white 0 2px, transparent 2px 220px)",
            backgroundSize: "450px 450px",
            animation: "boxesMoveA 5s ease-in-out infinite",
          }}
        />

        {/* Smaller white border boxes */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, white 0 1px, transparent 1px 110px), repeating-linear-gradient(90deg, white 0 1px, transparent 1px 140px)",
            backgroundSize: "300px 300px",
            animation: "boxesMoveB 4s ease-in-out infinite",
          }}
        />

        {/* Scan effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/3 left-0 h-40 w-full bg-gradient-to-b from-transparent via-white/40 to-transparent"
            style={{ animation: "scanSweep 4.5s ease-in-out infinite" }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,0.65)_65%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div
        className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center"
        style={{ animation: "fadeInUp 900ms ease-out both" }}
      >
        <p className="text-xs tracking-[0.35em] uppercase text-white/60">
          Platforms
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Mobile Platforms We Build For
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Secure, scalable and high-performance mobile systems built across
          native and cross-platform technologies.
        </p>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
    <MobilePlatformsSection2/>
    <MobilePlatformsSection3/>
    <MobilePlatformsSection4/>
    <MobilePlatformsSection5/>
    <Footer/>
    </>
  );
}
