import React, { useEffect, useState } from 'react';
import GuideCard from './GuideCard';
import config from '../config';

const GuideGridCompleted = () => {
  const [contentItems, setContentItems] = useState([]);
  const [contentItemsCompleted, setContentItemsCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Para exibir carregamento

  // Buscar dados do usuário e todos os guias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.API_URL}/auth/user/complete-data`);
        if (!response.ok) throw new Error('Falha ao buscar dados');

        const data = await response.json();
        console.log("Dados recebidos:", data);

        setContentItems(data); // Armazenar todos os guias
        setContentItemsCompleted(data.filter((item) => item.isCompleted)); // Filtrar guias completos
      } catch (error) {
        console.error('Erro ao buscar dados gerais:', error.message);
      } finally {
        setIsLoading(false); // Finalizar carregamento
      }
    };

    fetchData();
  }, []); // Executa apenas na montagem do componente

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold">Carregando...</p>
      </div>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentItems.map((item) => (
        <GuideCard
          key={item.guide_id}
          imgSrc={item.image_url || 'placeholder.png'}
          title={item.title}
          description={item.content}
          selected={contentItemsCompleted.some(
            (completedItem) => completedItem.guide_id === item.guide_id
          )}
        />
      ))}
    </section>
  );
};

export default GuideGridCompleted;
