// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import config from '../config';

const FormPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectionsResponse = await fetch(`${config.API_URL}/guides/${id}/sections`);
        const fetchedSections = await sectionsResponse.json();

        if (!sectionsResponse.ok) {
          console.error('Erro ao buscar seções', fetchedSections);
          return;
        }

        const sectionsWithQuestions = await Promise.all(
          fetchedSections.map(async (section) => {
            const questionsResponse = await fetch(`${config.API_URL}/guides/${section.section_id}/questions`);
            const questions = await questionsResponse.json();

            if (!questionsResponse.ok) {
              console.error('Erro ao buscar questões', questions);
              return section;
            }

            const questionsWithChoices = await Promise.all(
              questions.map(async (question) => {
                const choicesResponse = await fetch(`${config.API_URL}/guides/${question.question_id}/choices`);
                const choices = await choicesResponse.json();

                if (!choicesResponse.ok) {
                  console.error('Erro ao buscar alternativas', choices);
                  return question;
                }

                return {
                  ...question,
                  choices: choices.map((choice) => ({
                    choice_id: choice.choice_id,
                    choice_text: choice.choice_text,
                  })),
                };
              })
            );

            return {
              ...section,
              questions: questionsWithChoices,
            };
          })
        );

        setSections(sectionsWithQuestions);

        //console.log(sectionsWithQuestions)

      } catch (error) {
        console.error('Erro ao buscar dados', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);

    if (option.choice_id === sections[currentSection].questions[currentQuestion].correct_choice_id) {
      setIsCorrect(true);

      if (currentQuestion === sections[currentSection].questions.length - 1) {
        if (currentSection === sections.length - 1) {
          setCompleted(true);
        } else {
          setTimeout(() => {
            setCurrentSection(currentSection + 1);
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setIsCorrect(false);
            setShowQuestion(false);
          }, 1000);
        }
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setIsCorrect(false);
          setShowQuestion(false);
        }, 1000);
      }
    } else {
      setIsCorrect(false);
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  if (isLoading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="w-4/5 p-10">
          {!showQuestion && !completed && sections[currentSection] && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">{sections[currentSection].section_title}</h3>
              <p className="mb-6">{sections[currentSection].explanation}</p>
              <button
                onClick={() => setShowQuestion(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Começar Pergunta
              </button>
            </div>
          )}

          {showQuestion && !completed && sections[currentSection] && (
            <div className="text-center p-5">
              <h2 className="text-xl font-bold mb-4">
                Pergunta {currentQuestion + 1}: {sections[currentSection].questions[currentQuestion].question_text}
              </h2>
              <div className="flex justify-around gap-10">
                {sections[currentSection].questions[currentQuestion].choices.map((option, index) => (
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
                style={{ width: `${((currentSection * sections[currentSection].questions.length + currentQuestion + 1) / (sections.reduce((acc, sec) => acc + sec.questions.length, 0))) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="w-1/5 h-screen">
          <div className="bg-white p-4 h-full">
            <ul className="flex flex-col items-center h-full space-y-10">
              {sections.map((section, secIndex) => (
                <li
                  key={secIndex}
                  className={`font-bold ${secIndex === currentSection ? 'text-black' : 'text-gray-600'}`}
                >
                  Tema {secIndex + 1}
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
