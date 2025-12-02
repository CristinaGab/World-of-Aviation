import React, { useState } from 'react';
import { Briefcase, ExternalLink, Globe, MapPin } from 'lucide-react';
import { AIRLINE_CAREERS } from '../constants';

export const CareersView: React.FC = () => {
  const [filterRegion, setFilterRegion] = useState<string>('All');
  
  const regions = ['All', ...Array.from(new Set(AIRLINE_CAREERS.map(c => c.region)))];
  
  const filteredCareers = filterRegion === 'All' 
    ? AIRLINE_CAREERS 
    : AIRLINE_CAREERS.filter(c => c.region === filterRegion);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Join the World of Aviation</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Explore career opportunities with the world's leading airlines. Find your next destination in the sky or on the ground.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 flex flex-wrap gap-2 items-center justify-center">
          <span className="text-gray-500 font-medium mr-2">Filter by Region:</span>
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setFilterRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterRegion === region 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    <Globe className="w-3 h-3 mr-1" />
                    {career.region}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{career.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {career.description}
                </p>
                
                <a 
                  href={career.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 font-bold py-3 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-all"
                >
                  Visit Career Page
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No airlines found for this region.</p>
          </div>
        )}

      </div>
    </div>
  );
};