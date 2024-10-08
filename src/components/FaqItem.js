import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <div className="bg-blue-100 p-5 rounded-lg w-72">
      <h2 className="text-lg font-semibold mb-3">{question}</h2>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default FaqItem;
