import {
  patientProfile,
  //   lastVisit,
  //   medications,
  //   labResults
} from "../data/mockMedicalData";
import PatientHeader from "../components/medicalReport/PatientHeader";

function MedicalReport() {
  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <PatientHeader patientProfile={patientProfile} />
      </div>
    </div>
  );
}

export default MedicalReport;
