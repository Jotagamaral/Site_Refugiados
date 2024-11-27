import React from 'react';

const GuideCard = ({width='w-72', imgSrc, title, description, selected }) => {
  
  return (
    <div
      className={`p-4 rounded-lg shadow-lg ${width} ${
        selected ? 'bg-blue-200' : 'bg-white'
      }`} 
    >
      <img src={imgSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <span className="block mt-4 text-green-600">
        {selected ? '✔️ Completo' : '❌ Incompleto'}
      </span>
    </div>
  );
};

export default GuideCard;
