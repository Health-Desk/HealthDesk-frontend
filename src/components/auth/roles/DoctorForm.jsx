function DoctorForm({ onSubmit }) {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit("doctor");
      }}
    >
      <input
        placeholder="Specialization"
        className="w-full border px-3 py-2 rounded-md"
      />

      <input
        placeholder="Registration Number"
        className="w-full border px-3 py-2 rounded-md"
      />

      <input
        type="file"
        className="w-full border px-3 py-2 rounded-md"
      />

      <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
        Submit for Approval
      </button>
    </form>
  );
}

export default DoctorForm;
