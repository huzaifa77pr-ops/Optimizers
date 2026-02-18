import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Discover",
    desc: "Research, audit, stakeholder alignment, and user goals to set direction.",
  },
  {
    title: "Define",
    desc: "Information architecture, flows, and wireframes to shape the product journey.",
  },
  {
    title: "Design",
    desc: "High-fidelity UI, interactions, and a consistent system for premium polish.",
  },
  {
    title: "Test",
    desc: "Usability testing, feedback loops, and iteration to improve clarity & trust.",
  },
  {
    title: "Deliver",
    desc: "Handoff specs, assets, and QA support to ensure smooth development execution.",
  },
];

function StepIcon({ n }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 border border-white/10 text-white font-extrabold">
      {n}
    </div>
  );
}

export default function ExperienceDesignProcess() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed opacity-[0.16]"
        style={{ backgroundImage: "url(/process.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/10 to-white/10" />


      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Design Process
          </h2>
          <p className="mt-4 text-white/70">
            A structured, premium workflow that ensures clarity, speed, and polish.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, idx) => {
            const lift =
              idx === 1 || idx === 3 ? "lg:-translate-y-6" : "lg:translate-y-2";

            return (
              <div
                key={s.title}
                onClick={() => navigate("/contact")}
                className={`
                  cursor-pointer group rounded-3xl border border-white/10
                  bg-white/[0.05] backdrop-blur
                  p-7 text-center
                  shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:bg-white/[0.07]
                  hover:border-white/20
                  hover:shadow-[0_22px_70px_rgba(16,185,129,0.18)]
                  ${lift}
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${300 + idx * 120}ms` }}
              >
                <div className="flex justify-center">
                  <div className="transition-all duration-300 group-hover:scale-105">
                    <StepIcon n={idx + 1} />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-white">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70 group-hover:text-white/80 transition">
                  {s.desc}
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <div className="mt-5 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition">
                  Learn more → Contact us
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
