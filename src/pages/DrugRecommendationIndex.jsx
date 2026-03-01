import { useState } from "react";
import SearchBox from "../components/drugRecommendationIndex/SearchBox";
import DrugCard from "../components/drugRecommendationIndex/DrugCard";
import "./DrugRecommendationIndex.css";

const drugs = [
  {
    name: "Paracetamol",
    category: "Analgesic / Antipyretic",
    drugClass: "Non-opioid analgesic",
    indication: "Mild to moderate pain, fever",
    dosage: "500–1000 mg every 4–6 hours (max 4 g/day)",
    sideEffects: "Rare at therapeutic doses; hepatotoxicity in overdose",
  },
  {
    name: "Amoxicillin",
    category: "Antibiotic",
    drugClass: "Penicillin-type (Beta-lactam)",
    indication: "Bacterial infections",
    dosage: "250–500 mg every 8 hours",
    sideEffects: "Diarrhea, rash",
  },
];

function DrugRecommendationIndex() {
  const [selectedDrug, setSelectedDrug] = useState(null);

  const activeDrug = drugs.find(
    (d) => d.name === selectedDrug
  );

  return (
    <div className="healthdesk-page">
      <header className="healthdesk-header">
        <h1>HealthDesk Drug Index</h1>
        <p>Search and explore detailed molecule information</p>
      </header>

      <SearchBox drugs={drugs} onSelect={setSelectedDrug} />

      <div className="healthdesk-layout">
        <div className="healthdesk-left">
          <DrugCard drug={activeDrug} />
        </div>

        <div className="healthdesk-right">
          {/* Partner section */}
        </div>
      </div>

      <footer className="healthdesk-footer">
        © {new Date().getFullYear()} HealthDesk
      </footer>
    </div>
  );
}

export default DrugRecommendationIndex;