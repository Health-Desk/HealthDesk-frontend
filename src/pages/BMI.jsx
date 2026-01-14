import React, { useState, useEffect, useMemo } from 'react';

// Adjust path if your components are in a different folder
import BmiInput from '../components/BmiInput';
import BmiGauge from '../components/BmiGauge';

const BMI = () => {
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(70);  // kg
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));
  }, [height, weight]);

  const bmiData = useMemo(() => {
    // Tailwind colors for logic (Hex codes needed for SVG stroke)
    if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6' }; // blue-500
    if (bmi < 25) return { label: 'Healthy', color: '#10b981' };      // emerald-500
    if (bmi < 30) return { label: 'Overweight', color: '#f59e0b' };   // amber-500
    return { label: 'Obese', color: '#ef4444' };                      // red-500
  }, [bmi]);

  const idealMin = (18.5 * (height / 100) ** 2).toFixed(1);
  const idealMax = (24.9 * (height / 100) ** 2).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4 font-sans">
      
      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/50 transition-all hover:shadow-indigo-500/10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">BMI Calculator</h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">Analyze your body metrics instantly</p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <BmiInput 
            label="Height" 
            value={height} 
            min={100} 
            max={220} 
            unit="cm" 
            onChange={setHeight} 
          />
          <BmiInput 
            label="Weight" 
            value={weight} 
            min={30} 
            max={150} 
            unit="kg" 
            onChange={setWeight} 
          />
        </div>

        {/* Visual Gauge */}
        <BmiGauge 
          bmi={bmi} 
          category={bmiData.label} 
          color={bmiData.color} 
        />

        {/* Info Pill */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-500 shadow-inner">
            Ideal Range: <span className="text-gray-700">{idealMin} - {idealMax} kg</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BMI;