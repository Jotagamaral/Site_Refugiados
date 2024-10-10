import React, { useState } from 'react';

const RegisterForm = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    alert('Funcionalidade de registro ainda vai ser implementada...');
  };

  return (
    <div className=''>
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <label className="block mb-2">Usuário:</label>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Email:</label>
      <input
        type="email"
        placeholder="email@example.com"
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
      <label className="block mb-2">Confirmar senha:</label>
      <input
        type="password"
        placeholder="********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleRegister} className="w-full bg-green-500 text-white p-2 rounded">
        Registrar
      </button>
      <div className="text-center mt-4">
        <button  onClick={() => toggleForm('login')} className="text-sm text-gray-500">Já possui conta?</button>
      </div>
    </div>
  );
};

export default RegisterForm;
