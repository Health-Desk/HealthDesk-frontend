function PatientForm({ onSubmit }) {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit("patient");
      }}
    >
      <input
        type="number"
        placeholder="Age"
        className="w-full border border-gray-300 px-3 py-2 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <select
        className="w-full border border-gray-300 px-3 py-2 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
        Continue
      </button>
    </form>
  );
}

export default PatientForm;
