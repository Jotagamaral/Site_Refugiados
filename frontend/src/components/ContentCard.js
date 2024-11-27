import React from 'react';

const ContentCard = ({
  width='w-72', 
  imgSrc, 
  title, 
  description 
}) => {
  return (
      <div className={`bg-gray-100 p-5 rounded-lg ${width} shadow-lg mx-auto`}> {/* Centralizando o card */}
        <img src={imgSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
  );
};

export default ContentCard;