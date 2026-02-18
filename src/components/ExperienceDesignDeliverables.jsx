import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const deliverables = [
  "Figma file (organized layers + components)",
  "Responsive screens (Mobile / Tablet / Desktop)",
  "UX flows + information architecture",
  "Clickable prototype for stakeholder review",
  "Design system (tokens + components library)",
  "Handoff specs for developers + QA support",
];

const tools = ["Figma", "FigJam", "Miro", "Notion", "Jira", "Adobe XD"];

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ExperienceDesignDeliverables() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed opacity-[0.16]"
        style={{ backgroundImage: "url(/deliver.jpg)" }} 
      />
      <div className="absolute inset-0 bg-black/" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/ via-white/20 to-black/" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2
            text-xs sm:text-sm font-semibold text-white/85 backdrop-blur transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "120ms" }}
          >
            Deliverables
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            What you get
          </div>

          <h2
            className={`mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "230ms" }}
          >
            Everything your team needs to build confidently
          </h2>

          <p
            className={`mt-5 text-base sm:text-lg text-white/70 leading-7
            transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "360ms" }}
          >
            Clean UX documentation, premium UI, and dev-ready handoff — so delivery stays fast and accurate.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Deliverables card */}
          <div
            className={`cursor-pointer rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur
            p-8 sm:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:bg-white/[0.07] hover:border-white/20
            hover:shadow-[0_22px_70px_rgba(16,185,129,0.18)]
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "520ms" }}
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Deliverables included
            </h3>

            <ul className="mt-6 space-y-4">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-white/75">
                  <span className="mt-[3px] text-emerald-300">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span className="text-sm sm:text-[15px] leading-7">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 h-px w-full bg-white/10" />
            <p className="mt-5 text-sm text-white/65">
              Want a custom deliverables list? We’ll tailor it to your product and timeline.
            </p>
          </div>

          {/* Tools + CTA card */}
          <div className="space-y-6">
            {/* Tools strip card */}
            <div
              className={`rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur
              p-8 sm:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:bg-white/[0.07] hover:border-white/20
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "640ms" }}
            >
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Tools we use
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-4 py-2
                               text-xs sm:text-sm font-semibold text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm text-white/65">
                We keep everything organized, versioned and easy for dev teams to consume.
              </p>
            </div>

            {/* CTA card */}
            <div
              className={`rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-white/[0.02]
              backdrop-blur p-8 sm:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:border-white/20
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "760ms" }}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to upgrade your product experience?
              </h3>
              <p className="mt-4 text-white/70">
                Let’s build a premium design that feels effortless and performs better.
              </p>

              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3
                             bg-emerald-600 text-white text-sm font-semibold
                             shadow-md hover:bg-emerald-700 transition"
                >
                  Contact Our Team <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="mt-6 text-xs text-white/55">
                Typical response time: same day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
