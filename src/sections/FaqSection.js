import React from 'react';
import FaqItem from '../components/FaqItem';

const FaqSection = () => {
  const faqs = [
    {
      question: 'Pergunta frequente 1',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
    },
    {
      question: 'Pergunta frequente 2',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
    },
    {
      question: 'Pergunta frequente 3',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
    },
    {
      question: 'Pergunta frequente 4',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
    },
    {
      question: 'Pergunta frequente 5',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
    },
    {
      question: 'Pergunta frequente 6',
      answer: 'Texto explicativo sobre a pergunta frequente. Aqui você pode adicionar informações, pontos principais ou citações.'
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
