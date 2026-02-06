import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import RealEstateSection from '../components/RealEstateSection';
import TradingSection from '../components/TradingSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <RealEstateSection />
      <TradingSection />
      <Footer />
    </div>
  );
};

export default Home;
