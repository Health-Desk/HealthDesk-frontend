// src/components/drugs/FilterChips.jsx

export default function FilterChips({ filters, activeFilter, onSelect }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto 40px", padding: "0 20px" }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onSelect(f)}
            style={{
              padding: "8px 20px",
              borderRadius: 30,
              fontSize: 13,
              fontWeight: 600,
              border: `1.5px solid ${activeFilter === f ? "#06b6d4" : "rgba(226,232,240,0.8)"}`,
              background:
                activeFilter === f
                  ? "linear-gradient(135deg, #06b6d4, #0ea5e9)"
                  : "rgba(255,255,255,0.7)",
              color: activeFilter === f ? "#fff" : "#64748b",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              boxShadow: activeFilter === f ? "0 4px 14px rgba(6,182,212,0.3)" : "none",
              transition: "all 0.25s ease",
            }}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
