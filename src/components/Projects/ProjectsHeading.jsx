// src/components/Projects/ProjectsHeading.jsx
export default function ProjectsHeading() {
  return (
    <section className="relative bg-[#05070b] text-white">
      <style>{`
        @keyframes fadeUpSoft {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="mx-auto max-w-5xl px-6 py-10 md:py-14 text-center"

        style={{ animation: "fadeUpSoft 900ms ease-out both" }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          All <span className="text-emerald-400">Projects</span>
        </h2>

        <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          A complete showcase of our premium builds across web, AI,
          marketing, and digital systems.
        </p>

        {/* Elegant divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
