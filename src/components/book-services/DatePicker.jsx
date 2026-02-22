function DatePicker({ today, selectedDate, setSelectedDate, label = "Select Date" }) {
  return (
    <>
      <label className="block mb-2 font-medium">
        {label}
      </label>
      <input
        type="date"
        min={today}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border rounded-md p-2 w-full mb-6"
      />
    </>
  );
}

export default DatePicker;