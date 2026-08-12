import React from 'react';

const programs = [
  {
    title: 'Strength & Bodybuilding',
    desc: 'Build raw muscle, increase strength, and learn advanced lifting techniques.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Fat Loss & HIIT',
    desc: 'High-energy cardio routines designed to maximize fat burn in short sessions.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Flexibility & Yoga',
    desc: 'Enhance mobility, balance, and mental serenity with guided yoga classes.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Personal Coaching',
    desc: '1-on-1 customized diet charts, form correction, and dedicated motivation.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Programs() {
  return (
    <section id="programs" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-red-500 font-bold uppercase tracking-wider text-sm">Our Specialties</h2>
        <h3 className="text-3xl md:text-5xl font-black">EXPLORE OUR <span className="text-red-600">PROGRAMS</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition duration-300 hover:-translate-y-2 group shadow-xl"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
              <a href="#pricing" className="text-red-500 font-bold text-sm hover:underline flex items-center gap-1">
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}