import React from 'react';
import { Building2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '../mock';

const Services = () => {
  const iconMap = {
    'building': Building2,
    'trending-up': TrendingUp,
    'bar-chart': BarChart3
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comprehensive Financial
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From real estate investments to trading opportunities, we provide a full spectrum of wealth-building services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="text-blue-400 hover:text-yellow-400 p-0 h-auto font-semibold group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Card Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-slate-800/50 group-hover:text-slate-800/30 transition-colors">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Ready to grow your wealth?</h3>
              <p className="text-slate-400">Join thousands of successful investors today</p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
