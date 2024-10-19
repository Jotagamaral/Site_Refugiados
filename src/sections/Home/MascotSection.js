import React from 'react';




const MascotSection = () => {
  return (
    <div className="p-8 flex">
      <div>
        <img 
          src="./assets/aurora.png"
          alt="Mascote Aurora"
          className="w-48" 
        />
      </div>
      <div className="bg-purple-100 p-6 ml-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Olá, meu nome é Aurora</h2>
        <p>Estou aqui para guiar você!</p>
        <p>Este site tem o objetivo de ajudar e capacitar refugiados em Brasília e regiões próximas.</p>
      </div>
    </div>
  );
}

export default MascotSection;
