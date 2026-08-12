import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="max-w-7xl mx-auto my-20 px-6">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-red-500 font-bold uppercase tracking-wider text-sm">Find Us</h2>
        <h3 className="text-3xl md:text-5xl font-black">VISIT OUR <span className="text-red-600">GYM</span></h3>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Come train with us! Check out our location, contact details, and gym timing below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-red-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Our Address</h4>
              <p className="text-slate-400 text-sm">123 Fitness Boulevard, Main City Center, Gym Zone</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-red-500">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Phone Number</h4>
              <p className="text-slate-400 text-sm">+1 (555) 019-2834</p>
              <p className="text-slate-400 text-sm">+1 (555) 019-5678</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-red-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Opening Hours</h4>
              <p className="text-slate-400 text-sm">Mon - Sat: 6:00 AM - 11:00 PM</p>
              <p className="text-slate-400 text-sm">Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-red-500">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Email Us</h4>
              <p className="text-slate-400 text-sm">info@flexzonegym.com</p>
            </div>
          </div>
        </div>

        {/* Google Map iFrame */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl min-h-[350px]">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.08868694084!2d67.0315483!3d24.8607103!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e08f51a25db%3A0x2a988d5e1b7b1348!2sGym!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}