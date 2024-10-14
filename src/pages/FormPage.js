import React, { useState } from 'react';
//import { useParams } from 'react-router-dom';

const FormPage = () => {
  // const { title } = useParams(); // Obter o título da URL
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

  // Função chamada ao clicar na resposta
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option); // Define a resposta selecionada

    if (option === questions[currentQuestion].answer) {
      setIsCorrect(true);

      // Avança para a próxima pergunta
      if (currentQuestion === questions.length - 1) {
        setCompleted(true); // Marca como concluído se for a última pergunta
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // Avança para a próxima pergunta após 1 segundo
          setSelectedAnswer(null); // Limpa a resposta selecionada
          setIsCorrect(false); // Reseta o estado de resposta correta
        }, 1000);
      }
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Conteúdo principal */}
        <div className="w-4/5 p-10">
          <div className="flex items-center mb-6">
            {/* Imagem da mascote */}
            <img src={`${process.env.PUBLIC_URL}/assets/aurora.png`} alt="Aurora Mascote" className="size-44 -scale-x-100 h-auto" />
            <h2 className="text-2xl font-bold">{`Pergunta ${currentQuestion + 1}: ${questions[currentQuestion].question}`}</h2>
          </div>
          {!completed ? (
            <div className=" p-5">
              <div className="flex justify-around gap-10">
                {/* Opções de resposta como na imagem */}
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="w-1/3">
                    <label
                      className={`block p-4 h-52 bg-white rounded-lg cursor-pointer text-center hover:bg-blue-300 ${
                        selectedAnswer === option ? 'bg-blue-300' : ''
                      }`}
                      onClick={() => handleAnswerSelect(option)} // Chama a função quando a opção é clicada
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {isCorrect && (
                <p className="text-green-600 mt-2">Resposta correta! Avançando para a próxima pergunta...</p>
              )}
            </div>
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
        <div className="w-1/5 h-screen">
          <div className="bg-white p-4 h-full">
            <ul className="flex flex-col items-center h-full space-y-10">
                <li className="font-bold">Tema 1</li>
                <li className="text-gray-600">Tema 2</li>
                <li className="text-gray-600">Tema 3</li>
                <li className="text-gray-600">Tema 4</li>
                <li className="text-gray-600">Finalização</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
