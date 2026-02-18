import { useEffect, useState } from "react";

const steps = [
  {
    title: "Make Strategy",
    desc:
      "Create a web development strategy that focuses on delivering a user-friendly experience and meets the specific needs and goals of the client.",
    bg: "bg-sky-50",
    iconBg: "bg-blue-500",
  },
  {
    title: "Website Design",
    desc:
      "Design a website that is visually appealing, user-friendly, and effectively communicates the brand's message and values.",
    bg: "bg-cyan-50",
    iconBg: "bg-sky-500",
  },
  {
    title: "Development",
    desc:
      "Develop a website that is efficient, scalable, and meets the specific needs and goals of the client.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-500",
  },
  {
    title: "Web Testing",
    desc:
      "Ensure the functionality, usability, performance, security, and compatibility of a website through rigorous web testing.",
    bg: "bg-purple-50",
    iconBg: "bg-purple-600",
  },
  {
    title: "Web Live",
    desc:
      "Make a website live by deploying it to a server and making it accessible to the public through its domain name.",
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
  },
];

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-white">
      <path
        d="M9 18h6m-5 3h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 14c-1.4-1.2-2.3-2.8-2.3-4.6A6.3 6.3 0 0 1 12 3a6.3 6.3 0 0 1 6.3 6.4c0 1.8-.9 3.4-2.3 4.6-.7.6-1.3 1.5-1.5 2.5H9.5c-.2-1-.8-1.9-1.5-2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 7v2m3-1-1.4 1.4M9 9.4 7.6 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProcessSteps() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 160);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className={`
                ${s.bg}
                rounded-3xl p-7 sm:p-8 text-center
                border border-black/5
                shadow-[0_10px_30px_rgba(2,6,23,0.08)]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(2,6,23,0.14)]
                hover:border-black/10
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${180 + idx * 120}ms` }}
            >
              {/* Icon box */}
              <div className="flex justify-center">
                <div
                  className={`
                    ${s.iconBg}
                    h-16 w-16 rounded-2xl grid place-items-center
                    shadow-[0_14px_30px_rgba(0,0,0,0.18)]
                    transition-transform duration-300
                    group-hover:scale-105
                  `}
                >
                  <BulbIcon />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                {s.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {s.desc}
              </p>

              {/* subtle line */}
              <div className="mt-8 h-px w-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
