import React, { useState } from 'react';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', { email, password });
    alert('Funcionalidade de login ainda vai ser implementada...');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login</h2>
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
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <div className="text-center mt-4">
        <a href="/" onClick={() => toggleForm('forgotPassword')}>Esqueceu sua senha?</a>
        <br />
        <a href="/" onClick={() => toggleForm('register')}>Ainda não tem uma conta? Registre-se</a>
      </div>
    </div>
  );
};

export default LoginForm;
