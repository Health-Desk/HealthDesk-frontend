import React, { useState, useEffect, useMemo } from 'react';
import BmiInput from '../components/BmiInput';
import BmiGauge from '../components/BmiGauge';
import UnitSwitch from '../components/UnitSwitch';

const BMI = () => {
  // --- State ---
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'
  
  // Internal State (Always Metric)
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);
  const [waistCm, setWaistCm] = useState(80);
  const [gender, setGender] = useState('male'); 

  const [bmi, setBmi] = useState(0);
  const [whtr, setWhtr] = useState(0); 

  // --- Calculations ---
  useEffect(() => {
    const heightM = heightCm / 100;
    const bmiValue = weightKg / (heightM * heightM);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    const ratio = waistCm / heightCm;
    setWhtr(parseFloat(ratio.toFixed(2)));
  }, [heightCm, weightKg, waistCm]);

  // --- Helpers ---
  const getBmiCategory = (val) => {
    if (val < 18.5) return { label: 'Underweight', color: '#3b82f6', desc: 'Might indicate malnutrition. Eat nutrient-dense foods.' };
    if (val < 25) return { label: 'Healthy', color: '#10b981', desc: 'Great job! Maintain a balanced diet and regular activity.' };
    if (val < 30) return { label: 'Overweight', color: '#f59e0b', desc: 'Slight risk. Focus on portion control and more movement.' };
    return { label: 'Obese', color: '#ef4444', desc: 'Higher health risk. Consult a doctor for a personalized plan.' };
  };

  const getWaistStatus = (ratio) => {
    if (ratio <= 0.5) return { label: 'Healthy Zone', color: 'text-emerald-600' };
    if (ratio <= 0.6) return { label: 'Increased Risk', color: 'text-amber-600' };
    return { label: 'High Risk', color: 'text-red-600' };
  };

  const bmiData = useMemo(() => getBmiCategory(bmi), [bmi]);
  const waistData = getWaistStatus(whtr);

  // --- Handlers (Two-Way Binding) ---
  const handleHeightChange = (val) => setHeightCm(unitSystem === 'metric' ? val : val * 2.54);
  const handleWeightChange = (val) => setWeightKg(unitSystem === 'metric' ? val : val * 0.453592);
  const handleWaistChange = (val) => setWaistCm(unitSystem === 'metric' ? val : val * 2.54);

  // Display Values for Input Components
  // Note: We format to 1 decimal place for cleaner input display if needed, or keep raw for typing
  const inputHeight = unitSystem === 'metric' ? Math.round(heightCm) : parseFloat((heightCm / 2.54).toFixed(1));
  const inputWeight = unitSystem === 'metric' ? Math.round(weightKg) : parseFloat((weightKg / 0.453592).toFixed(1));
  const inputWaist  = unitSystem === 'metric' ? Math.round(waistCm)  : parseFloat((waistCm / 2.54).toFixed(1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white flex items-center justify-center p-4 md:p-8 font-sans">
      
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-[2rem] p-6 md:p-10 border border-white/50">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-100 pb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Body Health Index</h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">Advanced Biometric Analysis</p>
          </div>
          <UnitSwitch unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMN 1: CONTROLS */}
          <div className="space-y-2">
            
            {/* Gender Toggle */}
            <div className="flex gap-4 mb-8">
              {['male', 'female'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold capitalize transition-all duration-300 border-2 ${
                    gender === g 
                    ? 'bg-[#276578] text-white p-4 bg-indigo-50 bg-[#0d8bb1] text-white  shadow-sm' 
                    : 'border-transparent bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              <BmiInput 
                label="Height" 
                value={inputHeight} 
                min={unitSystem === 'metric' ? 100 : 40} 
                max={unitSystem === 'metric' ? 250 : 100} 
                unit={unitSystem === 'metric' ? 'cm' : 'in'} 
                onChange={handleHeightChange} 
              />
              <BmiInput 
                label="Weight" 
                value={inputWeight} 
                min={unitSystem === 'metric' ? 30 : 66} 
                max={unitSystem === 'metric' ? 200 : 440} 
                unit={unitSystem === 'metric' ? 'kg' : 'lbs'} 
                onChange={handleWeightChange} 
              />
              <BmiInput 
                label="Waist Size" 
                value={inputWaist} 
                min={unitSystem === 'metric' ? 50 : 20} 
                max={unitSystem === 'metric' ? 150 : 60} 
                unit={unitSystem === 'metric' ? 'cm' : 'in'} 
                onChange={handleWaistChange} 
              />
            </div>
          </div>

          {/* COLUMN 2: VISUALS & RESULTS */}
          <div className="flex flex-col justify-between bg-white/60 rounded-3xl p-6 md:p-8 border border-white shadow-inner">
            
            {/* The Gauge */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-[200px]">
               <BmiGauge bmi={bmi} category={bmiData.label} color={bmiData.color} />
            </div>

            {/* Data Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
               {/* Waist Card */}
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Waist Ratio</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xl font-bold ${waistData.color}`}>{waistData.label}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Ratio: {whtr}</p>
               </div>
               
               {/* Recommendation Card */}
               <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 col-span-1 md:col-span-2">
                 <div className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]">💡</div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-1">Health Tip</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{bmiData.desc}</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

        </div>

        {/* Footer / Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-100">
           <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-indigo-500 transition-colors select-none">
                <span>Who is this for? (Important Disclaimer)</span>
                <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <div className="text-gray-500 text-sm mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-2xl">
                 <div>
                    <strong className="text-gray-700 block mb-1">🏋️ Athletes</strong>
                    High muscle mass can cause a high BMI but low body fat. Rely on waist ratio.
                 </div>
                 <div>
                    <strong className="text-gray-700 block mb-1">🤰 Pregnancy</strong>
                    BMI is not accurate during pregnancy. Focus on doctor's weight gain charts.
                 </div>
                 <div>
                    <strong className="text-gray-700 block mb-1">👴 Seniors</strong>
                    A slightly higher BMI (25-27) may actually be protective against frailty.
                 </div>
              </div>
           </details>
        </div>

      </div>
    </div>
  );
};

export default BMI;