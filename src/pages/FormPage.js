import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Importar o useParams

const FormPage = () => {
  const { title } = useParams(); // Obter o título da URL
  const [answers, setAnswers] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers); // Aqui você pode enviar os dados para um backend ou banco de dados
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800">{title}</h2> {/* Exibe o título do guia */}
      <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto bg-white p-5 rounded-lg shadow-lg">
        {/* Perguntas do formulário */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="question1">
            Pergunta 1
          </label>
          <input
            type="text"
            id="question1"
            name="question1"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2" htmlFor="question2">
            Pergunta 2
          </label>
          <input
            type="text"
            id="question2"
            name="question2"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Enviar Respostas
        </button>
      </form>
    </div>
  );
};

export default FormPage;
