import { useState } from "react";
import CategorySelect from "./CategorySelect";
import TestList from "./TestList";
import DatePicker from "./DatePicker";

function LabTest() {
  const today = new Date().toISOString().split("T")[0];

  const categories = [
    "Blood Tests",
    "Diabetes",
    "Thyroid",
    "Liver",
    "Vitamins",
  ];

  const tests = [
    {
      id: 1,
      name: "Complete Blood Count",
      category: "Blood Tests",
      price: 499,
    },
    { id: 2, name: "Lipid Profile", category: "Blood Tests", price: 699 },
    { id: 3, name: "HbA1c", category: "Diabetes", price: 549 },
    { id: 4, name: "Fasting Blood Sugar", category: "Diabetes", price: 299 },
    {
      id: 5,
      name: "Thyroid Panel (T3, T4, TSH)",
      category: "Thyroid",
      price: 799,
    },
    { id: 6, name: "Liver Function Test", category: "Liver", price: 599 },
    { id: 7, name: "Vitamin D", category: "Vitamins", price: 899 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);
  const [preferredDate, setPreferredDate] = useState("");
  const [homeCollection, setHomeCollection] = useState(false);

  const filteredTests = tests.filter(
    (test) => test.category === selectedCategory,
  );

  const handleSubmit = () => {
    if (!selectedTest || !preferredDate) {
      alert("Please select a test and preferred date.");
      return;
    }

    alert(
      `Your ${selectedTest.name} booking is confirmed on ${preferredDate}. 
Time will be assigned by the lab as per their convenience.`,
    );
  };

  return (
    <div className="space-y-6">
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        {/* Category */}
        <CategorySelect
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={(value) => {
            setSelectedCategory(value);
            setSelectedTest(null);
            setPreferredDate("");
          }}
        />

        {/* Test Selection */}
        {selectedCategory && (
          <TestList
            tests={filteredTests}
            selectedTest={selectedTest}
            setSelectedTest={(test) => {
              setSelectedTest(test);
              setPreferredDate("");
            }}
          />
        )}

        {/* Preferred Date */}
        {selectedTest && (
          <DatePicker
            today={today}
            selectedDate={preferredDate}
            setSelectedDate={setPreferredDate}
            label="Preferred Date"
          />
        )}

        {/* Home Sample Collection Toggle */}
        {selectedTest && (
          <div className="flex items-center justify-between mb-6">
            <span className="font-medium">Home Sample Collection</span>

            <button
              onClick={() => setHomeCollection(!homeCollection)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                homeCollection ? "bg-[#276578]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                  homeCollection ? "translate-x-7" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Confirm Button */}
        {selectedTest && preferredDate && (
          <button
            onClick={handleSubmit}
            className="bg-[#276578] text-white px-6 py-2 rounded-md hover:bg-[#1e4d5c] transition w-full"
          >
            Confirm Lab Booking
          </button>
        )}
      </div>
    </div>
  );
}

export default LabTest;
