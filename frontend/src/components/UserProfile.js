import React, { useEffect, useState } from 'react';
import config from '../config';

const UserProfile = () => {

  const [userLogged, setUserLogged] = useState(null)

  // Buscar dados da API do back-end
  const fetchData = async () => {
    try {
      const response = await fetch(`${config.API_URL}/auth/user`);
      const User = await response.json();

      setUserLogged(User); // Atualizar o estado com os dados do usuário

    } catch (error) {
      console.log("Erro na busca dos dados:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
          {/* Ícone de avatar */}
          <span className="text-4xl">👤</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Seja Bem-Vindo,</h2>
          <h3 className="text-lg">{userLogged ? userLogged[0].name : 'Carregando...'}</h3>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <h3 className="text-lg">Cidade : {userLogged ? userLogged[0].location : 'Carregando...'}</h3>

      </div>
    </div>
  );
};


export default UserProfile;
