import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const items = [
  {
    title: "Web & Application Development",
    desc:
      "Our web development teams build award-winning websites and mobile apps engineered to drive value and achieve results.",
    to: "/expertise/web-application-development",
    icon: "code",
  },
  {
    title: "Experience Design",
    desc:
      "Our award-winning UX designers create visually impressive and functional online experiences.",
    to: "/expertise/experience-design",
    icon: "design",
  },
  {
    title: "Digital Marketing",
    desc:
      "Through SEO, PPC, content, email, and social media, we develop strategies that grow your business.",
    to: "/expertise/digital-marketing",
    icon: "marketing",
  },
  {
    title: "Strategy & Insights",
    desc:
      "Through research and analysis, we establish a tailored digital strategy that fits your brand.",
    to: "/expertise/strategy-insights",
    icon: "strategy",
  },
  {
    title: "Accessibility",
    desc:
      "Accessibility assessment, remediation, and best-practice implementation for standards compliance.",
    to: "/expertise/accessibility",
    icon: "access",
  },
  {
    title: "Hosting & Managed Cloud Services",
    desc:
      "Secure, scalable hosting with managed cloud services designed for performance and reliability.",
    to: "/expertise/hosting-managed-cloud",
    icon: "cloud",
  },
  {
    title: "Client Services",
    desc:
      "We work with you after launch with support, improvements, and ongoing optimization.",
    to: "/expertise/client-services",
    icon: "support",
  },
  {
    title: "Artificial Intelligence Consulting",
    desc:
      "We help teams apply AI strategically—automation, insights, and intelligent experiences.",
    to: "/expertise/ai-consulting",
    icon: "ai",
  },
];

function Icon({ name }) {
  const cls = "h-12 w-12 text-slate-900";
  const stroke = 2.2;
  const common = {
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  if (name === "code")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="10" width="32" height="28" rx="7" {...common} />
        <path d="M20 20l-6 4 6 4" {...common} />
        <path d="M28 20l6 4-6 4" {...common} />
        <path d="M23 30l2-12" {...common} />
        <path d="M14 16h20" {...common} opacity="0.35" />
      </svg>
    );

  if (name === "design")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 10h20a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6Z" {...common} />
        <path d="M18 30l10-10" {...common} />
        <path d="M28 20l4 4" {...common} />
        <path d="M18 34h12" {...common} opacity="0.35" />
        <circle cx="32.5" cy="15.5" r="2.2" fill="currentColor" />
      </svg>
    );

  if (name === "marketing")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 41c9.39 0 17-7.61 17-17S33.39 7 24 7 7 14.61 7 24s7.61 17 17 17Z" {...common} />
        <path d="M24 24l10-6" {...common} />
        <path d="M24 24l-6 10" {...common} opacity="0.75" />
        <path d="M24 12v3" {...common} opacity="0.35" />
        <path d="M36 24h-3" {...common} opacity="0.35" />
        <path d="M15 24h3" {...common} opacity="0.35" />
        <circle cx="34" cy="18" r="2.1" fill="currentColor" />
      </svg>
    );

  if (name === "strategy")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 34V14h24v20" {...common} />
        <path d="M16 30l8-8 4 4 6-6" {...common} />
        <path d="M12 34h24" {...common} opacity="0.35" />
        <circle cx="34" cy="20" r="2.1" fill="currentColor" />
      </svg>
    );

  if (name === "access")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 41c9.39 0 17-7.61 17-17S33.39 7 24 7 7 14.61 7 24s7.61 17 17 17Z" {...common} />
        <circle cx="24" cy="15" r="3" fill="currentColor" />
        <path d="M24 18v18" {...common} />
        <path d="M15.5 22h17" {...common} />
        <path d="M18 36h12" {...common} opacity="0.55" />
      </svg>
    );

  if (name === "cloud")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M18.5 35.5h16.8a7.3 7.3 0 0 0 .7-14.6 10.6 10.6 0 0 0-20.2-2.4 7.6 7.6 0 0 0 2.7 17Z"
          {...common}
        />
        <path d="M24 22v10" {...common} opacity="0.75" />
        <path d="M20 26l4-4 4 4" {...common} />
      </svg>
    );

  if (name === "support")
    return (
      <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 22a10 10 0 0 1 20 0v6a6 6 0 0 1-6 6h-4" {...common} />
        <path d="M12 24h-2v8h2" {...common} />
        <path d="M36 24h2v8h-2" {...common} />
        <path d="M19 30h10" {...common} />
        <path d="M22 35h4" {...common} opacity="0.45" />
      </svg>
    );

  return (
    <svg className={cls} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 14h16a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6Z" {...common} />
      <path d="M20 24h8" {...common} />
      <path d="M24 20v8" {...common} />
      <circle cx="33.5" cy="18.5" r="2.3" fill="currentColor" />
      <path d="M14 20v8" {...common} opacity="0.35" />
      <path d="M34 20v8" {...common} opacity="0.35" />
    </svg>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
            Our Expertise
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <Reveal key={it.to} delay={80 * idx} y={18}>
              <div
                className="
                  group h-full bg-white rounded-2xl p-7
                  border border-slate-200
                  shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                "
              >
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-100 border border-slate-200">
                    <Icon name={it.icon} />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-slate-950 leading-snug">
                  {it.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {it.desc}
                </p>

                <Link
                  to={it.to}
                  className="
                    mt-6 inline-flex items-center gap-2 font-extrabold
                    text-slate-950 transition
                    hover:text-emerald-600
                  "
                >
                  Learn More <span className="text-xl leading-none">›</span>
                </Link>

                <div className="mt-6 h-[3px] w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-emerald-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
