import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PremiumTemplatesHero() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 70);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Luxury ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-rose-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
      </div>

      {/* Hacker scan lines (Left -> Right) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div className="absolute left-0 top-16 h-[1px] w-[180%] -translate-x-[60%] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent animate-[scanline_6.5s_linear_infinite]" />
        <div className="absolute left-0 top-44 h-[1px] w-[180%] -translate-x-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[scanline_9s_linear_infinite]" />
        <div className="absolute left-0 top-[22rem] h-[1px] w-[180%] -translate-x-[60%] bg-gradient-to-r from-transparent via-rose-300/35 to-transparent animate-[scanline_7.5s_linear_infinite]" />
      </div>

      {/* Hacker code glass panel (moving text) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[35%] top-12 w-[170%] rotate-[-8deg] opacity-[0.30]">
          <div className="h-56 md:h-72 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="relative h-full">
              {/* Fade edges */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

              {/* Scrolling code */}
              <div className="absolute inset-0 px-6 py-6 font-mono text-[10px] md:text-xs leading-5 text-emerald-200/70">
                <div className="whitespace-nowrap animate-[ticker_16s_linear_infinite]">
                  {"{ premiumTemplates: true, build:'luxury', speed:'fast', ui:'glass', accent:['emerald','rose'], route:'/premium-templates' } "}
                  {":: deploy() :: optimize() :: audit(LCP) :: cache() :: seo() :: "}
                  {"<section class='hero'> <button>Explore</button> <button>Contact</button> </section> "}
                  {"// secure • minimal • premium • performance • clean spacing • typography "}
                </div>

                <div className="mt-3 whitespace-nowrap animate-[ticker_22s_linear_infinite]">
                  {"const template = { id:'emerald-atelier', category:'agency', price:'$149', reveal:'smooth' } "}
                  {":: sections( hero, grid, pricing, faq, cta ) :: "}
                  {"// Tailwind v4 // React Router DOM // lightweight motion "}
                </div>

                <div className="mt-3 whitespace-nowrap animate-[ticker_18s_linear_infinite]">
                  {"<glass-card> <shadow clean/> <hover subtle/> <accent emerald/> <accent rose/> </glass-card> "}
                  {":: requestCustomization() :: sameTabPreview() :: "}
                  {"// Optimizers LLC inspired — luxury minimal "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-14 md:pt-24 md:pb-20">
        <div
          className={[
            "transition-all duration-700 ease-out will-change-transform",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.55)]" />
            Premium Templates • Luxury UI • High Performance
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Premium Templates.
            <span className="block text-white/90 text-2xl md:text-3xl font-semibold mt-3">
              FOR SALE
            </span>
            
          </h1>

          

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
  
  {/* View Projects Button */}
  <button
    onClick={() => navigate("/projects")}
    className="cursor-pointer rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black
               hover:bg-emerald-400 transition shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
  >
    View Projects
  </button>

  {/* Request Custom Build Button */}
  <button
    onClick={() => navigate("/contact")}
    className="cursor-pointer rounded-2xl bg-rose-500/90 px-6 py-3 text-sm font-semibold text-black
               hover:bg-rose-400 transition shadow-[0_10px_30px_rgba(244,63,94,0.25)]"
  >
    Request Custom Build
  </button>

</div>

          {/* Mini stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "Fast", v: "Light Animations" },
              { k: "Glass", v: "Luxury UI Cards" },
              { k: "SEO", v: "Clean Structure" },
              { k: "Same Tab", v: "Preview Flow" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              >
                <p className="text-sm font-extrabold tracking-tight">{s.k}</p>
                <p className="mt-1 text-xs text-white/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}