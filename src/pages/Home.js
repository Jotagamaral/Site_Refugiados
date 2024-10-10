// src/pages/Home.js
import React from 'react';
import MascotSection from '../sections/MascotSection';
import NewsSection from '../sections/NewsSection';
import QuickGuideSection from '../sections/QuickGuideSection';

const Home = () => {
  return (
    <div className="flex bg-gray-200">
      {/* Seção principal com a mascote e notícias */}
      <div className="w-2/3 p-8">
        <MascotSection />
        <NewsSection />
      </div>

      {/* Guia Rápido ao lado */}
      <div className="w-1/3 p-8">
        <QuickGuideSection />
      </div>
    </div>
  );
};

export default Home;
