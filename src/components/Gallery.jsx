import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Free Weights & Dumbbells Arena',
    category: 'Weights',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'High-End Treadmills & HIIT Zone',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Finnish Steam Sauna & Spa Bath',
    category: 'Sauna',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Heavy Olympic Deadlift Racks',
    category: 'Weights',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'StairMaster & Exercise Bikes Station',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Luxury Hydro-Therapy Detox Pool',
    category: 'Sauna',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  },
];

const filterCategories = ['All', 'Weights', 'Cardio', 'Sauna'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="max-w-7xl mx-auto my-20 px-6">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-[#F06A32] font-bold uppercase tracking-wider text-sm">Tour Our Club</h2>
        <h3 className="text-3xl md:text-5xl font-black text-[#2B6B88]">
          PREMIUM <span className="text-[#F06A32]">FACILITIES</span>
        </h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          Take a look inside FlexZone's world-class training zones, cardio decks, and luxury recovery spaces.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#F06A32] text-white shadow-md'
                : 'bg-white border border-[#61B0D0]/30 text-[#2B6B88] hover:bg-[#61B0D0]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative h-72 rounded-2xl overflow-hidden border border-[#61B0D0]/30 shadow-lg bg-slate-900"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B6B88]/90 via-[#2B6B88]/20 to-transparent opacity-80 group-hover:opacity-95 transition duration-300" />
            
            <div className="absolute bottom-4 left-4 right-4 p-2 space-y-1">
              <span className="inline-flex items-center gap-1 bg-[#F06A32] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                <ImageIcon className="w-3 h-3" /> {item.category}
              </span>
              <h4 className="text-lg font-bold text-white leading-snug">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}