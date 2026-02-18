import { useEffect, useRef, useState } from "react";

function useInViewOnce(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ContactFormSection() {
  const { ref, inView } = useInViewOnce(0.16);

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/hack.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="text-white">
            <p className="text-violet-300 font-extrabold tracking-widest">
              Get in touch
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Grow Your <br className="hidden sm:block" />
              Digital Presence?
            </h2>

            <p className="mt-5 text-slate-200 text-base sm:text-lg max-w-xl leading-relaxed">
              Let <span className="font-extrabold text-white">OPTIMIZERS LLC</span>{" "}
              help you build a strong online identity and turn visitors into loyal customers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-4 max-w-xl">
              <a
                href="tel:+923106111886"
                className="group inline-flex items-center justify-center rounded-full px-7 py-4
                  bg-indigo-600/90 hover:bg-indigo-600
                  text-white font-extrabold
                  shadow-[0_16px_50px_rgba(79,70,229,0.35)]
                  transition-all duration-300 hover:-translate-y-1"
              >
                CALL US NOW : +1 945 215 2262
              </a>

              <a
                href="mailto:info@customiserslla.com"
                className="group inline-flex items-center justify-center rounded-full px-7 py-4
                  bg-indigo-600/70 hover:bg-indigo-600/90
                  text-white font-extrabold
                  shadow-[0_16px_50px_rgba(79,70,229,0.28)]
                  transition-all duration-300 hover:-translate-y-1"
              >
                Email : info@optimizerslla.com
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-300">
              We usually respond within 24 hours.
            </p>
          </div>

          <div
            className={`relative rounded-3xl border border-white/90 bg-white/10 backdrop-blur-xl p-6 sm:p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.65)]
            transition-all duration-700 ease-out delay-150
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

            <form className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-slate-200">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-slate-200">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+92 3xx xxxxxxx"
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-slate-200">
                  Portfolio Link
                </label>
                <input
                  type="url"
                  placeholder="https://portfolio.com"
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-200">
                  Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-200">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-xl bg-black/80 border border-white/80 px-4 py-3
                    text-white placeholder:text-slate-400 outline-none resize-none
                    focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-200">
                  Upload Docs
                </label>

                <label
                  className="mt-2 flex items-center justify-between gap-3 rounded-xl
                    border border-dashed border-white/80 bg-black/80 px-4 py-3
                    cursor-pointer hover:border-indigo-400/50 hover:bg-black/40 transition"
                >
                  <span className="text-slate-300 text-sm">
                    Attach files (PDF, DOC, PNG, JPG)
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                    Choose
                  </span>
                  <input type="file" className="hidden" multiple />
                </label>
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 px-6 py-3 text-slate-950 font-extrabold
                    shadow-[0_18px_60px_rgba(16,185,129,0.30)]
                    hover:shadow-[0_22px_70px_rgba(16,185,129,0.45)]
                    hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>

                <p className="mt-3 text-xs text-slate-400 text-center">
                  By submitting, you agree to our terms & privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
