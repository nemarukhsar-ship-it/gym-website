import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Starter',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    features: [
      'Access to Gym Floor & Equipment',
      'Free Locker & Shower Usage',
      '1 Trainer Consultation',
      'Standard Diet Chart'
    ],
    popular: false,
  },
  {
    name: 'Pro Membership',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    features: [
      'All Starter Features',
      'Unlimited Group Classes & Cardio',
      'Personalized Dedicated Trainer',
      'Full Custom Nutrition Plan',
      'Sauna & Steam Bath Access'
    ],
    popular: true,
  },
  {
    name: 'Ultimate VIP',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    features: [
      'All Pro Features',
      '24/7 VIP Access',
      '1-on-1 Daily Coaching',
      'Free Gym Kit & Protein Shake Bar',
      'Private Massage & Recovery Room'
    ],
    popular: false,
  },
];

export default function Pricing({ onOpenModal }) {
  return (
    <section id="pricing" className="max-w-7xl mx-auto my-20 px-6">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-red-500 font-bold uppercase tracking-wider text-sm">Flexible Plans</h2>
        <h3 className="text-3xl md:text-5xl font-black">CHOOSE YOUR <span className="text-red-600">MEMBERSHIP</span></h3>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Select the best plan that fits your personal fitness journey and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-3xl overflow-hidden border transition duration-300 relative flex flex-col justify-between ${
              plan.popular 
                ? 'bg-slate-900 border-red-600 shadow-2xl shadow-red-600/20 scale-105' 
                : 'bg-slate-950 border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.popular && (
              <span className="absolute top-3 right-3 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </span>
            )}

            <div>
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <h4 className="absolute bottom-3 left-6 text-2xl font-bold text-white">{plan.name}</h4>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <span className="text-4xl font-black text-red-500">{plan.price}</span>
                  <span className="text-slate-400 text-sm"> / month</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => onOpenModal && onOpenModal(plan.name)}
                className={`w-full py-3.5 rounded-xl font-bold transition cursor-pointer ${
                  plan.popular 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700'
                }`}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}