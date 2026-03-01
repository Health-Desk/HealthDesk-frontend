function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-4 border-b mt-6">

      <button
        onClick={() => setActiveTab("overview")}
        className={`px-4 py-2 rounded-lg transition ${
          activeTab === "overview"
            ? "bg-blue-600 text-white"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        Overview
      </button>

      <button
        onClick={() => setActiveTab("prescriptions")}
        className={`px-4 py-2 rounded-lg transition ${
          activeTab === "prescriptions"
            ? "bg-blue-600 text-white"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        Prescriptions
      </button>

      <button className="text-gray-500">
        Lab Reports
      </button>

      <button className="text-gray-500">
        Medical Timeline
      </button>

      <button className="text-gray-500">
        Vaccination
      </button>

      <button className="text-gray-500">
        Surgeries & History
      </button>

    </div>
  );
}

export default TabsNavigation;