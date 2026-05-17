import { useState } from "react";
import SpecializationSelect from "./SpecializationSelect";
import DoctorList from "./DoctorList";
import DatePicker from "./DatePicker";
import TimeSlots from "./TimeSlots";
import doctors from "../../data/doctors";
import timeSlots from "../../data/timeSlotsAppointments";
import DoctorModal from "./DoctorModal";

function Appointments() {
  const today = new Date().toISOString().split("T")[0];

  const specializations = ["Cardiologist", "Dermatologist", "Neurologist"];

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredDoctors = doctors.filter(
    (doc) => doc.specialization === selectedSpecialization,
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
      `Appointment booked with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`,
    );
  };

  return (
    <div className="space-y-6">
      <div className="p-6 border rounded-xl bg-gray-50 shadow-sm space-y-6">
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

        <DoctorList
          doctors={selectedSpecialization ? filteredDoctors : doctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={(doc) => {
            setSelectedDoctor(doc);
            setSelectedDate("");
            setSelectedTime("");
            setShowModal(true);
          }}
        />

        <DatePicker
          today={today}
          selectedDate={selectedDate}
          setSelectedDate={(date) => {
            setSelectedDate(date);
            setSelectedTime("");
          }}
        />

        <TimeSlots
          timeSlots={selectedDate ? getFilteredTimeSlots() : timeSlots}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <button
          onClick={handleSubmit}
          className="bg-[#276578] text-white px-6 py-2 rounded-md hover:bg-[#1e4d5c] transition"
        >
          Confirm Booking
        </button>
        {showModal && (
          <DoctorModal
            doctor={selectedDoctor}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Appointments;
