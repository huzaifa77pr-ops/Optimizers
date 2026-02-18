import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExperienceDesignServices from "../../components/ExperienceDesignServices";
import ExperienceDesignProcess from "../../components/ExperienceDesignProcess";
import ExperienceDesignDeliverables from "../../components/ExperienceDesignDeliverables";
import Footer from "../../components/Footer";
import ExperienceDesignCaseStudies from "../../components/ExperienceDesignCaseStudies";
import ExperienceDesignCTA from "../../components/ExperienceDesignCTA";

export default function ExperienceDesign() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="w-full bg-black">
      {/* HERO with VIDEO BG */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative min-h-[80vh] sm:min-h-[86vh] lg:min-h-[92vh]">
          {/* Background Video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/exp.mp4" // ✅ public/experience-hero.mp4
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Simple dark overlay (readability) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`mx-auto max-w-3xl pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 text-center
              transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Top label */}
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2
                text-sm font-semibold text-white/85 backdrop-blur
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "180ms" }}
              >
                Services
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Experience Design
              </div>

              {/* Heading */}
              <h1
                className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "320ms" }}
              >
                Luxury UI/UX that feels premium and converts better
              </h1>

              {/* Subtitle */}
              <p
                className={`mt-6 text-base sm:text-lg text-white/90 leading-7
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "480ms" }}
              >
                We design elegant interfaces, clear user flows, and scalable design systems —
                built for modern brands and high-performance products.
              </p>

              {/* Buttons */}
<div
  className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3
  transition-all duration-1000
  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
  style={{ transitionDelay: "640ms" }}
>
  {/* RED BUTTON */}
  <Link
    to="/contact"
    className="group inline-flex items-center justify-center
               rounded-xl px-6 py-3
               bg-rose-600 text-white text-sm font-semibold
               shadow-md hover:bg-rose-700
               transition duration-300"
  >
    Get a Quote
    <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  {/* GREEN BUTTON */}
  <Link
    to="/projects"
    className="group inline-flex items-center justify-center
               rounded-xl px-6 py-3
               bg-emerald-600 text-white text-sm font-semibold
               shadow-md hover:bg-emerald-700
               transition duration-300"
  >
    View Work
    <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
      ›
    </span>
  </Link>
</div>


              {/* Small chips row (optional) */}
              <div
                className={`mt-12 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/90
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "780ms" }}
              >
                <span className="rounded-full border border-white/70 bg-white/5 px-4 py-2 backdrop-blur">
                  UI/UX Design
                </span>
                <span className="rounded-full border border-white/70 bg-white/5 px-4 py-2 backdrop-blur">
                  Product Design
                </span>
                <span className="rounded-full border border-white/70 bg-white/5 px-4 py-2 backdrop-blur">
                  Design Systems
                </span>
                <span className="rounded-full border border-white/70 bg-white/5 px-4 py-2 backdrop-blur">
                  Prototyping
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExperienceDesignServices/>
      <ExperienceDesignProcess/>
      <ExperienceDesignDeliverables/>
      <ExperienceDesignCaseStudies/>
      <ExperienceDesignCTA/>
      <Footer/>

    </main>
  );
}
