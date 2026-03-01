import "./DrugCard.css";

function DrugCard({ drug }) {
  if (!drug) return null;

  return (
    <div className="drug-card">
      <h2>{drug.name}</h2>
      <p><strong>Category:</strong> {drug.category}</p>
      <p><strong>Class:</strong> {drug.drugClass}</p>
      <p><strong>Indication:</strong> {drug.indication}</p>
      <p><strong>Dosage:</strong> {drug.dosage}</p>
      <p><strong>Side Effects:</strong> {drug.sideEffects}</p>
    </div>
  );
}

export default DrugCard;