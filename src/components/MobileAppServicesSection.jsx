import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const points = [
  "Native app development for iOS and Android platforms",
  "Cross-platform app development using React Native, Flutter, or Xamarin",
  "UI/UX design and prototyping",
  "Integration with third-party APIs and services",
  "App maintenance and support",
];

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path
        d="M8 12.2l2.2 2.2L16.5 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileAppServicesSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "url(/apple.jpg)", // ✅ public/services-bg.jpg
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/0" />
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 right-[-140px] h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Label with arrow */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 text-sky-600 font-semibold transition-all duration-1000
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "150ms" }}
            >
              <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
                <path
                  d="M2 6 C 10 0, 18 0, 24 6 S 38 18, 48 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M46 6 L54 12 L46 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="uppercase tracking-wider text-sm sm:text-base">Services</span>
            </div>

            <h2
              className={`mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 transition-all duration-1000
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "260ms" }}
            >
              Our mobile app
              <span className="block">development services</span>
              <span className="block">include:</span>
            </h2>

            {/* points */}
            <ul
              className={`mt-8 space-y-4 text-left max-w-xl mx-auto lg:mx-0 transition-all duration-1000
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "420ms" }}
            >
              {points.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-[2px] text-sky-600">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <span className="text-base sm:text-lg leading-7">{t}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-1000
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "620ms" }}
            >
              <Link
                to="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center rounded-2xl
                           bg-emerald-600 px-8 py-4 text-white font-extrabold
                           shadow-[0_14px_30px_rgba(16,185,129,0.28)]
                           hover:bg-emerald-700 transition"
              >
                Learn More
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-xl bg-white/15 group-hover:bg-white/20 transition">
                  »
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative mx-auto max-w-xl">
              {/* soft shadow */}
              <div className="absolute -inset-6 rounded-[32px] bg-slate-900/5 blur-2xl" />

              <div className="relative rounded-[32px] border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-[0_18px_60px_rgba(2,6,23,0.12)]">
                <img
                  src="/app.jpg" // ✅ public/mobile-services.png
                  alt="Mobile app services"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>

              {/* little accent glow */}
              <div className="pointer-events-none absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -top-8 right-10 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
