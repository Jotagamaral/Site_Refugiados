import React from 'react';
import UserProfile from '../components/UserProfile';
import GuideCard from '../components/GuideCard';

const Dashboard = () => {
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
            <GuideCard
              title="Cartão Mobilidade"
              description="Informações sobre mobilidade."
              selected={true}
            />
            <GuideCard
              title="Documentos de visto"
              description="Detalhes sobre documentos de visto."
              selected={false}
            />
            <GuideCard title="Outro Título" description="Descrição curta." selected={false} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Manuais</h2>
          <div className="grid grid-cols-3 gap-4">
            <GuideCard title="Manual 1" description="Descrição do manual." selected={false} />
            <GuideCard title="Manual 2" description="Descrição do manual." selected={false} />
            <GuideCard title="Manual 3" description="Descrição do manual." selected={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
