import { useEffect, useState } from "react";
import WebDevServices from "./WebDevServices";
import WebDevProjects from "../../components/WebDevProjects";
import WhatWeOffer from "../../components/WhatWeOffer";
import ProcessSteps from "../../components/ProcessSteps";
import Footer from "../../components/Footer";
import MobileAppServicesSection from "../../components/MobileAppServicesSection";
import AppProcessCards from "../../components/AppProcessCards";
import WebBlueNetworkBackground from "../../components/WebBlueNetworkBackground";



export default function WebApplicationDevelopment() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full bg-white">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
         <div className="absolute inset-0" aria-hidden="true">
  <WebBlueNetworkBackground nodes={44} maxDist={175} speed={0.6} />
</div>


        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="bubble absolute rounded-full border border-sky-10/40 bg-sky-10/25"
              style={{
                left: `${(i * 9 + 7) % 92}%`,
                top: `${(i * 13 + 11) % 84}%`,
                width: `${10 + (i % 6) * 7}px`,
                height: `${10 + (i % 6) * 7}px`,
                animationDelay: `${i * 0.35}s`,
                animationDuration: `${8 + (i % 6) * 1.35}s`,
              }}
            />
          ))}
        </div>

        <svg
          className="pointer-events-none absolute left-6 top-10 hidden sm:block"
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 22c-9 12-7 21 5 31s9 22-3 34"
            stroke="#0f172a"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.25"
          />
        </svg>

        <svg
          className="pointer-events-none absolute right-8 top-20 hidden sm:block"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M86 18 52 36l22 20-26 16"
            stroke="#0f172a"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
          />
          <circle cx="26" cy="22" r="6" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
        </svg>

        <div
          className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
          py-14 sm:py-20 lg:py-24
          transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.5em] text-black">
              EXPERTISE
            </p>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-800">
              Web Design &amp; Development Company In Pakistan{" "}
            </h1>

            <div className="mt-4 flex items-center justify-center">
              <svg
                width="220"
                height="24"
                viewBox="0 0 220 24"
                fill="none"
                aria-hidden="true"
                className="opacity-90"
              >
                <path
                  d="M8 14c20 0 20-8 40-8s20 8 40 8 20-8 40-8 20 8 40 8 20-8 36-8"
                  stroke="#0ea5e9"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-7 text-slate-900 text-base sm:text-lg leading-relaxed">
              We craft high-performance websites and scalable web apps with modern UI, clean code,
              and conversion-focused layouts for growing businesses.
            </p>

            <p className="mt-3 text-slate-900 font-semibold">
              From strategy &amp; UX to development and deployment — we deliver end-to-end solutions.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes bubbleFloat {
            0%   { transform: translate3d(0, 0, 0) scale(1); opacity: .22; }
            40%  { transform: translate3d(20px, -18px, 0) scale(1.06); opacity: .48; }
            70%  { transform: translate3d(-12px, -34px, 0) scale(0.98); opacity: .36; }
            100% { transform: translate3d(10px, -50px, 0) scale(1.03); opacity: .22; }
          }
          .bubble{
            animation-name: bubbleFloat;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            filter: drop-shadow(0 10px 20px rgba(14,165,233,.12));
          }
        `}</style>
      </section>
      <WebDevServices />
      <WebDevProjects />
      <WhatWeOffer/>
      <ProcessSteps/>
      <MobileAppServicesSection/>
      <AppProcessCards/>
      <Footer/>



    </main>
  );
}
