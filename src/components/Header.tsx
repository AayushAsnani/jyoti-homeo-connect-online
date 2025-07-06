
import React, { useState } from 'react';
import { Heart, Menu, X, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Jyoti Homeopathy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Doctors
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Doctors
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
