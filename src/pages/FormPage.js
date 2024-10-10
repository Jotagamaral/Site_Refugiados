/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseCliente'; // Importa o supabaseClient

const FormPage = () => {
  const { title } = useParams(); // Obter o título da URL
  const [questions, setQuestions] = useState([]); // Armazena as questões do banco de dados
  const [currentQuestion, setCurrentQuestion] = useState(0); // Controla a pergunta atual
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Armazena a resposta selecionada
  const [isCorrect, setIsCorrect] = useState(false); // Indica se a resposta está correta
  const [completed, setCompleted] = useState(false); // Verifica se todas as perguntas foram respondidas

  // Função para buscar as perguntas do Supabase
  const fetchQuestions = async () => {
    const { data, error } = await supabase.from('questions').select('*');
    if (error) {
      console.error('Erro ao buscar as perguntas:', error);
    } else {
      setQuestions(data);
    }
  };

  useEffect(() => {
    fetchQuestions(); // Buscar as perguntas ao carregar o componente
  }, []);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option); // Define a resposta selecionada
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === questions[currentQuestion].answer) {
      setIsCorrect(true);
      if (currentQuestion === questions.length - 1) {
        setCompleted(true); // Marca o questionário como completo se estiver na última pergunta
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // Avança para a próxima pergunta
          setSelectedAnswer(null); // Limpa a resposta selecionada
          setIsCorrect(false); // Reseta o estado de resposta correta
        }, 1000); // Aguarda 1 segundo antes de avançar
      }
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800">{title}</h2> {/* Exibe o título do guia */ /*}
      {questions.length === 0 ? (
        <p>Carregando perguntas...</p> // Exibe um indicador de carregamento enquanto as perguntas estão sendo buscadas
      ) : !completed ? (
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto bg-white p-5 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-4">
              {questions[currentQuestion].question} {/* Exibe a pergunta atual */ /*}
            </label>
            {/* Opções de resposta */ /*}
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="question"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)} // Define a resposta selecionada
                  className="mr-2"
                />
                <label htmlFor={`option-${index}`} className="text-lg">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Responder
          </button>
          {isCorrect && (
            <p className="text-green-600 mt-2">Resposta correta! Avançando para a próxima pergunta...</p>
          )}
        </form>
      ) : (
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold">Parabéns! Você completou o questionário.</h3>
        </div>
      )}
    </div>
  );
};

export default FormPage;*/

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FormPage = () => {
  const { title } = useParams(); // Obter o título da URL
  const [currentQuestion, setCurrentQuestion] = useState(0); // Controla a pergunta atual
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Armazena a resposta selecionada
  const [isCorrect, setIsCorrect] = useState(false); // Indica se a resposta está correta
  const [completed, setCompleted] = useState(false); // Verifica se todas as perguntas foram respondidas

  // Exemplo de perguntas com opções e a resposta correta
  const questions = [
    {
      question: 'Qual dos seguintes é um meio comum de transporte público em áreas urbanas?',
      options: ['Ônibus', 'Carro', 'Avião'],
      answer: 'Ônibus',
    },
    {
      question: 'Qual é o principal benefício de usar transporte público?',
      options: ['Mais caro', 'Reduz o congestionamento e a poluição', 'É mais lento que dirigir'],
      answer: 'Reduz o congestionamento e a poluição',
    },
    {
      question: 'O que é um cartão de mobilidade?',
      options: ['Um cartão de crédito', 'Um cartão que permite pagar pela passagem no transporte público', 'Um cartão de descontos em lojas'],
      answer: 'Um cartão que permite pagar pela passagem no transporte público',
    },
  ];

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option); // Define a resposta selecionada
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === questions[currentQuestion].answer) {
      setIsCorrect(true);
      if (currentQuestion === questions.length - 1) {
        setCompleted(true); // Marca o questionário como completo se estiver na última pergunta
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // Avança para a próxima pergunta
          setSelectedAnswer(null); // Limpa a resposta selecionada
          setIsCorrect(false); // Reseta o estado de resposta correta
        }, 1000); // Aguarda 1 segundo antes de avançar
      }
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex">
        {/* Conteúdo principal */}
        <div className="w-3/4 p-5">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          {!completed ? (
            <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
              <div className="flex justify-around gap-5">
                {/* Opções de resposta como na imagem */}
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="w-1/3">
                    <label
                      className={`block p-4 h-52 bg-gray-200 rounded-lg cursor-pointer text-center hover:bg-blue-300 ${
                        selectedAnswer === option ? 'bg-blue-300' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="question"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => handleAnswerSelect(option)}
                        className="hidden"
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Responder
              </button>
              {isCorrect && (
                <p className="text-green-600 mt-2">Resposta correta! Avançando para a próxima pergunta...</p>
              )}
            </form>
          ) : (
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold pb-5">Parabéns! Você completou o questionário.</h3>
              <a href="/guia" className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                Voltar
              </a>
            </div>
          )}
          {/* Barra de progresso */}
          <div className="mt-4">
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Menu lateral */}
        <div className="w-1/4 px-5 pt-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <ul>
              <li className="mb-2 font-bold">Tema 1</li>
              <li className="mb-2 text-gray-600">Tema 2</li>
              <li className="mb-2 text-gray-600">Tema 3</li>
              <li className="mb-2 text-gray-600">Tema 4</li>
              <li className="text-gray-600">Finalização</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
