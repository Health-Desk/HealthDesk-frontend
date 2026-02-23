import {
  User,
  Droplets,
  Ruler,
  Weight,
  Calendar,
  Mars, // Male
  Venus, // Female
  Activity,
} from "lucide-react";
import InfoPill from "../../ui/InfoPill.jsx";

function PatientHeader({ patientProfile }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-2 md:p-8 mx-15 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center ring-4 ring-white shadow-md">
            <User className="w-9 h-9 text-blue-700" />
          </div>
        </div>

        {/* Information */}
        <div className="flex-1">
          {/* Name and id */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {patientProfile.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              Patient ID:
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                {patientProfile.id}
              </span>
            </p>
          </div>
          {/* Bsic info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {/* Age */}
            <InfoPill
              icon={<Calendar className="w-4 h-4" />}
              label="Age"
              value={`${patientProfile.age} yrs`}
            />
            {/* Gender */}
            <InfoPill
              icon={
                patientProfile.gender === "Male" ? (
                  <Mars className="w-4 h-4 text-blue-600" />
                ) : (
                  <Venus className="w-4 h-4 text-pink-600" />
                )
              }
              label="Gender"
              value={patientProfile.gender}
            />
            {/* BloodGroup */}
            <InfoPill
              icon={<Droplets className="w-4 h-4" />}
              label="Blood"
              value={patientProfile.bloodGroup}
            />

            {/* Height */}
            <InfoPill
              icon={<Ruler className="w-4 h-4" />}
              label="Height"
              value={patientProfile.height}
            />

            {/* weight */}
            <InfoPill
              icon={<Weight className="w-4 h-4" />}
              label="Weight"
              value={patientProfile.weight}
            />

            {/* BMI */}
            <InfoPill
              icon={<Activity className="w-4 h-4" />}
              label="BMI"
              value={patientProfile.bmi}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientHeader;
