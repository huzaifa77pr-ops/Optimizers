import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WhatWeOffer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden bg-white transition-all duration-1000 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/what.jpg)", // put image in public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/50 to-white/100" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Small label */}
        <div
          className={`flex items-center justify-center gap-3 text-emerald-00 font-semibold transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "200ms" }}
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
          <span className="uppercase tracking-wider text-sm sm:text-base">
            What We Offer
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "400ms" }}
        >
          We build affordable
          <span className="block">
            digital products &{" "}
            <span className="text-emerald-700">premium</span> development for modern brands.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-0 transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "600ms" }}
        >
          25 Years of experience in website design & development — crafted
          with performance, conversion and luxury-grade UI.
        </p>

        {/* Button */}
        <div
          className={`mt-10 transition-all duration-1000
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-2xl px-8 py-4
                       bg-emerald-600 text-white font-extrabold
                       shadow-[0_14px_30px_rgba(16,185,129,0.28)]
                       hover:bg-emerald-700 transition"
          >
            Let’s Talk
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
