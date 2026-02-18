import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const state = {
      w: 0,
      h: 0,
      stars: [],
      t: 0,
    };

    const rand = (min, max) => Math.random() * (max - min) + min;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;

      state.w = w;
      state.h = h;

      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // build stars
      const count = Math.floor((w * h) / 9000); // density
      state.stars = Array.from({ length: Math.max(140, Math.min(520, count)) }).map(
        () => ({
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.4, 1.6),
          a: rand(0.25, 0.95),
          s: rand(0.08, 0.35), // speed
          tw: rand(0.004, 0.02), // twinkle
        })
      );
    };

    const draw = () => {
      const { w, h } = state;
      state.t += 1;

      // background gradient
      const g = ctx.createRadialGradient(
        w * 0.65,
        h * 0.35,
        20,
        w * 0.65,
        h * 0.35,
        Math.max(w, h)
      );
      g.addColorStop(0, "rgba(120, 80, 255, 0.22)");
      g.addColorStop(0.35, "rgba(0, 140, 255, 0.10)");
      g.addColorStop(0.7, "rgba(0, 0, 0, 1)");
      g.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // moving nebulas (soft blobs)
      const t = state.t * 0.002;
      const blob = (cx, cy, r, color) => {
        const gg = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
        gg.addColorStop(0, color);
        gg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      };

      blob(w * (0.25 + 0.08 * Math.sin(t)), h * (0.30 + 0.08 * Math.cos(t)), Math.min(w, h) * 0.45, "rgba(255,60,140,0.10)");
      blob(w * (0.75 + 0.07 * Math.cos(t * 1.3)), h * (0.65 + 0.06 * Math.sin(t * 1.1)), Math.min(w, h) * 0.50, "rgba(60,180,255,0.10)");
      blob(w * (0.55 + 0.05 * Math.sin(t * 1.7)), h * (0.35 + 0.05 * Math.cos(t * 1.4)), Math.min(w, h) * 0.40, "rgba(140,110,255,0.10)");

      // stars
      for (const st of state.stars) {
        st.y += st.s;
        if (st.y > h + 2) st.y = -2;

        const tw = 0.6 + 0.4 * Math.sin(state.t * st.tw);
        ctx.globalAlpha = st.a * tw;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
