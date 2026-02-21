import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedBlogSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
            Featured Article
          </p>
        </div>

        <div
          className={`grid gap-12 lg:grid-cols-2 items-center transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* LEFT - IMAGE */}
          <div className="group relative overflow-hidden rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
            <img
              src="/blogs/featured.jpg"
              alt="Featured Blog"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            {/* Category */}
            <span className="inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
              AI & Systems
            </span>

            {/* Title */}
            <h2 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              How Scalable Architecture Powers Modern Digital Platforms
            </h2>

            {/* Excerpt */}
            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              Explore how performance-driven architecture, modular systems,
              and AI integrations are shaping the next generation of digital platforms.
              A strategic breakdown for founders and engineering teams.
            </p>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span>By Optimizers Team</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>June 2026</span>
            </div>

            {/* ✅ Red Button (active route) */}
            <Link
              to="/blogs/scalable-architecture"
              className="mt-8 inline-flex items-center justify-center rounded-xl
                         bg-rose-600 px-6 py-3 text-sm font-extrabold text-white
                         shadow-lg shadow-rose-600/25 hover:bg-rose-700 hover:shadow-rose-700/35
                         transition-all duration-300"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}