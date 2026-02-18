import { useEffect, useState } from "react";

const cards = [
  {
    title: "Make Strategy",
    desc:
      "Developing a user-centric mobile app that solves a specific problem, has a simple and intuitive interface, and utilizes the latest technology and industry best practices is key to a successful app development strategy.",
    bg: "bg-sky-50",
    iconBg: "bg-blue-500",
  },
  {
    title: "App Design",
    desc:
      "Creating an intuitive and visually appealing app design that is consistent with your brand's identity and focuses on delivering a seamless user experience is crucial for a successful app development.",
    bg: "bg-cyan-50",
    iconBg: "bg-sky-500",
  },
  {
    title: "App Development",
    desc:
      "Following agile development methodologies, utilizing the latest technologies, and ensuring rigorous testing and quality assurance processes are key to successful app development.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-500",
  },
  {
    title: "App Testing",
    desc:
      "Conducting comprehensive testing, including functional, usability, compatibility, and security testing, is essential for ensuring a bug-free and high-performing mobile app.",
    bg: "bg-purple-50",
    iconBg: "bg-purple-600",
  },
  {
    title: "Project Launch",
    desc:
      "A successful app launch requires a well-planned marketing and promotional strategy, including pre-launch activities, user acquisition campaigns, and post-launch engagement and retention efforts.",
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
  },
];

function BulbIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
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

export default function AppProcessCards() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((c, idx) => {
            // Desktop par 2nd card thora upar
            const lift =
              idx === 1 ? "lg:-translate-y-8" : "lg:translate-y-3";

            return (
              <div
                key={c.title}
                className={`
                  ${c.bg}
                  ${lift}
                  rounded-3xl px-7 py-9 text-center
                  border border-black/5
                  shadow-[0_12px_34px_rgba(2,6,23,0.10)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,6,23,0.16)]
                  hover:border-black/10
                  ${show ? "opacity-100" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${200 + idx * 120}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div
                    className={`
                      ${c.iconBg}
                      h-16 w-16 rounded-2xl grid place-items-center
                      text-white
                      shadow-[0_16px_34px_rgba(0,0,0,0.18)]
                      transition-transform duration-300
                      hover:scale-[1.04]
                    `}
                  >
                    <BulbIcon />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                  {c.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {c.desc}
                </p>

                <div className="mt-8 h-px w-full bg-black/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
