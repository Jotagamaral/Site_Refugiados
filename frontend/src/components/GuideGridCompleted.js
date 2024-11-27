import React, { useEffect, useState } from 'react';
import GuideCard from './GuideCard';
import config from '../config';

const GuideGridCompleted = () => {
  const [contentItems, setContentItems] = useState([]);
  const [contentItemsCompleted, setContentItemsCompleted] = useState([]);
  const [userLogged, setUserLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(true); // Estado separado para guias completos

  // Buscar dados do usuário e todos os guias
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar dados do usuário
        const responseUser = await fetch(`${config.API_URL}/auth/user_id`);
        const user = await responseUser.json();
        setUserLogged(user);
        

        // Buscar todos os guias
        const responseGuides = await fetch(`${config.API_URL}/guides`);
        const items = await responseGuides.json();
        setContentItems(items);
        
      } catch (error) {
        console.error("Erro ao buscar dados gerais:", error.message);
      } finally {
        setIsLoading(false); // Finaliza o carregamento dos dados gerais
      }
    };

    fetchData();
  }, []);

  // Buscar guias completos (dependendo de userLogged)
  useEffect(() => {
    if (!userLogged || !userLogged[0]?.auth_user_id) return; // Só executa se o usuário estiver definido

    const fetchCompletedGuides = async () => {
      try {
        const userId = userLogged[0].auth_user_id;
        const responseCompleted = await fetch(`${config.API_URL}/guides/${userId}`);
        const itemsCompleted = await responseCompleted.json();
        setContentItemsCompleted(itemsCompleted);
      } catch (error) {
        console.log("Erro ao buscar guias completos:", error.message);
      } finally {
        setIsLoadingCompleted(false); // Finaliza o carregamento dos guias completos
      }
    };

    fetchCompletedGuides();
  }, [userLogged]);

  // Exibe um indicador de carregamento enquanto as requisições são processadas
  if (isLoading || isLoadingCompleted) {
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
