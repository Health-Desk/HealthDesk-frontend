import React, { useState } from "react";
import { Download, Printer, Share2 } from "lucide-react";

const generateWeeks = () => ["Week 1", "Week 2", "Week 3", "Week 4"];
const generateDays = () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-5xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
                Your Personalized Plan
              </div>
              <h1 className="text-2xl font-bold">Monthly Diet Plan</h1>
              <p className="text-gray-600 mt-1">
                Based on your selected preferences
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button className="border px-4 py-2 rounded-lg flex items-center">
                <Download className="mr-2 h-4 w-4" /> Download
              </button>
              <button className="border px-4 py-2 rounded-lg flex items-center">
                <Printer className="mr-2 h-4 w-4" /> Print
              </button>
              <button className="border px-4 py-2 rounded-lg flex items-center">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </button>
            </div>
          </div>

          {/* Summary (Using Form Data) */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">
              Diet Plan Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-blue-600">Health Goal</p>
                <p className="text-gray-800">{data?.healthGoal}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-600">Diet Preference</p>
                <p className="text-gray-800">{data?.dietPreference}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-600">Activity Level</p>
                <p className="text-gray-800">{data?.activityLevel}</p>
              </div>
            </div>
          </div>

          {/* Weeks Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 mb-6 border rounded-lg overflow-hidden">
            {generateWeeks().map((week) => (
              <button
                key={week}
                onClick={() => setActiveWeek(week)}
                className={`py-2 text-sm font-medium ${
                  activeWeek === week
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {week}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {Object.keys(mockDietPlan[activeWeek]).map((day) => (
              <details key={day} className="border rounded-lg p-4">
                <summary className="cursor-pointer font-medium flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                  {day}
                </summary>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Breakfast
                    </h4>
                    <p>{mockDietPlan[activeWeek][day].breakfast}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Lunch
                    </h4>
                    <p>{mockDietPlan[activeWeek][day].lunch}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Dinner
                    </h4>
                    <p>{mockDietPlan[activeWeek][day].dinner}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      Snacks
                    </h4>
                    <p>{mockDietPlan[activeWeek][day].snacks}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Recommendations */}
          <div className="bg-blue-50 rounded-xl p-6 mt-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">
              Recommendations
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {mockRecommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DietRecommendation;
