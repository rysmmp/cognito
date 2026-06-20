"use client";

import { useEffect, useRef } from "react";

/** Parse a `#rrggbb` string into an `r, g, b` triple for rgba() composition. */
function hexToRgb(hex: string): [number, number, number] {
  const m = hex.trim().replace("#", "");
  const v = m.length === 3 ? m.replace(/(.)/g, "$1$1") : m;
  const n = parseInt(v, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
}

/**
 * Ambient, cursor-reactive particle field painted behind all content. Particles
 * drift slowly, link to nearby neighbours (constellation lines), and scatter away
 * from the pointer. Tinted with the M3 `--md-primary` token. Honours
 * `prefers-reduced-motion` by painting a single static frame and not animating.
 */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--md-primary")
      .trim();
    const [pr, pg, pb] = hexToRgb(primary || "#d0bcff");
    const rgb = `${pr}, ${pg}, ${pb}`;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130; // px distance under which particles connect
    const REPEL = 120; // px radius of the cursor's push

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with viewport area, clamped for performance.
      const count = Math.round(Math.min(80, Math.max(30, (width * height) / 24000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1,
        a: Math.random() * 0.25 + 0.12,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Cursor repulsion — push particles out of the pointer's way.
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < REPEL * REPEL) {
          const d = Math.sqrt(d2) || 1;
          const force = ((REPEL - d) / REPEL) * 2.2;
          p.x += (dx / d) * force;
          p.y += (dy / d) * force;
        }

        // Wrap around the edges for a seamless field.
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${rgb}, ${p.a})`;
        ctx!.fill();
      }

      // Constellation links between nearby particles.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${rgb}, ${(1 - dist / LINK) * 0.12})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
    }

    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    if (reduceMotion) {
      draw(); // single static frame, no animation or interaction
    } else {
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
