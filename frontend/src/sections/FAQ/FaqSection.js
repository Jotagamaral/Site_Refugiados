import React from 'react';
import FaqItem from '../../components/FaqItem';

const FaqSection = () => {
  const faqs = [
    {
      question: '1 - Como faço para acessar os guias disponíveis no site?',
      answer: 'Para acessar os guias, basta fazer login na sua conta. Depois de logado, vá até a seção "Guias" no menu principal. Lá você encontrará uma lista com materiais organizados por tema.'
    },
    {
      question: '2 - Preciso criar uma conta para usar o site?',
      answer: 'Sim, é necessário criar uma conta para acessar algumas funcionalidades, como guias e salvar progresso. O registro é simples e rápido.'
    },
    {
      question: '3- O site oferece suporte em outros idiomas?',
      answer: 'Atualmente, a seção de guias contém a língua em inglês e espanhol para facilitar o aprendizado.'
    },
    {
      question: '4- Quais ONGs são recomendadas pelo site?',
      answer: 'Na página inicial do site, você encontra uma área dedicada às ONGs  que o Aurora Refúgio recomenda. Essas são essenciais para ampliar o suporte aos refugiados e conectar quem precisa com quem pode ajudar.'
    },
    {
      question: '5- O que encontro na seção de notícias do site?',
      answer: 'Na aba de notícias da página inicial, você encontra informações atualizadas e relevantes sobre refugiados, incluindo mudanças em políticas públicas, eventos de integração, oportunidades de trabalho e histórias inspiradoras. Nosso objetivo é manter a comunidade informada sobre temas importantes e atuais que impactam diretamente os refugiados.'
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-10 py-5 justify-items-center">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FaqSection;
