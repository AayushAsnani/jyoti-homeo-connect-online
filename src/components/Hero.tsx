
import React from 'react';
import { Calendar, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 glass-effect">
              ✨ Trusted by 10,000+ patients
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Natural Healing with
            <span className="block bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">
              Expert Homeopathy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            Connect with certified homeopathic doctors from the comfort of your home. 
            Personalized treatment plans for holistic healing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-semibold shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">10,000+</div>
              <div className="text-sm text-white/80">Patients Served</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-white/80">Expert Doctors</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Availability</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">98%</div>
              <div className="text-sm text-white/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
