import React from 'react';

const BmiInput = ({ label, value, min, max, unit, onChange, step = 1 }) => {
  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2 font-medium text-gray-700">
        <label className="text-base font-semibold text-gray-600">{label}</label>
        
        {/* Editable Input Field */}
        <div className="flex items-center bg-white/50 px-3 py-1 rounded-lg border border-transparent focus-within:border-indigo-300 focus-within:bg-white transition-all">
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(e) => {
              const val = Number(e.target.value);
              // Basic validation to prevent negative numbers
              if (val >= 0) onChange(val);
            }}
            className="w-16 text-right font-bold text-xl text-indigo-600 bg-transparent outline-none p-0 appearance-none m-0"
          />
          <span className="text-sm text-gray-400 font-normal ml-1">{unit}</span>
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
      />
    </div>
  );
};

export default BmiInput;