"use client";

import { useEffect, useRef, useState } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
  twinkleSpeed: number;
  drift: number;
  depth: number;
  tint: "blue" | "violet" | "white";
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
};

const STAR_TINTS = {
  blue: [147, 197, 253],
  violet: [196, 181, 253],
  white: [241, 245, 249],
} as const;

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let lastFrame = performance.now();
    let elapsed = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let nextShootingStarAt = 4 + Math.random() * 4;
    let pointerTargetX = 0;
    let pointerTargetY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const seedStars = () => {
      const area = width * height;
      const count = Math.min(220, Math.max(100, Math.round(area / 8500)));

      stars = Array.from({ length: count }, () => {
        const tintRoll = Math.random();
        const tint: Star["tint"] =
          tintRoll > 0.86 ? "violet" : tintRoll > 0.58 ? "blue" : "white";
        const depth = 0.25 + Math.random() * 0.75;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.35 + Math.random() * 1.75 * depth,
          alpha: 0.18 + Math.random() * 0.68,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.45 + Math.random() * 1.4,
          drift: 0.6 + Math.random() * 1.4,
          depth,
          tint,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTargetX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointerTargetY = (event.clientY / Math.max(height, 1) - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointerTargetX = 0;
      pointerTargetY = 0;
    };

    const createShootingStar = () => {
      const startFromLeft = Math.random() > 0.3;
      const speed = 720 + Math.random() * 260;
      const angle = startFromLeft
        ? Math.PI * (0.12 + Math.random() * 0.08)
        : Math.PI * (0.82 + Math.random() * 0.06);

      shootingStars.push({
        x: startFromLeft ? width * (0.05 + Math.random() * 0.45) : width * 0.95,
        y: height * (0.04 + Math.random() * 0.34),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 110 + Math.random() * 110,
        life: 0,
        maxLife: 0.85 + Math.random() * 0.45,
      });
    };

    const drawGalaxyGlow = () => {
      const centerX = width * (0.58 + pointerX * 0.012);
      const centerY = height * (0.22 + pointerY * 0.01);
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(width, height) * 0.58
      );

      glow.addColorStop(0, "rgba(124, 58, 237, 0.095)");
      glow.addColorStop(0.28, "rgba(59, 130, 246, 0.07)");
      glow.addColorStop(0.62, "rgba(14, 116, 144, 0.025)");
      glow.addColorStop(1, "rgba(2, 6, 23, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = (deltaSeconds: number) => {
      pointerX += (pointerTargetX - pointerX) * 0.025;
      pointerY += (pointerTargetY - pointerY) * 0.025;

      for (const star of stars) {
        star.y += star.drift * star.depth * deltaSeconds;
        if (star.y > height + 8) {
          star.y = -8;
          star.x = Math.random() * width;
        }

        const parallaxX = pointerX * 13 * star.depth;
        const parallaxY = pointerY * 9 * star.depth;
        const x = star.x + parallaxX;
        const y = star.y + parallaxY;
        const shimmer =
          0.72 + Math.sin(elapsed * star.twinkleSpeed + star.phase) * 0.28;
        const alpha = Math.max(0.08, star.alpha * shimmer);
        const [red, green, blue] = STAR_TINTS[star.tint];

        if (star.radius > 1.35) {
          const halo = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            star.radius * 5.5
          );
          halo.addColorStop(0, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.32})`);
          halo.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(x, y, star.radius * 5.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.radius > 1.7 && shimmer > 0.82) {
          ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.48})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(x - star.radius * 4.5, y);
          ctx.lineTo(x + star.radius * 4.5, y);
          ctx.moveTo(x, y - star.radius * 4.5);
          ctx.lineTo(x, y + star.radius * 4.5);
          ctx.stroke();
        }
      }
    };

    const drawShootingStars = (deltaSeconds: number) => {
      for (const shootingStar of shootingStars) {
        shootingStar.life += deltaSeconds;
        shootingStar.x += shootingStar.vx * deltaSeconds;
        shootingStar.y += shootingStar.vy * deltaSeconds;

        const progress = shootingStar.life / shootingStar.maxLife;
        const alpha = Math.sin(Math.min(1, progress) * Math.PI);
        const speed = Math.hypot(shootingStar.vx, shootingStar.vy);
        const tailX = shootingStar.x - (shootingStar.vx / speed) * shootingStar.length;
        const tailY = shootingStar.y - (shootingStar.vy / speed) * shootingStar.length;
        const trail = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailX,
          tailY
        );

        trail.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.92})`);
        trail.addColorStop(0.18, `rgba(147, 197, 253, ${alpha * 0.58})`);
        trail.addColorStop(1, "rgba(99, 102, 241, 0)");

        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      shootingStars = shootingStars.filter(
        (shootingStar) => shootingStar.life < shootingStar.maxLife
      );
    };

    const draw = (now: number) => {
      const deltaSeconds = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      elapsed += deltaSeconds;

      ctx.clearRect(0, 0, width, height);
      drawGalaxyGlow();
      drawStars(deltaSeconds);

      if (!reduceMotion && elapsed >= nextShootingStarAt) {
        createShootingStar();
        nextShootingStarAt = elapsed + 7 + Math.random() * 10;
      }

      drawShootingStars(deltaSeconds);
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    if (reduceMotion) {
      draw(performance.now());
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const timeout = window.setTimeout(() => setVisible(true), 60);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="galaxy-base absolute inset-0" />
      <div className="galaxy-dust-band absolute inset-[-22%]" />
      <div className="galaxy-nebula galaxy-nebula-one absolute" />
      <div className="galaxy-nebula galaxy-nebula-two absolute" />
      <div className="galaxy-nebula galaxy-nebula-three absolute" />
      <div className="galaxy-vignette absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="galaxy-grain absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
