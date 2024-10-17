import React from 'react';

const HelpSection = () => {
  return (
    <div className="flex items-center justify-start px-5 pb-5 bg-blue-50">
      <img src="./assets/aurora.png" alt="Imagem de ajuda" className="w-24 mr-5" />
      <div className="help-text">
        <p className="text-2xl mb-3">Ainda com dúvidas?</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Entre em contato
        </button>
      </div>
    </div>
  );
};

export default HelpSection;
