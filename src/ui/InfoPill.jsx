function InfoPill({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
      <span className="text-blue-700">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-wide text-black-500 font-medium">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default InfoPill;