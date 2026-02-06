import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart2, Activity, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { tradingOpportunities, marketStats, chartData } from '../mock';

const TradingSection = () => {
  return (
    <section id="trading" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Trading Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Live Market
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Opportunities</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real-time trading insights and exclusive investment opportunities for our members
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-6 h-6 text-yellow-400" />
              <Activity className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{marketStats.totalInvestments}</div>
            <div className="text-xs text-slate-400">Total Investments</div>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <BarChart2 className="w-6 h-6 text-blue-400" />
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{marketStats.activeMembers}</div>
            <div className="text-xs text-slate-400">Active Members</div>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-6 h-6 text-yellow-400" />
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{marketStats.propertiesManaged}</div>
            <div className="text-xs text-slate-400">Properties Managed</div>
          </div>

          <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <ArrowUpRight className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{marketStats.averageROI}</div>
            <div className="text-xs text-slate-400">Average ROI</div>
          </div>
        </div>

        {/* Market Chart Visual */}
        <div className="mb-12 p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Market Performance</h3>
            <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>
          
          {/* Simple Bar Chart Visualization */}
          <div className="flex items-end justify-between h-48 gap-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-blue-500 to-yellow-500 rounded-t-lg hover:from-blue-600 hover:to-yellow-600 transition-all duration-300" 
                     style={{ height: `${(data.value / 5000) * 100}%` }}>
                </div>
                <div className="text-xs text-slate-400">{data.month}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-slate-400">S&P 500 Index Performance (Last 6 Months)</span>
          </div>
        </div>

        {/* Trading Opportunities Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Top Trading Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className="group p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{opportunity.symbol}</div>
                    <div className="text-sm text-slate-400">{opportunity.name}</div>
                  </div>
                  <Badge className="bg-slate-800 text-slate-300 border border-slate-700">
                    {opportunity.category}
                  </Badge>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">
                    ${opportunity.currentPrice}
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    opportunity.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {opportunity.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {opportunity.change}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Volume</div>
                    <div className="text-sm font-semibold text-white">{opportunity.volume}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Market Cap</div>
                    <div className="text-sm font-semibold text-white">{opportunity.marketCap}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                >
                  Trade Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Member CTA */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-blue-900/30 to-yellow-900/20 backdrop-blur-md border border-yellow-500/30 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Access Premium Trading Features
          </h3>
          <p className="text-slate-300 text-lg mb-6">
            Join our exclusive member community to unlock real-time market data, advanced analytics, 
            and personalized investment recommendations from our expert advisors.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Become a Member Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
