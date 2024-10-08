import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link do React Router

const ContentCard = ({ imgSrc, title, description }) => {
  return (
    <Link to={`/form/${title}`} className="block">
      <div className="bg-blue-100 p-5 rounded-lg w-72 shadow-lg">
        <img src={imgSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default ContentCard;
