import Footer from "../../components/Footer";
import WebPlatformsSection2 from "../../pages/platforms/WebPlatformsSection2";
import WebPlatformsSection3 from "./WebPlatformsSection3";
import WebPlatformsSection4 from "./WebPlatformsSection4";

export default function WebPlatforms() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#05070b] text-white">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes gridMove {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-80px,80px,0); }
          }

          @keyframes diagMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-120px); }
          }

          @keyframes pulse {
            0%,100% { opacity: 0.15; }
            50% { opacity: 0.35; }
          }

          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            30% { opacity: 0.4; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-black" />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(30, 13, 177, 0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(4, 11, 211, 0.85) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              animation: "gridMove 25s linear infinite",
            }}
          />

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(90, 10, 202, 0.9) 0px, rgba(151, 146, 193, 0.89) 1px, transparent 1px, transparent 80px)",
              backgroundSize: "200px 200px",
              animation: "diagMove 20s linear infinite",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(214, 205, 205, 0.76), transparent 60%)",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-full h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{ animation: "scan 7s ease-in-out infinite" }}
            />
          </div>
        </div>

        <div
          className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center"
          style={{ animation: "fadeInUp 1s ease-out both" }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Platforms
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Web Platforms We Engineer
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Secure, scalable and high-performance systems built on modern web
            technologies and enterprise-grade platforms.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <WebPlatformsSection2 />
      <WebPlatformsSection3/>
      <WebPlatformsSection4/>
      <Footer/>
    </>
  );
}
