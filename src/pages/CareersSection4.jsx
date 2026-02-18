// src/pages/CareersSection4.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CareersSection4() {
  const [openId, setOpenId] = useState("frontend");

  const roles = [
    {
      id: "frontend",
      title: "Frontend (React)",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "1–3+ years",
      responsibilities: [
        "Build premium UI systems with clean structure.",
        "Optimize performance and rendering.",
        "Maintain scalable components.",
      ],
      requirements: [
        "Strong React fundamentals.",
        "Tailwind experience.",
        "Attention to detail.",
      ],
    },
    {
      id: "backend",
      title: "Backend (Node / Laravel)",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "2–4+ years",
      responsibilities: [
        "Design scalable APIs.",
        "Implement authentication & security.",
        "Work with databases efficiently.",
      ],
      requirements: [
        "Node or Laravel experience.",
        "Database fundamentals.",
        "Clean architecture mindset.",
      ],
    },
    {
      id: "designer",
      title: "UI/UX Designer",
      type: "Part-time / Full-time",
      location: "Remote",
      experience: "1–4+ years",
      responsibilities: [
        "Design premium layouts.",
        "Create prototypes & flows.",
        "Maintain design systems.",
      ],
      requirements: [
        "Strong portfolio.",
        "Figma expertise.",
        "Typography & spacing mastery.",
      ],
    },
    {
      id: "marketing",
      title: "Digital Marketing Specialist",
      type: "Part-time",
      location: "Remote",
      experience: "1–3+ years",
      responsibilities: [
        "Run paid campaigns.",
        "Optimize conversion funnels.",
        "Track performance analytics.",
      ],
      requirements: [
        "Ads platform experience.",
        "GA4 knowledge.",
        "Clear reporting skills.",
      ],
    },
    {
      id: "coordinator",
      title: "Project Coordinator",
      type: "Full-time",
      location: "Hybrid",
      experience: "0–2+ years",
      responsibilities: [
        "Coordinate tasks & deadlines.",
        "Maintain documentation.",
        "Client communication.",
      ],
      requirements: [
        "Strong organization.",
        "Reliable communication.",
        "Basic web understanding.",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black/80 text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes drift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-60px,60px,0); }
        }
      `}</style>

      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          animation: "drift 25s linear infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div
          className="text-center"
          style={{ animation: "fadeUp 1s ease-out both" }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Open Roles
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Join our premium team.
          </h2>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white
                         transition-transform duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-14 space-y-6">
          {roles.map((role, index) => {
            const isOpen = openId === role.id;

            return (
              <div
                key={role.id}
                className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl
                           shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
                style={{
                  animation: "fadeUp 1s ease-out both",
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : role.id)
                  }
                  className="w-full text-left p-7 flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {role.type} • {role.location} • {role.experience}
                    </p>
                  </div>

                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Body */}
                {isOpen && (
                  <div className="px-7 pb-7">
                    <div className="h-px w-full bg-white/10 mb-6" />

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                          Responsibilities
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-white/70">
                          {role.responsibilities.map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                          Requirements
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-white/70">
                          {role.requirements.map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white
                                   transition-transform duration-300 hover:-translate-y-1 hover:bg-red-500"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
