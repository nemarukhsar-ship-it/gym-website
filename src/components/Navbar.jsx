import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Facilities', href: '#gallery' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'BMI Calculator', href: '#bmi' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2B6B88]/90 backdrop-blur-md border-b border-[#61B0D0]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-2xl font-black text-[#F06A32] tracking-wider">
          <Dumbbell className="w-8 h-8" />
          <span className="text-[#E8ECEF]">FLEX<span className="text-[#F06A32]">ZONE</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-[#E8ECEF]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-[#F06A32] transition duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button 
          onClick={() => onOpenModal && onOpenModal('Pro Membership')}
          className="hidden md:inline-block bg-[#F06A32] hover:bg-[#964B31] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition shadow-md cursor-pointer"
        >
          Join Now
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#E8ECEF] focus:outline-none cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2B6B88] border-b border-[#61B0D0]/30 px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-[#E8ECEF] hover:text-[#F06A32] font-semibold transition"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onOpenModal && onOpenModal('Pro Membership'); }}
            className="w-full text-center bg-[#F06A32] hover:bg-[#964B31] text-white py-2.5 rounded-xl font-bold text-sm transition cursor-pointer"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}