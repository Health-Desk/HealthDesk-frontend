// src/components/drugs/SearchBar.jsx
import { useRef, useState } from "react";
import Badge from "./Badge";

export default function SearchBar({ query, onQueryChange, suggestions, onSelectSuggestion, onClear }) {
  const [focused, setFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    onQueryChange(e.target.value);
    setShowSuggestions(e.target.value.trim().length > 0);
  };

  return (
    <div style={{ maxWidth: 680, margin: "0 auto 40px", padding: "0 20px", position: "relative" }}>
      {/* Input wrapper */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
          border: `2px solid ${focused ? "rgba(6,182,212,0.5)" : "rgba(226,232,240,0.8)"}`,
          borderRadius: 18,
          padding: "14px 20px",
          boxShadow: focused
            ? "0 20px 60px rgba(6,182,212,0.15)"
            : "0 8px 32px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ fontSize: 20, flexShrink: 0 }}>🔍</span>
        <input
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onFocus={() => {
            setFocused(true);
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
          onBlur={() => {
            setFocused(false);
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          placeholder="Search medicines, drugs, or treatments…"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: 16,
            background: "transparent",
            color: "#0f172a",
            fontFamily: "inherit",
            fontWeight: 500,
          }}
        />
        {query && (
          <button
            onClick={() => { onClear(); setShowSuggestions(false); }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              color: "#94a3b8",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Autocomplete dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 20,
            right: 20,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            border: "1px solid rgba(226,232,240,0.8)",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {suggestions.map((d, i) => (
            <button
              key={d.name}
              onMouseDown={() => {
                onSelectSuggestion(d.name);
                setShowSuggestions(false);
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 18px",
                background: "none",
                border: "none",
                borderBottom:
                  i < suggestions.length - 1
                    ? "1px solid rgba(226,232,240,0.6)"
                    : "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(6,182,212,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
            >
              <span style={{ fontSize: 18 }}>{d.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{d.name}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{d.indication}</div>
              </div>
              <Badge type={d.type} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
