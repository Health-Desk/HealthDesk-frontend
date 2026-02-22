import { useState } from "react";
import SpecializationSelect from "./SpecializationSelect";
import DoctorList from "./DoctorList";
import DatePicker from "./DatePicker";
import TimeSlots from "./TimeSlots";

function Appointments() {
  const today = new Date().toISOString().split("T")[0];

  const doctors = [
    { id: 1, name: "Dr. Sharma", specialization: "Cardiologist", rating: 4.5 },
    { id: 2, name: "Dr. Roy", specialization: "Cardiologist", rating: 4.2 },
    { id: 3, name: "Dr. Mehta", specialization: "Dermatologist", rating: 4.8 },
    { id: 4, name: "Dr. Gupta", specialization: "Dermatologist", rating: 4.7 },
    { id: 5, name: "Dr. Khanna", specialization: "Neurologist", rating: 4.9 },
    { id: 6, name: "Dr. Kapoor", specialization: "Neurologist", rating: 4.6 },
  ];

  const specializations = ["Cardiologist", "Dermatologist", "Neurologist"];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) => doc.specialization === selectedSpecialization
  );

  const getFilteredTimeSlots = () => {
    if (!selectedDate) return [];

    const now = new Date();
    const currentHour = now.getHours();

    if (selectedDate === today) {
      return timeSlots.filter((time) => {
        const hour = parseInt(time.split(":")[0]);
        const isPM = time.includes("PM");

        let convertedHour = hour;
        if (isPM && hour !== 12) convertedHour += 12;
        if (!isPM && hour === 12) convertedHour = 0;

        return convertedHour > currentHour;
      });
    }

    return timeSlots;
  };

  const handleSubmit = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      alert("Please complete all fields");
      return;
    }

    alert(
      `Appointment booked with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`
    );
  };

  return (
    <div className="space-y-6">
      <div className="p-6 border rounded-xl bg-white shadow-sm">

        <SpecializationSelect
          specializations={specializations}
          selectedSpecialization={selectedSpecialization}
          setSelectedSpecialization={setSelectedSpecialization}
          resetDoctor={() => {
            setSelectedDoctor(null);
            setSelectedDate("");
            setSelectedTime("");
          }}
        />

        {selectedSpecialization && (
          <DoctorList
            doctors={filteredDoctors}
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={(doc) => {
              setSelectedDoctor(doc);
              setSelectedDate("");
              setSelectedTime("");
            }}
          />
        )}

        {selectedDoctor && (
          <DatePicker
            today={today}
            selectedDate={selectedDate}
            setSelectedDate={(date) => {
              setSelectedDate(date);
              setSelectedTime("");
            }}
          />
        )}

        {selectedDate && (
          <TimeSlots
            timeSlots={getFilteredTimeSlots()}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}

        {selectedTime && (
          <button
            onClick={handleSubmit}
            className="bg-[#276578] text-white px-6 py-2 rounded-md hover:bg-[#1e4d5c] transition"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
}

export default Appointments;