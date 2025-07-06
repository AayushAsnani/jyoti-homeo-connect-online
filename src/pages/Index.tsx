
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DoctorsSection from '@/components/DoctorsSection';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <DoctorsSection />
      <BookingForm />
    </div>
  );
};

export default Index;
