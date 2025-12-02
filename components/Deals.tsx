import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { POPULAR_DEALS } from '../constants';

export const Deals: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Destinations</h2>
            <p className="text-lg text-gray-600">Hand-picked deals for your next adventure.</p>
          </div>
          <a href="#" className="hidden md:flex items-center font-bold text-primary-600 hover:text-primary-700 transition-colors">
            View all offers <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {POPULAR_DEALS.map((deal) => (
            <div key={deal.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-500 shadow-sm">
                  <Star className="w-3 h-3 fill-current" />
                  <span>4.9</span>
                </div>
                <img 
                  src={deal.image} 
                  alt={deal.destination}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{deal.destination.split(',')[0]}</h3>
                  <p className="text-sm opacity-90">{deal.destination.split(',')[1]}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                    Round trip
                  </span>
                  <span className="text-xs text-gray-500">{deal.dates}</span>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Starting from</p>
                    <p className="text-2xl font-bold text-gray-900">{deal.price}</p>
                  </div>
                  <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-primary-600 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700 transition-colors">
            View all offers <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};