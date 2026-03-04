// src/components/drugs/RecommendationCard.jsx
import { useState } from "react";
import Badge from "./Badge";

export default function RecommendationCard({ drug, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(drug.name)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 auto",
        width: 200,
        background: hovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? "rgba(6,182,212,0.4)" : "rgba(255,255,255,0.6)"}`,
        borderRadius: 16,
        padding: "16px 18px",
        cursor: "pointer",
        textAlign: "left",
        boxShadow: hovered
          ? "0 12px 36px rgba(6,182,212,0.15)"
          : "0 4px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <div style={{ fontSize: 26, marginBottom: 8 }}>{drug.emoji}</div>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>
        {drug.name}
      </div>
      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 10, lineHeight: 1.4 }}>
        {drug.indication}
      </div>
      <Badge type={drug.type} />
    </button>
  );
}
