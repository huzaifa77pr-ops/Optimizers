import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

const CATEGORIES = ["All", "Web", "UI/UX", "Marketing", "AI", "Strategy"];

export default function BlogsGridSection() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    if (active === "All") return blogs;
    return blogs.filter((b) => b.category === active);
  }, [active]);

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={[
            "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
            "transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Browse Articles
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Explore by category.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Premium insights across systems, design, marketing, and AI — structured for clarity.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-bold transition",
                    isActive
                      ? "bg-black text-white shadow-[0_14px_40px_rgba(0,0,0,0.20)]"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <article
              key={p.slug}
              className={[
                "group rounded-3xl border border-slate-200 bg-white overflow-hidden",
                "shadow-[0_18px_55px_rgba(2,6,23,0.10)] hover:shadow-[0_26px_80px_rgba(2,6,23,0.14)]",
                "transition-all duration-300 hover:-translate-y-1",
              ].join(" ")}
              style={{ transitionDelay: `${120 + idx * 70}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-900 backdrop-blur">
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-950 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.read}</span>
                </div>

                {/* ✅ Each Read opens its own page */}
                <div className="mt-6">
                  <Link
                    to={`/blogs/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-extrabold text-white
                               shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:shadow-rose-700/30 transition-all duration-300"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}