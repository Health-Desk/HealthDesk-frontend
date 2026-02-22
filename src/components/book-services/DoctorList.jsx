function DoctorList({ doctors, selectedDoctor, setSelectedDoctor }) {
  return (
    <>
      <label className="block mb-3 font-medium">
        Select Doctor
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => setSelectedDoctor(doctor)}
            className={`p-4 border rounded-lg cursor-pointer transition ${
              selectedDoctor?.id === doctor.id
                ? "border-[#276578] bg-[#e6f4f7]"
                : "hover:shadow-md"
            }`}
          >
            <h3 className="font-semibold">{doctor.name}</h3>
            <p className="text-sm text-gray-500">
              ⭐ {doctor.rating} / 5
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DoctorList;