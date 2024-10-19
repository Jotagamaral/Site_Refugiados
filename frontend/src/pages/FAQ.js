import React from 'react';
import FaqSection from '../sections/FAQ/FaqSection';
import HelpSection from '../sections/FAQ/HelpSection';

const FAQ = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <section className="text-center pt-5">
        <h2 className="text-3xl font-semibold text-gray-800">Perguntas Frequentes</h2>
      </section>

      {/* Seção de FAQ */}
      <FaqSection />

      {/* Seção de Ajuda */}
      <HelpSection />
    </div>
  );
};

export default FAQ;
