import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "SEO Strategy", desc: "Technical SEO, content mapping, and on-page optimization for long-term growth.", tag: "Organic" },
  { title: "Google Ads", desc: "High-intent search campaigns with clean structure, testing, and ROAS focus.", tag: "Paid" },
  { title: "Meta Ads", desc: "Creative + targeting built to scale leads, sales, and brand recall efficiently.", tag: "Social" },
  { title: "Content Marketing", desc: "Premium content that builds authority and converts through clarity and trust.", tag: "Content" },
  { title: "Email Automation", desc: "Flows, segmentation, and lifecycle campaigns that increase retention and revenue.", tag: "CRM" },
  { title: "CRO (Conversion)", desc: "Landing pages, funnels, and A/B testing to reduce drop-offs & increase signups.", tag: "Growth" },
];

export default function DigitalMarketingServices() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full Visible Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/digital.jpg)" }}
      />
      

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          {/* Header */}
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-1000
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-2 text-xs sm:text-sm font-semibold text-white">
              Services
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Digital Marketing
            </div>

            {/* 🔥 Title now WHITE */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Premium marketing services that scale brands
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/85">
              Clean strategy, refined creatives, and performance-driven execution — built to look premium and perform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className={`
                  cursor-pointer group rounded-3xl border border-white/30
                  bg-white/60 backdrop-blur
                  p-7 sm:p-8
                  shadow-[0_14px_40px_rgba(2,6,23,0.15)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(2,6,23,0.25)]
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${240 + idx * 110}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-7 text-slate-900">
                  {s.desc}
                </p>

                <div className="mt-7 h-px w-full bg-black/10" />

                <button
                  onClick={() => navigate("/projects")}
                  className="cursor-pointer mt-4 inline-flex items-center gap-2 text-sm font-semibold
                             text-slate-800 group-hover:text-emerald-700 transition"
                >
                  Learn more
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
