import { patientProfile } from "../data/mockMedicalData";

import { useState } from "react";

import PatientHeader from "../components/medicalReport/PatientHeader";
import TabsNavigation from "../components/medicalReport/TabsNavigation";
import OverviewSection from "../components/medicalReport/overview/OverviewSection";
import PrescriptionsSection from "../components/medicalReport/prescriptions/prescriptionsSection";

function MedicalReport() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <PatientHeader patientProfile={patientProfile} />
        <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6">
          {activeTab === "overview" && <OverviewSection />}
          {activeTab === "prescriptions" && <PrescriptionsSection />}
        </div>
      </div>
    </div>
  );
}

export default MedicalReport;
