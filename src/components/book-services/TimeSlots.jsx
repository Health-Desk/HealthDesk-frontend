function TimeSlots({ timeSlots, selectedTime, setSelectedTime }) {
  return (
    <>
      <label className="block mb-3 font-medium">
        Select Time
      </label>

      <div className="flex flex-wrap gap-3 mb-6">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(time)}
            className={`px-4 py-2 border rounded-md transition ${
              selectedTime === time
                ? "bg-[#276578] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </>
  );
}

export default TimeSlots;