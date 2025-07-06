
import React from 'react';
import DoctorCard from './DoctorCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Classical Homeopathy",
      experience: 15,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      languages: ["Hindi", "English", "Bengali"],
      consultationFee: 500,
      availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"]
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Pediatric Homeopathy",
      experience: 12,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      languages: ["Hindi", "English", "Marathi"],
      consultationFee: 600,
      availableSlots: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM", "7:00 PM"]
    },
    {
      id: 3,
      name: "Dr. Anjali Patel",
      specialty: "Women's Health",
      experience: 18,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594824475407-0ca8e8b26c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      languages: ["Hindi", "English", "Gujarati"],
      consultationFee: 700,
      availableSlots: ["10:30 AM", "1:00 PM", "4:30 PM"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consult with India's most experienced homeopathic doctors who combine traditional wisdom 
            with modern diagnostic techniques for optimal healing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
            View All Doctors
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
