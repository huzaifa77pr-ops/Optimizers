import { useEffect, useRef } from "react";

export default function WebBlueNetworkBackground({
  nodes = 42,
  maxDist = 170,
  speed = 0.55,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });

    let w = 0;
    let h = 0;
    let raf = 0;
    let pts = [];
    let mouse = { x: -9999, y: -9999, active: false };

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const rand = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      pts = new Array(nodes).fill(0).map(() => ({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-speed, speed),
        vy: rand(-speed, speed),
        r: rand(1.8, 3.2),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Soft top-to-bottom haze (premium + readable)
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "rgba(255,255,255,0.15)");
      g.addColorStop(0.5, "rgba(255,255,255,0.55)");
      g.addColorStop(1, "rgba(255,255,255,0.18)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Move points
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= w) p.vx *= -1;
        if (p.y <= 0 || p.y >= h) p.vy *= -1;

        p.x = clamp(p.x, 0, w);
        p.y = clamp(p.y, 0, h);
      }

      // Lines (web)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < maxDist) {
            // Stronger near mouse (premium interactive)
            let boost = 0;
            if (mouse.active) {
              const mdx = a.x - mouse.x;
              const mdy = a.y - mouse.y;
              const md = Math.sqrt(mdx * mdx + mdy * mdy);
              boost = clamp(1 - md / 220, 0, 1);
            }

            const alpha = (0.10 + boost * 0.22) * (1 - d / maxDist);
            ctx.strokeStyle = `rgba(14,165,233,${alpha})`; // light blue web
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots (nodes)
      for (const p of pts) {
        // Glow
        ctx.fillStyle = "rgba(14,165,233,0.16)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = "rgba(2,132,199,0.85)"; // slightly deeper blue
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse soft pulse (optional)
      if (mouse.active) {
        ctx.fillStyle = "rgba(14,165,233,0.10)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, [nodes, maxDist, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
