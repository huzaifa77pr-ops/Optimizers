import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { webProjects } from "../data/projects";

export default function WebDevProjects({ limit = 4, title = "Web Development Projects" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  const list = webProjects.slice(0, limit);

  return (
    <section className="w-full bg-white">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            {title}
          </h2>

          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-emerald-600 transition"
          >
            View All Projects <span className="text-xl leading-none">›</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {list.map((p, idx) => (
            <a
              key={p.title + idx}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm
              transition-transform duration-150 hover:-translate-y-1
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${250 + idx * 120}ms` }}
            >
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/75 opacity-95" />

                {/* Text */}
                <div className="absolute inset-x-0 top-0 p-6">
                  <h3 className="text-2xl font-black text-white drop-shadow">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white/85">
                    {p.meta}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 shadow-lg
                                  transition-transform duration-150 group-hover:scale-110">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 sm:hidden">
          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-4 text-sm font-extrabold text-white hover:bg-emerald-600 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
