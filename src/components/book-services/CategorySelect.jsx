import {
  Droplets,
  Activity,
  Dna,
  ShieldPlus,
  Pill,
} from "lucide-react";

function CategorySelect({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const categoryIcons = {
    "Blood Tests": Droplets,
    Diabetes: Activity,
    Thyroid: Dna,
    Liver: ShieldPlus,
    Vitamins: Pill,
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-5">
        Test Categories
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => {
          const Icon = categoryIcons[category];

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#276578] text-white border-[#276578] shadow-lg"
                  : "bg-white border-gray-200 hover:border-[#276578] hover:shadow-md"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {category}
              </span>
            </button>
          );
        })}

        {/* All Tests */}
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-5 py-3 rounded-2xl border transition-all duration-300 font-medium ${
            selectedCategory === ""
              ? "bg-[#276578] text-white border-[#276578] shadow-lg"
              : "bg-white border-gray-200 hover:border-[#276578] hover:shadow-md"
          }`}
        >
          All Tests
        </button>
      </div>
    </div>
  );
}

export default CategorySelect;