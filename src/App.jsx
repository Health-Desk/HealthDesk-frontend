import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";
import Chatbot from "./pages/Chatbot";
import Diet from "./pages/Diet";
import Profile from "./pages/UserProfile";
import BookServices from "./pages/BookServices";
import MedicalReport from "./pages/MedicalReport";
import DrugRecommendationIndex from "./pages/DrugRecommendationIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bmi" element={<BMI />} />
        <Route path="chatbot" element={<Chatbot/>} />
        <Route path="dietPlan" element={<Diet/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="book-services" element={<BookServices/>}/>
        <Route path="medicalhistory" element={<MedicalReport/>}/>
         <Route path="drug-index" element={<DrugRecommendationIndex />} />
      </Route>
    </Routes>
  );
}

export default App;
