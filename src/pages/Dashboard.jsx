import { useOutletContext, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import FeatureCard from "../components/FeatureCard";

function Dashboard() {
  const { sidebarOpen } = useOutletContext();
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen bg-slate-200">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Dashboard */}
      <section className="flex-1 p-8 transition-all duration-300">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome Back, Ankita !
          </h2>
          <p className="text-gray-500 mt-1">
            Here’s an overview of your health dashboard.
          </p>
        </div>


        {/* Feature Cards Section */}

        <div
          className={`grid gap-6 transition-all duration-300 ${
            sidebarOpen
              ? "grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
              : "grid-cols-[repeat(auto-fit,minmax(360px,1fr))]"
          }`}
        >
          <FeatureCard
            icon="fa-solid fa-calendar-plus"
            title="Book Health Services"
            desc="Schedule doctor appointments or book lab tests"
            onClick={() => navigate("/book-services")}
          />

          <FeatureCard
            icon="fa-solid fa-robot"
            title="AI Health Assistant"
            desc="Chat with AI for instant health guidance"
          />

          <FeatureCard
            icon="fa-solid fa-flask"
            title="yet to be decided"
            desc="yet to be decided"
          />

          <FeatureCard
            icon="fa-solid fa-chart-line"
            title="Health Insights & Tools"
            desc="Track vitals, BMI, and health metrics"
          />

          <FeatureCard
            icon="fa-solid fa-file-medical"
            title="Medical Reports"
            desc="Upload and access your medical records"
          />

          <FeatureCard
            icon="fa-solid fa-brain"
            title="Mental Wellness"
            desc="Mental health screening and support"
          />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;