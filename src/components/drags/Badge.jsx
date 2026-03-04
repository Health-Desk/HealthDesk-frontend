// src/components/drugs/Badge.jsx

export default function Badge({ type }) {
  const isOtc = type === "OTC";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1,
        background: isOtc ? "rgba(16,185,129,0.12)" : "rgba(99,102,241,0.12)",
        color: isOtc ? "#059669" : "#6366f1",
        border: `1px solid ${isOtc ? "rgba(16,185,129,0.3)" : "rgba(99,102,241,0.3)"}`,
      }}
    >
      {isOtc ? "✓" : "℞"} {isOtc ? "Over-the-Counter" : "Prescription"}
    </span>
  );
}
