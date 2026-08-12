import React, { useState } from 'react';
import { Dumbbell, Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="bg-[#2B6B88] text-[#E8ECEF] pt-16 pb-8 border-t border-[#61B0D0]/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#61B0D0]/30">
        
        {/* Brand & About */}
        <div className="space-y-4">
          <a href="#hero" className="flex items-center gap-2 text-2xl font-black text-[#F06A32]">
            <Dumbbell className="w-7 h-7" />
            <span className="text-[#E8ECEF]">FLEX<span className="text-[#F06A32]">ZONE</span></span>
          </a>
          <p className="text-sm text-[#E8ECEF]/80 leading-relaxed">
            Transform your body and mind with top-tier equipment, expert trainers, and personalized training programs.
          </p>
          <div className="flex gap-3 pt-2">
            {/* Instagram */}
            <a href="#instagram" className="p-2.5 bg-[#61B0D0]/20 hover:bg-[#F06A32] rounded-xl transition cursor-pointer text-[#E8ECEF]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#facebook" className="p-2.5 bg-[#61B0D0]/20 hover:bg-[#F06A32] rounded-xl transition cursor-pointer text-[#E8ECEF]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
            </a>
            {/* Youtube */}
            <a href="#youtube" className="p-2.5 bg-[#61B0D0]/20 hover:bg-[#F06A32] rounded-xl transition cursor-pointer text-[#E8ECEF]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-[#F06A32] font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#E8ECEF]/80">
            <li><a href="#programs" className="hover:text-[#F06A32] transition">Programs</a></li>
            <li><a href="#schedule" className="hover:text-[#F06A32] transition">Class Schedule</a></li>
            <li><a href="#gallery" className="hover:text-[#F06A32] transition">Facilities Gallery</a></li>
            <li><a href="#trainers" className="hover:text-[#F06A32] transition">Expert Trainers</a></li>
            <li><a href="#pricing" className="hover:text-[#F06A32] transition">Membership Plans</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-[#F06A32] font-bold text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-[#E8ECEF]/80">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F06A32] flex-shrink-0" /> 123 Fitness Avenue, City Center
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F06A32] flex-shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F06A32] flex-shrink-0" /> info@flexzonegym.com
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-3">
          <h4 className="text-[#F06A32] font-bold text-lg">Newsletter</h4>
          <p className="text-xs text-[#E8ECEF]/80 leading-relaxed">
            Subscribe to get weekly workout routines, nutrition tips, and exclusive offers.
          </p>
          
          {subscribed ? (
            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              Subscribed successfully!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3.5 text-[#2B6B88]" />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#E8ECEF] text-slate-900 placeholder-slate-500 text-xs rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F06A32]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F06A32] hover:bg-[#964B31] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" /> Subscribe Now
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#E8ECEF]/60 gap-4">
        <p>© {new Date().getFullYear()} FlexZone Fitness Club. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-[#E8ECEF] transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#E8ECEF] transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}