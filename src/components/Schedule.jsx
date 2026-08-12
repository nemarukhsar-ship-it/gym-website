import React, { useState } from 'react';
import { Clock, User } from 'lucide-react';

const scheduleData = {
  Monday: [
    { time: '06:00 AM - 07:30 AM', class: 'Power Cardio & HIIT', trainer: 'Sarah Jenkins' },
    { time: '09:00 AM - 10:30 AM', class: 'Heavy Strength Lifting', trainer: 'Alex Rivera' },
    { time: '05:00 PM - 06:30 PM', class: 'CrossFit WOD', trainer: 'Sarah Jenkins' },
    { time: '07:00 PM - 08:30 PM', class: 'Bodybuilding & Hypertrophy', trainer: 'Marcus Vance' },
  ],
  Tuesday: [
    { time: '06:00 AM - 07:30 AM', class: 'Morning Yoga Flow', trainer: 'Sarah Jenkins' },
    { time: '09:00 AM - 10:30 AM', class: 'Core & Ab Sculpting', trainer: 'Marcus Vance' },
    { time: '05:00 PM - 06:30 PM', class: 'Strength Conditioning', trainer: 'Alex Rivera' },
    { time: '07:00 PM - 08:30 PM', class: 'HIIT Fat Burn', trainer: 'Sarah Jenkins' },
  ],
  Wednesday: [
    { time: '06:00 AM - 07:30 AM', class: 'Full Body Endurance', trainer: 'Alex Rivera' },
    { time: '09:00 AM - 10:30 AM', class: 'Powerlifting Form Check', trainer: 'Marcus Vance' },
    { time: '05:00 PM - 06:30 PM', class: 'CrossFit Bootcamp', trainer: 'Sarah Jenkins' },
    { time: '07:00 PM - 08:30 PM', class: 'Mobility & Stretching', trainer: 'Marcus Vance' },
  ],
  Thursday: [
    { time: '06:00 AM - 07:30 AM', class: 'Fat Burn Kickboxing', trainer: 'Sarah Jenkins' },
    { time: '09:00 AM - 10:30 AM', class: 'Legs & Glutes Focus', trainer: 'Alex Rivera' },
    { time: '05:00 PM - 06:30 PM', class: 'Chest & Back Blast', trainer: 'Marcus Vance' },
    { time: '07:00 PM - 08:30 PM', class: 'Evening Yoga', trainer: 'Sarah Jenkins' },
  ],
  Friday: [
    { time: '06:00 AM - 07:30 AM', class: 'High Energy Cycling', trainer: 'Sarah Jenkins' },
    { time: '09:00 AM - 10:30 AM', class: 'Arms & Shoulders Scuplting', trainer: 'Marcus Vance' },
    { time: '05:00 PM - 06:30 PM', class: 'Heavy Deadlift Session', trainer: 'Alex Rivera' },
    { time: '07:00 PM - 08:30 PM', class: 'Full Body Circuit', trainer: 'Alex Rivera' },
  ],
  Saturday: [
    { time: '07:00 AM - 08:30 AM', class: 'Weekend Warrior HIIT', trainer: 'Sarah Jenkins' },
    { time: '10:00 AM - 11:30 AM', class: 'Open Weightlifting Gym', trainer: 'Alex Rivera' },
    { time: '04:00 PM - 05:30 PM', class: 'Mobility & Foam Rolling', trainer: 'Marcus Vance' },
  ],
};

export default function Schedule({ onOpenModal }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = Object.keys(scheduleData);

  return (
    <section id="schedule" className="max-w-7xl mx-auto my-20 px-6">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-[#F06A32] font-bold uppercase tracking-wider text-sm">Timetable</h2>
        <h3 className="text-3xl md:text-5xl font-black text-[#2B6B88]">
          WORKOUT <span className="text-[#F06A32]">SCHEDULE</span>
        </h3>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          Plan your week ahead. Choose a day to see available group training classes and trainers.
        </p>
      </div>

      {/* Days Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
              selectedDay === day
                ? 'bg-[#F06A32] text-white shadow-md'
                : 'bg-white border border-[#61B0D0]/30 text-[#2B6B88] hover:bg-[#61B0D0]/10'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Class Timetable Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scheduleData[selectedDay].map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#61B0D0]/30 rounded-2xl p-6 shadow-md hover:border-[#F06A32] transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#F06A32] text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
              <h4 className="text-xl font-black text-[#2B6B88]">{item.class}</h4>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <User className="w-4 h-4 text-[#61B0D0]" />
                <span>Coach: <strong className="text-slate-700">{item.trainer}</strong></span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal && onOpenModal(`Class: ${item.class}`)}
              className="mt-6 w-full py-2 bg-[#2B6B88] hover:bg-[#964B31] text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Book Seat
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}