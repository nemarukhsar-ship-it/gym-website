import React from 'react';
import { ArrowRight, Play, Dumbbell } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const bgImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#E8ECEF]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Color Palette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B6B88]/95 via-[#2B6B88]/80 to-[#2B6B88]/50 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F06A32]/20 border border-[#F06A32]/40 px-4 py-1.5 rounded-full text-[#F06A32] text-sm font-bold tracking-wide uppercase bg-slate-900/40">
            <Dumbbell className="w-4 h-4" /> #1 Premium Fitness Club
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#E8ECEF]">
            TRANSFORM YOUR <span className="text-[#F06A32]">BODY</span> & MIND
          </h1>
          
          <p className="text-[#E8ECEF]/90 text-base md:text-lg leading-relaxed">
            State-of-the-art gym equipment, personalized workout plans, and certified expert trainers to help you achieve your ultimate fitness goals.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onOpenModal && onOpenModal('Pro Membership')}
              className="bg-[#F06A32] hover:bg-[#964B31] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition shadow-lg shadow-[#F06A32]/30 cursor-pointer"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#programs" className="border border-[#61B0D0] hover:bg-[#61B0D0]/20 bg-[#2B6B88]/60 backdrop-blur-sm text-[#E8ECEF] px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition cursor-pointer">
              <Play className="w-5 h-5 text-[#61B0D0] fill-[#61B0D0]" /> Explore Programs
            </a>
          </div>

          <div className="pt-8 border-t border-[#61B0D0]/30 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F06A32]">500+</div>
              <div className="text-xs text-[#E8ECEF]/80 font-medium">Active Members</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F06A32]">15+</div>
              <div className="text-xs text-[#E8ECEF]/80 font-medium">Expert Coaches</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#F06A32]">24/7</div>
              <div className="text-xs text-[#E8ECEF]/80 font-medium">Gym Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}