// src/sections/GuiaSection.js
import React from 'react';
import ContentGrid from '../components/ContentGrid';

const GuiaSection = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">Guia de Conteúdo</h2>
      <ContentGrid />
    </section>
  );
};

export default GuiaSection;
