// src/pages/CareersSection5.jsx
export default function CareersSection5() {
  const steps = [
    {
      n: "01",
      title: "Apply",
      desc: "Send your portfolio/CV and a short message.",
      color: "bg-red-600",
    },
    {
      n: "02",
      title: "Short screening",
      desc: "A quick review to align on role and expectations.",
      color: "bg-emerald-500",
    },
    {
      n: "03",
      title: "Task / portfolio review",
      desc: "A small task or portfolio deep-dive (role-based).",
      color: "bg-blue-500",
    },
    {
      n: "04",
      title: "Interview",
      desc: "A focused discussion on skills, mindset, and workflow.",
      color: "bg-amber-500",
    },
    {
      n: "05",
      title: "Offer",
      desc: "Clear terms, start timeline, and onboarding plan.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
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

      {/* subtle animated grid */}
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
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 1s ease-out both" }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-white/60">
            Hiring Process
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            A structured, respectful process.
          </h2>

          <div className="mt-8 h-px w-44 bg-white/20" />
        </div>

        {/* Timeline */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, index) => (
            <div
              key={s.n}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl
                         shadow-[0_18px_70px_rgba(0,0,0,0.45)]
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.65)]"
              style={{
                animation: "fadeUp 1s ease-out both",
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              {/* Number Box (Different Colors) */}
              <div
                className={`h-14 w-14 rounded-2xl ${s.color} flex items-center justify-center
                            text-white font-semibold text-sm shadow-lg`}
              >
                {s.n}
              </div>

              <h3 className="mt-6 text-base font-semibold">
                {s.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {s.desc}
              </p>

              {/* Hover outline */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.12), 0 30px 120px rgba(0,0,0,0.60)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
