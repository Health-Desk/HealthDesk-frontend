function DietRecommendation({ data }) {
  return (
    <div>
      <h2>Diet Recommendation</h2>
      <p>Goal: {data?.goal}</p>

      <ul>
        <li>Breakfast: Oats + Fruits</li>
        <li>Lunch: Rice + Dal + Salad</li>
        <li>Dinner: Roti + Veggies</li>
      </ul>
    </div>
  );
}

export default DietRecommendation;
