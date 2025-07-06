
import React from 'react';
import { Stethoscope, Heart, Pill, FileText, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Consultation",
      description: "Comprehensive homeopathic consultations for acute and chronic conditions with personalized treatment plans.",
      color: "text-blue-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Chronic Disease Management",
      description: "Specialized care for diabetes, hypertension, arthritis, and other chronic conditions using homeopathic principles.",
      color: "text-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Healthcare",
      description: "Complete healthcare solutions for the entire family, from pediatric to geriatric homeopathic care.",
      color: "text-green-500"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Online Pharmacy",
      description: "Authentic homeopathic medicines delivered to your doorstep with verified quality and potency.",
      color: "text-purple-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Health Records",
      description: "Secure storage and easy access to your medical history, prescriptions, and treatment progress.",
      color: "text-yellow-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock medical support for emergencies and urgent health concerns via chat or call.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Comprehensive Homeopathic Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of natural healing with our range of specialized homeopathic services 
            designed to treat the root cause, not just symptoms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`${service.color} mb-4 flex justify-center`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
