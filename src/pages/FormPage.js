import React, { useState, useEffect } from 'react';
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
      <h2 className="text-3xl font-semibold text-center text-gray-800">{title}</h2> {/* Exibe o título do guia */}
      {questions.length === 0 ? (
        <p>Carregando perguntas...</p> // Exibe um indicador de carregamento enquanto as perguntas estão sendo buscadas
      ) : !completed ? (
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto bg-white p-5 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-4">
              {questions[currentQuestion].question} {/* Exibe a pergunta atual */}
            </label>
            {/* Opções de resposta */}
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

export default FormPage;
