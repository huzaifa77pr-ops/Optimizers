import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketingFinalCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      
      {/* subtle luxury glow */}
      <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

      <div
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          With our team of experienced and highly skilled experts. 
          
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Contact us today to learn more about how we can help you scale, grow, and dominate your market.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl px-7 py-3.5
                       bg-rose-600 text-white text-sm sm:text-base font-semibold
                       shadow-lg hover:bg-rose-700
                       transition duration-300"
          >
            Connect with a Digital Marketing Expert
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
