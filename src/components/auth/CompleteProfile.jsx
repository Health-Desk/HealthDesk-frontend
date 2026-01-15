import { useState } from "react";
import PatientForm from "./roles/PatientForm";
import DoctorForm from "./roles/DoctorForm";
import PathologistForm from "./roles/PathologistForm";
import PharmacistForm from "./roles/PharmacistForm";

function CompleteProfile({ onComplete }) {
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Complete Your Profile
      </h2>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="pathologist">Pathologist</option>
          <option value="pharmacist">Pharmacist</option>
        </select>
      </div>

      {role === "patient" && <PatientForm onSubmit={onComplete} />}
      {role === "doctor" && <DoctorForm onSubmit={onComplete} />}
      {role === "pathologist" && <PathologistForm onSubmit={onComplete} />}
      {role === "pharmacist" && <PharmacistForm onSubmit={onComplete} />}
    </>
  );
}

export default CompleteProfile;