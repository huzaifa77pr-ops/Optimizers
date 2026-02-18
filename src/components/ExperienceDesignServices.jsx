import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "UX Research", desc: "Interviews, audits, analytics and insights that remove guesswork.", tag: "Discovery" },
  { title: "UI Design", desc: "Premium visual design with modern typography, spacing, and layout systems.", tag: "Interface" },
  { title: "Information Architecture", desc: "Sitemaps, flows and structure that make complex products feel simple.", tag: "Structure" },
  { title: "Wireframing & Prototyping", desc: "Clickable prototypes to validate ideas before development starts.", tag: "Validation" },
  { title: "Design Systems", desc: "Reusable components, tokens and rules for consistent scalable UI delivery.", tag: "Scale" },
  { title: "Usability Testing", desc: "Task-based tests and iteration to improve clarity, trust and conversion.", tag: "Quality" },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 14l.7 3.1L9 18l-3.3.9L5 22l-.7-3.1L1 18l3.3-.9L5 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

export default function ExperienceDesignServices() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed opacity-[0.18]"
        style={{ backgroundImage: "url(/uii.jpg)" }} // ✅ public/design-bg.jpg
      />
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2
            text-xs sm:text-sm font-semibold text-white/85 backdrop-blur
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <span className="text-white/85">
              <SparkIcon />
            </span>
            What we do
          </div>

          <h2
            className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "220ms" }}
          >
            Experience Design services
            <span className="block text-white/90">crafted for premium products</span>
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-white/70 leading-7
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "340ms" }}
          >
            From research and flows to polished UI and scalable systems — we design experiences users love.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              role="button"
              tabIndex={0}
              className={`
                cursor-pointer group rounded-4xl border border-white/90
                bg-black/[0.05] backdrop-blur
                p-7 sm:p-8
                shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                transition-all duration-100 ease-out
                hover:-translate-y-10 hover:bg-white/[0.07] hover:border-white/20
                hover:shadow-[0_22px_70px_rgba(16,185,129,0.18)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${420 + idx * 110}ms` }}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.location.href = "/contact";
              }}
              onClick={() => (window.location.href = "/contact")}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 grid place-items-center text-white/90
                                group-hover:border-white/20 group-hover:bg-white/15 transition">
                  <SparkIcon />
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70
                                 group-hover:border-white/20 group-hover:text-white/85 transition">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-white group-hover:text-white transition">
                {s.title}
              </h3>

              <p className="mt-3 text-sm sm:text-[15px] leading-7 text-white/70 group-hover:text-white/75 transition">
                {s.desc}
              </p>

              <div className="mt-8 h-px w-full bg-white/10 group-hover:bg-white/15 transition" />

              <div className="mt-5 text-sm font-semibold text-white/70 group-hover:text-emerald-300 transition">
                Learn more → Contact us
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (only green) */}
        <div
          className={`mt-14 flex items-center justify-center
          transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "1100ms" }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3
                       bg-emerald-600 text-white text-sm font-semibold
                       shadow-md hover:bg-emerald-700 transition"
          >
            Talk to a Designer <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}




