import React, { useEffect, useState } from 'react';
import config from '../config';

const UserProfile = () => {
  const [userLogged, setUserLogged] = useState(null)

  // Buscar dados da API do back-end
  const fechData = async () => {
    try {

      const response = await fetch(`${config.API_URL}/auth/user`);
      const User = await response.json();

      setUserLogged(User[0]);

    } catch (error) {
      console.log("Erro na busca dos dados:", error.message);
    }
  };

  useEffect(() => {
    fechData();
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
          <h3 className="text-lg">{userLogged ? userLogged.name : 'Carregando...'}</h3>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <ProgressBar title="Introdução" percentage={75} />
        <ProgressBar title="Conversação" percentage={25} />
        <ProgressBar title="Conversação" percentage={25} />
      </div>
      <div className="mt-6">
        <button className="block text-left mb-2">Configurações +</button>
        <button className="block text-left">Ajuda +</button>
      </div>
    </div>
  );
};

const ProgressBar = ({ title, percentage }) => {
  return (
    <div>
      <div className="flex justify-between">
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-6 rounded">
        <div
          className="bg-blue-500 h-6 rounded"s
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default UserProfile;
