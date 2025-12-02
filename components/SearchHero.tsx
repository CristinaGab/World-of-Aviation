import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import { SearchParams } from '../types';

interface SearchHeroProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

export const SearchHero: React.FC<SearchHeroProps> = ({ onSearch, isLoading }) => {
  const [params, setParams] = useState<SearchParams>({
    origin: '',
    destination: '',
    date: new Date().toISOString().split('T')[0],
    passengers: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (params.origin && params.destination && params.date) {
      onSearch(params);
    }
  };

  return (
    <div className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Sky Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Discover Your Next Horizon
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            AI-powered flight search finding you the best routes and prices in seconds.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto transform transition-all hover:scale-[1.01]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Origin */}
              <div className="relative group">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">From</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 group-focus-within:border-primary-500 group-focus-within:ring-2 group-focus-within:ring-primary-100 transition-all">
                  <MapPin className="text-primary-500 w-5 h-5 mr-3" />
                  <input 
                    type="text" 
                    placeholder="City or Airport" 
                    className="bg-transparent w-full outline-none text-gray-900 font-medium placeholder-gray-400"
                    value={params.origin}
                    onChange={(e) => setParams({...params, origin: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="relative group">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">To</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 group-focus-within:border-primary-500 group-focus-within:ring-2 group-focus-within:ring-primary-100 transition-all">
                  <MapPin className="text-primary-500 w-5 h-5 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    className="bg-transparent w-full outline-none text-gray-900 font-medium placeholder-gray-400"
                    value={params.destination}
                    onChange={(e) => setParams({...params, destination: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative group">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Departure</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 group-focus-within:border-primary-500 group-focus-within:ring-2 group-focus-within:ring-primary-100 transition-all">
                  <Calendar className="text-primary-500 w-5 h-5 mr-3" />
                  <input 
                    type="date" 
                    className="bg-transparent w-full outline-none text-gray-900 font-medium placeholder-gray-400"
                    value={params.date}
                    onChange={(e) => setParams({...params, date: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="relative group">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Travelers</label>
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 group-focus-within:border-primary-500 group-focus-within:ring-2 group-focus-within:ring-primary-100 transition-all">
                  <Users className="text-primary-500 w-5 h-5 mr-3" />
                  <select 
                    className="bg-transparent w-full outline-none text-gray-900 font-medium appearance-none"
                    value={params.passengers}
                    onChange={(e) => setParams({...params, passengers: parseInt(e.target.value)})}
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-end pt-2">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Scanning Skies...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Search Flights</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};