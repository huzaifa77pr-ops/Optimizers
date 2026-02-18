import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DigitalMarketingServices from "../../components/DigitalMarketingServices";
import DigitalMarketingProjectsSlider from "../../components/DigitalMarketingProjectsSlider";
import DigitalMarketingFAQ from "../../components/DigitalMarketingFAQ";
import DigitalMarketingFinalCTA from "../../components/DigitalMarketingFinalCTA";
import Footer from "../../components/Footer";

/* -------------------- Hacker / Matrix Canvas Background -------------------- */
function HackerBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });

    // Characters set (mix to look "hacker-ish")
    const chars = "01$#@*&%<>[]{}()/\\=+-_|~^;:.,ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArr = chars.split("");

    let width = 0;
    let height = 0;
    let cols = 0;
    let drops = [];
    let raf = 0;

    // tweak these for vibe/performance
    const fontSize = 16; // bigger = fewer columns (faster)
    const fadeAlpha = 0.085; // lower = longer trails
    const speedMin = 0.9;
    const speedMax = 1.8;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / fontSize);
      drops = new Array(cols).fill(0).map(() => ({
        y: Math.random() * height,
        v: speedMin + Math.random() * (speedMax - speedMin),
      }));
    };

    const draw = () => {
      // fade overlay (trail)
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i].y;

        // random char + color variation
        const text = charArr[(Math.random() * charArr.length) | 0];
        const bright = Math.random() < 0.08; // occasional bright head
        ctx.fillStyle = bright ? "rgba(16,185,129,0.95)" : "rgba(16,185,129,0.55)"; // emerald tone

        ctx.fillText(text, x, y);

        // move drop
        drops[i].y += drops[i].v * fontSize;

        // reset when off screen (randomize)
        if (drops[i].y > height + 20 && Math.random() > 0.975) {
          drops[i].y = -Math.random() * 120;
          drops[i].v = speedMin + Math.random() * (speedMax - speedMin);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      // pause animation when tab hidden
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

/* ----------------------------- Digital Marketing Hero ----------------------------- */
export default function DigitalMarketing() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  const chips = useMemo(
    () => ["SEO", "Google Ads", "Meta Ads", "Content", "CRO", "Email"],
    []
  );

  return (
    <main className="w-full bg-black">
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative min-h-[82vh] sm:min-h-[88vh] lg:min-h-[92vh]">
          {/* hacker animation */}
          <HackerBackground />

          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-black/80" />

          {/* subtle vignette */}
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`mx-auto max-w-4xl pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 text-center
              transition-all duration-1000 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2
                text-xs sm:text-sm font-semibold text-white/85 backdrop-blur
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "180ms" }}
              >
                Digital Marketing
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Performance • Growth • ROI
              </div>

              <h1
                className={`mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "320ms" }}
              >
                Growth campaigns that feel premium and perform even better
              </h1>

              <p
                className={`mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 text-white/70
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "480ms" }}
              >
                We combine strategy, creative, and data to drive traffic, leads, and sales —
                with clean reporting and continuous optimization.
              </p>

              <div
                className={`mt-9 flex flex-col sm:flex-row items-center justify-center gap-3
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "640ms" }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-xl px-6 py-3
                             bg-rose-600 text-white text-sm font-semibold
                             shadow-md hover:bg-rose-700 transition"
                >
                  Get a Strategy Call
                  <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* GREEN */}
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center rounded-xl px-6 py-3
                             bg-emerald-600 text-white text-sm font-semibold
                             shadow-md hover:bg-emerald-700 transition"
                >
                  See Results
                  <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
                    ›
                  </span>
                </Link>
              </div>

              {/* chips */}
              <div
                className={`mt-10 flex flex-wrap items-center justify-center gap-2
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "780ms" }}
              >
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2
                               text-xs sm:text-sm font-semibold text-white/75 backdrop-blur"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* tiny trust line */}
              <div
                className={`mt-6 text-xs sm:text-sm text-white/55
                transition-all duration-1000
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "900ms" }}
              >
                Transparent reporting • Weekly optimization • Premium creatives
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalMarketingServices/>
      <DigitalMarketingProjectsSlider/>
      <DigitalMarketingFAQ/>
      <DigitalMarketingFinalCTA/>
      <Footer/>

    </main>
  );
}
