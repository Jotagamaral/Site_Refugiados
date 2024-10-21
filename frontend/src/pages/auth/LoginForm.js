import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const LoginForm = ({ toggleForm }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${config.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: usuario, password: password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro no login');
      } else {
  
        console.log('Usuário Logado com sucesso!', result.session);
        navigate('/');  // Redirecionar após o login
      }
    } catch (error) {
      alert(error.message || 'Erro ao tentar fazer login');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <label className="block mb-2">Usuário:</label>
      <input
        type="text"
        placeholder="Digite seu e-mail"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
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
        <button onClick={() => toggleForm('register')} className="text-sm text-gray-500">Não possui conta?</button>
      </div>
      <div className="text-center mt-4">
        <button onClick={() => toggleForm('forgotPassword')} className="text-sm text-gray-500">Esqueceu a senha?</button>
      </div>
    </div>
  );
};

export default LoginForm;
