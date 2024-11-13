// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import config from '../config';

const FormPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  //const [questions, setQuestionario] = useState([]);

  //const { id } = useParams();

  // useEffect(() => {
  //   const fechData = async () => {

  //     try {
  //       const questoesResponse = await fetch(`${config.API_URL}/guides/${id}/questions`);
  //       const questoes = await questoesResponse.json();

  //       if (!questoesResponse.ok) {
  //         console.error('Erro ao buscar questões', questoes)
  //         return
  //       }

  //       /*
  //       EXEMPLO DA REQUISIÇÃO QUESTOES
  //       questoes = {
  //       correct_choice_id: 1,
  //       question_id: 1,
  //       question_text: "Qual dos seguintes é um meio comum de transporte público em áreas urbanas?
  //       }
  //       */


  //       // Buscar alternativas
  //       const todasAlternativas = await Promise.all(

  //         questoes.map(

  //           async (element) => {

  //             const alternativasResponse = await fetch(`${config.API_URL}/guides/${id}/${element.question_id}/choices`);
  //             const alternativas = await alternativasResponse.json();

  //             if (!alternativasResponse.ok) {
  //               console.error('Erro ao buscar alternativas', alternativas)
  //               return []
  //             }

  //             return {
  //               question_id:element.question_id,
  //               alternativas: alternativas.map((alt) => ({
  //                 choice_id: alt.choice_id,
  //                 choice_text: alt.choice_text
  //               })),
  //             };
  //           })
  //         )

  //         /*
  //         EXEMPLO DA REQUISIÇÃO ALTERNATIVAS
  //         todasAlternativas = {
  //         alternativas [{choice_id: 3, choice_text: 'Avião'}, {choice_id: 2, choice_text: 'Carro'} ...],
  //         question_id: 1,
  //         }
  //         */

  //       // Criar questionário
  //       const questions = questoes.map((questao) => {

  //         const alternativasFiltradas = todasAlternativas.find(
  //           (alt) => alt.question_id === questao.question_id
  //         )?.alternativas || [];


  //         return {
  //           question: questao.question_text,
  //           options: alternativasFiltradas,
  //           answer: alternativasFiltradas.find(
  //             (alt) => alt.choice_id === questao.correct_choice_id
  //           ),
  //         };
  //       });

  //       console.log('Questionário criado:', questions)

  //       setQuestionario(questions);

  //     } catch (error) {
  //       console.error('Erro ao buscar dados', error);
  //     }
  //   };

  //   fechData();
  // }, [id]);

  // Função chamada ao clicar na resposta
   // Dados estáticos simulando o conteúdo das questões e alternativas
  const staticQuestions = [
    {
      title: "Transporte Público",
      description: "Español: En Brasil, existe un sistema público y gratuito de salud llamado Sistema Único de Salud (SUS). El SUS ofrece servicios de atención médica para todas las personas que viven en el país, incluyendo refugiados y migrantes. Con el SUS, puedes obtener atención médica sin costo en clínicas y hospitales públicos.Inglês: In Brazil, there is a public and free health system called the Unified Health System (SUS). SUS provides medical services for everyone living in the country, including refugees and migrants. With SUS, you can access medical care at no cost in public clinics and hospitals.",
      question: "Qual dos seguintes é um meio comum de transporte público em áreas urbanas?",
      options: [
        { choice_id: 1, choice_text: "Un sistema privado de salud. A private health system" },
        { choice_id: 2, choice_text: "Un sistema gratuito y público de salud. A free and public health system" },
        { choice_id: 3, choice_text: "Un sistema que solo ofrece vacunas. A system that only offers vaccines" },
      ],
      answer: { choice_id: 2, choice_text: "Un sistema gratuito y público de salud. A free and public health system" }
    },
    {
      title: "Capitais do Brasil",
      description: "Este tema aborda o conhecimento das capitais dos estados brasileiros e sua importância no contexto político e administrativo do país.",
      question: "Qual é a capital do Brasil?",
      options: [
        { choice_id: 5, choice_text: "Brasília" },
        { choice_id: 6, choice_text: "São Paulo" },
        { choice_id: 7, choice_text: "Rio de Janeiro" },
        { choice_id: 8, choice_text: "Salvador" }
      ],
      answer: { choice_id: 5, choice_text: "Brasília" }
    },
    {
      title: "Continentes",
      description: "Aqui você verá perguntas relacionadas à localização geográfica dos continentes e a distribuição dos países ao redor do mundo.",
      question: "Em qual continente o Brasil está localizado?",
      options: [
        { choice_id: 9, choice_text: "América do Sul" },
        { choice_id: 10, choice_text: "Ásia" },
        { choice_id: 11, choice_text: "Europa" },
        { choice_id: 12, choice_text: "África" }
      ],
      answer: { choice_id: 9, choice_text: "América do Sul" }
    }
  ];

  // Remover ou comentar o estado de questões dinâmicas e usar os dados estáticos
  const [questions] = useState(staticQuestions);

  // Função chamada ao clicar na resposta
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);

    if (option.choice_id === questions[currentQuestion].answer.choice_id) {
      setIsCorrect(true);

      if (currentQuestion === questions.length - 1) {
        setCompleted(true);
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setIsCorrect(false);
          setShowQuestion(false); // Retorna à descrição para a próxima questão
        }, 1000);
      }
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  //console.log(questions)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="w-4/5 p-10">
          {!showQuestion && !completed && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">{questions[currentQuestion].title}</h3>
              <p className="mb-6">{questions[currentQuestion].description}</p>
              <button
                onClick={() => setShowQuestion(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Começar Pergunta
              </button>
            </div>
          )}

          {showQuestion && !completed && (
            <div className="text-center p-5">
              <h2 className="text-xl font-bold mb-4">
                Pergunta {currentQuestion + 1}: {questions[currentQuestion].question}
              </h2>
              <div className="flex justify-around gap-10">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="w-1/3">
                    <label
                      className={`block p-4 h-52 bg-white rounded-lg cursor-pointer text-center hover:bg-blue-300 ${
                        selectedAnswer === option ? 'bg-blue-300' : ''
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option.choice_text}
                    </label>
                  </div>
                ))}
              </div>
              {isCorrect && (
                <p className="text-green-600 mt-2">
                  Resposta correta!
                </p>
              )}
            </div>
          )}

          {completed && (
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold pb-5">
                Parabéns! Você completou o questionário.
              </h3>
              <Link to="/guia" className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                Voltar
              </Link>
            </div>
          )}

          <div className="mt-4">
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="w-1/5 h-screen">
          <div className="bg-white p-4 h-full">
            <ul className="flex flex-col items-center h-full space-y-10">
              {questions.map((q, index) => (
                <li
                  key={index}
                  className={`font-bold ${index === currentQuestion ? 'text-black' : 'text-gray-600'}`}
                >
                  Tema {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
