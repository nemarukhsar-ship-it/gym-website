import React, { useState } from 'react';
import { Calculator, Activity } from 'lucide-react';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('Underweight 🟡');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal Weight (Healthy) 🟢');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight 🟠');
      } else {
        setMessage('Obese 🔴');
      }
    }
  };

  return (
    <section id="bmi" className="max-w-4xl mx-auto my-16 px-6">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="text-center space-y-2 mb-8">
          <div className="flex justify-center items-center gap-2 text-red-500 font-bold">
            <Activity className="w-6 h-6" />
            <span>HEALTH CHECK</span>
          </div>
          <h2 className="text-3xl font-black">CALCULATE YOUR <span className="text-red-600">BMI</span></h2>
          <p className="text-slate-400 text-sm">Apna weight aur height daal kar apna fitness score check karein.</p>
        </div>

        <form onSubmit={calculateBMI} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Weight (kg)</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Height (cm)</label>
              <input 
                type="number" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 transition cursor-pointer"
          >
            <Calculator className="w-5 h-5" /> Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-8 p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center space-y-2">
            <span className="text-sm text-slate-400 font-medium">Your BMI Score</span>
            <div className="text-4xl font-black text-red-500">{bmi}</div>
            <p className="text-lg font-semibold text-slate-200">{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}