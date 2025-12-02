import React from 'react';
import { Plane, Menu, User, Globe } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
            <div className="bg-primary-600 p-2 rounded-lg text-white">
              <Plane className="w-6 h-6 transform -rotate-45" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
              VoloVista
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
            <button onClick={onHomeClick} className="hover:text-primary-600 transition-colors">Flights</button>
            <a href="#" className="hover:text-primary-600 transition-colors">Hotels</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Deals</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Insurance</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-1 text-gray-500 hover:text-primary-600">
              <Globe className="w-5 h-5" />
              <span>EN</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors font-medium">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};