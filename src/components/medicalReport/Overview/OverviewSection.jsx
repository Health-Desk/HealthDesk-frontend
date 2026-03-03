import LabResultsCard from "./LabResultsCard";
import LastVisitCard from "./LastVisitCard";
import MedicationCard from "./MedicationCard";

function OverviewSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-md h-[420px] overflow-y-auto">
        <LastVisitCard />
      </div>

      <div className="flex-1 bg-white rounded-2xl p-6 shadow-md h-[420px] overflow-y-auto">
        <LabResultsCard />
      </div>

      <div className="flex-1 bg-white rounded-2xl p-6 shadow-md h-[420px] overflow-y-auto">
        <MedicationCard />
      </div>
    </div>
  );
}

export default OverviewSection;
