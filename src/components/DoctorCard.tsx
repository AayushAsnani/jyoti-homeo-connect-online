
import React from 'react';
import { Star, Calendar, MessageCircle, Video } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  languages: string[];
  consultationFee: number;
  availableSlots: string[];
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card className="card-hover border-0 shadow-lg bg-white overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <span>{doctor.experience} years exp.</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {doctor.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="mb-4">
          <div className="text-2xl font-bold text-green-600 mb-1">
            ₹{doctor.consultationFee}
          </div>
          <div className="text-sm text-gray-500">Consultation Fee</div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">Available Today:</div>
          <div className="flex flex-wrap gap-2">
            {doctor.availableSlots.slice(0, 3).map((slot, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {slot}
              </Badge>
            ))}
            {doctor.availableSlots.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{doctor.availableSlots.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
            <Calendar className="w-4 h-4 mr-2" />
            Book
          </Button>
          <Button variant="outline" size="icon" className="text-blue-500 border-blue-200 hover:bg-blue-50">
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="text-green-500 border-green-200 hover:bg-green-50">
            <Video className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
