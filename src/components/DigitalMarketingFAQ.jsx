import { useEffect, useState } from "react";

const faqs = [
  {
    q: "What are digital marketing services?",
    a: "Digital marketing services are strategies and campaigns that help your brand grow online—through SEO, paid ads, social media, content, email, and conversion optimization—so you get more traffic, leads, and sales.",
  },
  {
    q: "What types of digital marketing services do you offer?",
    a: "We offer SEO (technical + content), Google Ads (Search/PMax), Meta Ads (creative + targeting), content marketing, email automation, analytics/tracking, and CRO (landing pages + A/B testing).",
  },
  {
    q: "How do you measure the success of your digital marketing strategies?",
    a: "We track the metrics that matter: qualified leads, revenue, ROAS, CAC, conversion rate, CTR, CPC, engagement, and organic growth. You get clear reporting with insights and next-step actions.",
  },
  {
    q: "Can you provide case studies or examples of previous successful campaigns?",
    a: "Yes. We can share relevant examples (industry-based) showing before/after performance—traffic growth, ROAS improvements, lead volume, and conversion uplift—along with the strategy used.",
  },
  {
    q: "How do I measure the success of a digital marketing campaign?",
    a: "Start with a clear goal (leads/sales/traffic), then track conversions, cost per result, ROAS, conversion rate, and funnel drop-off. Ensure proper tracking with GA4 + pixel + server-side events where needed.",
  },
  {
    q: "Can content marketing help drive more traffic to my website?",
    a: "Absolutely. High-quality content improves search visibility, builds trust, and attracts users at every stage. With the right keyword strategy + internal linking, content becomes a long-term traffic asset.",
  },
  {
    q: "What are the benefits of using social media marketing as part of my digital marketing strategy?",
    a: "Social media builds awareness, trust, and demand. Combined with paid campaigns, it can generate leads, retarget warm audiences, and improve conversions by staying top-of-mind.",
  },
  {
    q: "How can SEO services improve my website's visibility on search engines?",
    a: "SEO improves rankings through technical fixes, on-page optimization, content strategy, and authority building. This increases organic traffic, improves credibility, and reduces reliance on ads over time.",
  },
];

function PlusIcon({ open }) {
  return (
    <div className="relative h-6 w-6">
      <span
        className={`absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-slate-900 transition`}
      />
      <span
        className={`absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-slate-900 transition
        ${open ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}

export default function DigitalMarketingFAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 140);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full bg-white">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            FAQs About Digital Marketing Services
          </h2>
          <p className="mt-4 text-base sm:text-lg font-semibold text-slate-700">
            Find answers to common questions about our digital and online marketing strategies.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 space-y-4">
          {faqs.map((item, idx) => {
            const open = openIdx === idx;

            return (
              <div
                key={item.q}
                className={`rounded-2xl border border-slate-200 bg-slate-100/80 overflow-hidden
                shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900">
                    {item.q}
                  </span>
                  <span className="shrink-0">
                    <PlusIcon open={open} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-out
                  ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base leading-7 text-slate-700">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury bottom note */}
        <div className="mt-10 text-sm text-slate-600">
          Still have questions? <a className="font-bold text-emerald-700 hover:text-emerald-800 transition" href="/contact">Contact us</a> and we’ll guide you.
        </div>
      </div>
    </section>
  );
}
