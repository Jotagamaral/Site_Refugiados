import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import config from '../config';

const FormPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [questions, setQuestionario] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fechData = async () => {

      try {
        const questoesResponse = await fetch(`${config.API_URL}/guides/${id}/questions`);
        const questoes = await questoesResponse.json();

        if (!questoesResponse.ok) {
          console.error('Erro ao buscar questões', questoes)
          return
        }

        /*
        EXEMPLO DA REQUISIÇÃO QUESTOES
        questoes = {
        correct_choice_id: 1,
        question_id: 1,
        question_text: "Qual dos seguintes é um meio comum de transporte público em áreas urbanas?
        }
        */


        // Buscar alternativas
        const todasAlternativas = await Promise.all(

          questoes.map(

            async (element) => {

              const alternativasResponse = await fetch(`${config.API_URL}/guides/${id}/${element.question_id}/choices`);
              const alternativas = await alternativasResponse.json();

              if (!alternativasResponse.ok) {
                console.error('Erro ao buscar alternativas', alternativas)
                return []
              }

              return {
                question_id:element.question_id,
                alternativas: alternativas.map((alt) => ({
                  choice_id: alt.choice_id,
                  choice_text: alt.choice_text
                })),
              };
            })
          )

          /*
          EXEMPLO DA REQUISIÇÃO ALTERNATIVAS
          todasAlternativas = {
          alternativas [{choice_id: 3, choice_text: 'Avião'}, {choice_id: 2, choice_text: 'Carro'} ...],
          question_id: 1,
          }
          */

        // Criar questionário
        const questions = questoes.map((questao) => {

          const alternativasFiltradas = todasAlternativas.find(
            (alt) => alt.question_id === questao.question_id
          )?.alternativas || [];


          return {
            question: questao.question_text,
            options: alternativasFiltradas,
            answer: alternativasFiltradas.find(
              (alt) => alt.choice_id === questao.correct_choice_id
            ),
          };
        });

        console.log('Questionário criado:', questions)

        setQuestionario(questions);

      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    fechData();
  }, [id]);

  // Função chamada ao clicar na resposta
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option); // Define a resposta selecionada

    if (option.choice_id === questions[currentQuestion].answer.choice_id) {
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

  //console.log(questions)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Conteúdo principal */}
        <div className="w-4/5 p-10">
          <div className="flex items-center mb-6">
            {/* Imagem da mascote */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/aurora.png`}
              alt="Aurora Mascote"
              className="size-44 -scale-x-100 h-auto"
            />
            <h2 className="text-2xl font-bold">
              {`Pergunta ${currentQuestion + 1}: ${questions[currentQuestion]?.question || 'Carregando...'}`}
            </h2>
          </div>
          {!completed ? (
            <div className="p-5">
              <div className="flex justify-around gap-10">
                {/* Opções de resposta */}
                {questions[currentQuestion]?.options.map((option, index) => (
                  <div key={index} className="w-1/3">
                    <label
                      className={`block p-4 h-52 bg-white rounded-lg cursor-pointer text-center hover:bg-blue-300 ${
                        selectedAnswer === option ? 'bg-blue-300' : ''
                      }`}
                      onClick={() => handleAnswerSelect(option)} // Chama a função quando a opção é clicada
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
          ) : (
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold pb-5">
                Parabéns! Você completou o questionário.
              </h3>
              <Link to="/guia" className="bg-blue-500 text-white py-2 px-4 rounded mb-4">Voltar</Link>
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
