// src/pages/DrugRecommendationIndex.jsx
import { useState } from "react";
import { drugs, FILTERS, RECOMMENDATIONS } from "../data/mockMedicalData";

import SearchBar from "../components/drags/SearchBar";
import FilterChips from "../components/drags/FilterChips";
import RecommendationBar from "../components/drags/RecommendationBar";
import DrugResultsGrid from "../components/drags/DrugResultsGrid";
import DetailModal from "../components/drags/DetailModal";

export default function DrugRecommendationIndex() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDrug, setSelectedDrug] = useState(null);

  // Autocomplete suggestions derived from query
  const suggestions =
    query.trim().length > 0
      ? drugs.filter(
          (d) =>
            d.name.toLowerCase().includes(query.toLowerCase()) ||
            d.indication.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  // Filtered results for the grid
  const filteredDrugs = drugs.filter((d) => {
    const matchesFilter = activeFilter === "All" || d.filterTag === activeFilter;
    const matchesQuery =
      query.trim() === "" ||
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.indication.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const activeDrugObj = selectedDrug ? drugs.find((d) => d.name === selectedDrug) : null;

  const handleSelectSuggestion = (name) => {
    setQuery(name);
    setSelectedDrug(name);
  };

  const handleClearSearch = () => {
    setQuery("");
    setSelectedDrug(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        ::-webkit-scrollbar { height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.3); border-radius: 4px; }
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes pulse   { 0%,100% { opacity: 0.4 } 50% { opacity: 0.8 } }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background:
            "linear-gradient(135deg, #e0f7fa 0%, #f0f9ff 40%, #ecfdf5 80%, #e0f2fe 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blobs */}
        <div style={{ position: "fixed", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", pointerEvents: "none", animation: "pulse 6s ease-in-out infinite" }} />
        <div style={{ position: "fixed", bottom: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", pointerEvents: "none", animation: "pulse 8s ease-in-out infinite reverse" }} />

        {/* ── HERO HEADER ─────────────────────────────────────────────── */}
        <header style={{ textAlign: "center", padding: "60px 20px 40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 30, padding: "6px 18px", marginBottom: 20, backdropFilter: "blur(10px)" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#0891b2", letterSpacing: 0.5 }}>
              ⚕ HealthDesk Drug Index
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.15, marginBottom: 12 }}>
            Find the right medicine<br />
            <span style={{ background: "linear-gradient(135deg, #06b6d4, #0ea5e9, #0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with confidence
            </span>
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", fontWeight: 500 }}>
            Smart recommendations for safer choices
          </p>
        </header>

        {/* ── SEARCH BAR ──────────────────────────────────────────────── */}
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
          onClear={handleClearSearch}
        />

        {/* ── FILTER CHIPS ────────────────────────────────────────────── */}
        <FilterChips
          filters={FILTERS}
          activeFilter={activeFilter}
          onSelect={setActiveFilter}
        />

        {/* ── RECOMMENDATION BAR ──────────────────────────────────────── */}
        <RecommendationBar
          recommendations={RECOMMENDATIONS}
          onSelect={(name) => { setSelectedDrug(name); setQuery(name); }}
        />

        {/* ── RESULTS GRID ────────────────────────────────────────────── */}
        <DrugResultsGrid
          drugs={filteredDrugs}
          query={query}
          onSelect={setSelectedDrug}
        />

        {/* ── FOOTER ──────────────────────────────────────────────────── */}
        <footer style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(226,232,240,0.6)", padding: "28px 20px", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#94a3b8", maxWidth: 600, margin: "0 auto 12px", lineHeight: 1.7 }}>
            ⚕ <strong>Medical Disclaimer:</strong> This tool is for informational purposes only.
            Always consult a qualified healthcare professional before starting, stopping, or
            changing any medication regimen.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
            {["About", "Privacy", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: 13, color: "#64748b", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.target.style.color = "#06b6d4"; }}
                onMouseLeave={(e) => { e.target.style.color = "#64748b"; }}
              >
                {l}
              </a>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#cbd5e1", marginTop: 12 }}>
            © {new Date().getFullYear()} HealthDesk · All rights reserved
          </div>
        </footer>

        {/* ── DETAIL MODAL ────────────────────────────────────────────── */}
        {selectedDrug && activeDrugObj && (
          <DetailModal drug={activeDrugObj} onClose={() => setSelectedDrug(null)} />
        )}
      </div>
    </>
  );
}