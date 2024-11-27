import React from 'react';

const NewsCard = ({
width = 'w-72',
imgSrc,
title,
description,
link, // Adicionado link como prop
}) => {
return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-gray-100 p-5 rounded-lg ${width} shadow-lg mx-auto hover:shadow-xl transition-transform transform hover:scale-105`}
      style={{ textDecoration: 'none', color: 'inherit' }} // Remove sublinhado e mantém cor original
    >
    <img src={imgSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
    </a>
);
};

export default NewsCard;
