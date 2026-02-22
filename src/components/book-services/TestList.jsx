import TestCard from "./TestCard";

function TestList({ tests, selectedTest, setSelectedTest }) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">
        Available Tests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            test={test}
            selected={selectedTest?.id === test.id}
            onClick={() => setSelectedTest(test)}
          />
        ))}
      </div>
    </>
  );
}

export default TestList;