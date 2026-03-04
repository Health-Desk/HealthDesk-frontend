// src/components/drugs/InfoChip.jsx

export default function InfoChip({ icon, label, value }) {
  return (
    <div style={{ background: "rgba(241,245,249,0.8)", borderRadius: 10, padding: "10px 12px" }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "#94a3b8",
          letterSpacing: 0.5,
          marginBottom: 4,
        }}
      >
        {icon} {label.toUpperCase()}
      </div>
      <div style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.4 }}>{value}</div>
    </div>
  );
}
