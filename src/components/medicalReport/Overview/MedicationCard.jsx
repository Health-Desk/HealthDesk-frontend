import { Pill } from "lucide-react";
import { medications } from "../../../data/mockMedicalData";

function MedicationCard() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 w-10 h-10 flex items-center justify-center rounded-xl">
          <Pill className="text-green-600" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Ongoing Medications
        </h2>
      </div>

      {/* Medication List */}
      <div className="space-y-4 text-sm">
        {medications.map((med, index) => (
          <div
            key={index}
            className="flex justify-between items-start border-b border-gray-300 bg-slate-100 rounded-md p-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                <p className="font-medium text-gray-800">{med.name}</p>
              </div>

              <p className="text-gray-500 ml-4">{med.dosage}</p>
            </div>

            <div className="text-gray-400 text-xs">Since {med.since}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicationCard;
