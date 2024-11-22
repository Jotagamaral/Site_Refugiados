import React from 'react';
import UserProfile from '../components/UserProfile';
import GuideGridCompleted from '../components/GuideGridCompleted';

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
            <GuideGridCompleted/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
