import React, { useState, useEffect } from 'react';
import config from '../config';
import { useNavigate } from 'react-router-dom';

const GuideForm = () => {
  const [userLogged, setUserLogged] = useState(null)

  // Buscar dados da API do back-end
  const fetchData = async () => {
    try {
      const response = await fetch(`${config.API_URL}/auth/user_id`);
      const User = await response.json();

      setUserLogged(User); // Atualizar o estado com os dados do usuário

    } catch (error) {
      console.log("Erro na busca dos dados:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Estados para o guia
  const [title, setTitle] = useState('');
  const [numQuestions, setNumQuestions] = useState(1);
  const [introText, setIntroText] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate()

  // Estados para questões
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    title: '',
    text: '',
    question: '',
    correctAnswer: '',
    incorrectAnswers: ['', ''],
  });

  // Estado para erros ou mensagens
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Função para salvar o guia no Supabase
  const saveGuide = async () => {
    try {
      const response = await fetch(`${config.API_URL}/guides/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            intro_text: introText, 
            user_id: userLogged }),
      });
      const data = await response.json();

      if (data.error) throw new Error(data.error);

      return data.guide_id;// Retorna o ID do guia criado
    } catch (error) {
        console.log('Erro ao salvar o guia: ', error);
        setError('Erro ao salvar o guia: ' + error.message);
        return null;
    }
  };

  // Função para salvar as questões no Supabase
  const saveQuestions = async (guideId) => {

    const updatedQuestions = [...questions, currentQuestion];

    try {
      const questionsToInsert = updatedQuestions.map((q) => ({
        title: q.title,
        text: q.text,
        question: q.question,
        correct_answer: q.correctAnswer,
        incorrect_answer_1: q.incorrectAnswers[0],
        incorrect_answer_2: q.incorrectAnswers[1],
        guide_id: guideId,
      }));
    
      for (let i = 0; i < questionsToInsert.length; i++) {
        console.log('Enviando questão:', questionsToInsert[i]);
    
        const response = await fetch(`${config.API_URL}/guides/register/questions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(questionsToInsert[i]),
        });

        const data = await response.json();
    
        if (!response.ok) {
          console.log(data.error);
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
    
        
        if (data.error) {
          
          throw new Error(data.error);
        }
      }
    
      setSuccess('Guia e questões salvos com sucesso!');
    } catch (error) {
      setError('Erro ao salvar as questões: ' + error.message);
    }
  };

  // Avançar para a próxima questão ou finalizar
  const handleNext = () => {
    if (currentQuestion.title === '' || currentQuestion.text === '' || currentQuestion.question === '' || currentQuestion.correctAnswer === ''|| currentQuestion.incorrectAnswers[0] === ''|| currentQuestion.incorrectAnswers[1] === '') {
      setError('Preencha todos os campos da questão.');
      return;
    }

    setError('');

    setQuestions([...questions, currentQuestion]);

    //Atualizando A questão atual
    setCurrentQuestion({ title: '', text: '', question: '', correctAnswer: '', incorrectAnswers: ['', ''] });

    if (questions.length + 1 >= numQuestions) {
      try{
        handlePublish();
        alert('Guia Publicado com sucesso!!!');
        navigate('/');
      } catch (error){
        alert('Erro na publicação do guia');
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Publicar guia
  const handlePublish = async () => {
    const guideId = await saveGuide();
    if (guideId) {
      await saveQuestions(guideId); 
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Lado esquerdo: Formulário */}
      <div className="flex-1">
        {currentStep === 1 ? (
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Informações do Guia</h2>
                {/* Referenciando a coluna title na tabela guide_manuals no BD*/}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Título do Guia</label>
                    <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                {/* Referenciando a quantidade de questões presentes no guia*/}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantidade de questões:</label>
                    <input 
                    type="number" 
                    value={numQuestions} 
                    onChange={(e) => setNumQuestions(Number(e.target.value))} 
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                {/* Referenciando a coluna content na tabela guide_manuals no BD*/}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Texto de introdução:</label>
                    <textarea 
                    value={introText} 
                    onChange={(e) => setIntroText(e.target.value)} 
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div> 
                <button 
                onClick={() => setCurrentStep(2)} 
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Próximo</button>
            </div>
        ) : (
            <>
            <h2 className="text-xl font-bold text-gray-800">
              Questão {questions.length + 1} de {numQuestions}
            </h2>
          
            <div className="space-y-4 mt-4">
              {/* Título da questão */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text"
                  value={currentQuestion.title}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, title: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
          
              {/* Enunciado */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Enunciado</label>
                <textarea
                  value={currentQuestion.text}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, text: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
          
              {/* Questão */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Questão</label>
                <textarea
                  value={currentQuestion.question}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
          
              {/* Alternativa Correta */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Alternativa Correta</label>
                <input
                  type="text"
                  value={currentQuestion.correctAnswer}
                  onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
          
              {/* Alternativas Incorretas */}
              {currentQuestion.incorrectAnswers.map((answer, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700">Alternativa Incorreta {index + 1}</label>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      const newIncorrectAnswers = [...currentQuestion.incorrectAnswers];
                      newIncorrectAnswers[index] = e.target.value;
                      setCurrentQuestion({ ...currentQuestion, incorrectAnswers: newIncorrectAnswers });
                    }}
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
          
                {/* Botões de navegação */}
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={handlePrevious}
                        className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        {questions.length + 1 >= numQuestions ? 'Publicar' : 'Próximo'}
                    </button>
                </div>
            </div>
          </>
        )}
      </div>

    {/* Lado direito: Pré-visualização */}
    <div className="flex-1 border-l-2 border-gray-300 text-center p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visualização do Guia</h2>
        
        <h2 className="text-xl font-bold text-gray-800 mb-2">
            {title || 'Título do Guia'}
        </h2>
        
        <p className="text-gray-600 mb-4">
            {introText || 'Texto de introdução...'}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Questões</h3>

        <ul className="space-y-4">
            {questions.map((q, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                <strong className="text-gray-700">{q.title}</strong>: <br />
                <span className="text-gray-600">{q.text}</span>
                <br />
                <p className="text-gray-700 font-medium mt-2">{q.question}</p>
                
                <div className="mt-2">
                    <span className="font-bold">Alternativa Correta: </span>
                    <span className="text-blue-600">{q.correctAnswer}</span>
                </div>
                
                {q.incorrectAnswers.map((incorret, index) => (
                    <div key={index} className="mt-1">
                        <span className="font-bold">Alternativa Incorreta {index + 1}: </span>
                        <span className="text-red-600">{incorret}</span>
                    </div>
                ))}
            </li>
            ))}
        </ul>
    </div>

      {/* Mensagens de erro ou sucesso */}
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: error ? 'red' : 'green' }}>
        {error || success}
      </div>
    </div>
  );
};

export default GuideForm;
