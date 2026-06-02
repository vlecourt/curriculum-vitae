interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs font-medium"
      style={{
        backgroundColor: "var(--badge-bg)",
        color: "var(--badge-text)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {label}
    </span>
  );
}
