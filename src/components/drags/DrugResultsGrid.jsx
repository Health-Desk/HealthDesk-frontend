// src/components/drugs/DrugResultsGrid.jsx
import DrugResultCard from "./DrugResultCard";

export default function DrugResultsGrid({ drugs, query, onSelect }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
      {/* Section heading */}
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 4,
              height: 18,
              borderRadius: 2,
              background: "linear-gradient(#10b981, #06b6d4)",
            }}
          />
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>
            {query ? `Results for "${query}"` : "All Medicines"}
          </h2>
        </div>
        <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>
          {drugs.length} found
        </span>
      </div>

      {/* Empty state */}
      {drugs.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: "#64748b" }}>
            No results found
          </div>
          <div style={{ fontSize: 14 }}>Try a different search term or filter</div>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: 18,
          }}
        >
          {drugs.map((d) => (
            <DrugResultCard key={d.name} drug={d} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}
