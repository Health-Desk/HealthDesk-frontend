function TestCard({ test, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded-lg cursor-pointer transition ${
        selected
          ? "border-[#276578] bg-[#e6f4f7]"
          : "hover:shadow-md"
      }`}
    >
      <h3 className="font-semibold mb-2">
        {test.name}
      </h3>

      <p className="text-[#276578] font-medium">
        ₹{test.price}
      </p>
    </div>
  );
}

export default TestCard;