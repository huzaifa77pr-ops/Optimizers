export default function AIServiceBoxesSection({ show = true }) {
  return (
    <section className="bg-[#06385a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div
          className={[
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Artificial Intelligence Services
          </h2>

          <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
            <div className="grid md:grid-cols-3">
              <div className="p-8 sm:p-10 border-b border-white/10 md:border-b-0 md:border-r">
                <h3 className="text-center text-2xl font-extrabold text-white">
                  Architecture and Consulting
                </h3>
                <p className="mt-5 text-center text-sm sm:text-base leading-relaxed text-white/75">
                  With a modern approach to data science and machine learning, we help you
                  design scalable foundations, select the right tools, and build models that
                  unlock smarter decisions across your business.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["AI Roadmap", "Data Architecture", "Model Strategy"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 sm:p-10 border-b border-white/10 md:border-b-0 md:border-r">
                <h3 className="text-center text-2xl font-extrabold text-white">
                  Training
                </h3>
                <p className="mt-5 text-center text-sm sm:text-base leading-relaxed text-white/75">
                  We bring your team along for the ride. Our experts train teams on practical
                  AI workflows, model thinking, and safe adoption — so your organization can
                  operate confidently in an AI-driven environment.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {["Workshops", "Team Enablement", "Playbooks"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <h3 className="text-center text-2xl font-extrabold text-white">
                  Leveraging the Latest Technology
                </h3>
                <p className="mt-5 text-center text-sm sm:text-base leading-relaxed text-white/75">
                  We implement modern AI solutions across leading cloud platforms — ensuring
                  scalability, security, and production-ready deployment.
                </p>

                <div className="mt-10 flex flex-col items-center gap-7">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      aws
                    </span>
                    <svg width="74" height="24" viewBox="0 0 74 24" aria-hidden="true">
                      <path
                        d="M5 17c14 8 42 8 64-2"
                        fill="none"
                        stroke="rgba(251,146,60,0.95)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M58 17l7 0"
                        fill="none"
                        stroke="rgba(251,146,60,0.95)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg width="44" height="34" viewBox="0 0 44 34" aria-hidden="true">
                      <path
                        d="M17.6 27.6h13.9c4 0 7.2-3.2 7.2-7.2 0-3.5-2.4-6.4-5.6-7.1C32 8.1 28.1 5 23.4 5c-4.7 0-8.7 3.2-9.8 7.6-4.2.3-7.6 3.8-7.6 8.1 0 3.9 3.1 6.9 7 6.9h4.6Z"
                        fill="none"
                        stroke="rgba(255,255,255,0.9)"
                        strokeWidth="2.4"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.2 20.5c.4-3 3-5.3 6.2-5.3"
                        fill="none"
                        stroke="rgba(34,197,94,0.9)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M30.8 12.8c2.5.4 4.4 2.6 4.4 5.3"
                        fill="none"
                        stroke="rgba(239,68,68,0.9)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21.6 7.6c2.2 0 4.1.9 5.5 2.3"
                        fill="none"
                        stroke="rgba(59,130,246,0.9)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-3xl font-extrabold text-white">
                      Google Cloud
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg width="44" height="34" viewBox="0 0 44 34" aria-hidden="true">
                      <path
                        d="M18 3 3 29h14l4-7 6 7h14L22 3h-4Z"
                        fill="rgba(255,255,255,0.92)"
                        opacity="0.95"
                      />
                      <path
                        d="M18 3 10 19h10l2-3-4-7Z"
                        fill="rgba(56,189,248,0.9)"
                        opacity="0.9"
                      />
                    </svg>
                    <div className="leading-none">
                      <div className="text-2xl font-extrabold text-white">
                        Microsoft Azure
                      </div>
                      <div className="text-2xl font-extrabold text-white">
                        
                      </div>
                    </div>
                  </div>
                </div>        
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-white/55">
            Platform-agnostic delivery • Secure deployment • Production-ready systems
          </p>
        </div>
      </div>
    </section>
  );
}
