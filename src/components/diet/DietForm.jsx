import React, { useState } from "react";

function DietForm({ onSubmit }) {
  const initialState = {
    dietPreference: "Non-Vegetarian",
    activityLevel: "Sedentary",
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
    <div className="min-h-screen bg-white py-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">

        <h1 className="text-2xl font-bold text-black mb-2">
          Dietary Preferences & Health Goals
        </h1>

        <p className="text-gray-600 mb-8">
          Help us understand your preferences and goals to create a personalized
          diet plan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">

          <h2 className="text-lg font-semibold text-black">
            Basic Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Diet Preference
              </label>
              <select
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Activity Level
              </label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="Sedentary">
                  Sedentary (little or no exercise)
                </option>
                <option value="Moderate">
                  Moderate (exercise 3-5 days/week)
                </option>
                <option value="Active">Active (exercise 6-7 days/week)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Cuisine Preference
            </label>
            <input
              type="text"
              name="cuisinePreference"
              value={formData.cuisinePreference}
              onChange={handleChange}
              placeholder="e.g., Italian, Indian, Mediterranean"
              className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter your preferred cuisines or food styles
            </p>
          </div>

          <h2 className="text-lg font-semibold text-black">
            Food Preferences & Restrictions
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1">
              Allergies or Food Intolerances
            </label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              placeholder="List any food allergies or intolerances (leave blank if none)"
              className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Favorite Foods
              </label>
              <textarea
                name="favoriteFoods"
                value={formData.favoriteFoods}
                onChange={handleChange}
                placeholder="List foods you particularly enjoy"
                className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Disliked Foods
              </label>
              <textarea
                name="dislikedFoods"
                value={formData.dislikedFoods}
                onChange={handleChange}
                placeholder="List foods you dislike or avoid (optional)"
                className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Daily Hydration Intake
            </label>

            <div className="space-y-2 text-sm">
              {[
                ["Low", "Low (less than 4 cups of water per day)"],
                ["Moderate", "Moderate (4-6 cups of water per day)"],
                ["High", "High (more than 6 cups of water per day)"],
              ].map(([value, label]) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="hydrationLevel"
                    value={value}
                    checked={formData.hydrationLevel === value}
                    onChange={handleChange}
                    className="accent-black"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <h2 className="text-lg font-semibold text-black">
            Current Eating Habits
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {["breakfast", "lunch", "dinner", "snacks"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  Typical {field}
                </label>
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Describe your typical ${field}`}
                  className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-black">
            Health Goals
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1">
              Primary Health Goal
            </label>
            <select
              name="healthGoal"
              value={formData.healthGoal}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Weight Maintenance">Weight Maintenance</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              This will help us tailor your diet plan to your specific goals.
            </p>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
          >
            Generate Diet Plan
          </button>

        </form>
      </div>
    </div>
  );
}

export default DietForm;
