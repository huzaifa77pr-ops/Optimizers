import { Link } from "react-router-dom";

function SocialIcon({ type }) {
  const common = "h-5 w-5";

  if (type === "facebook")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.44 2.9h-2.28v6.98A10 10 0 0 0 22 12Z"/>
      </svg>
    );

  if (type === "twitter")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-5.35-6.994L3.9 22H1l7.02-8.02L2 2h6.93l4.84 6.394L18.244 2Zm-1.2 18h1.89L7.1 3.9H5.08L17.044 20Z"/>
      </svg>
    );

  if (type === "linkedin")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.05V24h-4v-8.5c0-2.03-.04-4.63-2.82-4.63-2.83 0-3.26 2.2-3.26 4.48V24h-4V8Z"/>
      </svg>
    );

  if (type === "instagram")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5C18.01 4 20 5.99 20 7.75v8.5c0 1.76-1.99 3.75-3.75 3.75h-8.5C5.99 20 4 18.01 4 16.25v-8.5C4 5.99 5.99 4 7.75 4Zm4.25 2.5A5.25 5.25 0 1 0 17.25 12 5.26 5.26 0 0 0 12 6.5Zm0 2A3.25 3.25 0 1 1 8.75 12 3.26 3.26 0 0 1 12 8.5Zm5.5-.88a1.13 1.13 0 1 0 1.13 1.13 1.13 1.13 0 0 0-1.13-1.13Z"/>
      </svg>
    );

  return null;
}

export default function Footer() {
  const socialLinks = [
    { type: "facebook", link: "https://facebook.com/yourPageOrProfile" },
    { type: "twitter", link: "https://x.com/yourUsername" },
    { type: "linkedin", link: "https://linkedin.com/in/yourUsername" },
    { type: "instagram", link: "https://instagram.com/yourUsername" },
  ];

  return (
    <footer className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/hat.jpg"
                alt="Customisers"
                className="h-10 w-10 object-contain"
              />
              <h3 className="font-black text-lg">OPTIMIZERS LLC</h3>
            </div>

            <p className="mt-5 text-slate-300 leading-relaxed">
              Optimizers LLC is a creative digital agency delivering SEO,
              marketing and high-end digital solutions to help brands grow online.
            </p>

            {/* ✅ Address + Phone + EIN added */}
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                5900 Balcones Drive Ste 12367, Austin, TX 78731
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a
                  href="tel:+19452152262"
                  className="hover:text-emerald-400 transition"
                >
                  +1 945 215 2262
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">EIN:</span> 36-5145886
              </p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-extrabold text-lg">Information</h4>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><Link to="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition">About</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400 transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              <li><Link to="/premium-templates" className="hover:text-emerald-400 transition">Premium Templates</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-extrabold text-lg">Services</h4>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Animations & CGI</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-extrabold text-lg">Follow Us</h4>

            <div className="mt-5 flex gap-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 flex items-center justify-center
                    rounded-full border border-white/10 bg-white/5
                    hover:bg-indigo-600 hover:border-indigo-500
                    hover:-translate-y-1 transition-all duration-300
                    shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
                >
                  <SocialIcon type={s.type} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-700/40 border-t border-white/10 py-4 text-center">
        <p className="text-white/90 font-semibold">
          © 2025–2026 Optimizers LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
