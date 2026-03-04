// src/components/drugs/DrugResultCard.jsx
import { useState } from "react";
import Badge from "./Badge";
import InfoChip from "./InfoChip";

export default function DrugResultCard({ drug, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? "rgba(6,182,212,0.35)" : "rgba(226,232,240,0.8)"}`,
        borderRadius: 20,
        padding: "24px 26px",
        boxShadow: hovered
          ? "0 16px 48px rgba(6,182,212,0.12)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, #06b6d4, #0ea5e9)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 22 }}>{drug.emoji}</span>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#0f172a" }}>
              {drug.name}
            </h3>
          </div>
          <div style={{ fontSize: 12, color: "#06b6d4", fontWeight: 600, letterSpacing: 0.5 }}>
            {drug.category} · {drug.drugClass}
          </div>
        </div>
        <Badge type={drug.type} />
      </div>

      {/* Info grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        <InfoChip icon="🎯" label="Uses" value={drug.indication} />
        <InfoChip icon="⚖️" label="Dosage" value={drug.dosage} />
      </div>

      {/* Side effects (expandable) */}
      {expanded && (
        <div
          style={{
            background: "rgba(254,242,242,0.6)",
            border: "1px solid rgba(252,165,165,0.4)",
            borderRadius: 10,
            padding: "10px 14px",
            marginBottom: 16,
            fontSize: 13,
            color: "#7f1d1d",
          }}
        >
          <span style={{ fontWeight: 700 }}>⚠️ Side Effects: </span>
          {drug.sideEffects}
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            padding: "8px 18px",
            borderRadius: 10,
            border: "1px solid rgba(6,182,212,0.3)",
            background: "transparent",
            color: "#0891b2",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.target.style.background = "rgba(6,182,212,0.08)"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
        >
          {expanded ? "Hide Effects ▲" : "Side Effects ▼"}
        </button>
        <button
          onClick={() => onSelect(drug.name)}
          style={{
            padding: "8px 20px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
            border: "none",
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(6,182,212,0.3)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.boxShadow = "0 6px 20px rgba(6,182,212,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 14px rgba(6,182,212,0.3)";
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
