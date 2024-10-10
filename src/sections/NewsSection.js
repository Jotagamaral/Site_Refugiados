import React from 'react';

const NewsSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Notícias</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-sm">
          <img src="URL_DA_IMAGEM" alt="Notícia" className="w-full h-32 mb-2 bg-gray-200"/>
          <h3 className="text-lg font-semibold">Title</h3>
          <p>Body text for whatever you'd like to say...</p>
        </div>
        <div className="p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-sm">
          <img src="URL_DA_IMAGEM" alt="Notícia" className="w-full h-32 mb-2 bg-gray-200"/>
          <h3 className="text-lg font-semibold">Title</h3>
          <p>Body text for whatever you'd like to say...</p>
        </div>
        <div className="p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-sm">
          <img src="URL_DA_IMAGEM" alt="Notícia" className="w-full h-32 mb-2 bg-gray-200"/>
          <h3 className="text-lg font-semibold">Title</h3>
          <p>Body text for whatever you'd like to say...</p>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
