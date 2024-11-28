import React from 'react';

const QuickGuideSection = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ONGS</h2>
      <p className="mb-4">
        Nós também recomendamos algumas organizações não governamentais sem fins lucrativos para a sua ajuda! Sinta-se à vontade para visitar uma delas!
      </p>
      <div className="grid grid-cols-2 gap-2">
      <a href="https://www.acnur.org/br/" target="_blank" rel="noopener noreferrer" className="bg-[#0072bc] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#3a92cc]">ACNUR</a>
      <a href="https://visaomundial.org.br/" target="_blank" rel="noopener noreferrer" className="bg-[#FF6602] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#ff8432]">Visão Mundial</a>
      <a href="https://compassiva.org.br/" target="_blank" rel="noopener noreferrer" className="bg-[#ED1B2F] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#ff3549]">Compassiva</a>
      <a href="https://refugio343.org/" target="_blank" rel="noopener noreferrer" className="bg-[#00A378] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#2ec79e]">Refúgio 343</a>
      <a href="https://adus.org.br/" target="_blank" rel="noopener noreferrer" className="bg-[#1A5276] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#226a97]">ADUS</a>
      <a href="https://missaonspaz.org/" target="_blank" rel="noopener noreferrer" className="bg-[#123E4E] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#1f6b86]">Missão Paz</a>
      <a href="https://abracocultural.com.br/" target="_blank" rel="noopener noreferrer" className="bg-[#FF671F] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#ff7a3c]">Abraço Cultural</a>
      <a href="https://www.icrc.org/pt" target="_blank" rel="noopener noreferrer" className="bg-[#C4012B] text-white py-2 px-6 rounded-lg font-bold text-center shadow-md transition-transform transform hover:scale-105 hover:bg-[#cf274b]">CICV</a>
      
      </div>
    </div>
  );
}

export default QuickGuideSection;
