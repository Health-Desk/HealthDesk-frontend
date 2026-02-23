import React from 'react';

const BmiGauge = ({ bmi, category, color }) => {
  // SVG Math
  const radius = 80;
  const stroke = 12; // Slightly thinner for modern look
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const semiCircumference = circumference / 2;
  
  const maxBmi = 40;
  const minBmi = 10;
  const percent = Math.min(Math.max((bmi - minBmi) / (maxBmi - minBmi), 0), 1);
  const strokeDashoffset = semiCircumference - (percent * semiCircumference);

  return (
    <div className="mt-8 flex flex-col items-center relative">
      <svg className="w-64 h-32 overflow-visible" viewBox="0 0 160 90">
        {/* Background Arc */}
        <path
          d="M 10 80 A 70 70 0 0 1 150 80"
          className="stroke-gray-200 fill-none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={semiCircumference}
          strokeDashoffset={0}
        />
        
        {/* Fill Arc (Animated) */}
        <path
          d="M 10 80 A 70 70 0 0 1 150 80"
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={semiCircumference}
          strokeDashoffset={strokeDashoffset}
          // className="transition-[stroke-dashoffset] duration-1000 ease-out transition-[stroke] duration-500"
        />
      </svg>
      
      {/* Text Overlay */}
      <div className="-mt-10 text-center">
        <div className="text-5xl font-extrabold text-gray-800 tracking-tight">
          {bmi}
        </div>
        <div 
          className="text-lg font-bold uppercase tracking-widest mt-1 transition-colors duration-300"
          style={{ color: color }}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default BmiGauge;