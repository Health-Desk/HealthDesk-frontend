import React from 'react';

const BmiInput = ({ label, value, min, max, unit, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 font-medium text-gray-700">
        <span className="text-lg">{label}</span>
        <span className="text-indigo-600 font-bold text-xl">
          {value} <span className="text-sm text-gray-400 font-normal">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all duration-300"
      />
    </div>
  );
};

export default BmiInput;