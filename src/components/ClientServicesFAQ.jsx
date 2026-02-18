// src/components/ClientServicesFAQ.jsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientServicesFAQ({ show = true }) {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(
    () => [
      {
        q: "What is included in Client Services?",
        a: "Client Services includes account management, support workflows, monitoring, monthly reporting, and ongoing optimization aligned to your roadmap.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes. We offer retainers for continuous improvements, priority support, and predictable execution. Scope is tailored to your goals and monthly capacity.",
      },
      {
        q: "How fast is your response time?",
        a: "Response time depends on your support model and SLA. Most requests receive an initial response within 24 hours, with faster options available for enterprise partnerships.",
      },
      {
        q: "Can you work with our internal team?",
        a: "Absolutely. We collaborate with internal stakeholders, designers, and developers—providing strategy, execution support, and clear documentation.",
      },
      {
        q: "How do you track performance and results?",
        a: "We define KPIs, implement tracking where needed, and provide reports with actionable insights—so progress is measurable and decisions are data-backed.",
      },
      {
        q: "How do we get started?",
        a: "Start with a short call. We’ll understand your goals, recommend the right service model, and outline a first-month roadmap with deliverables.",
      },
    ],
    []
  );

  return (
    <section className="bg-sky-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Heading */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <p className="text-xs font-semibold tracking-widest text-slate-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Client Services — common questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            Clear answers about support, retainers, timelines, and how we work with your team.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 mx-auto max-w-3xl space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={item.q}
                className="
                  group rounded-2xl border border-slate-200/70
                  bg-white/75 backdrop-blur
                  shadow-[0_10px_26px_-22px_rgba(2,8,23,0.25)]
                  overflow-hidden
                "
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="
                    w-full cursor-pointer text-left
                    flex items-center justify-between gap-4
                    px-6 py-5
                    transition
                    hover:bg-white
                    focus:outline-none focus:ring-2 focus:ring-sky-500/30
                  "
                >
                  <span className="text-base font-extrabold text-slate-900">
                    {item.q}
                  </span>

                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-xl",
                      "border border-slate-200 bg-white/70 text-slate-900",
                      "transition-transform duration-300",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {/* plus icon */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        d="M12 5v14M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </p>

                    <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-200 via-emerald-200 to-rose-200 opacity-80" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate-600">
            Still have a question? Let’s talk and map the right support plan.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="
              group cursor-pointer relative overflow-hidden rounded-xl
              bg-red-600 px-7 py-3.5 text-sm font-semibold text-white
              shadow-md transition-all duration-300
              hover:bg-red-700 hover:shadow-lg
              active:scale-[0.98]
              focus:outline-none focus:ring-2 focus:ring-red-500/40
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Ask a Question</span>
          </button>
        </div>
      </div>
    </section>
  );
}
