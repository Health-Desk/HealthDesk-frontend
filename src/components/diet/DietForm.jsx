import React, { useState } from "react";

function DietForm({ onSubmit }) {
  const initialState = {
    dietPreference: "Non-Vegetarian",
    activityLevel: "Moderate",
    cuisinePreference: "",

    allergies: "",
    favoriteFoods: "",
    dislikedFoods: "",

    hydrationLevel: "Moderate",

    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",

    healthGoal: "Weight Maintenance",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData); // Pass collected form data to parent component
    setFormData(initialState); // Reset form state to initial values
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Dietary Preferences & Health Goals</h1>
      <p>
        Help us understand your preferences and goals to create a personalized
        diet plan.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Diet Preference</label>
          <select
            name="dietPreference"
            value={formData.dietPreference}
            onChange={handleChange}
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>
        </div>

        <div>
          <label>Activity Level</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label>Cuisine Preference</label>
          <input
            type="text"
            name="cuisinePreference"
            value={formData.cuisinePreference}
            onChange={handleChange}
            placeholder="e.g., Indian, Mediterranean"
          />
        </div>

        <button type="submit">Get Diet Plan</button>
      </form>
    </>
  );
}

export default DietForm;
