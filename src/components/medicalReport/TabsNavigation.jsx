import { LayoutDashboard, Pill } from "lucide-react";

function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-20 border-b mt-6 p-1">
      <button
        onClick={() => setActiveTab("overview")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
          activeTab === "overview"
            ? "bg-blue-600 text-white"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        <LayoutDashboard size={18} />
        <span>Overview</span>
      </button>

      <button
        onClick={() => setActiveTab("prescriptions")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
          activeTab === "prescriptions"
            ? "bg-blue-600 text-white"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        <Pill size={18} />
        Prescriptions
      </button>

      <button className="text-gray-500">Lab Reports</button>

      <button className="text-gray-500">Medical Timeline</button>

      <button className="text-gray-500">Vaccination</button>

      <button className="text-gray-500">Surgeries & History</button>
    </div>
  );
}

export default TabsNavigation;
