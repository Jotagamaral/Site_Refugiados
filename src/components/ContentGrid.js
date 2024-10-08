import React from 'react';
import ContentCard from './ContentCard';

const ContentGrid = () => {
  const contentItems = [
    {
      imgSrc: 'placeholder.png',
      title: 'Cartão mobilidade',
      description: 'Texto explicativo sobre o Cartão mobilidade. Informações e principais pontos sobre o assunto.'
    },
    {
      imgSrc: 'placeholder.png',
      title: 'Documentos de visto',
      description: 'Texto explicativo sobre Documentos de visto. Informações e principais pontos sobre o assunto.'
    },
    {
      imgSrc: 'placeholder.png',
      title: 'Title',
      description: 'Texto explicativo. Adicione informações, anedotas, ou até mesmo uma história curta.'
    },
    {
      imgSrc: 'placeholder.png',
      title: 'Title',
      description: 'Texto explicativo. Adicione informações, anedotas, ou até mesmo uma história curta.'
    },
    {
      imgSrc: 'placeholder.png',
      title: 'Title',
      description: 'Texto explicativo. Adicione informações, anedotas, ou até mesmo uma história curta.'
    },
    {
      imgSrc: 'placeholder.png',
      title: 'Title',
      description: 'Texto explicativo. Adicione informações, anedotas, ou até mesmo uma história curta.'
    }
  ];

  return (
    <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentItems.map((item, index) => (
        <ContentCard key={index} imgSrc={item.imgSrc} title={item.title} description={item.description} />
      ))}
    </section>
  );
};

export default ContentGrid;
