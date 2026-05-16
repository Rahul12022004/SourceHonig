"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

/* ─── inline SVG pieces ─────────────────────────────────────────────────── */

function ShipSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* hull */}
      <path
        d="M10 52 L290 52 L310 68 L0 68 Z"
        fill="#0D1525"
        stroke="#1A2744"
        strokeWidth="1.5"
      />
      {/* deck */}
      <rect x="20" y="38" width="260" height="14" fill="#0D1525" stroke="#1A2744" strokeWidth="1" />
      {/* containers stacked on deck */}
      <rect x="30" y="22" width="38" height="16" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="70" y="22" width="38" height="16" fill="#1A3060" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="30" y="7" width="38" height="15" fill="#0D1525" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="70" y="7" width="38" height="15" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="110" y="22" width="38" height="16" fill="#1A3060" stroke="#F59E0B" strokeWidth="0.8" />
      <rect x="150" y="22" width="38" height="16" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.8" />
      <rect x="110" y="7" width="38" height="15" fill="#0D1525" stroke="#F59E0B" strokeWidth="0.8" />
      <rect x="190" y="22" width="50" height="16" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.8" />
      {/* bridge */}
      <rect x="240" y="10" width="40" height="28" fill="#0D1525" stroke="#1A2744" strokeWidth="1.2" />
      <rect x="245" y="14" width="12" height="8" fill="#3B82F630" stroke="#3B82F6" strokeWidth="0.6" />
      <rect x="260" y="14" width="12" height="8" fill="#3B82F630" stroke="#3B82F6" strokeWidth="0.6" />
      {/* funnel */}
      <rect x="255" y="2" width="10" height="8" fill="#1A2744" />
      {/* smoke trail dots */}
      <circle cx="262" cy="-2" r="2" fill="#1A2744" opacity="0.6" />
      <circle cx="268" cy="-6" r="1.5" fill="#1A2744" opacity="0.4" />
      {/* waterline glow */}
      <line x1="0" y1="68" x2="320" y2="68" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

function TruckSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* container trailer */}
      <rect x="0" y="8" width="130" height="38" rx="2" fill="#0D1525" stroke="#1A2744" strokeWidth="1.2" />
      {/* container stripes */}
      {[20, 40, 60, 80, 100].map((x) => (
        <line key={x} x1={x} y1="8" x2={x} y2="46" stroke="#1A2744" strokeWidth="0.8" />
      ))}
      {/* cab */}
      <rect x="130" y="14" width="55" height="32" rx="3" fill="#0D1525" stroke="#1A2744" strokeWidth="1.2" />
      {/* windshield */}
      <rect x="158" y="17" width="22" height="16" rx="1" fill="#3B82F620" stroke="#3B82F6" strokeWidth="0.7" />
      {/* headlight */}
      <rect x="183" y="26" width="5" height="5" fill="#F59E0B" opacity="0.9" />
      {/* exhaust */}
      <rect x="145" y="6" width="5" height="8" fill="#1A2744" />
      {/* wheels */}
      <circle cx="22" cy="48" r="8" fill="#0D1525" stroke="#1A2744" strokeWidth="1.5" />
      <circle cx="22" cy="48" r="4" fill="#1A2744" />
      <circle cx="60" cy="48" r="8" fill="#0D1525" stroke="#1A2744" strokeWidth="1.5" />
      <circle cx="60" cy="48" r="4" fill="#1A2744" />
      <circle cx="100" cy="48" r="8" fill="#0D1525" stroke="#1A2744" strokeWidth="1.5" />
      <circle cx="100" cy="48" r="4" fill="#1A2744" />
      <circle cx="160" cy="48" r="8" fill="#0D1525" stroke="#1A2744" strokeWidth="1.5" />
      <circle cx="160" cy="48" r="4" fill="#1A2744" />
    </svg>
  );
}

function CraneSVG() {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-[8%] h-full max-h-[180px] opacity-80">
      {/* mast */}
      <rect x="54" y="40" width="12" height="160" fill="#0D1525" stroke="#1A2744" strokeWidth="1.5" />
      {/* boom arm */}
      <line x1="60" y1="40" x2="110" y2="40" stroke="#1A2744" strokeWidth="3" />
      <line x1="60" y1="40" x2="10" y2="80" stroke="#1A2744" strokeWidth="2" />
      {/* cables */}
      <line x1="85" y1="40" x2="85" y2="110" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />
      <line x1="110" y1="40" x2="110" y2="90" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />
      {/* hanging container */}
      <rect x="72" y="110" width="26" height="18" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.8" />
      {/* base */}
      <rect x="44" y="192" width="32" height="8" fill="#1A2744" />
      {/* operator cab */}
      <rect x="50" y="30" width="20" height="14" rx="2" fill="#0D1525" stroke="#1A2744" strokeWidth="1" />
      <rect x="53" y="33" width="7" height="6" fill="#3B82F620" stroke="#3B82F6" strokeWidth="0.5" />
    </svg>
  );
}

function OperatorSVG() {
  const armRef = useRef<SVGLineElement>(null);
  const headRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let t = 0;
    let raf: number;
    const animate = () => {
      t += 0.025;
      if (armRef.current) {
        const angle = Math.sin(t) * 8;
        armRef.current.setAttribute(
          "transform",
          `rotate(${angle}, 16, 24)`
        );
      }
      if (headRef.current) {
        const dx = Math.sin(t * 0.5) * 1.5;
        headRef.current.setAttribute("cx", String(16 + dx));
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 32 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
      {/* head */}
      <circle ref={headRef} cx="16" cy="8" r="5" fill="#F1F5F9" stroke="#1A2744" strokeWidth="0.5" />
      {/* helmet */}
      <path d="M11 8 Q11 3 16 3 Q21 3 21 8 Z" fill="#3B82F6" />
      {/* body */}
      <rect x="11" y="13" width="10" height="16" rx="2" fill="#1A2744" stroke="#3B82F6" strokeWidth="0.5" />
      {/* vest stripe */}
      <line x1="16" y1="13" x2="16" y2="29" stroke="#F59E0B" strokeWidth="1.5" />
      {/* right arm — animated */}
      <line
        ref={armRef}
        x1="21"
        y1="16"
        x2="28"
        y2="24"
        stroke="#F1F5F9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* left arm — static at clipboard */}
      <line x1="11" y1="16" x2="5" y2="22" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
      <rect x="2" y="21" width="5" height="7" rx="0.5" fill="#0D1525" stroke="#3B82F6" strokeWidth="0.5" />
      {/* legs */}
      <rect x="12" y="29" width="4" height="18" rx="1" fill="#1A2744" />
      <rect x="17" y="29" width="4" height="18" rx="1" fill="#1A2744" />
      {/* boots */}
      <rect x="11" y="45" width="6" height="5" rx="1" fill="#0D1525" stroke="#1A2744" strokeWidth="0.5" />
      <rect x="16" y="45" width="6" height="5" rx="1" fill="#0D1525" stroke="#1A2744" strokeWidth="0.5" />
    </svg>
  );
}

/* ─── stacked dock containers ───────────────────────────────────────────── */
const DOCK_COLORS = ["#1A2744", "#0D1A33", "#1A3060", "#0D1525"];
const DOCK_ACCENT = ["#3B82F6", "#F59E0B", "#3B82F6", "#3B82F6"];

function DockContainers() {
  return (
    <div className="absolute bottom-0 left-[10%] flex gap-1 items-end">
      {/* column 1 — 4 high */}
      <div className="flex flex-col gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-7 border"
            style={{ backgroundColor: DOCK_COLORS[i], borderColor: DOCK_ACCENT[i] + "60" }}
          />
        ))}
      </div>
      {/* column 2 — 3 high */}
      <div className="flex flex-col gap-0.5 self-end">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-7 border"
            style={{ backgroundColor: DOCK_COLORS[i], borderColor: DOCK_ACCENT[i] + "60" }}
          />
        ))}
      </div>
      {/* column 3 — 5 high */}
      <div className="flex flex-col gap-0.5">
        {[0, 1, 2, 3, 0].map((i, idx) => (
          <div
            key={idx}
            className="w-12 h-7 border"
            style={{ backgroundColor: DOCK_COLORS[i], borderColor: DOCK_ACCENT[i] + "60" }}
          />
        ))}
      </div>
      {/* column 4 — 2 high */}
      <div className="flex flex-col gap-0.5 self-end">
        {[2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-7 border"
            style={{ backgroundColor: DOCK_COLORS[i], borderColor: DOCK_ACCENT[i] + "60" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── main section ──────────────────────────────────────────────────────── */
export default function AnimatedWorld() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#070B14" }}>
      {/* header */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-8">
        <SectionLabel color="cyan">Operations in Motion</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#F1F5F9" }}>
          Global Logistics,{" "}
          <span style={{ color: "#3B82F6" }}>Seamlessly Orchestrated</span>
        </h2>
      </div>

      {/* ── scene wrapper ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 340 }}>

        {/* sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #070B14 0%, #0A1220 45%, #0D1830 55%, #0D1525 100%)",
          }}
        />

        {/* stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 1.5 + 0.5 + "px",
              height: Math.random() * 1.5 + 0.5 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 40 + "%",
              backgroundColor: "#F1F5F9",
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}

        {/* ocean band */}
        <div
          className="absolute w-full"
          style={{
            bottom: 90,
            height: 110,
            background: "linear-gradient(to bottom, #0A1828 0%, #071020 100%)",
            borderTop: "1px solid #1A2744",
          }}
        />

        {/* ocean shimmer lines */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              bottom: 94 + i * 18,
              height: 1,
              background: "linear-gradient(to right, transparent, #3B82F6, transparent)",
              opacity: 0.12 + i * 0.04,
            }}
          />
        ))}

        {/* road band */}
        <div
          className="absolute w-full"
          style={{
            bottom: 30,
            height: 60,
            backgroundColor: "#0A0E18",
            borderTop: "2px solid #1A2744",
            borderBottom: "1px solid #1A2744",
          }}
        >
          {/* road markings */}
          <div
            className="absolute inset-y-0 w-full"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 60px, #1A2744 60px, #1A2744 100px)",
              top: "50%",
              transform: "translateY(-50%)",
              height: 2,
              opacity: 0.5,
            }}
          />
        </div>

        {/* ground band */}
        <div
          className="absolute bottom-0 w-full"
          style={{ height: 30, backgroundColor: "#060A12", borderTop: "1px solid #1A2744" }}
        />

        {/* dock containers */}
        <DockContainers />

        {/* crane */}
        <CraneSVG />

        {/* ── ship 1 — large, slow ── */}
        <div
          className="absolute"
          style={{
            bottom: 108,
            width: 280,
            animation: "worldShip1 70s linear infinite",
          }}
        >
          <ShipSVG className="w-full" />
        </div>

        {/* ── ship 2 — small, faster, offset start ── */}
        <div
          className="absolute"
          style={{
            bottom: 130,
            width: 160,
            opacity: 0.55,
            animation: "worldShip2 50s linear infinite",
            animationDelay: "-22s",
          }}
        >
          <ShipSVG className="w-full" />
        </div>

        {/* ── truck 1 ── */}
        <div
          className="absolute"
          style={{
            bottom: 48,
            width: 180,
            animation: "worldTruck1 22s linear infinite",
          }}
        >
          <TruckSVG className="w-full" />
        </div>

        {/* ── truck 2 — moving opposite direction ── */}
        <div
          className="absolute"
          style={{
            bottom: 52,
            width: 140,
            transform: "scaleX(-1)",
            opacity: 0.7,
            animation: "worldTruck2 30s linear infinite",
            animationDelay: "-10s",
          }}
        >
          <TruckSVG className="w-full" />
        </div>

        {/* ── control room panel ── */}
        <div
          className="absolute right-[3%] bottom-[92px] flex items-end gap-3 z-10"
        >
          {/* panel */}
          <div
            className="border rounded p-2 flex flex-col gap-1.5"
            style={{
              backgroundColor: "#0D1525",
              borderColor: "#1A2744",
              minWidth: 90,
            }}
          >
            {/* blinking LED row */}
            <div className="flex gap-1">
              {["#3B82F6", "#F59E0B", "#3B82F6", "#22C55E"].map((c, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: c,
                    boxShadow: `0 0 4px ${c}`,
                    animation: `blink ${1.2 + i * 0.3}s step-end infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
            {/* mini progress bars */}
            {[78, 55, 92].map((pct, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: "#1A2744" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: pct + "%",
                      backgroundColor: i === 1 ? "#F59E0B" : "#3B82F6",
                    }}
                  />
                </div>
                <span className="text-[8px]" style={{ color: "#64748B" }}>{pct}%</span>
              </div>
            ))}
            {/* screen */}
            <div
              className="rounded"
              style={{
                height: 28,
                backgroundColor: "#070B14",
                border: "1px solid #1A2744",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, #3B82F620, transparent)",
                }}
              />
              {/* scan line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 1,
                  backgroundColor: "#3B82F6",
                  opacity: 0.5,
                  animation: "worldScan 2s linear infinite",
                }}
              />
            </div>
          </div>

          {/* operator figure */}
          <div style={{ height: 80 }}>
            <OperatorSVG />
          </div>
        </div>

        {/* blueprint grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#1A274408 1px, transparent 1px), linear-gradient(90deg, #1A274408 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, #070B14 95%)",
          }}
        />
      </div>

      {/* stats strip */}
      <div
        className="relative z-10 grid grid-cols-3 border-t border-b mt-0"
        style={{ borderColor: "#1A2744" }}
      >
        {[
          { value: "42", unit: "ACTIVE VESSELS", color: "#3B82F6" },
          { value: "160+", unit: "DAILY SHIPMENTS", color: "#F59E0B" },
          { value: "24/7", unit: "OPERATIONS", color: "#3B82F6" },
        ].map(({ value, unit, color }) => (
          <div
            key={unit}
            className="py-5 flex flex-col items-center border-r last:border-r-0"
            style={{ borderColor: "#1A2744" }}
          >
            <span className="text-2xl font-bold" style={{ color, textShadow: `0 0 12px ${color}60` }}>
              {value}
            </span>
            <span className="text-[10px] tracking-widest mt-1" style={{ color: "#64748B" }}>
              {unit}
            </span>
          </div>
        ))}
      </div>

      {/* keyframes injected as style tag */}
      <style>{`
        @keyframes worldShip1 {
          from { left: 110%; }
          to   { left: -35%; }
        }
        @keyframes worldShip2 {
          from { left: 105%; }
          to   { left: -25%; }
        }
        @keyframes worldTruck1 {
          from { left: 110%; }
          to   { left: -20%; }
        }
        @keyframes worldTruck2 {
          from { right: 110%; left: auto; }
          to   { right: -20%; left: auto; }
        }
        @keyframes worldScan {
          from { top: 0%; }
          to   { top: 100%; }
        }
      `}</style>
    </section>
  );
}
