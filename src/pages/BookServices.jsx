import { useState } from "react";
import Appointments from "../components/book-services/Appointments";
import LabTest from "../components/book-services/LabTest";

function BookServices() {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 italic">
        Book Health Services with Ease
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("appointments")}
          className={`pb-2 px-4 transition-all ${
            activeTab === "appointments"
              ? "border-b-2 border-[#276578] text-[#276578] font-medium"
              : "text-gray-500"
          }`}
        >
          Appointments
        </button>

        <button
          onClick={() => setActiveTab("labs")}
          className={`pb-2 px-4 transition-all ${
            activeTab === "labs"
              ? "border-b-2 border-[#276578] text-[#276578] font-medium"
              : "text-gray-500"
          }`}
        >
          Lab Tests
        </button>
      </div>

      {/* Render Components */}
      {activeTab === "appointments" && <Appointments />}
      {activeTab === "labs" && <LabTest />}
    </div>
  );
}

export default BookServices;