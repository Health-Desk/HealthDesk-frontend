import { User, Edit2 } from "lucide-react";

const PatientProfileCard = ({ patient, onEdit }) => {
  const initials = patient.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col items-center text-center relative">

        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="absolute top-0 right-0 p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition"
        >
          <Edit2 className="h-4 w-4" />
        </button>

        {/* Avatar */}
        {patient.photoUrl ? (
          <img
            src={patient.photoUrl}
            alt={patient.name}
            className="h-20 w-20 rounded-full object-cover border-4 border-blue-100"
          />
        ) : (
          <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold border-4 border-blue-100">
            {initials}
          </div>
        )}

        {/* Name */}
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {patient.name}
        </h2>

        {/* Age & Gender */}
        <p className="mt-1 text-sm text-gray-500">
          {patient.age} years • {patient.gender}
        </p>

        {/* ID Badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <User className="h-3.5 w-3.5" />
          <span>ID: {patient.id}</span>
        </div>

      </div>
    </div>
  );
};

export default PatientProfileCard;
