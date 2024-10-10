import React, { useState } from 'react';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Funcionalidade de login ainda vai ser implementada...');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <label className="block mb-2">Usuário:</label>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Senha:</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
        Sign In
      </button>
      <div className="text-center mt-4">
        <button  onClick={() => toggleForm('register')} className="text-sm text-gray-500">Não possui conta?</button>
      </div>
      <div className="text-center mt-4">
        <button  onClick={() => toggleForm('forgotPassword')} className="text-sm text-gray-500">Esqueceu a senha?</button>
      </div>
    </div>
  );
};

export default LoginForm;
