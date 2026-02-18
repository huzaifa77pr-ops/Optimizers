import { useEffect, useMemo, useState } from "react";

const services = [
  {
    id: "digital",
    label: "Digital Marketing",
    title: "Digital Marketing",
    desc:
      "We help brands grow through data-driven campaigns, smart targeting, and consistent performance optimization across multiple channels. From strategy to execution, we focus on measurable outcomes that move your business forward.",
    img: "/digit.jpg",
  },
  {
    id: "social",
    label: "Social Media Marketing",
    title: "Social Media Marketing",
    desc:
      "We create high-performing content and manage social campaigns that build trust, engagement, and conversions. Our approach blends creative storytelling with analytics to keep your audience growing.",
    img: "/social.jpg",
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    title: "Search Engine Optimization",
    desc:
      "We improve your visibility on Google with technical SEO, content optimization, and authority building. The goal: consistent organic traffic that converts—without relying only on ads.",
    img: "/seo.jpg",
  },
  {
    id: "cgi",
    label: "Animations & CGI",
    title: "Animations & CGI",
    desc:
      "We create high-quality animations and CGI visuals that bring ideas to life and enhance brand storytelling. Whether it’s promotional animations, product visuals, or creative motion graphics—our visuals help businesses communicate complex messages clearly and impactfully.",
    img: "/animation.jpg",
  },
];

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CoreServices() {
  const [activeId, setActiveId] = useState("cgi");

  const active = useMemo(
    () => services.find((s) => s.id === activeId) || services[0],
    [activeId]
  );

  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/30" />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/100 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-100">
              OUR CORE SERVICES
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Our Core Services
          </h2>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl">
            Trusted by Brands. Driven by Results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {services.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className={`
                      group w-full text-left cursor-pointer
                      rounded-2xl border
                      px-5 py-5
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-emerald-400/100 bg-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.65)]"
                          : "border-white/10 bg-black/35 hover:bg-white/7 hover:border-white/20"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-white font-extrabold">{s.label}</p>
                      <span
                        className={`
                          text-emerald-300 transition-all duration-300
                          ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}
                        `}
                      >
                        <Chevron />
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`
                          h-[2px] rounded-full transition-all duration-300
                          ${isActive ? "w-16 bg-emerald-400" : "w-10 bg-white/50 group-hover:w-14 group-hover:bg-emerald-400/70"}
                        `}
                      />
                      <span className="text-xs text-slate-300">Click to view details</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="
                h-full rounded-3xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                p-6 sm:p-8
                shadow-[0_22px_90px_rgba(0,0,0,0.60)]
              "
            >
              <p className="text-emerald-300 text-xs font-extrabold tracking-[0.25em]">
                SERVICE DETAILS
              </p>

              <h3 className="mt-3 text-3xl sm:text-4xl font-black text-white">
                {active.title}
              </h3>

              <p className="mt-4 text-slate-200 leading-relaxed text-base sm:text-lg">
                {active.desc}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-300 font-semibold">
                  Premium execution • Clean UI • Strong results
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Strategy", "Design", "Performance", "Growth"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-bold text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="
                h-full rounded-3xl overflow-hidden
                border border-white/10
                bg-black/35
                shadow-[0_30px_110px_rgba(0,0,0,0.75)]
              "
            >
              <div className="relative h-full min-h-[320px]">
                <img
                  key={active.img}
                  src={active.img}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Tip: Select a service to update the details and image.
        </p>
      </div>
    </section>
  );
}
