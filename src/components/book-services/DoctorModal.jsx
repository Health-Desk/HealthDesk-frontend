import { X, Star, Briefcase, MapPin, Globe } from "lucide-react";

function DoctorModal({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    <div className="fixed top-8 left-0 right-0 bottom-0  bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={26} />
        </button>

        <div className="grid md:grid-cols-2">
          
          {/* Left Section */}
          <div className="bg-[#276578] text-white p-8 flex flex-col items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-40 h-40 rounded-2xl object-cover shadow-lg"
            />

            <h2 className="text-2xl font-bold mt-5">
              {doctor.name}
            </h2>

            <p className="text-lg opacity-90 mt-1">
              {doctor.specialization}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-medium">
                {doctor.rating} / 5
              </span>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm opacity-80">
                Consultation Fee
              </p>

              <p className="text-3xl font-bold mt-1">
                ₹{doctor.fee}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 overflow-y-auto max-h-[80vh]">

            {/* Qualification */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-2">
                Qualification
              </h3>

              <p className="text-gray-600">
                {doctor.qualification}
              </p>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={18} className="text-[#276578]" />

              <span className="text-gray-700">
                {doctor.experience} Experience
              </span>
            </div>

            {/* Hospital */}
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={18} className="text-[#276578]" />

              <span className="text-gray-700">
                {doctor.hospital}
              </span>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3 mb-6">
              <Globe size={18} className="text-[#276578]" />

              <span className="text-gray-700">
                {doctor.languages.join(", ")}
              </span>
            </div>

            {/* About */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                About Doctor
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {doctor.about}
              </p>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Patient Reviews
              </h3>

              <div className="space-y-3">
                {doctor.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-xl"
                  >
                    <p className="font-medium text-gray-800">
                      {review.user}
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <button
              className="w-full mt-8 bg-[#276578] text-white py-3 rounded-xl hover:bg-[#1f5160] transition font-medium"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorModal;