// src/components/drugs/DetailModal.jsx
import { useEffect } from "react";
import Badge from "./Badge";

export default function DetailModal({ drug, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(15,23,42,0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: 24,
          padding: "36px 40px",
          maxWidth: 540,
          width: "100%",
          boxShadow: "0 40px 120px rgba(0,0,0,0.2)",
          animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 36, marginBottom: 6 }}>{drug.emoji}</div>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#0f172a" }}>
              {drug.name}
            </h2>
            <div style={{ color: "#06b6d4", fontWeight: 600, fontSize: 13, marginTop: 2 }}>
              {drug.category}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(100,116,139,0.1)",
              border: "none",
              borderRadius: 10,
              width: 36,
              height: 36,
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748b",
            }}
          >
            ✕
          </button>
        </div>

        {/* Detail rows */}
        <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Drug Class", value: drug.drugClass, icon: "🧪" },
            { label: "Indication", value: drug.indication, icon: "🎯" },
            { label: "Dosage", value: drug.dosage, icon: "⚖️" },
            { label: "Side Effects", value: drug.sideEffects, icon: "⚠️" },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              style={{
                background: "rgba(241,245,249,0.8)",
                borderRadius: 12,
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#94a3b8",
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                {icon} {label.toUpperCase()}
              </div>
              <div style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Badge type={drug.type} />
        </div>
      </div>
    </div>
  );
}
