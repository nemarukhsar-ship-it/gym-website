import React from 'react';
import { Star, Quote, Flame } from 'lucide-react';

const reviews = [
  {
    name: 'Rohan Sharma',
    role: 'Member since 2023',
    rating: 5,
    review: 'FlexZone completely transformed my lifestyle. The trainers designed a personalized program that helped me lose 14kg in just 4 months!',
    lossGain: '-14 kg Fat Loss',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ayesha Khan',
    role: 'Member since 2024',
    rating: 5,
    review: 'The community energy and state-of-the-art equipment here are unbeatable. The CrossFit classes are intense and super effective.',
    lossGain: '+6 kg Lean Muscle',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Hamza Ali',
    role: 'Member since 2023',
    rating: 5,
    review: 'Best gym in town! Personal coaching corrected my powerlifting form, allowing me to double my deadlift without any lower back injuries.',
    lossGain: 'Strength doubled',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto my-20 px-6">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-[#F06A32] font-bold uppercase tracking-wider text-sm">Real Results</h2>
        <h3 className="text-3xl md:text-5xl font-black text-[#2B6B88]">
          TRANSFORMATION <span className="text-[#F06A32]">STORIES</span>
        </h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          See how our dedicated members achieved their dream physique with our coaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#61B0D0]/30 rounded-3xl p-6 shadow-xl relative flex flex-col justify-between hover:-translate-y-2 transition duration-300"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#61B0D0]/20" />

            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#F06A32]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F06A32]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-sm italic leading-relaxed">
                "{item.review}"
              </p>

              {/* Transformation Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#F06A32]/10 border border-[#F06A32]/30 px-3 py-1 rounded-full text-[#F06A32] text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-[#F06A32]" />
                {item.lossGain}
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-[#61B0D0]"
              />
              <div>
                <h4 className="font-bold text-[#2B6B88] text-base">{item.name}</h4>
                <p className="text-slate-400 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}