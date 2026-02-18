import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
    <div className="absolute inset-0"> <video className="h-full w-full object-cover" src="/herobg.mp4" autoPlay muted loop playsInline /> <div className="absolute inset-0 bg-black/0" /> <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/80" /> </div>   


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <span className="h-2 w-2 rounded-full bg-rose-600" />
              OPTIMIZERS LLC
            </div>

            <h1
              className={`mt-4 text-4xl sm:text-6xl font-black tracking-tight text-slate-50
              transition-all duration-700 ease-out delay-100
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              Premium Websites. Clean UI.<br/> High Conversions.
            </h1>

            <p
              className={`mt-4 text-lg text-slate-200 max-w-xl
              transition-all duration-700 ease-out delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              OPTIMIZERS LLC is a results-driven digital marketing agency helping businesses build visibility,
              engagement, and long-term growth through smart digital strategies.
            </p>

            <div
              className={`mt-7 transition-all duration-700 ease-out delay-300
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <button
                onClick={() => navigate("/about")}
                className="cursor-pointer rounded-xl bg-rose-600 px-7 py-3 text-white font-extrabold hover:bg-rose-700 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className={`relative overflow-hidden rounded-3xl bg-black/55 backdrop-blur-sm p-6 sm:p-8 min-h-[420px]
              border border-white/10
              transition-all duration-700 ease-out delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="absolute inset-0 opacity-35">
                <div className="absolute left-8 bottom-8 grid grid-cols-8 gap-3">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full bg-white" />
                  ))}
                </div>
              </div>

              <div className="relative h-100">
                <img
                  src="/ai.jpg"
                  alt="Device 1"
                  className={`absolute left-3 top-15 w-[100%] max-w-[600px] rounded-2xl shadow-2xl
                  transition-all duration-700 ease-out delay-300
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  hover:scale-[1.02]`}
                />

                <img
                  src="/ai1.jpg"
                  alt="Device 2"
                  className={`absolute right-5 w-[25%] max-w-[380px] rounded-2xl shadow-xl
                  transition-all duration-700 ease-out delay-400
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  hover:scale-[1.02]`}
                />

                <img
                  src="/cart.jpg"
                  alt="Device 3"
                  className={`absolute right-10 bottom-10 w-[44%] max-w-[320px] rounded-2xl shadow-2xl
                  transition-all duration-700 ease-out delay-500
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  hover:scale-[1.02]`}
                />
              </div>
            </div>

            <div
              className={`absolute -bottom-4 left-1/2 -translate-x-1/2 h-6 w-[82%] blur-xl bg-slate-300/60 rounded-full
              transition-all duration-700 ease-out delay-300
              ${show ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
