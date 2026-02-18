// src/pages/CareersSection8.jsx
import { useMemo, useRef, useState } from "react";

export default function CareersSection8() {
  const formRef = useRef(null);

  const [toast, setToast] = useState({ show: false, text: "" });
  const [fileName, setFileName] = useState("");

  const roles = useMemo(
    () => [
      "Frontend (React)",
      "Backend (Node/Laravel)",
      "UI/UX Designer",
      "Digital Marketing Specialist",
      "Project Coordinator",
      "Other",
    ],
    []
  );

  function handleSubmit(e) {
    e.preventDefault();

    // ✅ show top message (toast)
    setToast({
      show: true,
      text: "✅ Application submitted successfully. We’ll review it and get back if shortlisted.",
    });

    // ✅ reset form fields
    if (formRef.current) formRef.current.reset();
    setFileName("");

    // optional: auto-hide after few seconds
    window.clearTimeout(handleSubmit._t);
    handleSubmit._t = window.setTimeout(() => {
      setToast({ show: false, text: "" });
    }, 4500);
  }

  return (
    <section id="apply" className="relative overflow-hidden bg-[#f3f4f6] text-black">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes softShift {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-34px,34px,0); }
        }
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none !important; }
        }
      `}</style>

      {/* ✅ TOP BAR MESSAGE (fixed) */}
      {toast.show && (
        <div className="fixed left-0 right-0 top-0 z-[60] px-4 pt-4">
          <div
            className="mx-auto max-w-4xl rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4
                       shadow-[0_18px_70px_rgba(0,0,0,0.12)]"
            style={{ animation: "toastIn 260ms ease-out both" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm md:text-base text-emerald-900">
                {toast.text}
              </p>

              <button
                type="button"
                onClick={() => setToast({ show: false, text: "" })}
                className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-5 py-2 text-xs font-semibold text-white
                           transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06] anim"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          animation: "softShift 28s linear infinite",
          willChange: "transform",
        }}
      />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.70),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Title */}
        <div
          className="max-w-3xl"
          style={{ animation: "fadeUp 950ms ease-out both" }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/70">
            Apply Now
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Send your details — we’ll review with care.
          </h2>

          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            Share your role preference, portfolio, and a short message. We’ll respond if there’s a strong fit.
          </p>

          <div className="mt-8 h-px w-44 bg-black/15" />
        </div>

        {/* Form Card */}
        <div
          className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start"
          style={{ animation: "fadeUp 950ms ease-out both", animationDelay: "140ms" }}
        >
          {/* Left Info */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-semibold tracking-tight">What helps your application</h3>

              <ul className="mt-5 space-y-3 text-sm text-black/70">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black/70" />
                  <p>Portfolio link (projects, case studies, GitHub, Dribbble).</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black/70" />
                  <p>Short message: what you do best + what role you want.</p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black/70" />
                  <p>Clarity on availability (full-time / part-time / internship).</p>
                </li>
              </ul>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <p className="mt-6 text-xs text-black/60 leading-relaxed">
                Tip: Keep it simple. We value clean work and consistent communication.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              ref={formRef}
              className="rounded-3xl border border-black/10 bg-white p-8 md:p-10
                         shadow-[0_18px_70px_rgba(0,0,0,0.10)]"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Role Interested In
                  </label>
                  <select
                    required
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {roles.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Availability
                  </label>
                  <select
                    required
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                  </select>
                </div>

                {/* Portfolio */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Portfolio / LinkedIn
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                  />
                  <p className="mt-2 text-xs text-black/50">
                    Add your best work link (GitHub / live projects / case studies).
                  </p>
                </div>

                {/* CV Link */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    CV Link (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="Google Drive / Dropbox link"
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)]"
                  />
                </div>

                {/* Choose File */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Upload CV (Optional)
                  </label>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-black/10 bg-white px-4 py-4">
                    <div className="text-sm text-black/70">
                      {fileName ? (
                        <span className="font-medium text-black">{fileName}</span>
                      ) : (
                        <span>No file selected</span>
                      )}
                    </div>

                    <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-xs font-semibold text-white
                                       transition-transform duration-300 hover:-translate-y-0.5">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          setFileName(f ? f.name : "");
                        }}
                      />
                    </label>
                  </div>

                  <p className="mt-2 text-xs text-black/50">
                    Accepted: PDF, DOC, DOCX (UI only — backend upload can be added next).
                  </p>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you do best, and why this role fits you."
                    required
                    className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm
                               outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,0,0,0.08)] resize-none"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-black/60">
                  We usually respond only to shortlisted profiles.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white
                             transition-transform duration-300 hover:-translate-y-1 hover:bg-red-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
