import { useEffect, useState } from "react";

export default function ContactFAQ() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const faqs = [
    {
      q: "How soon can we start?",
      a: "Usually within a few days after scope confirmation. If it’s urgent, we can prioritize based on availability.",
    },
    {
      q: "Do you work internationally?",
      a: "Yes. We work remotely worldwide with flexible timezone overlap and clear async communication.",
    },
    {
      q: "What budget range is ideal for premium work?",
      a: "It depends on scope, pages, and features. After you share details, we propose a clean plan with phases and pricing.",
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes — we offer retainers for improvements, marketing support, performance optimization, and new features.",
    },
    {
      q: "What do you need from us to begin?",
      a: "Goals, timeline, reference links, and any existing brand assets (logo, colors, content). A short brief is enough.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* light accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(ellipse_at_top,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* left heading */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Quick answers — for clarity.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Here are the most common questions we get before starting a project.
              If you have something specific, message us and we’ll reply clearly.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
              <p className="text-sm font-extrabold text-slate-900">Tip</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                The fastest way to get an accurate quote is to share: scope, references, deadline,
                and your success metric.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Scope", "References", "Deadline", "Success metric"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right accordion */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className={[
                    "w-full text-left rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:px-6 sm:py-5",
                    "transition hover:bg-slate-50",
                    idx === 0 ? "" : "mt-3",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm sm:text-base font-extrabold text-slate-900">
                        {f.q}
                      </p>
                      <div
                        className={[
                          "grid transition-all duration-300 ease-out",
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>

                    <span
                      className={[
                        "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                        "border border-slate-200 bg-slate-50 text-slate-900",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "block h-2 w-2 rounded-full transition",
                          isOpen ? "bg-rose-600" : "bg-emerald-600",
                        ].join(" ")}
                      />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
