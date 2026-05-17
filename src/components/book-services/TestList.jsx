function TestList({
  tests,
  selectedTest,
  setSelectedTest,
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">
        Available Tests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tests.map((test) => {
          const Icon = test.icon;

          return (
            <div
              key={test.id}
              onClick={() => setSelectedTest(test)}
              className={`cursor-pointer border rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white ${
                selectedTest?.id === test.id
                  ? "border-[#276578] ring-2 ring-[#276578]"
                  : "border-gray-200"
              }`}
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#276578]/10 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#276578]"
                  />
                </div>

                {test.popular && (
                  <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {test.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {test.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                  Reports in {test.reportTime}
                </span>

                {test.fastingRequired && (
                  <span className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full">
                    Fasting Required
                  </span>
                )}

                {test.homeCollection && (
                  <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                    Home Collection
                  </span>
                )}
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="text-xs text-gray-500">
                    Starting From
                  </p>

                  <p className="text-2xl font-bold text-[#276578]">
                    ₹{test.price}
                  </p>
                </div>

                <button className="bg-[#276578] text-white px-4 py-2 rounded-lg hover:bg-[#1f5160] transition">
                  Book Test
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TestList;