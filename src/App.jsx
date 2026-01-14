import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bmi" element={<BMI />} />
      </Route>
    </Routes>
  );
}

export default App;
