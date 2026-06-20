"use client";

import { useEffect, useRef } from "react";

/** Parse a `#rrggbb` string into an `r, g, b` triple for rgba() composition. */
function hexToRgb(hex: string): [number, number, number] {
  const m = hex.trim().replace("#", "");
  const v = m.length === 3 ? m.replace(/(.)/g, "$1$1") : m;
  const n = parseInt(v, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Blend an rgb triple toward white by `amt` (0–1). */
function lighten([r, g, b]: [number, number, number], amt: number) {
  return [
    Math.round(r + (255 - r) * amt),
    Math.round(g + (255 - g) * amt),
    Math.round(b + (255 - b) * amt),
  ];
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  twinkle: number; // phase
  twinkleSpeed: number;
  bright: boolean; // a brighter "star" / soma
  energy: number; // 0–1 activation from the cursor / bursts
}

interface Pulse {
  i: number; // from node
  j: number; // to node
  t: number; // 0–1 progress along the edge
  speed: number;
}

interface Ring {
  x: number;
  y: number;
  t: number; // 0–1 lifetime
}

interface Link {
  a: number;
  b: number;
  dist: number;
}

/**
 * Ambient, cursor-reactive field that reads as both a constellation and a
 * neural network: glowing nodes of varied size (stars / somas) linked to nearby
 * neighbours, with signal pulses that travel along the links (firing). The
 * cursor forms bright synaptic links to nearby nodes and energises them (more
 * firing, brighter glow); clicking sends out a ripple and a burst of pulses.
 * Tinted with the M3 `--md-primary` token. Honours `prefers-reduced-motion` by
 * painting one static frame with no animation or interaction.
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

    const primaryHex = getComputedStyle(document.documentElement)
      .getPropertyValue("--md-primary")
      .trim();
    const base = hexToRgb(primaryHex || "#d0bcff");
    const rgb = `${base[0]}, ${base[1]}, ${base[2]}`;
    const [lr, lg, lb] = lighten(base, 0.5); // brighter "star" / signal tone
    const lit = `${lr}, ${lg}, ${lb}`;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    const LINK = 145; // px under which nodes connect
    const REPEL = 110; // px radius of the cursor's gentle push
    const CURSOR_LINK = 200; // px reach of synaptic links to the cursor
    const MAX_PULSES = 90;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let links: Link[] = [];
    const pulses: Pulse[] = [];
    const rings: Ring[] = [];
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
      const count = Math.round(
        Math.min(120, Math.max(45, (width * height) / 19000)),
      );
      nodes = Array.from({ length: count }, () => {
        const bright = Math.random() < 0.22;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: bright ? Math.random() * 1.6 + 1.8 : Math.random() * 1.2 + 0.8,
          baseAlpha: bright
            ? Math.random() * 0.2 + 0.45
            : Math.random() * 0.2 + 0.18,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.006,
          bright,
          energy: 0,
        };
      });
    }

    /** Queue a signal pulse from node i to node j, if there's headroom. */
    function fire(i: number, j: number) {
      if (pulses.length >= MAX_PULSES) return;
      pulses.push({ i, j, t: 0, speed: 0.012 + Math.random() * 0.022 });
    }

    /** A random neighbour of node i within the current link set. */
    function neighbourOf(i: number): number {
      const opts = links.filter((l) => l.a === i || l.b === i);
      if (!opts.length) return -1;
      const l = opts[(Math.random() * opts.length) | 0];
      return l.a === i ? l.b : l.a;
    }

    function update() {
      const hasMouse = mouse.x > -9999;

      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += p.twinkleSpeed;

        // Cursor proximity → activation (decays smoothly when it leaves).
        let target = 0;
        if (hasMouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CURSOR_LINK * CURSOR_LINK) {
            const d = Math.sqrt(d2) || 1;
            target = 1 - d / CURSOR_LINK;
            // Gentle push so the field reacts to the pointer.
            if (d < REPEL) {
              const force = ((REPEL - d) / REPEL) * 1.4;
              p.x += (dx / d) * force;
              p.y += (dy / d) * force;
            }
          }
        }
        p.energy = Math.max(p.energy * 0.94, target);

        // Wrap around the edges for a seamless field.
        if (p.x < -12) p.x = width + 12;
        else if (p.x > width + 12) p.x = -12;
        if (p.y < -12) p.y = height + 12;
        else if (p.y > height + 12) p.y = -12;
      }

      // Recompute the link set (also used for pulse routing).
      links = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) links.push({ a: i, b: j, dist });
        }
      }

      // Ambient firing along a random link.
      if (links.length && Math.random() < 0.08) {
        const l = links[(Math.random() * links.length) | 0];
        fire(l.a, l.b);
      }
      // Energised nodes (near the cursor) fire more often.
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].energy > 0.35 && Math.random() < nodes[i].energy * 0.05) {
          const j = neighbourOf(i);
          if (j >= 0) fire(i, j);
        }
      }

      // Advance pulses; drop finished ones.
      for (let k = pulses.length - 1; k >= 0; k--) {
        pulses[k].t += pulses[k].speed;
        if (pulses[k].t >= 1) pulses.splice(k, 1);
      }
      // Advance rings.
      for (let k = rings.length - 1; k >= 0; k--) {
        rings[k].t += 0.025;
        if (rings[k].t >= 1) rings.splice(k, 1);
      }
    }

    function render() {
      ctx!.clearRect(0, 0, width, height);

      // Links (constellation / dendrites), brightened by endpoint energy.
      for (const l of links) {
        const a = nodes[l.a];
        const b = nodes[l.b];
        const e = (a.energy + b.energy) / 2;
        const alpha = (1 - l.dist / LINK) * (0.1 + e * 0.5);
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.strokeStyle = `rgba(${e > 0.15 ? lit : rgb}, ${alpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // Synaptic links from the cursor to nearby nodes.
      if (mouse.x > -9999) {
        for (const p of nodes) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CURSOR_LINK) {
            ctx!.beginPath();
            ctx!.moveTo(mouse.x, mouse.y);
            ctx!.lineTo(p.x, p.y);
            ctx!.strokeStyle = `rgba(${lit}, ${(1 - dist / CURSOR_LINK) * 0.28})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      // Nodes (stars / somas) with a soft halo when bright or energised.
      for (const p of nodes) {
        const tw = 0.85 + Math.sin(p.twinkle) * 0.15;
        const alpha = Math.min(1, (p.baseAlpha + p.energy * 0.5) * tw);
        if (p.bright || p.energy > 0.2) {
          const halo = p.r * (3 + p.energy * 4);
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, halo, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${rgb}, ${0.06 + p.energy * 0.12})`;
          ctx!.fill();
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.energy > 0.3 ? lit : rgb}, ${alpha})`;
        ctx!.fill();
      }

      // Signal pulses travelling along the links.
      for (const pu of pulses) {
        const a = nodes[pu.i];
        const b = nodes[pu.j];
        const x = a.x + (b.x - a.x) * pu.t;
        const y = a.y + (b.y - a.y) * pu.t;
        const fade = Math.sin(pu.t * Math.PI); // bright mid-flight
        ctx!.beginPath();
        ctx!.arc(x, y, 5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${lit}, ${0.18 * fade})`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${lit}, ${0.95 * fade})`;
        ctx!.fill();
      }

      // Click ripples.
      for (const ring of rings) {
        ctx!.beginPath();
        ctx!.arc(ring.x, ring.y, ring.t * CURSOR_LINK, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${lit}, ${(1 - ring.t) * 0.3})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }
    }

    function loop() {
      update();
      render();
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
    const onDown = (e: MouseEvent) => {
      rings.push({ x: e.clientX, y: e.clientY, t: 0 });
      // Burst: fire from the nodes nearest the click.
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - e.clientX;
        const dy = nodes[i].y - e.clientY;
        if (dx * dx + dy * dy < 150 * 150) {
          nodes[i].energy = 1;
          const j = neighbourOf(i);
          if (j >= 0) fire(i, j);
        }
      }
    };

    resize();
    if (reduceMotion) {
      update();
      render(); // single static frame, no animation or interaction
    } else {
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      window.addEventListener("mousedown", onDown);
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
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
