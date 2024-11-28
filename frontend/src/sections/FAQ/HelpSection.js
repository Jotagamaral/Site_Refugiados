import React from 'react';

const HelpSection = () => {
  return (
    <div className="flex items-center justify-start px-5 pb-5 bg-blue-50">
      <img src="./assets/aurora.png" alt="Imagem de ajuda" className="w-24 mr-5" />
      <div className="help-text">
        <p className="text-2xl mb-3">Ainda com dúvidas?</p>
        <p className="text-lg text-gray-700 mb-3">Entre em contato por email: <a href="mailto:aurorarefugio.com">aurorarefugio@org.com</a></p>
        
      </div>
    </div>
  );
};

export default HelpSection;
