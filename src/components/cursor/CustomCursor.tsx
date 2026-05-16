"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    const trail = Array(5).fill({ x: 0, y: 0 });
    let rafId: number;
    let isBlock = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
      }
      const target = e.target as HTMLElement;
      isBlock = !!target.closest("[data-cursor='block']");
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        const size = isBlock ? 60 : 40;
        const radius = isBlock ? "4px" : "50%";
        ringRef.current.style.transform = `translate(${ringX - size / 2}px, ${ringY - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = isBlock ? "20px" : `${size}px`;
        ringRef.current.style.borderRadius = radius;
      }

      trail.unshift({ x: mouseX, y: mouseY });
      trail.pop();
      trailRefs.current.forEach((el, i) => {
        if (el && trail[i]) {
          el.style.transform = `translate(${trail[i].x - 3}px, ${trail[i].y - 3}px)`;
          el.style.opacity = String((1 - i / 5) * 0.25);
        }
      });

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-[10px] h-[10px] rounded-full pointer-events-none"
        style={{ backgroundColor: "#3B82F6", mixBlendMode: "difference" }}
      />
      {/* ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none border transition-[width,height,border-radius] duration-200"
        style={{ borderColor: "#3B82F6", width: 40, height: 40, borderRadius: "50%" }}
      />
      {/* trail */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          className="fixed top-0 left-0 z-[9997] w-[6px] h-[6px] rounded-full pointer-events-none"
          style={{ backgroundColor: "#3B82F6" }}
        />
      ))}
    </>
  );
}

