import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const dropdowns = {
  expertise: [
    { label: "Web & Application Development", to: "/expertise/web-application-development" },
    { label: "Experience Design", to: "/expertise/experience-design" },
    { label: "Digital Marketing", to: "/expertise/digital-marketing" },
    { label: "Strategy & Insights", to: "/expertise/strategy-insights" },
    { label: "Client Services", to: "/expertise/client-services" },
    { label: "Artificial Intelligence Consulting", to: "/expertise/ai-consulting" },
  ],
  platforms: [
    { label: "Web Platforms", to: "/platforms/web-platforms" },
    { label: "Mobile Platforms", to: "/platforms/mobile-platforms" },
    { label: "E-Commerce", to: "/platforms/e-commerce" },
  ],
};

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Hamburger({ open }) {
  return (
    <div className="relative h-10 w-10 grid place-items-center">
      <span
        className={`absolute h-[2px] w-6 bg-slate-900 transition ${
          open ? "translate-y-0 rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-[2px] w-6 bg-slate-900 transition ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-[2px] w-6 bg-slate-900 transition ${
          open ? "translate-y-0 -rotate-45" : "translate-y-2"
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [mobileDrop, setMobileDrop] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDrop(null);
        setMobileOpen(false);
        setMobileDrop(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative inline-flex items-center px-3 py-2 rounded-full text-[15px] font-semibold transition
         ${
           isActive
             ? "text-slate-950 bg-slate-100"
             : "text-slate-900/90 hover:text-slate-950 hover:bg-slate-100"
         }`
      }
      onClick={() => setMobileOpen(false)}
    >
      <span className="relative">
        {label}
        <span className="pointer-events-none absolute -bottom-[6px] left-0 h-[2px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
      </span>
    </NavLink>
  );

  const Dropdown = ({ id, label, items }) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenDrop(id)}
      onMouseLeave={() => setOpenDrop(null)}
    >
      <button
        type="button"
        className="group relative inline-flex items-center gap-1 px-3 py-2 rounded-full text-[15px] font-semibold text-slate-900/90
                   hover:text-slate-950 hover:bg-slate-100 transition"
      >
        <span className="relative">
          {label}
          <span className="pointer-events-none absolute -bottom-[6px] left-0 h-[2px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </span>
        <span className="text-slate-600">▾</span>
      </button>

      {openDrop === id && (
        <div className="absolute left-0 top-full pt-3">
          <div className="w-80 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            <div className="p-2">
              {items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group block rounded-xl px-4 py-3 text-[14px] font-semibold text-slate-800 hover:bg-slate-100 transition"
                  onClick={() => setOpenDrop(null)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="opacity-0 translate-x-[-4px] transition group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full" ref={navRef}>
      <div className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-9 flex items-center justify-end gap-2 text-sm text-slate-700" />
        </div>
      </div>

      <nav className="w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[92px] flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/hat.jpg"
                alt="Logo"
                className="h-20 w-20"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="leading-none">
                <div className="text-[22px] sm:text-[26px] font-black tracking-tight text-slate-950">
                  OPTIMIZERS <span className="font-extrabold">LLC</span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <NavItem to="/" label="Home" />

              <Dropdown id="expertise" label="Expertise" items={dropdowns.expertise} />
              <NavItem to="/blogs" label="Blogs" />
              <NavItem to="/projects" label="Projects" />
              <NavItem to="/premium-templates" label="Premium Templates" />

              <Dropdown id="platforms" label="Platforms" items={dropdowns.platforms} />

              <NavItem to="/careers" label="Careers" />
              <NavItem to="/about" label="About" />

              <Link
                to="/contact"
                className="ml-2 inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-rose-700 transition"
              >
                Contact Us
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden rounded-xl border border-slate-200 hover:bg-slate-50 transition"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Open menu"
            >
              <Hamburger open={mobileOpen} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </NavLink>

                <button
                  type="button"
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() =>
                    setMobileDrop((v) => (v === "expertise" ? null : "expertise"))
                  }
                >
                  <span>Expertise</span>
                  <span className="text-slate-600">
                    {mobileDrop === "expertise" ? "▴" : "▾"}
                  </span>
                </button>
                {mobileDrop === "expertise" && (
                  <div className="pl-3 pb-2">
                    {dropdowns.expertise.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-4 py-2 text-slate-800 hover:bg-slate-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* ✅ BLOGS added in mobile menu */}
                <Link
                  to="/blogs"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Blogs
                </Link>

                <Link
                  to="/projects"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </Link>

                <Link
                  to="/premium-templates"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Premium Templates
                </Link>

                <button
                  type="button"
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() =>
                    setMobileDrop((v) => (v === "platforms" ? null : "platforms"))
                  }
                >
                  <span>Platforms</span>
                  <span className="text-slate-600">
                    {mobileDrop === "platforms" ? "▴" : "▾"}
                  </span>
                </button>
                {mobileDrop === "platforms" && (
                  <div className="pl-3 pb-2">
                    {dropdowns.platforms.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-4 py-2 text-slate-800 hover:bg-slate-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  to="/careers"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Careers
                </Link>

                <Link
                  to="/about"
                  className="rounded-xl px-4 py-3 font-bold text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-rose-700 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}