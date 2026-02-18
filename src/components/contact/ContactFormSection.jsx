import { useEffect, useMemo, useState } from "react";

export default function ContactFormSection() {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);

  const initial = useMemo(
    () => ({
      fullName: "",
      email: "",
      company: "",
      budget: "",
      service: "",
      timeline: "",
      message: "",
      file: null,
    }),
    []
  );

  const [form, setForm] = useState(initial);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 90);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setForm((p) => ({ ...p, [name]: files ? files[0] : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setToast(false);
      requestAnimationFrame(() => setToast(true));
      return;
    }

    setToast(true);
    setForm(initial);

    const fileEl = document.getElementById("contact_file");
    if (fileEl) fileEl.value = "";
  };

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* top fixed success bar */}
      <div
        className={[
          "fixed left-1/2 top-3 z-50 -translate-x-1/2 transition-all duration-500",
          toast
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        <div className="rounded-2xl border border-slate-900/10 bg-white/90 px-4 py-3 shadow-[0_18px_55px_rgba(2,6,23,0.14)] backdrop-blur">
          <p className="text-sm font-semibold text-slate-900">
            ✅ Message received — we’ll reply within 24 hours.
          </p>
        </div>
      </div>

      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-12 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(ellipse_at_top,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ✅ Heading OUTSIDE grid (so right panel aligns with form top) */}
        <div
          className={[
            "max-w-3xl transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
            Contact form
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Share your Project Details.
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Tell us what you need — we’ll respond with a clear plan, timeline, and next steps.
          </p>
        </div>

        {/* ✅ Grid starts with BOTH boxes at same top */}
        <div
          className={[
            "mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          style={{ transitionDelay: "80ms" }}
        >
          {/* LEFT: Form card */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_55px_rgba(2,6,23,0.10)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Full name <span className="text-rose-600">*</span>
                </label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Company (optional)
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  placeholder="Company / brand"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Budget range
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                >
                  <option value="">Select budget</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                  <option value="$7,000+">$7,000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                >
                  <option value="">Select service</option>
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="AI Consulting">AI Consulting</option>
                  <option value="Custom Platforms">Custom Platforms</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="2–4 weeks">2–4 weeks</option>
                  <option value="1–2 months">1–2 months</option>
                  <option value="2–3 months">2–3 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-900">
                  Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and any reference links..."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900/30 focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-slate-900">
                  Attach a file (optional)
                </label>
                <input
                  id="contact_file"
                  name="file"
                  onChange={onChange}
                  type="file"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
                />
                <p className="mt-2 text-xs text-slate-500">
                  PDF / DOC / PNG accepted. Keep it small for faster sending.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 hover:bg-rose-500 hover:shadow-rose-500/30 transition-all duration-300"
              >
                Send Message
              </button>

              <a
                href="mailto:hello@customisers.dev"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Email Directly
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              By submitting, you agree to be contacted about your request. No spam.
            </p>
          </form>

          {/* RIGHT: Panel (same height as form) */}
          <div
            className={[
              "h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_55px_rgba(2,6,23,0.10)]",
              "flex flex-col transition-all duration-1000 ease-out",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <p className="text-sm font-extrabold text-slate-900">What happens next</p>

            <div className="mt-5 space-y-4">
              {[
                { t: "We review your details", d: "We check goals, scope, and constraints for clarity." },
                { t: "We reply with next steps", d: "You’ll get availability, timeline, and a premium plan." },
                { t: "Short call (optional)", d: "If needed, we do a 10–15 min alignment call." },
                { t: "Proposal + kickoff", d: "You get deliverables, phases, and we begin clean execution." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">{x.t}</p>
                      <p className="mt-1 text-sm text-slate-600">{x.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-px w-full bg-slate-200" />

            <p className="mt-6 text-sm font-extrabold text-slate-900">
              Tip for faster response
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Include your reference links, ideal deadline, and what success looks like for you.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Goals", "Scope", "Timeline", "References"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Typical reply
                </p>
                <p className="mt-2 text-sm font-extrabold text-slate-900">
                  Same day / within 24 hours
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Clear next steps + timeline overview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
