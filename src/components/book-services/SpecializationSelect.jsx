function SpecializationSelect({
  specializations,
  selectedSpecialization,
  setSelectedSpecialization,
  resetDoctor,
}) {
  return (
    <>
      <label className="block mb-2 font-medium">
        Select Specialization
      </label>
      <select
        className="border rounded-md p-2 w-full mb-6"
        value={selectedSpecialization}
        onChange={(e) => {
          setSelectedSpecialization(e.target.value);
          resetDoctor();
        }}
      >
        <option value="">Choose Specialization</option>
        {specializations.map((spec, index) => (
          <option key={index} value={spec}>
            {spec}
          </option>
        ))}
      </select>
    </>
  );
}

export default SpecializationSelect;