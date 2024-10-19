import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { Link } from 'react-router-dom';

const ContentGrid = () => {
  const [contentItems, setContentItems] = useState([]);

  // Função para buscar dados da API do back-end
  const fechData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/guides');
      const items = await response.json();
      setContentItems(items);
    } catch (error) {
      console.log("Erro na busca de dados", error.message);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentItems.map((item, index) => (
        <Link to={`/form/${item.guide_id}/${item.title}`} className="block" key={index}>
          <ContentCard 
            imgSrc={item.imgSrc || 'placeholder.png'} 
            title={item.title} 
            description={item.content} 
          />
        </Link>
      ))}
    </section>
  );
};

export default ContentGrid;
