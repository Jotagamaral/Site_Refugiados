import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { Link } from 'react-router-dom';
import config from '../config';

const ContentGrid = () => {
  const [contentItems, setContentItems] = useState([]);

  // Buscar dados da API do back-end
  const fechData = async () => {
    try {

      const response = await fetch(`${config.API_URL}/guides`);
      const items = await response.json();

      console.log("Requisição de guias:",items)

      setContentItems(items);

    } catch (error) {
      console.log("Erro na busca de dados:", error.message);
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
            imgSrc={`${item.image_url}` || 'placeholder.png'} 
            title={item.title} 
            description={item.content} 
          />
        </Link>
      ))}
    </section>
  );
};

export default ContentGrid;
