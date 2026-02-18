import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Websites, Intranets & Mobile App Development",
    desc: "Modern, scalable digital platforms built with clean architecture and secure foundations.",
    to: "/services/websites",
    icon: "devices",
  },
  {
    title: "CMS & Ecommerce Platform Implementation",
    desc: "Flexible content systems and powerful ecommerce platforms tailored to your business.",
    to: "/services/cms-ecommerce",
    icon: "cms",
  },
  {
    title: "System Integrations",
    desc: "Seamless integrations across ERP, CRM, POS and third-party systems.",
    to: "/services/system-integrations",
    icon: "integration",
  },
  {
    title: "Onsite Search Implementation",
    desc: "Advanced search tools designed to improve usability and conversions.",
    to: "/services/onsite-search",
    icon: "search",
  },
];

function Icon({ type }) {
  const base = "h-14 w-14 text-white transition duration-500 group-hover:text-white";

  switch (type) {
    case "devices":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="4" width="14" height="10" rx="2" />
          <rect x="18" y="7" width="4" height="9" rx="1" />
        </svg>
      );
    case "cms":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "integration":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M12 8v8" />
        </svg>
      );
    case "search":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WebDevServices() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`bg-[#0b3a5a] py-20 transition-all duration-1000 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className={`text-center text-4xl font-black text-white mb-14 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Web Development Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/20">
  {services.map((service, i) => (
    <div
      key={i}
      className="group border border-white/20 p-10 text-center hover:bg-black/80"
    >
      <div className="flex justify-center mb-8">
        <Icon type={service.icon} />
      </div>

      <Link
        to={service.to}
        className="
          inline-block
          px-6 py-3
          mb-6
          rounded-full
          font-bold
          text-sm
          tracking-wide
          border border-white
          text-white
          hover:bg-white
          hover:text-[#0b3a5a]
        "
      >
        {service.title}
      </Link>

      <p className="text-sm text-white/80 group-hover:text-white">
        {service.desc}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
