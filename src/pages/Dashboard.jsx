import { useOutletContext } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import FeatureCard from "../components/FeatureCard";

function Dashboard() {
  // get sidebar state from Layout
  const { sidebarOpen } = useOutletContext();

  return (
    <main style={{ display: "flex" }}>
      <Sidebar isOpen={sidebarOpen} />

      <section className="dashboard">
        <h2 className="dashboard-title">Welcome Back, Ankita</h2>

        <div
          className={`card-grid ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
        >
          <FeatureCard
            icon="fa-solid fa-calendar-check"
            title="Schedule Appointment"
            desc="Book appointments with doctors easily"
          />

          <FeatureCard
            icon="fa-solid fa-robot"
            title="AI Health Assistant"
            desc="Chat with AI for instant health guidance"
          />

          <FeatureCard
            icon="fa-solid fa-flask"
            title="Lab Test Booking"
            desc="Schedule diagnostic and lab tests"
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
