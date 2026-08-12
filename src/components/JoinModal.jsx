import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function JoinModal({ isOpen, onClose, selectedPlan }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    plan: selectedPlan || 'Pro Membership'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black text-white">Registration Successful!</h3>
            <p className="text-slate-400 text-sm">Welcome to FlexZone! Our team will call you within 24 hours.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-black text-white">JOIN <span className="text-red-600">FLEXZONE</span></h3>
              <p className="text-slate-400 text-xs mt-1">Fill in your details to activate your membership.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. +91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Select Plan</label>
                <select 
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                >
                  <option value="Basic Starter">Basic Starter ($29/mo)</option>
                  <option value="Pro Membership">Pro Membership ($59/mo)</option>
                  <option value="Ultimate VIP">Ultimate VIP ($99/mo)</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold text-sm text-white transition shadow-lg shadow-red-600/30 cursor-pointer mt-2"
              >
                Confirm Membership
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}