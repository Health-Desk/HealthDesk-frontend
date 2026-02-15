import React, { useState } from "react";
import { Download, Printer, Share2 } from "lucide-react";

const generateWeeks = () => ["Week 1", "Week 2", "Week 3", "Week 4"];
const generateDays = () => [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const mockDietPlan = generateWeeks().reduce((weeks, week) => {
  weeks[week] = generateDays().reduce((days, day) => {
    days[day] = {
      breakfast: "Oats with fruits and almonds",
      lunch: "Grilled chicken with brown rice and vegetables",
      dinner: "Paneer salad with quinoa",
      snacks: "Mixed nuts and green tea",
    };
    return days;
  }, {});
  return weeks;
}, {});

const mockRecommendations = [
  "Drink at least 2-3 liters of water daily.",
  "Avoid processed sugar and fried foods.",
  "Include protein in every meal.",
  "Exercise at least 30 minutes daily.",
];

const DietRecommendation = ({ data }) => {
  const [activeWeek, setActiveWeek] = useState("Week 1");

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-block px-4 py-1 text-xs font-semibold tracking-wide bg-blue-100 text-blue-700 rounded-full mb-3">
                Your Personalized Plan
              </div>

              <h1 className="text-3xl font-bold text-black">
                Monthly Diet Plan
              </h1>

              <p className="text-gray-500 mt-2">
                Based on your selected preferences
              </p>
            </div>

            <div className="flex items-center gap-3">
              {[Download, Printer, Share2].map((Icon, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-10 border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-700 mb-5">
              Diet Plan Summary
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["Health Goal", data?.healthGoal],
                ["Diet Preference", data?.dietPreference],
                ["Activity Level", data?.activityLevel],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition duration-300"
                >
                  <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                    {label}
                  </p>
                  <p className="text-gray-800 mt-1 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {generateWeeks().map((week) => (
              <button
                key={week}
                onClick={() => setActiveWeek(week)}
                className={`py-2 rounded-lg text-sm font-medium transition duration-300 ${
                  activeWeek === week
                    ? "bg-black text-white shadow-md"
                    : "bg-white border border-gray-200 hover:bg-blue-50"
                }`}
              >
                {week}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {Object.keys(mockDietPlan[activeWeek]).map((day) => (
              <details
                key={day}
                className="group border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition duration-300"
              >
                <summary className="cursor-pointer font-medium flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-600 mr-3"></span>
                    {day}
                  </div>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>

                <div className="mt-6 space-y-5 text-gray-700">
                  {["breakfast", "lunch", "dinner", "snacks"].map((meal) => (
                    <div key={meal}>
                      <h4 className="text-sm font-semibold text-blue-600 mb-1 capitalize">
                        {meal}
                      </h4>
                      <p>{mockDietPlan[activeWeek][day][meal]}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mt-10 border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              Recommendations
            </h2>

            <ul className="space-y-3 text-gray-700">
              {mockRecommendations.map((rec, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 hover:translate-x-1 transition duration-300"
                >
                  <span className="text-blue-600">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietRecommendation;
