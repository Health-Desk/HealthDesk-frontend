import { Stethoscope } from "lucide-react";
import { lastVisit } from "../../../data/mockMedicalData";

function LastVisitCard() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-xl">
          <Stethoscope className="text-blue-600" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Last Doctor Visit
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Doctor</span>
          <span className="font-medium">{lastVisit.doctor}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Specialty</span>
          <span className="font-medium">{lastVisit.specialty}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Date</span>
          <span className="font-medium">{lastVisit.date}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Diagnosis</span>
          <span className="font-medium">{lastVisit.diagnosis}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Hospital</span>
          <span className="font-medium">{lastVisit.hospital}</span>
        </div>
      </div>
    </div>
  );
}

export default LastVisitCard;
