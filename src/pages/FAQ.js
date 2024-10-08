import React from 'react';
import FaqSection from '../sections/FaqSection'; // Importando a seção FAQ
import HelpSection from '../sections/HelpSection';

const FAQ = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Título da página FAQ */}
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
