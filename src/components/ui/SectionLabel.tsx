interface Props {
  children: React.ReactNode;
  color?: "orange" | "cyan";
}

export default function SectionLabel({ children, color = "orange" }: Props) {
  const dot = color === "orange" ? "#3B82F6" : "#F59E0B";
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: dot, boxShadow: `0 0 6px ${dot}` }}
      />
      <span
        className="text-[11px] tracking-[0.3em] font-semibold uppercase"
        style={{ color: dot }}
      >
        {children}
      </span>
    </div>
  );
}

