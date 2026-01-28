import React from 'react';

const UnitSwitch = ({ unitSystem, setUnitSystem }) => {
  return (
    <div className="flex bg-gray-200/50 p-1 rounded-xl mb-6 relative">
      <div 
        className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-sm transition-all duration-300 ease-out transform ${unitSystem === 'imperial' ? 'translate-x-full' : 'translate-x-0'}`}
      />
      <button 
        onClick={() => setUnitSystem('metric')}
        className={`flex-1 relative z-10 py-2 text-sm font-semibold transition-colors duration-300 ${unitSystem === 'metric' ? 'bg-[#0d8bb1] text-white' : 'text-gray-500'}`}
      >
        Metric (kg/cm)
      </button>
      <button 
        onClick={() => setUnitSystem('imperial')}
        className={`flex-1 relative z-10 py-2 text-sm font-semibold transition-colors duration-300 ${unitSystem === 'imperial' ? 'bg-[#0d8bb1] text-white' : 'text-gray-500'}`}
      >
        Imperial (lbs/in)
      </button>
    </div>
  );
};

export default UnitSwitch;