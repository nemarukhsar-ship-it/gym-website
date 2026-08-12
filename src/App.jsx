import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import BmiCalculator from './components/BmiCalculator';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Pro Membership');

  const handleOpenModal = (planName = 'Pro Membership') => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#E8ECEF] text-slate-800 font-sans relative">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Programs />
      <Schedule onOpenModal={handleOpenModal} />
      <Gallery />
      <Trainers />
      <Testimonials />
      <BmiCalculator />
      <Pricing onOpenModal={handleOpenModal} />
      <Location />
      <Footer />

      <JoinModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan}
      />
      <ScrollToTop />
    </div>
  );
}