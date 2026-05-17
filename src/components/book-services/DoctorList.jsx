import { Star, MapPin, Briefcase } from "lucide-react";

function DoctorList({
  doctors,
  selectedDoctor,
  setSelectedDoctor,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          onClick={() => setSelectedDoctor(doctor)}
          className={`cursor-pointer border rounded-2xl p-4 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            selectedDoctor?.id === doctor.id
              ? "border-[#276578] ring-2 ring-[#276578]"
              : "border-gray-200"
          }`}
        >
          {/* Top */}
          <div className="flex gap-4">
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 object-cover rounded-xl"
            />

            {/* Doctor Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {doctor.name}
              </h2>

              <p className="text-sm text-[#276578] font-medium">
                {doctor.specialization}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {doctor.qualification}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-sm font-medium">
                  {doctor.rating}
                </span>

                <span className="text-gray-400 text-sm">
                  / 5
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>{doctor.experience} Experience</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{doctor.hospital}</span>
            </div>
          </div>

          {/* Fee + Button */}
          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">
                Consultation Fee
              </p>

              <p className="text-lg font-bold text-[#276578]">
                ₹{doctor.fee}
              </p>
            </div>

            <button
              className="bg-[#276578] text-white px-4 py-2 rounded-lg hover:bg-[#1f5160] transition"
            >
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;