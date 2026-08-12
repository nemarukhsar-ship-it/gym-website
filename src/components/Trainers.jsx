import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

const trainers = [
  {
    name: 'Alex Rivera',
    role: 'Head Strength & Bodybuilding Coach',
    experience: '8+ Years Exp',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialized in powerlifting, hyper-trophy training, and contest preparation.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'CrossFit & HIIT Specialist',
    experience: '6+ Years Exp',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    bio: 'Expert in fat-loss programming, endurance building, and functional cardio.',
  },
  {
    name: 'Marcus Vance',
    role: 'Personal Transformation & Mobility Coach',
    experience: '10+ Years Exp',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    bio: 'Focuses on posture correction, joint mobility, and 1-on-1 diet chart design.',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-red-500 font-bold uppercase tracking-wider text-sm">Meet Our Team</h2>
        <h3 className="text-3xl md:text-5xl font-black">EXPERT <span className="text-red-600">COACHES</span></h3>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Certified professionals dedicated to guiding your fitness transformation step-by-step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trainers.map((coach, index) => (
          <div 
            key={index} 
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-red-600/50 transition duration-300 group shadow-xl"
          >
            <div className="h-80 overflow-hidden relative">
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-red-500 border border-slate-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                {coach.experience}
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-red-500 font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Certified Trainer</span>
              </div>
              <h4 className="text-2xl font-bold text-white">{coach.name}</h4>
              <p className="text-slate-300 text-sm font-semibold">{coach.role}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{coach.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}