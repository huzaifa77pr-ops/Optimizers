import { useEffect, useState } from "react";

function Icon({ type }) {
  const cls = "h-5 w-5";
  switch (type) {
    case "mail":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m6.5 8 5.5 4 5.5-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 3.5h3l1.2 4-2 1.6c1.4 2.5 3.5 4.6 6 6l1.6-2 4 1.2v3A2.7 2.7 0 0 1 17.6 21C10 20.3 3.7 14 3 6.4A2.7 2.7 0 0 1 6.5 3.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function ContactMethods() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  const items = [
    {
      type: "mail",
      label: "Email",
      value: "hello@customisers.dev",
      note: "Send your brief / links — we reply within 24 hours.",
      accent: "emerald",
    },
    {
      type: "phone",
      label: "Phone / WhatsApp",
      value: "+92 300 0000000",
      note: "Quick questions, availability, and timelines.",
      accent: "rose",
    },
    {
      type: "pin",
      label: "Location",
      value: "Pakistan • Remote worldwide",
      note: "We work with brands globally — flexible timezone overlap.",
      accent: "emerald",
    },
    {
      type: "clock",
      label: "Response time",
      value: "Within 24 hours",
      note: "Clear next steps + a premium plan proposal.",
      accent: "rose",
    },
  ];

  return (
    <section className="relative w-full bg-[#070A0F] py-20 overflow-hidden">
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div
          className={[
            "max-w-2xl transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Choose the Fastest Way to Reach Us.
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Use any method below — we’ll respond with clarity, availability, and next steps.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const dot = it.accent === "emerald" ? "bg-emerald-400" : "bg-rose-400";
            const iconColor = it.accent === "emerald" ? "text-emerald-300" : "text-rose-300";
            const hoverRing =
              it.accent === "emerald" ? "hover:border-emerald-400/25" : "hover:border-rose-700/25";

            return (
              <div
                key={it.label}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.1] p-6 sm:p-7 backdrop-blur",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-all duration-300",
                  "hover:-translate-y-1 hover:bg-white/[0.06]",
                  hoverRing,
                  "transition-all duration-1000 ease-out",
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${160 + i * 90}ms` }}
              >
                {/* corner glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03]">
                    <span className={iconColor}>
                      <Icon type={it.type} />
                    </span>
                  </div>

                  <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                </div>

                <p className="mt-4 text-xs font-semibold tracking-widest text-white/60 uppercase">
                  {it.label}
                </p>

                <p className="mt-2 text-base font-extrabold text-white break-words">
                  {it.value}
                </p>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {it.note}
                </p>

                <div className="mt-6 h-px w-full bg-white/10" />
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
