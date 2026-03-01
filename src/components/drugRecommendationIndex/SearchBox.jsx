import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import "./SearchBox.css";

function SearchBox({ drugs, onSelect }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return drugs
      .filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((d) => d.name);
  }, [query, drugs]);

  const handleSelect = (name) => {
    setQuery(name);
    setFocused(false);
    onSelect(name);
  };

  return (
    <div
      className="search-wrapper"
      onFocus={() => setFocused(true)}
      onBlur={() => setTimeout(() => setFocused(false), 150)}
    >
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search molecule..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>

      {focused && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((name) => (
            <li key={name} onMouseDown={() => handleSelect(name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;