import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Identifying high-potential investment opportunities through rigorous market analysis and expert insights."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your financial success is our priority. Personalized strategies tailored to your unique goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Decades of combined experience in real estate, trading, and wealth management."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international markets and premium properties across multiple continents."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building Wealth,
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Creating Legacies</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.mission}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose Sri Trinethra Global Projects?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We combine traditional investment wisdom with cutting-edge technology to deliver superior returns. 
              Our comprehensive approach covers real estate, trading, and wealth management, ensuring your portfolio 
              is diversified and positioned for long-term growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-blue-300 font-semibold">Trusted by 15,000+ Members</span>
              </div>
              <div className="px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-300 font-semibold">$2.4B+ Assets Managed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
