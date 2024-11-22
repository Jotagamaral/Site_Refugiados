import React, { useEffect, useState } from 'react';
import GuideCard from './GuideCard';
import config from '../config';

const GuideGridCompleted = ({ user_id }) => {
  const [contentItems, setContentItems] = useState([]);
  const [contentItemsCompleted, setContentItemsCompleted] = useState([]);
  const [userLogged, setUserLogged] = useState(null);

  // Buscar dados da API do back-end
  const fetchData = async () => {
    try{
        const response_user = await fetch(`${config.API_URL}/auth/user_id`);

        const User = await response_user.json();

        setUserLogged(User); // Atualizar o estado com os dados do usuário
  
    } catch (error) {
        console.log("Erro na Requisição de usuario:", error.message);
    }

    try {
      const response = await fetch(`${config.API_URL}/guides`);
      const items = await response.json();
      setContentItems(items);
      
    } catch (error) {
      console.log('Erro na Requisição de guias:', error.message);
    }

    try {
        const responseCompleted = await fetch(`${config.API_URL}/guides/${userLogged[0].auth_user_id}`);
        const itemsCompleted = await responseCompleted.json();

        setContentItemsCompleted(itemsCompleted); // Atualizar o estado com os dados do usuário

    } catch (error){
          console.log("O usuario não completou nenhum guia");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
