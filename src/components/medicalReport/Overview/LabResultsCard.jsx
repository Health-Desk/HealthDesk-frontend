import { FlaskConical } from "lucide-react";
import { labResults } from "../../../data/mockMedicalData";

function LabResultsCard() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 w-10 h-10 flex items-center justify-center rounded-xl">
          <FlaskConical className="text-purple-600" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Lab Results
        </h2>
      </div>

      {/* Results List */}
      <div className="space-y-4 text-sm">
        {labResults.map((lab, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-lg p-4 flex justify-between items-start"
          >
            {/* Left Section */}
            <div>
              <p className="font-medium text-gray-800">{lab.test}</p>
              <p className="text-gray-500">{lab.value}</p>
              <p className="text-xs text-gray-400">Ref: {lab.reference}</p>
            </div>

            {/* Status Badge */}
            <div>
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  lab.status === "Normal"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {lab.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResultsCard;