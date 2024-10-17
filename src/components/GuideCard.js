import React from 'react';

const GuideCard = ({ title, description, selected }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg ${
        selected ? 'bg-blue-200' : 'bg-white'
      }`}
    >
      <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      {selected && <span className="block mt-4 text-green-600">✔️ Completo</span>}
    </div>
  );
};

export default GuideCard;
