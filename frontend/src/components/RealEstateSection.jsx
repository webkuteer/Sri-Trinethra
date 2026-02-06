import React, { useState } from 'react';
import { MapPin, Square, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { realEstateProperties } from '../mock';

const RealEstateSection = () => {
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Commercial', 'Residential', 'Mixed-Use'];

  const filteredProperties = filter === 'All' 
    ? realEstateProperties 
    : realEstateProperties.filter(prop => prop.type === filter);

  return (
    <section id="real-estate" className="py-20 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Investment Opportunities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Premium Real Estate
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Portfolio</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Carefully curated properties with exceptional ROI potential across prime global locations
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === type
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.map((property) => (
            <div 
              key={property.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    property.status === 'Available' 
                      ? 'bg-green-500/90 text-white' 
                      : property.status === 'Pre-Launch'
                      ? 'bg-blue-500/90 text-white'
                      : 'bg-yellow-500/90 text-slate-900'
                  }`}>
                    {property.status}
                  </Badge>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-slate-900/80 text-slate-200 border border-slate-700">
                    {property.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-slate-500">Area</div>
                      <div className="text-sm font-semibold text-white">{property.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-yellow-400" />
                    <div>
                      <div className="text-xs text-slate-500">Expected ROI</div>
                      <div className="text-sm font-semibold text-yellow-400">{property.expectedROI}</div>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Investment</div>
                    <div className="text-2xl font-bold text-white">{property.price}</div>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-md border border-blue-500/30 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Exclusive Member Benefits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-yellow-400 mr-3" />
                  Priority access to new listings
                </li>
                <li className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-yellow-400 mr-3" />
                  Dedicated investment advisor
                </li>
                <li className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-yellow-400 mr-3" />
                  Detailed market analysis reports
                </li>
              </ul>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
