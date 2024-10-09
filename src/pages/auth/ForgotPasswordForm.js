import React, { useState } from 'react';

const ForgotPasswordForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    console.log('Recuperar senha:', { email });
    alert('Um email de recuperação foi enviado.');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recuperar Senha</h2>
      <p>Insira seu email para receber um link de recuperação:</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleRecover} className="w-full bg-red-500 text-white p-2 rounded">
        Enviar
      </button>
      <div className="text-center mt-4">
        <a href="/" onClick={() => toggleForm('login')}>Voltar para o Login</a>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
