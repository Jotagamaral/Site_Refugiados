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
    console.log('Register:', { name, email, password });
    alert('Funcionalidade de registro ainda vai ser implementada...');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleRegister} className="w-full bg-green-500 text-white p-2 rounded">
        Registrar
      </button>
      <div className="text-center mt-4">
        <a href="/" onClick={() => toggleForm('login')}>Já tem uma conta? Login</a>
      </div>
    </div>
  );
};

export default RegisterForm;
