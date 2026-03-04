// src/components/drugs/RecommendationBar.jsx
import RecommendationCard from "./RecommendationCard";

export default function RecommendationBar({ recommendations, onSelect }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto 48px", padding: "0 20px" }}>
      {/* Section heading */}
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 4,
            height: 18,
            borderRadius: 2,
            background: "linear-gradient(#06b6d4, #0ea5e9)",
          }}
        />
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>Popular Medicines</h2>
        <div style={{ flex: 1, height: 1, background: "rgba(226,232,240,0.6)" }} />
      </div>

      {/* Scrollable row */}
      <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 8 }}>
        {recommendations.map((d) => (
          <RecommendationCard key={d.name} drug={d} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
}
