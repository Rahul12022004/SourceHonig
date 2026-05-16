const items = [
  "HONEY EXPORT",
  "PRECISION MANUFACTURING",
  "GLOBAL SOURCING",
  "SHEET METAL FABRICATION",
  "COLD ROOM SOLUTIONS",
  "EV CHARGING PANELS",
  "NORTH AMERICA MARKET",
  "15+ YEARS EXPERIENCE",
];

export default function MarqueeTicker() {
  const repeated = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{ borderColor: "#1A2744", backgroundColor: "#070B14" }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-[11px] tracking-[0.3em] whitespace-nowrap"
            style={{ color: "#333" }}
          >
            {item}
            <span style={{ color: "#3B82F6" }}>â—†</span>
          </span>
        ))}
      </div>
    </div>
  );
}

