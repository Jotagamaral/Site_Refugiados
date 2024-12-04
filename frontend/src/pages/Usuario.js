import React, { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import GuideGridCompleted from '../components/GuideGridCompleted';
import AdminDashboard from '../components/AdminDashboard.js'; // Supondo que existe uma tela específica para admin
import config from '../config'; // Certifique-se de que o caminho do config está correto

const Dashboard = () => {
  const [userLogged, setUserLogged] = useState(null);

  // Buscar dados da API do back-end
  const fetchData = async () => {
    try {
      const response = await fetch(`${config.API_URL}/auth/user`);
      const user = await response.json();
      setUserLogged(user); // Atualizar o estado com os dados do usuário
    } catch (error) {
      console.error("Erro na busca dos dados:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userLogged) {
    // Retorna um estado de carregamento enquanto os dados não são carregados
    return <div>Carregando...</div>;
  }

  // Renderiza diferentes telas com base no nível de permissão do usuário
  if (userLogged[0]?.user_permission === 'admin') {
    return (
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar - Profile Section */}
          <div className="col-span-1">
            <UserProfile />
          </div>

          {/* Main Content - Guides and Manuals */}
          <div className="col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Guias</h2>
            <div className="min-h-screen bg-gray-100 p-10">
              <AdminDashboard />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (userLogged[0]?.user_permission === 'user') {
    return (
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar - Profile Section */}
          <div className="col-span-1">
            <UserProfile />
          </div>

          {/* Main Content - Guides and Manuals */}
          <div className="col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Guias</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <GuideGridCompleted />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  // Caso o nível de permissão não seja reconhecido
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-4 gap-8">
        {/* Sidebar - Profile Section */}
        <div className="col-span-1">
          <UserProfile />
        </div>

        {/* Main Content - Guides and Manuals */}
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Guias</h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <GuideGridCompleted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;