import React from 'react';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Logo */}
          <div className="mb-12 flex justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_784e5e15-b373-4cea-9399-831991c0a26e/artifacts/bym2pwp7_ChatGPT%20Image%20Feb%206%2C%202026%2C%2005_51_19%20PM.png" 
              alt="Sri Trinethra Global Projects" 
              className="h-32 sm:h-40 w-auto animate-fade-in"
            />
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                {companyInfo.tagline}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Build Your Wealth with</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Global Investment Power
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
            >
              Start Investing Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold text-lg px-8 py-6 transition-all duration-300"
            >
              Explore Opportunities
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">14.2%</div>
              <div className="text-slate-400 text-sm">Average ROI</div>
            </div>
            
            <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">$2.4B+</div>
              <div className="text-slate-400 text-sm">Assets Under Management</div>
            </div>
            
            <div className="p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">127</div>
              <div className="text-slate-400 text-sm">Premium Properties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
