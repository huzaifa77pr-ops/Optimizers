import { useEffect, useState } from "react";

export default function BlogsNewsletterSection() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setOk(true);
    setEmail("");
    setTimeout(() => setOk(false), 2200);
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0F14] py-20 md:py-28 text-white">
      {/* subtle premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* success bar */}
        <div
          className={[
            "fixed left-1/2 top-4 z-[80] -translate-x-1/2",
            "transition-all duration-300",
            ok ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
          ].join(" ")}
        >
          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
            <p className="text-sm font-extrabold text-white">Subscribed ✅</p>
            <p className="text-xs text-white/70 mt-0.5">
              You’ll receive premium insights in your inbox.
            </p>
          </div>
        </div>

        <div
          className={[
            "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
            "transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-white/60 uppercase">
              Newsletter
            </p>

            <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Get weekly insights —{" "}
              <span className="text-white/85">no noise, only value.</span>
            </h2>

            <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              Short, actionable reads on systems, marketing, UI/UX, and AI — written like a premium
              playbook for founders and teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Web Systems", "Design", "Marketing", "AI", "Strategy"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 sm:p-8 backdrop-blur shadow-[0_26px_90px_rgba(0,0,0,0.60)]">
            <p className="text-sm font-extrabold text-white">Subscribe</p>
            <p className="mt-2 text-sm text-white/70">
              Enter your email — we’ll keep it clean and professional.
            </p>

            <form onSubmit={onSubmit} className="mt-6">
              <label className="block text-xs font-bold text-white/80">
                Email Address
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3
                           text-sm text-white placeholder:text-white/40 outline-none
                           focus:border-rose-500/60 focus:ring-4 focus:ring-rose-500/10 transition"
              />

              <button
                type="submit"
                className="mt-4 w-full rounded-2xl bg-rose-600 px-5 py-3 text-sm font-extrabold text-white
                           shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:shadow-rose-700/35
                           transition-all duration-300"
              >
                Subscribe →
              </button>

              <p className="mt-4 text-xs text-white/55 leading-relaxed">
                We never spam. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-7 h-px w-full bg-white/10" />

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { t: "Fast reads", d: "5–8 min" },
                { t: "Premium quality", d: "No fluff" },
                { t: "Actionable", d: "Steps included" },
                { t: "Weekly", d: "Consistent" },
              ].map((i) => (
                <div
                  key={i.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-xs font-extrabold text-white">{i.t}</p>
                  <p className="mt-1 text-xs text-white/60">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}