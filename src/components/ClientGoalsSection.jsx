// src/components/ClientGoalsSection.jsx
import { useNavigate } from "react-router-dom";

export default function ClientGoalsSection({ show = true }) {
  const navigate = useNavigate();

  const bullets = [
    "Proactive + reactive support model",
    "Retainer hours for continuous improvements",
    "Ticketing system + change tracking",
    "Alerts + monitoring + monthly reports",
  ];

  const stats = [
    { k: "24/7", v: "Support structure" },
    { k: "25+", v: "Years experience" },
    { k: "Monthly", v: "Reporting cadence" },
    { k: "Fast", v: "Response workflow" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* subtle luxury glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT TEXT */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-white/60">
                CLIENT SERVICES
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Your goals are our goals.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                With deep digital experience, we dedicate the right people to meet your
                needs on both a proactive and reactive basis. Everything your
                organization needs to build and maintain a powerful, evolving web presence
                is there when you need it — backed by a structured support model.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                We offer ongoing responsive support as well as retainer services with a
                dedicated number of hours per month to implement solutions for your needs.
                We support customers across industries, track site changes, provide alerts,
                and deliver monthly reports.
              </p>

              {/* Bullet points */}
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-sm text-white/80">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="
                    group cursor-pointer relative overflow-hidden rounded-xl
                    bg-red-600 px-7 py-3.5 text-sm font-semibold text-white
                    shadow-[0_18px_60px_-40px_rgba(239,68,68,0.55)]
                    transition-all duration-300
                    hover:bg-red-700 hover:shadow-[0_22px_70px_-42px_rgba(239,68,68,0.65)]
                    active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-red-500/40
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Request Support</span>
                </button>

                
              </div>

              {/* tiny note */}
              <p className="mt-4 text-xs text-white/50">
                We tailor service tiers based on your goals, urgency, and monthly roadmap.
              </p>
            </div>

            {/* RIGHT — stats + luxury panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-semibold tracking-widest text-white/60">
                  SUPPORT MODEL
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-2xl font-extrabold text-white">{s.k}</p>
                      <p className="mt-1 text-xs font-semibold text-white/60">{s.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-300/70 via-emerald-300/70 to-rose-300/70 opacity-90" />

                <div className="mt-6 space-y-3 text-sm text-white/75">
                  <p className="font-semibold text-white">Included by default:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Ticketing system",
                      "Change logs",
                      "Site alerts",
                      "Monthly reports",
                      "Priority queue",
                      "SLA options",
                    ].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* /right */}
          </div>
        </div>
      </div>
    </section>
  );
}
